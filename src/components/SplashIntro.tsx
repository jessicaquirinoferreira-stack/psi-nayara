import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShieldCheck, Heart, Eye } from 'lucide-react';

interface SplashIntroProps {
  onComplete: () => void;
  key?: React.Key;
}

export default function SplashIntro({ onComplete }: SplashIntroProps) {
  const [progress, setProgress] = useState(0);
  const [subtextIndex, setSubtextIndex] = useState(0);
  const logoUrl = "https://i.postimg.cc/htygLrLz/Chat-GPT-Image-9-de-jul-de-2026-13-15-20.png";

  const subtexts = [
    "Mergulhando no inconsciente...",
    "Ressignificando histórias...",
    "Construindo novos sentidos...",
    "Cultivando o autoconhecimento..."
  ];

  // Disable scrolling while active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Update progress bar precisely over 4 seconds (4000ms)
  useEffect(() => {
    const totalTime = 4000;
    const intervalTime = 50; // Update every 50ms
    const step = (intervalTime / totalTime) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Cycle subtexts every 1.0 second
  useEffect(() => {
    const textTimer = setInterval(() => {
      setSubtextIndex((prev) => (prev + 1) % subtexts.length);
    }, 1000);

    return () => clearInterval(textTimer);
  }, []);

  // Trigger completion after 4 seconds
  useEffect(() => {
    const doneTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(doneTimer);
  }, [onComplete]);

  // Handle direct skip
  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50 text-slate-800 overflow-hidden select-none">
      
      {/* 1. Cinematic Rotating & Floating Color Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -80, 80, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-magenta/8 blur-[100px]"
        />
        <motion.div 
          animate={{
            x: [0, -80, 80, 0],
            y: [0, 90, -90, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-brand-cyan/8 blur-[120px]"
        />
        <div className="absolute inset-0 bg-slate-50/10 backdrop-blur-[0.5px]" />
      </div>

      {/* 2. Floating Star Dust Particles (Soft pink/cyan sparks) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.6 + 0.4,
              scale: Math.random() * 0.8 + 0.4
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 4 + 4, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-brand-magenta/30 shadow-[0_0_8px_#db2777]"
          />
        ))}
      </div>

      {/* Skip Button */}
      <button 
        onClick={handleSkip}
        className="absolute top-6 right-6 z-50 text-xs text-slate-500 hover:text-slate-800 uppercase tracking-widest font-bold px-4 py-2 rounded-full border border-slate-200 bg-white/75 backdrop-blur-sm transition-all hover:bg-white shadow-xs"
      >
        Pular Intro
      </button>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
        
        {/* Animated Glowing Logo Outer Frame */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Pulsing Backlight */}
          <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-brand-magenta/20 to-brand-cyan/20 opacity-50 blur-3xl animate-pulse" />
          
          {/* Animated Ring border */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 rounded-full border border-dashed border-brand-magenta/30"
          />

          {/* Logo container - Substantially Enlarged (w-56 sm:w-64 -> w-64 sm:w-76) */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-white border border-slate-100 flex items-center justify-center p-6 shadow-2xl">
            <img 
              src={logoUrl} 
              alt="Psi Nayara Araújo Logo" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(219,39,119,0.15)]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Shimmer Effect */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute top-0 bottom-0 left-0 w-12 bg-white/20 skew-x-12 filter blur-sm pointer-events-none"
          />
        </motion.div>

        {/* Title Presentation - "psi nayraaraujo" in premium display text */}
        <div className="space-y-3 mb-8 overflow-hidden">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            <span className="text-brand-magenta filter drop-shadow-[0_0_4px_rgba(219,39,119,0.2)]">Psi </span>
            <span className="text-slate-800">NayaraAraujo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-xs uppercase tracking-[0.25em] text-slate-500 font-bold"
          >
            Psicologia Clínica &amp; Psicanálise
          </motion.p>
        </div>

        {/* 3. Detailed Progress Indicator */}
        <div className="w-64 sm:w-72 space-y-4">
          
          {/* Status Label (Fades in & out) */}
          <div className="h-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={subtextIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="text-xs text-brand-magenta font-semibold tracking-wide"
              >
                {subtexts[subtextIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Progress Bar Track */}
          <div className="h-1.5 w-full bg-slate-200/80 rounded-full overflow-hidden border border-slate-300/40 p-[1px]">
            <motion.div 
              className="h-full bg-gradient-to-r from-brand-magenta to-brand-cyan rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              layoutId="progress-bar-slug"
            />
          </div>

          {/* Progress Percentage */}
          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex justify-between">
            <span>Sessão de Abertura</span>
            <span className="font-bold text-slate-600">{Math.round(Math.min(progress, 100))}%</span>
          </div>
        </div>

      </div>

      {/* Decorative footer elements within intro */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-[10px] text-slate-400 tracking-wider font-semibold uppercase">
        CRP 16/10550 • Nayara Helena de Araújo
      </div>

    </div>
  );
}
