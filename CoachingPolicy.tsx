import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { LogOut, User as UserIcon, ShieldCheck, Zap } from 'lucide-react';

export const Layout: React.FC<{ 
  children: React.ReactNode;
  setView?: (view: any) => void;
}> = ({ children, setView }) => {
  const { user, profile, logout, resetSetup, isLifetimeUser, deleteAccount } = useApp();
  const isTween = profile?.ageGroup === 'tweens';
  const isAdulting = profile?.ageGroup === 'young-adults';
  const isLightMode = isTween || isAdulting;

  const handleDeleteAccount = async () => {
    if (window.confirm("ARE YOU SURE? This will permanently delete your account, authentication profile, and all saved progress. This action cannot be undone.")) {
      await deleteAccount();
    }
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-teal-500/30 transition-colors duration-700 ${
      isLightMode 
        ? (isAdulting ? 'bg-[#f8f7ff] text-slate-800' : 'bg-[#f0f9f4] text-slate-800')
        : 'bg-[#050510] text-slate-200'
    } overflow-x-hidden`}>
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {isTween ? (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-100/50 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-pink-100/40 blur-[150px] rounded-full" />
            <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-yellow-50/50 blur-[100px] rounded-full" />
          </>
        ) : isAdulting ? (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-100/50 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-100/40 blur-[150px] rounded-full" />
            <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-slate-100/50 blur-[100px] rounded-full" />
          </>
        ) : (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-900/10 blur-[150px] rounded-full" />
            <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-lavender-900/5 blur-[100px] rounded-full" />
          </>
        )}
      </div>

      {/* Header */}
      <header className={`relative z-50 border-b backdrop-blur-md px-6 py-4 transition-colors ${
        isLightMode 
          ? (isAdulting ? 'border-purple-100 bg-white/40 shadow-sm' : 'border-emerald-100 bg-white/40 shadow-sm')
          : 'border-white/5 bg-black/20'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setView?.('main')}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 ${
              isTween 
                ? 'bg-gradient-to-br from-emerald-400 to-teal-300 shadow-emerald-500/10' 
                : isAdulting
                  ? 'bg-gradient-to-br from-indigo-500 to-purple-400 shadow-indigo-500/10'
                  : 'bg-gradient-to-br from-indigo-500 to-teal-400 shadow-indigo-500/20'
            }`}>
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h1 className={`text-xl font-bold tracking-tight leading-none ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Resilience Lab</h1>
              <div className="flex items-center gap-2 mt-1">
                <p className={`text-[10px] uppercase tracking-widest font-bold ${
                  isTween ? 'text-emerald-600' : isAdulting ? 'text-indigo-600' : 'text-teal-400'
                }`}>Digital wellbeing</p>
                {isLifetimeUser && (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[8px] font-black uppercase tracking-widest animate-pulse">
                    <Zap className="w-2 h-2" />
                    Member
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            {!isLifetimeUser && (
              <button 
                onClick={() => setView?.('paywall')}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all"
              >
                <Zap className="w-3 h-3" />
                Upgrade
              </button>
            )}
            {user && (
              <div className="flex items-center gap-3 md:gap-6">
                <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-semibold tracking-wide text-slate-400">
                  <div className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border uppercase ${
                    isLightMode 
                      ? (isAdulting ? 'bg-white border-purple-100 text-purple-700' : 'bg-white border-emerald-100 text-emerald-700') 
                      : 'bg-white/5 border-white/10'
                  }`}>
                    <Zap className={`w-3 sm:w-3.5 h-3 sm:h-3.5 ${isLightMode ? (isAdulting ? 'text-purple-500 fill-purple-500' : 'text-emerald-500 fill-emerald-500') : 'text-yellow-400 fill-yellow-400'}`} />
                    <span className="hidden xs:inline">{profile?.totalMicroWins || 0} Wins</span>
                    <span className="xs:hidden">{profile?.totalMicroWins || 0}</span>
                  </div>
                  <button 
                    onClick={() => resetSetup()}
                    className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border uppercase transition-colors ${
                      isLightMode 
                        ? (isAdulting ? 'bg-white border-purple-100 text-purple-700 hover:bg-purple-50' : 'bg-white border-emerald-100 text-emerald-700 hover:bg-emerald-50')
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span className={isTween ? 'text-emerald-400' : isAdulting ? 'text-purple-400' : 'text-indigo-400 hidden xs:inline'}>Age:</span>
                    <span>{profile?.ageGroup === 'gen-z' ? 'Teens' : profile?.ageGroup?.replace('-', ' ')}</span>
                  </button>
                </div>
                
                <button 
                  onClick={() => logout()}
                  className={`p-2 rounded-full transition-colors group ${
                    isLightMode ? 'hover:bg-slate-100' : 'hover:bg-white/5'
                  }`}
                  title="Logout"
                >
                  <LogOut className={`w-4 sm:w-5 h-4 sm:h-5 transition-colors ${isLightMode ? 'text-slate-500 group-hover:text-amber-600' : 'text-slate-400 group-hover:text-white'}`} />
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {children}
      </main>

      <footer className={`relative z-10 border-t py-12 px-6 transition-colors ${
        isTween ? 'bg-emerald-50/30 border-emerald-100' : isAdulting ? 'bg-purple-50/30 border-purple-100' : 'bg-black/40 border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <div>
            <p className={isLightMode ? 'text-slate-400' : ''}>© 2026 The Resilience Lab. Built for the modern mind.</p>
          </div>
          <div className="flex gap-8 uppercase font-bold tracking-widest text-[10px]">
            <button 
              onClick={() => setView?.('privacy')}
              className={`transition-colors ${isTween ? 'hover:text-emerald-600' : isAdulting ? 'hover:text-purple-600' : 'hover:text-teal-400'}`}
            >
              Privacy
            </button>
            <button 
              onClick={() => setView?.('terms')}
              className={`transition-colors ${isTween ? 'hover:text-emerald-600' : isAdulting ? 'hover:text-purple-600' : 'hover:text-teal-400'}`}
            >
              Terms
            </button>
            <button 
              onClick={() => setView?.('coaching')}
              className={`transition-colors ${isTween ? 'hover:text-emerald-600' : isAdulting ? 'hover:text-purple-600' : 'hover:text-teal-400'}`}
            >
              Coaching Policy
            </button>
            {user && (
              <button 
                onClick={handleDeleteAccount}
                className="text-red-500/50 hover:text-red-500 transition-colors uppercase font-black"
              >
                Delete Account
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};
