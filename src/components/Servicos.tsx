import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Users, Briefcase, ChevronRight, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
const jalecoImage = "https://i.postimg.cc/2yzXXpYc/Whats-App-Image-2026-07-09-at-13-03-22.jpg";

export default function Servicos() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "individual",
      title: "Atendimento Individual",
      icon: <User className="w-8 h-8 text-brand-magenta" />,
      description: "Atendimento voltado a demandas clínicas individuais. Foco no desenvolvimento pessoal, superação de traumas, fobias, luto, ansiedade e depressão.",
      longDescription: "O atendimento individual oferece um espaço exclusivo e seguro de autodescoberta. Utilizando técnicas fundamentadas na ciência psicológica (especialmente TCC e abordagens integrativas), trabalhamos juntos para desatar nós emocionais, reestruturar crenças limitantes e desenvolver estratégias práticas para lidar com crises de ansiedade, estresse severo, episódios depressivos e fases delicadas como o luto e transições de carreira.",
      details: ["Ansiedade & Pânico", "Depressão & Desânimo", "Elaboração de Luto", "Autoestima & Autoconfiança", "Fobias & Traumas", "Mudanças de Carreira"]
    },
    {
      id: "casal",
      title: "Terapia de Casal",
      icon: <Users className="w-8 h-8 text-brand-magenta" />,
      description: "A terapia de casal visa restabelecer o diálogo, mediar conflitos e promover a reconexão entre os parceiros de maneira saudável e respeitosa.",
      longDescription: "O relacionamento amoroso exige manutenção e compreensão mútua. Na terapia de casal, meu papel é atuar como uma mediadora neutra e ética, facilitando um diálogo limpo e produtivo. Buscamos identificar padrões de comunicação disfuncionais, curar mágoas acumuladas, restabelecer a intimidade e realinhar objetivos de vida conjuntos, proporcionando uma convivência feliz ou um fechamento pacífico e maduro.",
      details: ["Resolução de Conflitos", "Padrões de Comunicação", "Reconexão Afetiva", "Alinhamento de Metas", "Mediação em Crises", "Transições Familiares"]
    },
    {
      id: "supervisao",
      title: "Supervisão Profissional",
      icon: <Briefcase className="w-8 h-8 text-brand-magenta" />,
      description: "Supervisão clínica voltada a estudantes e profissionais de psicologia. Direcionamento ético, estudo de casos clínicos e suporte prático.",
      longDescription: "A supervisão clínica é o pilar que sustenta uma prática profissional segura e bem-sucedida. Voltada tanto para recém-formados quanto para psicólogos atuantes que buscam aprimoramento, a supervisão foca na discussão aprofundada de casos reais (sob estrito sigilo), desenvolvimento do raciocínio clínico, aplicação de técnicas de TCC, orientação ética perante o CRP, e desenvolvimento de posicionamento profissional sólido no mercado.",
      details: ["Formulação de Casos", "Análise de Intervenções", "Manejo de Crises Clínicas", "Direcionamento Ético", "Posicionamento Profissional", "Estudantes & Recém-formados"]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-magenta/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-magenta uppercase block mb-3">O que ofereço</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Serviços e Atendimentos Especializados
          </h2>
          <p className="font-sans text-base text-slate-500 mt-4 leading-relaxed">
            Suporte terapêutico qualificado nas modalidades clínica e acadêmica, estruturado de acordo com as necessidades específicas de cada paciente ou profissional.
          </p>
        </div>

        {/* Services Grid with Motion layout stability */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-pink-100/40 hover:border-brand-magenta/30 transition-shadow duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-magenta to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                {/* Icon wrapper */}
                <div className="w-16 h-16 rounded-2xl bg-pink-50 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="font-sans text-xl font-bold text-slate-800 mb-4 group-hover:text-brand-magenta transition-colors tracking-tight">
                  {service.title}
                </h3>
                
                <p className="font-sans text-sm text-slate-500 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <button
                  onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                  className="inline-flex items-center space-x-1.5 text-brand-magenta hover:text-brand-magenta-dark font-bold text-sm tracking-wide group/btn transition-colors focus:outline-none"
                >
                  <span>{selectedService === service.id ? 'Fechar Detalhes' : 'Saiba Mais'}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${selectedService === service.id ? 'rotate-90' : 'group-hover/btn:translate-x-0.5'}`} />
                </button>

                {/* Long Description Area (Dropdown transition using AnimatePresence) */}
                <AnimatePresence>
                  {selectedService === service.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-slate-100 text-left text-xs text-slate-600">
                        <p className="leading-relaxed mb-4">{service.longDescription}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.details.map((detail, dIdx) => (
                            <span key={dIdx} className="bg-slate-50 text-slate-700 text-[10px] font-bold px-2.5 py-1.5 rounded-xl border border-slate-150 shadow-xs inline-flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-brand-magenta" />
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Profile Card Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-8 border border-slate-150 shadow-xl shadow-pink-100/20 relative overflow-hidden flex flex-col sm:flex-row items-center gap-8"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-magenta/5 rounded-full blur-xl pointer-events-none"></div>

          {/* Avatar Profile */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={jalecoImage}
                alt="Psicóloga Nayara Helena de Araújo"
                className="w-full h-full object-cover object-center scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Online Indicator Dot */}
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>

          {/* Profile Text Info */}
          <div className="text-center sm:text-left flex-1">
            <h4 className="font-sans text-lg font-bold text-slate-800 tracking-tight">
              Psicóloga Nayara Helena de Araújo
            </h4>
            <p className="text-xs font-bold text-brand-magenta uppercase tracking-wider mt-1">
              CRP 16/10550
            </p>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Atendimento Clínico Online ético e regulamentado, garantindo o mais alto nível de sigilo e conforto diretamente da sua casa.
            </p>
          </div>

          {/* Action Trigger Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <a
              href="#contato"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-brand-magenta hover:bg-brand-magenta-dark text-white text-xs font-bold tracking-wider uppercase px-6 py-3.5 rounded-2xl shadow-lg shadow-brand-magenta/15 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>Fale Comigo</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
