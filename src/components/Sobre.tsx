import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Brain, 
  BookOpen, 
  Award,
  ShieldCheck,
  Heart
} from 'lucide-react';

const imagem1 = "https://iili.io/CNz1J94.png";
const imagem2 = "https://iili.io/CNooFjV.jpg";

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 sm:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      {/* Background soft ambient glows matching brand colors */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-magenta/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-bold tracking-widest text-brand-magenta uppercase block mb-2">
            Conheça-me & Trajetória
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Sobre mim e minha <span className="text-brand-magenta">formação acadêmica</span>
          </h2>
        </motion.div>

        {/* TOP BANNER / INTRO CARD featuring Imagem 1 (Large Image Top + Text Below) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/80 shadow-xl shadow-slate-200/50 mb-16 relative overflow-hidden"
        >
          <div className="flex flex-col space-y-6 sm:space-y-8">
            {/* Image 1 Container - Placed Large on Top */}
            <div className="relative w-full">
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-magenta/20 to-brand-cyan/20 rounded-3xl blur-md"></div>
              <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-magenta/20 bg-gradient-to-b from-slate-50 to-white shadow-md flex items-center justify-center p-2 sm:p-4">
                <img 
                  src={imagem1} 
                  alt="Nayara Helena de Araújo" 
                  className="w-full h-auto max-h-[850px] object-contain mx-auto rounded-xl shadow-xs"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
            </div>

            {/* Intro Text - Placed Directly Below the Image */}
            <div className="space-y-4 text-slate-700 pt-2 px-1">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center space-x-2 bg-brand-magenta/10 text-brand-magenta px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-brand-magenta" />
                  <span>Psicóloga Clínica &amp; Psicanalista • CRP 16/10 550</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-800 leading-snug">
                Nayara Helena de Araújo
              </h3>

              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Sou <strong>Nayara Helena de Araújo</strong>, psicóloga clínica e psicanalista (CRP 16/10 550). Minha atuação é fundamentada no aprimoramento científico contínuo, na escuta qualificada e no respeito profundo à singularidade de cada paciente.
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center space-x-3 text-xs sm:text-sm font-medium text-brand-cyan">
                <Heart className="w-4 h-4 text-brand-magenta shrink-0" />
                <span>Cuidado humanizado, ética e acolhimento para o seu bem-estar emocional</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MAIN GRID: FORMATION CARDS (LEFT) + IMAGEM 2 (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: CARDS SECTION */}
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
            
            {/* 1. GRADUAÇÃO (DOIS CARDS) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 border-b border-slate-200 pb-2">
                <span className="p-1.5 bg-brand-cyan/10 text-brand-cyan rounded-lg">
                  <BookOpen className="w-4 h-4" />
                </span>
                <h3 className="font-sans text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-700">
                  Graduação
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1: Psicologia */}
                <motion.div 
                  whileHover={{ y: -3, borderColor: 'rgba(192,101,50,0.3)' }}
                  className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs transition-all duration-300"
                >
                  <div className="flex items-center space-x-2.5 mb-2.5">
                    <span className="text-xl">🎓</span>
                    <h4 className="font-bold text-base text-slate-800">Psicologia</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Graduação que fundamenta minha atuação clínica, ética e científica no cuidado à saúde mental.
                  </p>
                </motion.div>

                {/* Card 2: Gestão de RH */}
                <motion.div 
                  whileHover={{ y: -3, borderColor: 'rgba(26,139,136,0.3)' }}
                  className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs transition-all duration-300"
                >
                  <div className="flex items-center space-x-2.5 mb-2.5">
                    <span className="text-xl">👥</span>
                    <h4 className="font-bold text-base text-slate-800">Gestão de Recursos Humanos</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Primeira formação que ampliou minha compreensão sobre desenvolvimento humano, comportamento organizacional e relações interpessoais, conhecimentos que hoje enriquecem minha prática clínica e atuação em saúde mental.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* 2. ESPECIALIZAÇÃO (CARD MAIOR QUE OS DEMAIS) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-brand-magenta/10 via-brand-magenta-light/10 to-white border-2 border-brand-magenta/40 shadow-md overflow-hidden group"
            >
              {/* Subtle glowing halo inside */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-magenta/15 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>

              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center space-x-2 bg-brand-magenta text-white px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  <Brain className="w-3.5 h-3.5" />
                  <span>Especialização • Minha Abordagem Clínica</span>
                </div>

                <div className="flex items-center space-x-3 pt-1">
                  <span className="text-3xl">🧠</span>
                  <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                    Psicanálise
                  </h3>
                </div>

                <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-medium pt-1">
                  A Psicanálise orienta minha prática por meio da escuta qualificada, do respeito à singularidade e da compreensão profunda dos processos emocionais e inconscientes que constituem a história de cada pessoa.
                </p>

                <div className="pt-2 flex items-center space-x-2 text-xs font-bold text-brand-magenta uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-brand-magenta" />
                  <span>Escuta Singular, Ética e Acolhedora</span>
                </div>
              </div>
            </motion.div>

            {/* 3. PÓS-GRADUAÇÕES (TRÊS CARDS) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 border-b border-slate-200 pb-2">
                <span className="p-1.5 bg-brand-magenta/10 text-brand-magenta rounded-lg">
                  <Award className="w-4 h-4" />
                </span>
                <h3 className="font-sans text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-700">
                  Pós-Graduações
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Card 1: Psicologia Hospitalar */}
                <motion.div 
                  whileHover={{ y: -3, borderColor: 'rgba(192,101,50,0.3)' }}
                  className="p-4.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">🏥</span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-800 leading-snug">
                        Psicologia Hospitalar e da Saúde
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Aprofundamento voltado ao cuidado psicológico em diferentes contextos de saúde, considerando os impactos emocionais do adoecimento e das diferentes fases da vida.
                    </p>
                  </div>
                </motion.div>

                {/* Card 2: Psicologia Forense */}
                <motion.div 
                  whileHover={{ y: -3, borderColor: 'rgba(26,139,136,0.3)' }}
                  className="p-4.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">⚖️</span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-800 leading-snug">
                        Psicologia Forense
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Formação voltada à interface entre Psicologia e Direito, fortalecendo uma atuação pautada pela ética, responsabilidade técnica e rigor científico.
                    </p>
                  </div>
                </motion.div>

                {/* Card 3: Mindfulness */}
                <motion.div 
                  whileHover={{ y: -3, borderColor: 'rgba(192,101,50,0.3)' }}
                  className="p-4.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">🌿</span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-800 leading-snug">
                        Mindfulness e Inteligências Integrativas
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Formação voltada ao desenvolvimento da atenção plena, da consciência emocional e de recursos que favorecem o equilíbrio psicológico e o bem-estar.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* 4. MESTRADO (CARD CENTRALIZADO / UN POUCO MAIS LARGO PARA GANHAR DESTAQUE) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-7 bg-gradient-to-r from-brand-cyan/10 via-white to-brand-magenta/10 rounded-3xl border-2 border-brand-cyan/30 shadow-md relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-3">
                <span className="inline-flex items-center space-x-1.5 bg-brand-cyan text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Mestrado</span>
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">❤️</span>
                  <h4 className="font-sans text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
                    Psicologia Sexual e de Casais
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Aprofundamento científico sobre sexualidade humana, vínculos afetivos e relações conjugais, ampliando minha compreensão acerca dos relacionamentos, da intimidade e do desenvolvimento emocional.
              </p>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: IMAGEM 2 ON THE RIGHT SIDE */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-28">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative max-w-sm sm:max-w-md w-full mx-auto"
            >
              {/* Soft colorful backdrops blending with site palette */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-brand-magenta/20 via-brand-cyan/15 to-amber-200/20 opacity-80 blur-2xl pointer-events-none"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-magenta/15 border-2 border-brand-magenta/20 bg-white group">
                {/* High Definition Photo (Imagem 2) */}
                <img
                  src={imagem2}
                  alt="Nayara Helena de Araújo"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
