import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Episode, Choice } from '../data/episodes';
import { useApp } from '../context/AppContext';
import { X, CheckCircle2, ChevronRight, Zap, Info, ArrowLeft, Send, BookOpen, Shield, HeartPulse, MessageCircle, RotateCcw, Flag, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  episode: Episode;
  onClose: () => void;
}

export const EpisodeOverlay: React.FC<Props> = ({ episode, onClose }) => {
  const { profile, progress, selectChoice, completeMicroWin, uncompleteMicroWin, saveJournalEntry } = useApp();
  const [showFeedback, setShowFeedback] = useState(false);
  const [journalText, setJournalText] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  const epProgress = progress[episode.id];
  const selectedChoice = epProgress?.choiceSelected;
  const completedWins = epProgress?.completedMicroWins || [];
  const isTween = profile?.ageGroup === 'tweens';
  const isAdulting = profile?.ageGroup === 'young-adults';
  const isLightMode = isTween || isAdulting;

  useEffect(() => {
    if (epProgress?.journalEntry) {
      setJournalText(epProgress.journalEntry);
    }
  }, [epProgress?.journalEntry]);

  const handleChoiceSelect = async (choiceId: string) => {
    await selectChoice(episode.id, choiceId);
    setShowFeedback(true);
  };

  const handleSaveJournal = async () => {
    setIsSaving(true);
    await saveJournalEntry(episode.id, journalText);
    setIsSaving(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const currentChoiceData = episode.choices.find(c => c.id === selectedChoice);

  const handleComplete = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: isTween ? ['#10b981', '#34d399', '#6ee7b7'] : isAdulting ? ['#8b5cf6', '#a78bfa', '#c4b5fd'] : ['#6366f1', '#2dd4bf', '#818cf8']
    });
    
    // Small delay to let confetti start before closing
    setTimeout(onClose, 500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-[100] backdrop-blur-xl overflow-y-auto ${
        isLightMode 
          ? (isAdulting ? 'bg-[#f8f7ff]/95' : 'bg-white/95') 
          : 'bg-[#050510]/95'
      }`}
    >
      <div className="max-w-4xl mx-auto min-h-screen px-6 py-12 flex flex-col">
        {/* Top Nav */}
        <div className="flex items-center justify-between mb-16">
          <button 
            onClick={onClose}
            className={`flex items-center gap-2 transition-colors group ${
              isLightMode ? 'text-slate-500 hover:text-indigo-600' : 'text-slate-400 hover:text-white'
            }`}
          >
            <div className={`p-2 rounded-full border transition-colors ${
              isTween ? 'border-emerald-100 hover:border-emerald-200' : isAdulting ? 'border-purple-100 hover:border-purple-200' : 'border-white/10 group-hover:border-white/20'
            }`}>
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-bold uppercase tracking-widest text-xs">Back to Journey</span>
          </button>
          
          <div className="flex items-center gap-4">
            <div className={`h-1.5 w-32 rounded-full overflow-hidden ${isLightMode ? (isAdulting ? 'bg-purple-100' : 'bg-emerald-100') : 'bg-white/5'}`}>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(completedWins.length / episode.microWins.length) * 100}%` }}
                className={`h-full ${
                  isTween ? 'bg-emerald-500' : isAdulting ? 'bg-purple-500' : 'bg-gradient-to-r from-indigo-500 to-teal-400'
                }`}
              />
            </div>
            <span className={`text-[10px] font-black tracking-widest uppercase ${isTween ? 'text-emerald-400' : isAdulting ? 'text-purple-400' : 'text-slate-500'}`}>Progress</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: The Content */}
          <div className="lg:col-span-12 space-y-12">
            
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className={`font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 rounded-full ${
                  isTween ? 'bg-emerald-100 text-emerald-600' : isAdulting ? 'bg-purple-100 text-purple-600' : 'bg-teal-400/10 text-teal-400'
                }`}>Episode Module</span>
                <span className={`font-bold text-[10px] uppercase tracking-widest ${isLightMode ? 'text-slate-400' : 'text-slate-600'}`}>• 5 min mastery</span>
              </div>
              <h2 className={`text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                {episode.title}
              </h2>
            </div>

            {/* Part 1: The Scenario */}
            <section className="space-y-6">
              <h3 className={`flex items-center gap-2 font-black uppercase tracking-widest text-xs ${isTween ? 'text-emerald-500' : isAdulting ? 'text-indigo-600' : 'text-indigo-400'}`}>
                <span className={`w-8 h-[1px] ${isTween ? 'bg-emerald-500' : isAdulting ? 'bg-indigo-600' : 'bg-indigo-500'}`} />
                The Scenario
              </h3>
              <div className={`border-l-4 p-8 rounded-r-3xl text-xl leading-relaxed font-medium italic ${
                isTween ? 'bg-emerald-50/50 border-emerald-400 text-emerald-800' : isAdulting ? 'bg-indigo-50/50 border-indigo-400 text-indigo-800' : 'bg-white/5 border-indigo-500 text-slate-300'
              }`}>
                "{episode.scenario}"
              </div>
            </section>

            {/* NEW: Body Check-in (Before the choice, to build awareness) */}
            {episode.bodyCheckIn && (
              <motion.section 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-8 rounded-[32px] border flex flex-col md:flex-row gap-8 items-center ${isLightMode ? 'bg-rose-50 border-rose-100' : 'bg-rose-500/5 border-rose-500/10'}`}
              >
                <div className={`p-4 rounded-2xl ${isLightMode ? 'bg-white text-rose-500 shadow-sm' : 'bg-rose-500/20 text-rose-400'}`}>
                  <HeartPulse className="w-8 h-8" />
                </div>
                <div className="space-y-2 text-center md:text-left">
                  <div className="font-black uppercase text-[10px] tracking-widest text-rose-600">The Resilience Body Check-in</div>
                  <div className={`text-xl font-bold leading-relaxed ${isLightMode ? 'text-rose-900' : 'text-rose-100'}`}>
                    {episode.bodyCheckIn.split('.')[0]}.
                  </div>
                  <div className={`text-lg italic opacity-80 ${isLightMode ? 'text-rose-800' : 'text-rose-200'}`}>
                    {episode.bodyCheckIn.split('.').slice(1).join('.')}
                  </div>
                </div>
              </motion.section>
            )}

            {/* Part 2: The Choice */}
            <section className="space-y-8">
              <h3 className={`flex items-center gap-2 font-black uppercase tracking-widest text-xs ${isTween ? 'text-teal-600' : isAdulting ? 'text-purple-600' : 'text-teal-400'}`}>
                <span className={`w-8 h-[1px] ${isTween ? 'bg-teal-500' : isAdulting ? 'bg-purple-600' : 'bg-teal-400'}`} />
                The Choice
              </h3>
              <p className={`text-2xl font-bold tracking-tight ${isLightMode ? 'text-slate-800' : 'text-white'}`}>{episode.question}</p>
              
              <div className="grid gap-4">
                {episode.choices.map((choice) => (
                  <button
                    key={choice.id}
                    onClick={() => handleChoiceSelect(choice.id)}
                    className={`relative w-full text-left p-6 rounded-2xl border transition-all flex items-center justify-between group overflow-hidden ${
                      selectedChoice === choice.id 
                        ? (isTween ? 'bg-emerald-100 border-emerald-400 text-emerald-900' : isAdulting ? 'bg-purple-100 border-purple-400 text-purple-900' : 'bg-teal-500/10 border-teal-500/50 text-white')
                        : (isLightMode ? 'bg-white border-slate-100 hover:border-indigo-200 text-slate-600 shadow-sm' : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-400 hover:text-white')
                    }`}
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs ${
                        selectedChoice === choice.id 
                          ? (isTween ? 'bg-emerald-500 border-emerald-400 text-white' : isAdulting ? 'bg-purple-500 border-purple-400 text-white' : 'bg-teal-500 border-teal-400 text-black') 
                          : (isLightMode ? 'border-indigo-100 group-hover:border-indigo-300' : 'border-white/20 group-hover:border-white/40')
                      }`}>
                        {choice.id}
                      </div>
                      <span className="text-lg font-medium">{choice.text}</span>
                    </div>
                    {selectedChoice === choice.id && <CheckCircle2 className={`w-6 h-6 relative z-10 ${isTween ? 'text-emerald-600' : isAdulting ? 'text-purple-600' : 'text-teal-400'}`} />}
                  </button>
                ))}
              </div>

            <AnimatePresence>
                {(selectedChoice || showFeedback) && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-12"
                  >
                    {currentChoiceData && (
                      <div className={`p-8 rounded-3xl border space-y-4 ${
                        isTween ? 'bg-emerald-50 border-emerald-100 text-emerald-800' : isAdulting ? 'bg-indigo-50 border-indigo-100 text-indigo-800' : 'bg-indigo-500/10 border-indigo-500/20 text-slate-300'
                      }`}>
                         <div className={`flex items-center gap-2 uppercase font-black text-[10px] tracking-widest ${isTween ? 'text-emerald-500' : isAdulting ? 'text-indigo-600' : 'text-indigo-400'}`}>
                          <Info className="w-4 h-4" />
                          The Resilience Perspective
                        </div>
                        <p className="text-2xl font-bold leading-tight">
                          {currentChoiceData.feedback}
                        </p>
                      </div>
                    )}

                    {/* Enhancements Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {episode.courageLooksLike && (
                        <div className={`p-8 rounded-[32px] border ${isLightMode ? 'bg-white border-slate-100 shadow-sm' : 'bg-white/5 border-white/10'}`}>
                          <div className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest text-indigo-500 mb-4">
                            <Shield className="w-4 h-4" />
                            What Courage Looks Like
                          </div>
                          <div className={`whitespace-pre-line text-lg leading-relaxed ${isLightMode ? 'text-slate-700' : 'text-slate-300'}`}>
                            {episode.courageLooksLike}
                          </div>
                        </div>
                      )}

                      {episode.perspectiveShift && (
                        <div className={`p-8 rounded-[32px] border ${isLightMode ? 'bg-indigo-50 border-indigo-100' : 'bg-indigo-500/10 border-indigo-500/20'}`}>
                          <div className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest text-indigo-600 mb-4">
                            <RotateCcw className="w-4 h-4" />
                            Perspective Shift
                          </div>
                          <div className={`text-xl leading-relaxed font-bold italic ${isLightMode ? 'text-indigo-900' : 'text-indigo-100'}`}>
                            "{episode.perspectiveShift}"
                          </div>
                        </div>
                      )}
                    </div>

                    {episode.socialScripts && episode.socialScripts.length > 0 && (
                      <div className={`p-8 rounded-[32px] border ${isLightMode ? 'bg-teal-50 border-teal-100' : 'bg-teal-500/5 border-teal-500/10'}`}>
                        <div className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest text-teal-600 mb-6">
                          <MessageCircle className="w-4 h-4" />
                          Social Scripts: Try Saying...
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {episode.socialScripts.map((script, idx) => (
                            <div key={idx} className={`p-4 rounded-2xl border text-lg font-medium italic ${isLightMode ? 'bg-white border-teal-200 text-teal-900' : 'bg-black border-teal-500/30 text-teal-100'}`}>
                              "{script}"
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {episode.miniChallenge && (
                        <div className={`p-8 rounded-[32px] border ${isLightMode ? 'bg-amber-50 border-amber-100' : 'bg-amber-500/10 border-amber-500/20'}`}>
                          <div className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest text-amber-600 mb-4">
                            <Flag className="w-4 h-4" />
                            Mini Challenge
                          </div>
                          <div className={`text-xl font-black tracking-tight leading-tight ${isLightMode ? 'text-amber-900' : 'text-amber-100'}`}>
                            {episode.miniChallenge}
                          </div>
                        </div>
                      )}

                      {episode.emergencyReassurance && (
                        <div className={`p-8 rounded-[32px] border ${isLightMode ? 'bg-slate-900 text-white' : 'bg-indigo-600 text-white'}`}>
                          <div className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest text-indigo-400 mb-4">
                            <AlertCircle className="w-4 h-4" />
                            Emergency Reassurance
                          </div>
                          <div className="text-lg leading-relaxed font-bold">
                            {episode.emergencyReassurance}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* Part 3: The Micro-Win Stack */}
            <section className="space-y-8">
              <h3 className={`flex items-center gap-2 font-black uppercase tracking-widest text-xs ${isTween ? 'text-pink-500' : isAdulting ? 'text-purple-600' : 'text-purple-400'}`}>
                <span className={`w-8 h-[1px] ${isTween ? 'bg-pink-500' : isAdulting ? 'bg-purple-600' : 'bg-purple-500'}`} />
                The Micro-Win Stack
              </h3>
              <div className="space-y-4">
                {episode.microWins.map((win) => {
                  const isDone = completedWins.includes(win.id);
                  return (
                    <div 
                      key={win.id}
                      onClick={() => isDone ? uncompleteMicroWin(episode.id, win.id) : completeMicroWin(episode.id, win.id)}
                      className={`flex items-center gap-4 p-5 rounded-2xl cursor-pointer transition-all border ${
                        isDone 
                          ? (isTween ? 'bg-emerald-50 border-emerald-200' : isAdulting ? 'bg-purple-50 border-purple-200' : 'bg-teal-500/10 border-teal-500/20') 
                          : (isLightMode ? 'bg-white border-slate-100 hover:bg-slate-50' : 'bg-white/5 border-white/5 hover:bg-white/10')
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                        isDone 
                          ? (isTween ? 'bg-emerald-500 text-white' : isAdulting ? 'bg-purple-500 text-white' : 'bg-teal-500 text-black') 
                          : (isLightMode ? 'border-2 border-slate-200' : 'border-2 border-slate-700')
                      }`}>
                        {isDone && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <span className={`text-lg transition-colors ${
                        isDone 
                          ? (isLightMode ? 'text-slate-900 font-bold' : 'text-white font-semibold') 
                          : (isLightMode ? 'text-slate-500' : 'text-slate-400')
                      }`}>
                        {win.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className={`p-8 rounded-3xl border space-y-4 ${
                isTween 
                  ? 'bg-gradient-to-br from-white to-emerald-50 border-emerald-100 shadow-sm' 
                  : isAdulting 
                    ? 'bg-gradient-to-br from-white to-purple-50 border-purple-100 shadow-sm'
                    : 'bg-gradient-to-br from-indigo-900/40 to-black border-white/10'
              }`}>
                <div className={`flex items-center gap-2 font-black uppercase text-[10px] tracking-widest ${isTween ? 'text-emerald-600' : isAdulting ? 'text-purple-600' : 'text-teal-400'}`}>
                  <Zap className={`w-4 h-4 ${isLightMode ? 'text-amber-500 fill-amber-500' : 'text-yellow-400 fill-yellow-400'}`} />
                  The Resilience Lesson
                </div>
                <p className={`text-xl font-medium italic leading-relaxed ${isLightMode ? 'text-slate-800' : 'text-white'}`}>
                  "{episode.lesson}"
                </p>
                <div className={`pt-4 border-t text-sm ${isLightMode ? 'border-slate-100 text-slate-500' : 'border-white/5 text-slate-500'}`}>
                  How to bring this into your life: Consistency over perfection. Small actions rewire your nervous system to handle big stressors.
                </div>
              </div>
            </section>

            {/* Part 4: Coaching Journal */}
            <section className="space-y-8">
              <h3 className={`flex items-center gap-2 font-black uppercase tracking-widest text-xs ${isTween ? 'text-amber-600' : isAdulting ? 'text-amber-600' : 'text-amber-400'}`}>
                <span className={`w-8 h-[1px] ${isLightMode ? 'bg-amber-500' : 'bg-amber-400'}`} />
                Coaching Reflections
              </h3>
              
              <div className="space-y-6">
                <p className={`text-lg font-medium ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                  Deepen your resilience by reflecting on these questions. Focus on one that speaks to you.
                </p>
                
                <ul className="space-y-4">
                  {episode.reflectionQuestions.map((q, i) => (
                    <li key={i} className={`flex items-start gap-4 text-lg p-4 rounded-2xl ${
                      isLightMode ? 'bg-slate-50 text-slate-800 border border-slate-100 shadow-sm' : 'bg-white/5 text-white'
                    }`}>
                      <span className={`flex-shrink-0 mt-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${
                        isLightMode ? 'bg-white border border-indigo-100 text-indigo-700' : 'bg-amber-400/20 text-amber-400'
                      }`}>
                         {i + 1}
                      </span>
                      {q}
                    </li>
                  ))}
                </ul>

                <div className={`space-y-4 mt-12 p-8 rounded-[32px] border ${
                  isLightMode ? 'bg-amber-50/30 border-amber-200' : 'bg-amber-400/5 border-amber-400/10'
                }`}>
                  <div className="flex items-center gap-2 uppercase font-black text-[10px] tracking-widest text-amber-600 mb-2">
                    <BookOpen className="w-4 h-4" />
                    Personal Practice Journal
                  </div>
                  <textarea
                    value={journalText}
                    onChange={(e) => setJournalText(e.target.value)}
                    placeholder="Type your reflections here... What did you learn? How will you use this today?"
                    className={`w-full min-h-[160px] p-6 rounded-2xl border text-lg transition-all focus:ring-4 outline-none resize-none ${
                        isLightMode 
                          ? 'bg-white border-amber-200 focus:border-amber-400 focus:ring-amber-400/10 text-slate-800' 
                          : 'bg-[#0a0a1a] border-white/5 focus:border-amber-400 focus:ring-amber-400/5 text-white'
                      }`}
                  />
                  <div className="flex justify-between items-center pt-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Your entries are private and secure
                    </p>
                    <div className="flex items-center gap-4">
                      <AnimatePresence>
                        {saveSuccess && (
                          <motion.span 
                            initial={{ opacity: 0, x: 10 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            exit={{ opacity: 0 }}
                            className="text-emerald-600 font-bold text-[10px] uppercase tracking-widest"
                          >
                            Progress Saved
                          </motion.span>
                        )}
                      </AnimatePresence>
                      <button
                        onClick={handleSaveJournal}
                        disabled={isSaving}
                        className={`group flex items-center gap-2 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
                          isSaving 
                            ? 'opacity-50 cursor-not-allowed'
                            : (isLightMode ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-xl shadow-amber-500/20' : 'bg-amber-400 text-black hover:bg-amber-300')
                        }`}
                      >
                        {isSaving ? 'Processing...' : (
                          <>
                            <Send className={`w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${isLightMode ? 'text-white' : 'text-black'}`} />
                            Save Observations
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="pt-12 flex justify-center">
              <button 
                onClick={handleComplete}
                className={`text-white font-black uppercase tracking-tighter px-10 py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-2 text-lg ${
                  isTween 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-400 shadow-emerald-500/10' 
                    : isAdulting
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 shadow-indigo-500/10'
                      : 'bg-gradient-to-r from-indigo-500 to-teal-400 shadow-teal-500/20'
                }`}
              >
                Complete Episode <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
