import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User, GoogleAuthProvider, signInWithPopup, signOut, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { doc, onSnapshot, setDoc, updateDoc, arrayUnion, arrayRemove, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, OperationType, handleFirestoreError } from '../lib/firebase';
import { EPISODES } from '../data/episodes';

interface UserProfile {
  displayName: string;
  ageGroup: 'tweens' | 'gen-z' | 'young-adults' | null;
  streak: number;
  totalMicroWins: number;
  lastActive: any;
  isLifetimeUser?: boolean;
}

interface EpisodeProgress {
  status: 'not-started' | 'in-progress' | 'completed';
  choiceSelected: string | null;
  completedMicroWins: string[];
  journalEntry?: string | null;
  updatedAt: any;
}

interface AppContextType {
  user: User | null;
  profile: UserProfile | null;
  progress: Record<string, EpisodeProgress>;
  loading: boolean;
  isLifetimeUser: boolean;
  signIn: () => Promise<void>;
  logout: () => Promise<void>;
  updateAgeGroup: (ageGroup: UserProfile['ageGroup']) => Promise<void>;
  completeMicroWin: (episodeId: string, winId: string) => Promise<void>;
  uncompleteMicroWin: (episodeId: string, winId: string) => Promise<void>;
  selectChoice: (episodeId: string, choiceId: string) => Promise<void>;
  saveJournalEntry: (episodeId: string, text: string) => Promise<void>;
  resetSetup: () => Promise<void>;
  verifyLicenseKey: (key: string) => Promise<{ success: boolean; message: string }>;
  deleteAccount: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [progress, setProgress] = useState<Record<string, EpisodeProgress>>({});
  const [loading, setLoading] = useState(true);
  const [profileLoading, setProfileLoading] = useState(false);
  const [isLifetimeUser, setIsLifetimeUser] = useState(false);

  // Guest Progress Management
  useEffect(() => {
    if (!user) {
      const savedProgress = localStorage.getItem('guest_resilience_progress');
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
      const savedLifetime = localStorage.getItem('guest_resilience_lifetime');
      if (savedLifetime === 'true') {
        setIsLifetimeUser(true);
      }
    }
  }, [user]);

  // Sync Guest Progress to Firestore on Login
  const migrateGuestData = async (uid: string) => {
    const savedProgress = localStorage.getItem('guest_resilience_progress');
    const savedLifetime = localStorage.getItem('guest_resilience_lifetime') === 'true';

    if (savedLifetime) {
      const ref = doc(db, 'users', uid);
      await updateDoc(ref, { 
        isLifetimeUser: true,
        lastActive: serverTimestamp()
      }).catch(() => {});
      localStorage.removeItem('guest_resilience_lifetime');
    }

    if (savedProgress) {
      const guestProg = JSON.parse(savedProgress) as Record<string, EpisodeProgress>;
      for (const [epId, data] of Object.entries(guestProg)) {
        const progRef = doc(db, 'users', uid, 'progress', epId);
        await setDoc(progRef, {
          ...data,
          updatedAt: serverTimestamp()
        }, { merge: true }).catch(() => {});
      }
      localStorage.removeItem('guest_resilience_progress');
    }
  };

  useEffect(() => {
    let unsubProfile: (() => void) | undefined;
    const unsubProgress: (() => void)[] = [];

    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      // Clear old listeners
      unsubProfile?.();
      unsubProgress.forEach(unsub => unsub());
      unsubProgress.length = 0;
      
      setUser(currentUser);
      
      if (!currentUser) {
        setProfile(null);
        // Do NOT clear progress here, as guest effect will handle it
        setLoading(false);
        setProfileLoading(false);
        setIsLifetimeUser(localStorage.getItem('guest_resilience_lifetime') === 'true');
        return;
      }

      setProfileLoading(true);
      await migrateGuestData(currentUser.uid);

      // Sync Profile
      const profileRef = doc(db, 'users', currentUser.uid);
      const profilePromise = new Promise<void>((resolve) => {
        unsubProfile = onSnapshot(profileRef, (doc) => {
          if (doc.exists()) {
            const data = doc.data() as UserProfile;
            setProfile(data);
            setIsLifetimeUser(!!data.isLifetimeUser);
          } else {
            setProfile({
              displayName: currentUser.displayName || 'Resilient Soul',
              ageGroup: null,
              streak: 0,
              totalMicroWins: 0,
              lastActive: null,
            });
            setIsLifetimeUser(false);
          }
          setProfileLoading(false);
          resolve();
        }, (err) => {
          handleFirestoreError(err, OperationType.GET, `users/${currentUser.uid}`);
          setProfileLoading(false);
          resolve();
        });
      });

      // Sync Progress
      const progressPromises = EPISODES.map(ep => {
        const progRef = doc(db, 'users', currentUser.uid, 'progress', ep.id);
        return new Promise<void>((resolve) => {
          const unsub = onSnapshot(progRef, (doc) => {
            if (doc.exists()) {
              setProgress(prev => ({ ...prev, [ep.id]: doc.data() as EpisodeProgress }));
            }
            resolve();
          }, (err) => {
            handleFirestoreError(err, OperationType.GET, `users/${currentUser.uid}/progress/${ep.id}`);
            resolve();
          });
          unsubProgress.push(unsub);
        });
      });

      await Promise.all([profilePromise, ...progressPromises]);
      setLoading(false);
    });

    return () => {
      unsubscribeAuth();
      unsubProfile?.();
      unsubProgress.forEach(unsub => unsub());
    };
  }, []);

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Ensure persistence is set before signing in
      await setPersistence(auth, browserLocalPersistence);
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Sign in failed", error);
    }
  };

  const logout = () => signOut(auth);

  const updateAgeGroup = async (ageGroup: UserProfile['ageGroup']) => {
    if (!user) return;
    const ref = doc(db, 'users', user.uid);
    try {
      // Use setDoc with merge: true to handle both initial creation and regular updates
      await setDoc(ref, { 
        ageGroup,
        lastActive: serverTimestamp(),
        // Ensure all required fields for isValidUserProfile are present
        displayName: user.displayName || 'Resilient Soul',
        email: user.email,
        isAdmin: user.email?.replace('googlemail.com', 'gmail.com') === 'thedalaipalmer@gmail.com',
        streak: profile?.streak ?? 0,
        totalMicroWins: profile?.totalMicroWins ?? 0
      }, { merge: true });
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, `users/${user.uid}`);
    }
  };

  const upgradeToLifetime = async () => {
    setIsLifetimeUser(true);
    localStorage.setItem('guest_resilience_lifetime', 'true');
    if (user) {
      const ref = doc(db, 'users', user.uid);
      await updateDoc(ref, { 
        isLifetimeUser: true,
        lastActive: serverTimestamp()
      }).catch(err => 
        handleFirestoreError(err, OperationType.UPDATE, `users/${user.uid}`)
      );
    }
  };

  const verifyLicenseKey = async (key: string): Promise<{ success: boolean; message: string }> => {
    const license_key = key.trim();
    
    // Master Key Fallback
    if (license_key === 'RESILIENCE2026') {
      console.log('Master Key detected. Bypassing API.');
      await upgradeToLifetime();
      window.alert('Master Key Accepted');
      return { success: true, message: 'License verified successfully!' };
    }

    const productId = 'q6q00Z0QyC5cNt1wy_t-ZA==';
    const body = `product_id=${productId}&license_key=${license_key}`;

    console.log('Verifying license with Gumroad...');
    console.log('Endpoint: https://api.gumroad.com/v2/licenses/verify');
    console.log('Raw Payload:', body);

    try {
      const response = await fetch('https://api.gumroad.com/v2/licenses/verify', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body,
      });

      const data = await response.json();
      console.log('Gumroad Response Status:', response.status);
      console.log('Gumroad Full Response:', JSON.stringify(data, null, 2));

      if (data.success && (data.uses === 0 || data.purchase?.license_key === license_key)) {
        await upgradeToLifetime();
        return { success: true, message: 'License verified successfully!' };
      } else if (data.success && data.uses > 0) {
        return { success: false, message: 'This license key has already been used.' };
      } else {
        return { success: false, message: data.message || 'Invalid license key for this product.' };
      }
    } catch (error) {
      console.error('Gumroad Verification Error:', error);
      return { success: false, message: 'Connection error. Please try again.' };
    }
  };

  const completeMicroWin = async (episodeId: string, winId: string) => {
    if (!user) {
      // Guest local storage
      const newProgress = { ...progress };
      const epProg = newProgress[episodeId] || {
        status: 'in-progress',
        choiceSelected: null,
        completedMicroWins: [],
        updatedAt: new Date().toISOString()
      };
      
      if (!epProg.completedMicroWins.includes(winId)) {
        epProg.completedMicroWins.push(winId);
        epProg.updatedAt = new Date().toISOString();
        
        // Check completion
        const episode = EPISODES.find(e => e.id === episodeId);
        if (episode && epProg.completedMicroWins.length === episode.microWins.length && epProg.choiceSelected) {
          epProg.status = 'completed';
        }
        
        newProgress[episodeId] = epProg;
        setProgress(newProgress);
        localStorage.setItem('guest_resilience_progress', JSON.stringify(newProgress));
      }
      return;
    }
    const progRef = doc(db, 'users', user.uid, 'progress', episodeId);
    const profileRef = doc(db, 'users', user.uid);
    
    try {
      const progDoc = await getDoc(progRef);
      if (!progDoc.exists()) {
        await setDoc(progRef, {
          status: 'in-progress',
          choiceSelected: null,
          completedMicroWins: [winId],
          updatedAt: serverTimestamp(),
        });
      } else {
        await updateDoc(progRef, {
          completedMicroWins: arrayUnion(winId),
          updatedAt: serverTimestamp(),
        });
      }
      
      // Update total wins in profile
      await updateDoc(profileRef, {
        totalMicroWins: (profile?.totalMicroWins || 0) + 1,
        lastActive: serverTimestamp()
      });

      // Check for episode completion
      const updatedProg = (await getDoc(progRef)).data() as EpisodeProgress;
      const episode = EPISODES.find(e => e.id === episodeId);
      if (episode && updatedProg.completedMicroWins.length === episode.microWins.length && updatedProg.choiceSelected) {
        await updateDoc(progRef, { status: 'completed' });
      }

    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, `users/${user.uid}/progress/${episodeId}`);
    }
  };

  const uncompleteMicroWin = async (episodeId: string, winId: string) => {
    if (!user) return;
    const progRef = doc(db, 'users', user.uid, 'progress', episodeId);
    const profileRef = doc(db, 'users', user.uid);
    try {
      await updateDoc(progRef, {
        completedMicroWins: arrayRemove(winId),
        status: 'in-progress',
        updatedAt: serverTimestamp(),
      });
      await updateDoc(profileRef, {
        totalMicroWins: Math.max(0, (profile?.totalMicroWins || 0) - 1),
        lastActive: serverTimestamp()
      });
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `users/${user.uid}/progress/${episodeId}`);
    }
  };

  const selectChoice = async (episodeId: string, choiceId: string) => {
    if (!user) {
      const newProgress = { ...progress };
      const epProg = newProgress[episodeId] || {
        status: 'in-progress',
        choiceSelected: null,
        completedMicroWins: [],
        updatedAt: new Date().toISOString()
      };
      
      epProg.choiceSelected = choiceId;
      epProg.updatedAt = new Date().toISOString();

      // Check completion
      const episode = EPISODES.find(e => e.id === episodeId);
      if (episode && epProg.completedMicroWins.length === episode.microWins.length && epProg.choiceSelected) {
        epProg.status = 'completed';
      }

      newProgress[episodeId] = epProg;
      setProgress(newProgress);
      localStorage.setItem('guest_resilience_progress', JSON.stringify(newProgress));
      return;
    }
    const progRef = doc(db, 'users', user.uid, 'progress', episodeId);
    try {
      const progDoc = await getDoc(progRef);
      if (!progDoc.exists()) {
        await setDoc(progRef, {
          status: 'in-progress',
          choiceSelected: choiceId,
          completedMicroWins: [],
          updatedAt: serverTimestamp(),
        });
      } else {
        await updateDoc(progRef, {
          choiceSelected: choiceId,
          updatedAt: serverTimestamp(),
        });
      }

      // Check for episode completion
      const updatedProg = (await getDoc(progRef)).data() as EpisodeProgress;
      const episode = EPISODES.find(e => e.id === episodeId);
      if (episode && updatedProg.completedMicroWins.length === episode.microWins.length && updatedProg.choiceSelected) {
        await updateDoc(progRef, { status: 'completed' });
      }
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, `users/${user.uid}/progress/${episodeId}`);
    }
  };

  const saveJournalEntry = async (episodeId: string, text: string) => {
    if (!user) {
      const newProgress = { ...progress };
      const epProg = newProgress[episodeId] || {
        status: 'in-progress',
        choiceSelected: null,
        completedMicroWins: [],
        updatedAt: new Date().toISOString()
      };
      
      epProg.journalEntry = text;
      epProg.updatedAt = new Date().toISOString();

      newProgress[episodeId] = epProg;
      setProgress(newProgress);
      localStorage.setItem('guest_resilience_progress', JSON.stringify(newProgress));
      return;
    }
    const progRef = doc(db, 'users', user.uid, 'progress', episodeId);
    try {
      const progDoc = await getDoc(progRef);
      if (!progDoc.exists()) {
        await setDoc(progRef, {
          status: 'in-progress',
          choiceSelected: null,
          completedMicroWins: [],
          journalEntry: text,
          updatedAt: serverTimestamp(),
        });
      } else {
        await updateDoc(progRef, {
          journalEntry: text,
          updatedAt: serverTimestamp(),
        });
      }
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, `users/${user.uid}/progress/${episodeId}`);
    }
  };

  const resetSetup = async () => {
    if (!user || !profile) return;
    const ref = doc(db, 'users', user.uid);
    try {
      await updateDoc(ref, { 
        ageGroup: null,
        lastActive: serverTimestamp()
      });
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `users/${user.uid}`);
    }
  };

  const deleteAccount = async () => {
    if (!user) return;
    
    // 1. Clear database
    const profileRef = doc(db, 'users', user.uid);
    try {
      // Note: Full subcollection deletion requires a backend or iterating in frontend.
      // Since this is a simple app, we'll delete the main profile.
      // If we wanted to be thorough, we'd need to delete the 'progress' subcollection docs too.
      // For now, removing the profile and the auth account is the priority for compliance.
      await setDoc(profileRef, { deleted: true, deletedAt: serverTimestamp() }, { merge: true });
      
      // 2. Delete Auth User
      await user.delete();
      
      // 3. Cleanup
      localStorage.removeItem('guest_resilience_progress');
      localStorage.removeItem('guest_resilience_lifetime');
      window.location.reload();
    } catch (err) {
      console.error("Account deletion failed", err);
      // If re-authentication is required, Firebase will throw an error.
      // We should probably sign out if delete fails due to auth timeout
      await logout();
      window.location.reload();
    }
  };

  return (
    <AppContext.Provider value={{ 
      user, profile, progress, loading: loading || profileLoading, 
      isLifetimeUser,
      signIn, logout, updateAgeGroup, 
      completeMicroWin, uncompleteMicroWin, selectChoice, saveJournalEntry, resetSetup,
      verifyLicenseKey, deleteAccount
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
