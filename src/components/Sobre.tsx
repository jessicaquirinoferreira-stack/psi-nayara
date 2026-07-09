import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, GraduationCap, HeartHandshake } from 'lucide-react';
const jalecoImage = "https://i.postimg.cc/RhMbbrmp/Whats-App-Image-2026-07-09-at-13-03-22-(1).jpg";

export default function Sobre() {
  const credentials = [
    {
      icon: <GraduationCap className="w-5 h-5 text-brand-magenta" />,
      title: "Dupla Formação",
      text: "Formada em Gestão de Recursos Humanos há mais de uma década e Psicologia, unindo a visão de desenvolvimento humano à sensibilidade clínica."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-brand-magenta" />,
      title: "Pós-graduada em Psicanálise",
      text: "Formada com pós-graduação em Psicanálise, aliando aprofundamento ético, escuta atenta e dedicação constante ao paciente."
    },
    {
      icon: <Award className="w-5 h-5 text-brand-magenta" />,
      title: "Transformando Vidas",
      text: "Ajudo a lidar com as suas angústias e medos através do autoconhecimento profundo e da escuta qualificada."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-brand-magenta" />,
      title: "Sem Barreiras Geográficas",
      text: "Ofereço atendimento online de alta qualidade para todo o Brasil e para brasileiros residentes no exterior."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="sobre" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Biography */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left order-2 lg:order-1"
          >
            <span className="text-xs font-bold tracking-widest text-brand-magenta uppercase block mb-3">Conheça-me</span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight mb-6">
              Sobre mim e minha <span className="text-brand-magenta">abordagem terapêutica</span>
            </h2>

            {/* Rich Narrative Block */}
            <div className="space-y-4 text-slate-600 leading-relaxed font-sans text-base sm:text-lg">
              <p>
                Sou <strong>Nayara Helena de Araújo</strong>, formada em Gestão de Recursos Humanos há mais de uma década. Em 2018, iniciei o planejamento para minha segunda graduação, que por muito tempo foi apenas um "sonho na gaveta". Em 2019, senti-me extremamente corajosa ao realizar a matrícula no curso de psicologia, apesar do desafio inicial de compreender seu sentido.
              </p>
              <p>
                Ao longo do último ano da formação, estagiei na clínica escola da faculdade, onde, devido as circunstâncias, me vi atendendo sob a abordagem da psicanálise. Essa experiência me levou a me reinventar, administrando meu tempo para conciliar trabalho, estágio e faculdade, enquanto também realizava a minha pós-graduação em Psicanálise.
              </p>
              <p>
                Compreendi que oferecer qualidade nos atendimentos vai além de ser apenas uma escuta acolhedora; a clínica exige mais. Hoje, pós-graduada em psicanálise e com outras especializações, continuo a me aprimorar para fornecer um trabalho sério, humanizado e de qualidade, ressignificando cada experiência.
              </p>
              
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="border-l-4 border-brand-magenta pl-5 py-4 text-slate-700 italic font-medium bg-white rounded-r-2xl shadow-sm border border-slate-100 my-6 transition-all"
              >
                <p className="text-lg leading-relaxed text-slate-800">
                  "Volte seus olhos para dentro, contemple suas próprias profundezas, aprenda primeiro a conhecer-se."
                </p>
                <span className="text-xs font-bold text-slate-500 mt-2 block not-italic uppercase tracking-widest">— Sigmund Freud</span>
              </motion.div>
            </div>

            {/* Grid of Credentials */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10"
            >
              {credentials.map((cred, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: 'rgba(219,39,119,0.25)', boxShadow: '0 10px 25px -5px rgba(219,39,119,0.05)' }}
                  className="flex space-x-3 items-start p-5 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all duration-300"
                >
                  <div className="p-2.5 bg-pink-50 rounded-xl shrink-0 text-brand-magenta">
                    {cred.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 mb-1 tracking-tight">{cred.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">{cred.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Writing/Consulting Photo */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative max-w-sm sm:max-w-md w-full"
            >
              {/* Backing square decor */}
              <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 bg-brand-cyan/5 rounded-[2rem] -z-10 blur-xl"></div>
              <div className="absolute -top-4 -right-4 w-2/3 h-2/3 bg-brand-magenta/5 rounded-[2rem] -z-10 blur-xl"></div>
              
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-pink-100/30 border border-slate-200 bg-white aspect-[389/800] max-h-[520px] mx-auto group">
                <img
                  src={jalecoImage}
                  alt="Psicóloga Nayara Helena de Araújo"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
