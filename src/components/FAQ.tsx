import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqItems = [
    {
      id: 1,
      question: "Como sei se me encaixo no perfil?",
      answer: "O atendimento social é voltado para pessoas que não possuem condições financeiras de arcar com o valor integral de uma terapia particular. Realizamos uma breve triagem através do formulário de elegibilidade para compreender a renda familiar e o contexto socioeconômico de cada solicitante."
    },
    {
      id: 2,
      question: "O atendimento é gratuito?",
      answer: "Não, o atendimento social tem um valor social (simbólico/acessível) preestabelecido para garantir a sustentabilidade do projeto e o comprometimento do paciente com o processo terapêutico. Caso a pessoa se encontre em extrema vulnerabilidade sem qualquer renda, faremos o encaminhamento para serviços públicos parceiros (como CAPS ou clínicas-escola)."
    },
    {
      id: 3,
      question: "Quem realiza os atendimentos sociais?",
      answer: "Os atendimentos são conduzidos por profissionais qualificados e selecionados, sob minha supervisão direta e constante, ou diretamente por mim, dependendo da disponibilidade de vagas na agenda social."
    },
    {
      id: 4,
      question: "Os atendimentos são online ou presenciais?",
      answer: "Todos os atendimentos do projeto social são realizados de forma 100% online, por meio de videochamadas seguras (Google Meet ou similar), garantindo acessibilidade para pessoas de qualquer região do Brasil."
    }
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Decorative gradient elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-brand-magenta uppercase block mb-3">Dúvidas Comuns</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="font-sans text-base text-slate-500 mt-4 leading-relaxed">
            Encontre respostas rápidas para as principais dúvidas sobre as modalidades de atendimento e funcionamento das sessões.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                key={item.id}
                className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-brand-magenta/30 shadow-lg shadow-pink-100/10' : 'border-slate-150 shadow-xs hover:border-brand-magenta/25'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-brand-magenta/10"
                >
                  <span className="font-sans text-base font-bold text-slate-800 pr-4 tracking-tight">
                    {item.question}
                  </span>
                  
                  {/* Icon */}
                  <span className={`p-2 rounded-xl transition-colors shrink-0 ${isOpen ? 'bg-pink-50 text-brand-magenta' : 'bg-slate-50 text-slate-500'}`}>
                    {isOpen ? <Minus className="w-4 h-4 text-brand-magenta" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {/* Answer Content with AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-100 overflow-hidden"
                    >
                      <div className="px-6 py-5 text-sm sm:text-base text-slate-500 leading-relaxed bg-slate-50/50 font-normal">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Call-to-action block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center p-6 rounded-3xl bg-slate-50 border border-slate-150 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center space-x-3 text-left">
            <div className="p-3 bg-cyan-50 rounded-2xl text-cyan-700 shrink-0 border border-cyan-100">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800 tracking-tight">Ainda tem dúvidas?</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Clique para falar diretamente comigo e tirar qualquer outra dúvida.</p>
            </div>
          </div>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contato"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-brand-magenta hover:bg-brand-magenta-dark text-white text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-2xl transition-all shadow-md shadow-brand-magenta/10"
          >
            <span>Enviar Mensagem</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
