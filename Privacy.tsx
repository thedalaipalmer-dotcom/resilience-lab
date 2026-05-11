import React from 'react';
import { motion } from 'motion/react';
import { EPISODES, Episode } from '../data/episodes';
import { useApp } from '../context/AppContext';
import { CheckCircle2, Lock, ChevronRight, Ghost, Sparkles, Smartphone, Users, GraduationCap, UserCircle, ShieldAlert, Camera, TrendingDown, Moon, Zap, MessageSquare, Wind, UserCheck, Heart, EyeOff, Clock, Briefcase, Wallet, Coffee, Brain, Search, ShieldCheck, Target, Smile, Trophy, HelpCircle, Lightbulb, Flame, Globe, RotateCcw } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Ghost, Sparkles, Smartphone, Users, GraduationCap, UserCircle, ShieldAlert, Camera, TrendingDown, Moon, Zap, MessageSquare, Wind, UserCheck, Heart, EyeOff, Clock, Briefcase, Wallet, Coffee, Brain, Search, ShieldCheck, Target, Smile, Trophy, HelpCircle, Lightbulb, Flame, Globe, RotateCcw
};

export const JourneyMap: React.FC<{ onSelect: (ep: Episode) => void }> = ({ onSelect }) => {
  const { profile, progress, isLifetimeUser } = useApp();
  const isTween = profile?.ageGroup === 'tweens';
  const isAdulting = profile?.ageGroup === 'young-adults';
  const isLightMode = isTween || isAdulting;

  const filteredEpisodes = EPISODES.filter(ep => 
    !profile || ep.ageGroups.includes(profile.ageGroup)
  );

  return (
    <div className="space-y-12">
      <div className="max-w-2xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-5xl font-bold tracking-tight mb-4 ${isLightMode ? 'text-slate-900' : 'text-white'}`}
        >
          Your Resilience <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
            isTween ? 'from-emerald-600 to-teal-500' : isAdulting ? 'from-indigo-600 to-purple-500' : 'from-indigo-400 to-teal-400'
          }`}>Map</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-lg leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}
        >
          {isTween 
            ? "Missions chosen just for you. Learn how to handle group chats, games, and school stress like a pro."
            : isAdulting
              ? "Strategy sessions for navigating professional shifts, digital reputation, and burnout cycles."
              : "10 episodes curated for your age group. Master the social glitches and digital traps of the modern world."}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEpisodes.map((ep, index) => {
          const epProgress = progress[ep.id];
          const isCompleted = epProgress?.status === 'completed';
          const isLocked = index > 4 && !isLifetimeUser;
          const EpIcon = ICON_MAP[ep.icon] || Sparkles;

          return (
            <motion.div
              key={ep.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={isLocked ? {} : { y: -8 }}
              onClick={() => onSelect(ep)}
              className={`group relative ${isLocked ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
            >
              <div className={`absolute inset-0 opacity-0 ${!isLocked && 'group-hover:opacity-100'} transition-opacity rounded-3xl blur-2xl ${
                isTween ? 'bg-emerald-400/20' : isAdulting ? 'bg-purple-400/20' : 'bg-gradient-to-br from-indigo-500/10 to-teal-500/10'
              }`} />
              
              <div className={`relative h-full border p-8 rounded-3xl backdrop-blur-sm transition-all ${
                isLightMode 
                  ? (isAdulting ? 'bg-white border-purple-100 group-hover:border-purple-300' : 'bg-white border-emerald-100 group-hover:border-emerald-300') 
                  : 'bg-white/5 border-white/10 group-hover:bg-white/10 group-hover:border-white/20'
              }`}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl ${!isLocked && 'group-hover:scale-110'} transition-transform ${
                    isCompleted 
                      ? (isTween ? 'bg-emerald-100 text-emerald-600' : isAdulting ? 'bg-purple-100 text-purple-600' : 'bg-teal-500/20 text-teal-400') 
                      : (isTween ? 'bg-emerald-50 text-emerald-500' : isAdulting ? 'bg-indigo-50 text-indigo-500' : 'bg-indigo-500/20 text-indigo-400')
                  }`}>
                    {isLocked ? <Lock className="w-6 h-6 opacity-50" /> : <EpIcon className="w-6 h-6" />}
                  </div>
                  {isLocked ? (
                    <div className={`flex items-center gap-1.5 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full ${
                      isLightMode ? 'bg-slate-100 text-slate-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      <Zap className="w-3.5 h-3.5" />
                      Locked
                    </div>
                  ) : isCompleted && (
                    <div className={`flex items-center gap-1.5 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full ${
                      isTween ? 'bg-emerald-100 text-emerald-600' : isAdulting ? 'bg-purple-100 text-purple-600' : 'bg-teal-500/10 text-teal-400'
                    }`}>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Completed
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <h3 className={`text-xl font-bold uppercase tracking-tight transition-colors ${
                    isLightMode ? 'text-slate-800' : 'text-white'
                  } ${!isLocked && (isTween ? 'group-hover:text-emerald-700' : isAdulting ? 'group-hover:text-purple-700' : 'group-hover:text-teal-300')}`}>
                    {ep.title}
                  </h3>
                  <p className={`text-sm line-clamp-2 leading-relaxed ${isLightMode ? 'text-slate-500' : 'text-slate-500'}`}>
                    {isLocked ? "Lifetime Membership required to unlock this module." : ep.scenario}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <span className={`text-[10px] uppercase tracking-widest font-black transition-colors ${
                    isTween ? 'text-emerald-600/40 group-hover:text-emerald-600' : isAdulting ? 'text-purple-600/40 group-hover:text-purple-600' : 'text-slate-500 group-hover:text-indigo-400'
                  }`}>
                    {isLocked ? 'Premium' : `Episode ${index + 1}`}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isTween ? 'bg-emerald-50 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white' : isAdulting ? 'bg-indigo-50 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white' : 'bg-white/5 group-hover:bg-teal-500 group-hover:text-white'
                  }`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
