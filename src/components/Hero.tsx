import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, MessageSquare, ShieldCheck, Heart, Sparkle } from 'lucide-react';

const heroImage = "https://i.postimg.cc/vB2rrCP8/top.jpg";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white bg-white group">
            {/* Soft visual filter over the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-magenta/5 via-transparent to-transparent z-10 pointer-events-none"></div>
            
            <img
              ref={imgRef}
              src="https://i.postimg.cc/KvTP9N0s/IMG-20260715-WA0033.jpg"
              alt="Psicóloga Nayara Helena de Araújo - Espaço de Acolhimento"
              className={`w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-[1.01] ${
                imageLoaded ? 'blur-0 opacity-100 scale-100' : 'blur-md opacity-90 scale-[1.015]'
              }`}
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="sync"
              onLoad={() => setImageLoaded(true)}
              {...({ fetchPriority: "high" } as any)}
            />
          </div>

          {/* CTA Buttons placed beautifully below the image */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-12 w-full max-w-2xl px-4">
            <a
              href="https://wa.me/5516997576550?text=Ol%C3%A1%20Nayara%2C%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-brand-magenta hover:bg-brand-magenta-dark text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-8 py-4.5 rounded-2xl shadow-lg shadow-brand-magenta/15 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-magenta/25"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Quero conversar com você</span>
            </a>
            
            <a
              href="#sobre"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs sm:text-sm font-bold uppercase tracking-widest px-8 py-4.5 rounded-2xl shadow-xs transition-all duration-300 transform hover:-translate-y-1 hover:border-slate-300"
            >
              <span>Conheça minha trajetória.</span>
            </a>
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

