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
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-[#faf6f0]">
      {/* 1. Cinematic Ambient Backlighting Orbs matched to new terracotta/teal scheme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-12 right-[15%] w-[400px] h-[400px] rounded-full bg-brand-magenta/4 blur-[100px]"
        />
        <motion.div 
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 50, -50, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-12 left-[10%] w-[350px] h-[350px] rounded-full bg-brand-cyan/4 blur-[110px]"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          {/* Left Column: Hero Content with accurate text and butterfly decoration */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center relative">
            
            {/* Elegant Line-art Butterfly Outline Decoration */}
            <div className="absolute -left-10 -top-12 opacity-20 pointer-events-none select-none hidden md:block text-brand-magenta/40">
              <svg width="110" height="110" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1" className="transform -rotate-12">
                <path d="M60,95 C60,95 30,80 30,52 C30,30 48,25 60,42 C72,25 90,30 90,52 C90,80 60,95 60,95 Z" />
                <path d="M60,95 C60,95 18,70 12,42 C6,15 28,5 48,32 C50,35 53,39 60,42" />
                <path d="M60,95 C60,95 102,70 108,42 C114,15 92,5 72,32 C70,35 67,39 60,42" />
                <path d="M60,42 C60,42 60,20 60,10" />
                <path d="M60,10 C58,7 54,5 49,7" />
                <path d="M60,10 C62,7 66,5 71,7" />
                <circle cx="60" cy="42" r="1.5" fill="currentColor" />
                <circle cx="60" cy="62" r="1.5" fill="currentColor" />
                <circle cx="60" cy="82" r="1.5" fill="currentColor" />
              </svg>
            </div>

            {/* Premium Subtitle Badge */}
            <motion.div 
              variants={itemVariants}
              className="self-start inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md border border-brand-magenta/15 px-4 py-1.5 rounded-full mb-6 shadow-xs cursor-default"
            >
              <span className="text-xs font-bold tracking-wider uppercase text-brand-cyan flex items-center space-x-1.5">
                <span>🌍</span>
                <span>Atendimento online para brasileiros em qualquer lugar do mundo</span>
              </span>
            </motion.div>

            {/* Elegant Heading with exact typography and words from the image */}
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-3.5xl sm:text-5xl md:text-5.5xl lg:text-6xl font-normal text-brand-cyan tracking-tight mb-8 leading-tight"
            >
              Nem sempre conseguimos <br />
              explicar o que estamos <br />
              <span className="text-brand-magenta font-serif italic font-medium relative inline-block">
                sentindo.
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-brand-magenta/10 rounded-full" />
              </span>
            </motion.h1>

            {/* Subtext Paragraphs exactly matching the image */}
            <div className="space-y-6 max-w-2xl mb-10">
              <motion.p 
                variants={itemVariants}
                className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-light text-justify sm:text-left"
              >
                Há momentos em que a ansiedade, os conflitos, as perdas, as mudanças ou as incertezas da vida tornam a caminhada mais difícil do que gostaríamos. Nesses momentos, buscar um espaço de escuta pode ser um importante gesto de cuidado consigo mesmo.
              </motion.p>

              <motion.p 
                variants={itemVariants}
                className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-light text-justify sm:text-left"
              >
                A psicoterapia oferece um espaço seguro de escuta, acolhimento e reflexão, onde você poderá compreender suas emoções, elaborar experiências e desenvolver novas formas de enfrentar os desafios da vida. Meu compromisso é oferecer um acompanhamento ético, respeitoso e individualizado, valorizando o seu tempo, a sua história e a singularidade de quem você é.
              </motion.p>
            </div>

            {/* Terracotta-bordered Quote Block matching the image bottom */}
            <motion.div 
              variants={itemVariants}
              className="pl-6 border-l-[3px] border-brand-magenta py-1.5 text-brand-cyan font-medium text-base sm:text-lg leading-relaxed mb-10 max-w-2xl text-left"
            >
              Quando você sentir que é o momento, será um privilégio acolher a sua história e caminhar ao seu lado.
            </motion.div>

            {/* Navigation & WhatsApp buttons styled with the new palette */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="https://wa.me/5516997576550?text=Ol%C3%A1%20Nayara%2C%20gostaria%20de%20agendar%20uma%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-brand-magenta hover:bg-brand-magenta-dark text-white text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-2xl shadow-lg shadow-brand-magenta/15 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-magenta/25"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Quero conversar com você</span>
              </a>
              
              <a
                href="#sobre"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-2xl shadow-xs transition-all duration-300 transform hover:-translate-y-1 hover:border-slate-300"
              >
                <span>Conheça minha trajetória.</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Hero Image Frame representing Nayara's premium photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[290px] sm:max-w-[330px] aspect-[185/415] rounded-[2.25rem] overflow-hidden shadow-2xl shadow-amber-900/5 border-4 border-white bg-white group"
            >
              {/* Soft visual filter over the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-magenta/5 via-transparent to-transparent z-10 pointer-events-none"></div>
              
              <img
                src={heroImage}
                alt="Psicóloga Nayara Helena de Araújo"
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-103"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              
              {/* Premium Glassmorphic Overlay Badge */}
              <div className="absolute bottom-6 left-5 right-5 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-slate-100 shadow-xl z-20 transition-all duration-300 transform group-hover:-translate-y-1">
                <p className="text-xs font-bold text-slate-800 tracking-wide uppercase">Nayara Helena de Araújo</p>
                <p className="text-[10px] text-brand-magenta font-extrabold uppercase mt-0.5 tracking-wider">Psicóloga Clínica • CRP 16/10550</p>
              </div>
            </motion.div>
          </div>

        </motion.div>

        {/* 3 Caixinhas Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 sm:mt-24"
        >
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white/80 backdrop-blur-md border border-slate-150 rounded-3xl p-6 sm:p-8 shadow-xl shadow-brand-magenta/5 relative overflow-hidden transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-magenta to-brand-magenta-light" />
            <div>
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-brand-cyan tracking-tight mb-2">
                Sigilo e Confidencialidade
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Seu atendimento é realizado com total privacidade, seguindo rigorosamente o Código de Ética Profissional da Psicologia.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white/80 backdrop-blur-md border border-slate-150 rounded-3xl p-6 sm:p-8 shadow-xl shadow-brand-magenta/5 relative overflow-hidden transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-magenta to-brand-magenta-light" />
            <div>
              <div className="text-3xl mb-4">📅</div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-brand-cyan tracking-tight mb-2">
                Horários Flexíveis
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Sessões online com horários adaptados à sua rotina, proporcionando mais praticidade e conforto.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white/80 backdrop-blur-md border border-slate-150 rounded-3xl p-6 sm:p-8 shadow-xl shadow-brand-magenta/5 relative overflow-hidden transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-magenta to-brand-magenta-light" />
            <div>
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-brand-cyan tracking-tight mb-2">
                Atendimento Online
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Psicoterapia para adolescentes, adultos e casais, atendendo brasileiros no Brasil e em qualquer lugar do mundo.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Wave Wave bottom spacer matched with background of adjacent section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-8 sm:h-12 text-white fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
}

