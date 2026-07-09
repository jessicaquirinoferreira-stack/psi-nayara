import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Heart, ShieldAlert, Globe } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-20 border-t border-slate-800 relative overflow-hidden">
      {/* Small Ambient Glow in footer */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-magenta/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start mb-12">
          
          {/* Brand Col */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4 text-left"
          >
            <a href="#inicio" className="flex items-center space-x-1 group">
              <span className="font-sans text-2xl font-black tracking-tight text-brand-magenta transition-colors group-hover:text-pink-400">
                psi
              </span>
              <span className="font-sans text-xl font-bold tracking-tight text-white transition-colors group-hover:text-slate-300">
                nayaraaraujo
              </span>
            </a>
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-medium">
              Espaço clínico voltado ao acolhimento integral, autodescoberta e reestruturação emocional. Psicoterapia realizada em modalidade online com compromisso ético e sigilo profissional.
            </p>
          </motion.div>

          {/* Quick Links Col */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-left space-y-4"
          >
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-widest">Navegação</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <a href="#inicio" className="hover:text-brand-magenta transition-colors hover:translate-x-0.5 inline-block transform">Início</a>
              <a href="#sobre" className="hover:text-brand-magenta transition-colors hover:translate-x-0.5 inline-block transform">Sobre</a>
              <a href="#servicos" className="hover:text-brand-magenta transition-colors hover:translate-x-0.5 inline-block transform">Serviços</a>
              <a href="#atendimento-social" className="hover:text-brand-magenta transition-colors hover:translate-x-0.5 inline-block transform">Social</a>
              <a href="#faq" className="hover:text-brand-magenta transition-colors hover:translate-x-0.5 inline-block transform">FAQ</a>
              <a href="#depoimentos" className="hover:text-brand-magenta transition-colors hover:translate-x-0.5 inline-block transform">Depoimentos</a>
              <a href="#cursos" className="hover:text-brand-magenta transition-colors hover:translate-x-0.5 inline-block transform">Cursos</a>
              <a href="#contato" className="hover:text-brand-magenta transition-colors hover:translate-x-0.5 inline-block transform">Contato</a>
            </div>
          </motion.div>

          {/* Regulations and Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-left space-y-4"
          >
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-widest flex items-center space-x-1.5">
              <ShieldAlert className="w-4 h-4 text-pink-400" />
              <span>Ética CFP</span>
            </h4>
            <div className="space-y-3 text-[11px] text-slate-400 leading-relaxed font-semibold">
              <p>
                Atendimento regulamentado pela Resolução CFP nº 11/2018. Todos os dados transmitidos são criptografados de ponta a ponta.
              </p>
              <div className="flex items-center space-x-2 text-pink-400">
                <Globe className="w-3.5 h-3.5 animate-spin-slow" />
                <span className="font-bold text-[10px] tracking-widest uppercase">e-Psi Cadastrada</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Separator line */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          
          {/* Copyright, CRP */}
          <div className="text-center md:text-left space-y-1">
            <p>© 2026 psinayaraaraujo. Todos os direitos reservados.</p>
            <p className="text-[10px] text-slate-600 font-bold">
              Psicóloga Nayara Helena de Araújo — CRP 16/10550
            </p>
          </div>

          {/* Social / Credits */}
          <div className="flex items-center space-x-2 text-[11px] font-bold">
            <span>Feito com</span>
            <Heart className="w-3 h-3 text-brand-magenta fill-current animate-pulse" />
            <span>para psicólogos</span>
          </div>

        </div>

      </div>

      {/* FLOATING ACTION: SCROLL TO TOP */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-to-top"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 bg-brand-magenta hover:bg-brand-magenta-dark text-white p-3.5 rounded-full shadow-2xl transition-all border border-white/10 cursor-pointer"
            aria-label="Voltar para o topo"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
