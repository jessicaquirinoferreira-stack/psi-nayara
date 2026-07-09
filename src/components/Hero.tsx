import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, MessageSquare, ShieldCheck, Heart, Sparkle } from 'lucide-react';

const heroImage = "https://i.postimg.cc/vB2rrCP8/top.jpg";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-slate-50">
      {/* 1. Cinematic Ambient Backlighting Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -60, 60, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-12 right-[10%] w-[450px] h-[450px] rounded-full bg-brand-magenta/8 blur-[110px]"
        />
        <motion.div 
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 70, -70, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-12 left-[5%] w-[400px] h-[400px] rounded-full bg-brand-cyan/8 blur-[120px]"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            {/* Premium Interactive Badge */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="self-start inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-brand-magenta/15 px-4 py-1.5 rounded-full mb-6 shadow-sm cursor-default"
            >
              <Sparkles className="w-4 h-4 text-brand-magenta animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-brand-magenta to-brand-magenta-dark bg-clip-text text-transparent">
                Espaço de Acolhimento &amp; Transformação
              </span>
            </motion.div>

            {/* Elegant Heading with premium typography and glowing effect */}
            <motion.h1 
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800 mb-6 leading-tight"
            >
              É muito bom te receber <br />
              <span className="relative inline-block text-brand-magenta font-black">
                por aqui.
                <span className="absolute bottom-1.5 left-0 w-full h-2 bg-brand-magenta/10 -z-10 rounded-full" />
              </span>
            </motion.h1>

            {/* Subtext with balanced spacing */}
            <motion.p 
              variants={itemVariants}
              className="font-sans text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mb-10 leading-relaxed font-normal"
            >
              Embarque na profunda jornada de autoconhecimento, como quem mergulha em um oceano desconhecido, onde cada onda traz à superfície novas descobertas sobre si mesmo. Através do apoio de um psicólogo, você será capaz de navegar pelas correntes emocionais que moldam seus pensamentos e comportamentos, transformando dores ocultas em portos de fortalecimento e equilíbrio. Como jardineiro de sua própria alma, você aprenderá a cultivar novos caminhos, regando a confiança e podando aquilo que impede seu crescimento.
            </motion.p>

            {/* Actions Button */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 mb-12"
            >
              <a
                href="#contato"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-brand-magenta hover:bg-brand-magenta-dark text-white text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-2xl shadow-lg shadow-brand-magenta/15 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-magenta/20 focus:ring-4 focus:ring-brand-magenta/25"
              >
                <span>Atendimento Online</span>
              </a>
              
              <a
                href="#sobre"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-2xl shadow-xs transition-all duration-300 transform hover:-translate-y-1 hover:border-slate-300"
              >
                <span>Conhecer Trajetória</span>
              </a>
            </motion.div>

            {/* Floating Features Cards with subtle glassmorphism */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-200/60 pt-8"
            >
              <motion.div 
                whileHover={{ y: -4, borderColor: 'rgba(219,39,119,0.3)' }}
                className="flex items-start space-x-3 p-4 rounded-2xl bg-white border border-slate-200/50 shadow-sm transition-all duration-300"
              >
                <ShieldCheck className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-xs text-slate-800 uppercase tracking-wide">Sigilo Absoluto</h3>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Conforme as diretrizes éticas do CFP</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -4, borderColor: 'rgba(219,39,119,0.3)' }}
                className="flex items-start space-x-3 p-4 rounded-2xl bg-white border border-slate-200/50 shadow-sm transition-all duration-300"
              >
                <Calendar className="w-5 h-5 text-brand-magenta shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-xs text-slate-800 uppercase tracking-wide">Horários Flexíveis</h3>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Sessões online no seu melhor momento</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, borderColor: 'rgba(219,39,119,0.3)' }}
                className="flex items-start space-x-3 p-4 rounded-2xl bg-white border border-slate-200/50 shadow-sm transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-xs text-slate-800 uppercase tracking-wide">Apoio Humanizado</h3>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Fácil contato via WhatsApp e e-mail</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Hero Image Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[185/415] rounded-[2.25rem] overflow-hidden shadow-2xl shadow-pink-100/60 border-2 border-white bg-slate-100 group"
            >
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-magenta/15 to-transparent z-10 pointer-events-none"></div>
              
              {/* Dynamic border lighting ring */}
              <div className="absolute inset-0 border border-brand-magenta/10 rounded-[2.15rem] pointer-events-none z-20" />

              <img
                src={heroImage}
                alt="Nayara Helena de Araújo - Psicóloga"
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-106"
                referrerPolicy="no-referrer"
              />
              
              {/* Glassmorphic Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/85 backdrop-blur-md rounded-2xl p-4 border border-white/60 shadow-lg z-20 transform group-hover:translate-y-[-2px] transition-transform duration-500">
                <p className="text-xs font-bold text-slate-800 tracking-wide uppercase">Nayara Helena de Araújo</p>
                <p className="text-[10px] text-brand-magenta font-extrabold uppercase mt-0.5 tracking-wider">Psicóloga Clínica • CRP 16/10550</p>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>

      {/* Decorative Wave Wave bottom spacer */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-8 sm:h-12 text-slate-50 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
}

