import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Check, Flame, Shield } from 'lucide-react';
import courseImage from '../assets/images/curso_capa_1783611153696.jpg';

export default function Cursos() {
  const modules = [
    "Módulo 01: Primeiros Passos e Burocracias do CRP",
    "Módulo 02: Posicionamento Digital & Marketing Ético",
    "Módulo 03: Atração & Captação de Clientes Qualificados",
    "Módulo 04: Estrutura da Primeira Sessão e Contrato Terapêutico",
    "Módulo 05: Manejo Clínico de Demandas Comuns (Ansiedade, Luto, etc.)",
    "Módulo 06: Planejamento Financeiro, Impostos e Precificação"
  ];

  return (
    <section id="cursos" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-brand-magenta uppercase block mb-3">Capacitação Profissional</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Cursos Online
          </h2>
          <p className="font-sans text-base text-slate-500 mt-4 leading-relaxed font-normal">
            Potencialize sua carreira com mentorias e cursos práticos pensados para estruturar seu consultório clínico com segurança, ética e prosperidade.
          </p>
        </motion.div>

        {/* Course Detailed Board */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-12 shadow-xl shadow-brand-magenta/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: Course Information */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Tag indicator */}
              <div className="inline-flex items-center space-x-2 bg-brand-magenta-light/20 border border-brand-magenta-light/40 text-brand-magenta px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
                <Flame className="w-3.5 h-3.5 text-brand-magenta fill-current animate-pulse" />
                <span>Curso Mais Vendido para Psicólogos</span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight leading-tight">
                ABRINDO AS PORTAS DA CLÍNICA
              </h3>
              
              <p className="font-sans text-base text-slate-500 leading-relaxed font-normal">
                Para você que quer iniciar na clínica, este é o guia completo. O curso aborda desde a captação de clientes, marketing ético para psicólogos, estruturação das primeiras sessões, burocracias do CRP, finanças para psicólogos e como viver de clínica com segurança e ética.
              </p>

              {/* Cover Mockup & Text combo */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-4">
                {/* Generated Course Mockup Image */}
                <motion.div 
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  className="w-40 h-40 shrink-0 rounded-2xl overflow-hidden shadow-2xl shadow-brand-magenta/10 border border-slate-100 bg-white"
                >
                  <img
                    src={courseImage}
                    alt="Capa do Curso Abrindo as Portas da Clínica"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </motion.div>
                
                {/* Key Modules List */}
                <div className="flex-1 w-full text-left">
                  <h4 className="font-sans text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-brand-magenta" />
                    <span>Cronograma de Estudos Práticos:</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {modules.map((mod, index) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        key={index} 
                        className="flex items-start space-x-2 text-xs text-slate-500 font-medium"
                      >
                        <Check className="w-3.5 h-3.5 text-brand-magenta shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-600">{mod}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Right side: Conversion Card */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="lg:col-span-5 bg-slate-50 border border-slate-150 shadow-xl shadow-brand-magenta/5 rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all"
            >
              {/* Highlight ribbon */}
              <div className="absolute top-4 right-4 bg-brand-magenta text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                Inscrições Abertas
              </div>

              <h4 className="font-sans text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Acesso Imediato</h4>
              <h3 className="font-sans text-lg font-extrabold text-slate-800 tracking-tight mb-4">O curso inclui:</h3>
              
              {/* Feature bullets */}
              <ul className="space-y-3.5 mb-8">
                <li className="flex items-center space-x-2.5 text-sm text-slate-600 font-semibold">
                  <Check className="w-4.5 h-4.5 text-emerald-500 fill-current p-0.5 bg-emerald-50 rounded-full" />
                  <span>1 ano de acesso completo (gravado)</span>
                </li>
                <li className="flex items-center space-x-2.5 text-sm text-slate-600 font-semibold">
                  <Check className="w-4.5 h-4.5 text-emerald-500 fill-current p-0.5 bg-emerald-50 rounded-full" />
                  <span>12 módulos de conteúdo detalhado</span>
                </li>
                <li className="flex items-center space-x-2.5 text-sm text-slate-600 font-semibold">
                  <Check className="w-4.5 h-4.5 text-emerald-500 fill-current p-0.5 bg-emerald-50 rounded-full" />
                  <span>Material de apoio e guias em PDF</span>
                </li>
                <li className="flex items-center space-x-2.5 text-sm text-slate-600 font-semibold">
                  <Check className="w-4.5 h-4.5 text-emerald-500 fill-current p-0.5 bg-emerald-50 rounded-full" />
                  <span>Certificado de conclusão de 40 horas</span>
                </li>
              </ul>

              {/* Action checkout button */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/5527998625590?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20e%20fazer%20minha%20inscrição%20no%20curso%20Abrindo%20as%20Portas%20da%20Clínica."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-brand-magenta hover:bg-brand-magenta-dark text-white font-bold uppercase tracking-widest text-sm py-4 rounded-2xl shadow-lg shadow-brand-magenta/15 transition-all focus:outline-none text-center"
              >
                <span>Garantir Minha Vaga</span>
              </motion.a>

              {/* Guarantees footer */}
              <div className="mt-4 flex items-center justify-center space-x-1.5 text-[11px] text-slate-400 font-medium">
                <Shield className="w-3.5 h-3.5" />
                <span>Garantia incondicional de 7 dias</span>
              </div>

            </motion.div>

          </div>
        </motion.div>

        {/* Supervision & Tripé da Psicanálise Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-850 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden text-white"
        >
          {/* Decorative backdrop glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-magenta/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Side: Pitch and The 3 Pillars */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-brand-magenta/20 border border-brand-magenta/30 text-brand-magenta px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
                <span>Supervisão Clínica</span>
              </div>
              
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                Transforme Sua Prática Clínica com o <span className="text-brand-magenta">Tripé da Psicanálise 🧠</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-medium">
                <p>
                  Você já sentiu que, às vezes, as situações clínicas desafiam sua segurança como terapeuta? Ou que a complexidade dos casos poderia ser mais bem compreendida com alguém que já passou por isso?
                </p>
                <p>
                  Na psicanálise, o trabalho do terapeuta se apoia em três pilares fundamentais: <strong>teoria</strong>, <strong>análise</strong> e <strong>supervisão</strong>.
                </p>
              </div>

              {/* The Tripod List */}
              <div className="grid grid-cols-1 gap-4 pt-4 border-t border-slate-700/50">
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-start space-x-3 transition-transform"
                >
                  <span className="text-xl shrink-0 mt-0.5">1️⃣</span>
                  <div>
                    <h4 className="font-bold text-sm text-white">Teoria</h4>
                    <p className="text-xs text-slate-400 mt-1">Entender os mecanismos da mente e as dinâmicas emocionais é essencial para uma prática profunda e segura.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-start space-x-3 transition-transform"
                >
                  <span className="text-xl shrink-0 mt-0.5">2️⃣</span>
                  <div>
                    <h4 className="font-bold text-sm text-white">Análise Pessoal</h4>
                    <p className="text-xs text-slate-400 mt-1">Conhecer a si mesmo ajuda a evitar que questões próprias interfiram no atendimento clínico.</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-start space-x-3 transition-transform"
                >
                  <span className="text-xl shrink-0 mt-0.5">3️⃣</span>
                  <div>
                    <h4 className="font-bold text-sm text-white">Supervisão Clínica</h4>
                    <p className="text-xs text-slate-400 mt-1">Discutir casos e refletir sobre desafios garante o manejo ético e seguro das situações complexas.</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Side: Benefits & Action Call */}
            <div className="lg:col-span-5 bg-slate-800/40 border border-slate-700/50 p-6 sm:p-8 rounded-3xl space-y-6 text-left">
              <h4 className="font-sans text-xs font-bold text-brand-magenta uppercase tracking-wider">Por que participar?</h4>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-semibold">Aprender a conduzir atendimentos com mais confiança e segurança</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-semibold">Desenvolver habilidades de escuta e intervenção com profundidade</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-semibold">Refletir sobre casos difíceis sem sentir nenhum julgamento</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-semibold">Expandir sua percepção clínica de forma ética, madura e prática</span>
                </li>
              </ul>

              <p className="text-xs text-slate-400 leading-relaxed pt-2">
                Não espere se sentir sobrecarregado para buscar apoio. A cada sessão de supervisão, você percebe como o tripé da psicanálise transforma sua prática, aumenta sua segurança e melhora o impacto positivo no seu paciente.
              </p>

              <div className="pt-4 border-t border-slate-700/50">
                <p className="text-xs text-brand-magenta font-extrabold uppercase tracking-widest mb-3 animate-pulse">Vagas limitadas</p>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/5527998625590?text=Olá!%20Gostaria%20de%20agendar%20uma%20Supervisão%20Clínica."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-brand-magenta hover:bg-brand-magenta-dark text-white font-bold uppercase tracking-widest text-xs py-4 rounded-2xl shadow-lg transition-all text-center"
                >
                  <span>Agendar Supervisão Clínica</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
