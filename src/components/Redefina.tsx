import React from 'react';
import { motion } from 'motion/react';
import { Compass, Users2, Shield, Heart } from 'lucide-react';
const escrevendoImage = "https://i.postimg.cc/2yzXXpYc/Whats-App-Image-2026-07-09-at-13-03-22.jpg";

export default function Redefina() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Soft background decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-magenta/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-brand-magenta uppercase block mb-3">Conexão &amp; Autonomia</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Como escolher a terapia certa e o <span className="text-brand-magenta">papel do profissional</span>
          </h2>
          <p className="font-sans text-base text-slate-500 mt-4 leading-relaxed font-normal">
            Reflexões essenciais para encontrar a parceria ideal em sua caminhada de autoconhecimento e equilíbrio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Image & Companheiro de Viagem Quote */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group max-w-sm sm:max-w-md w-full mx-auto"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-magenta/5 to-brand-cyan/5 opacity-60 blur-xl group-hover:opacity-80 transition-opacity duration-500"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-magenta/10 border border-slate-150 bg-white aspect-[645/800]">
                <img
                  src={escrevendoImage}
                  alt="Nayara Helena de Araújo"
                  className="w-full h-full object-cover transform hover:scale-101 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Image Quote Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 border border-slate-700 shadow-lg text-white">
                  <p className="text-xs italic leading-relaxed text-slate-200">
                    "O psicólogo não resolve os problemas por você, ele conduz você pelo processo de resolução de problemas. Ele é seu companheiro de viagem, não o piloto do avião."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sub-badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.01 }}
              className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start space-x-3 max-w-sm sm:max-w-md mx-auto shadow-sm transition-all"
            >
              <Shield className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5 animate-pulse" />
              <div>
                <h4 className="font-extrabold text-xs text-slate-800 uppercase tracking-wide">Espaço Seguro</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed font-semibold">
                  Acolhimento de identidade, autoimagem e pressões cotidianas de maneira ética e livre de julgamentos.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Block: Expanded Explanations */}
          <div className="lg:col-span-7 space-y-10 text-left">
            
            {/* Aspect 1: Encontrar o Psicólogo Certo & Empatia */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center space-x-2 bg-brand-magenta-light/20 text-brand-magenta px-4 py-1.5 rounded-full shadow-xs">
                <Users2 className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">A Importância da Compatibilidade</span>
              </div>
              
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                Encontrando a abordagem que faz sentido para você
              </h3>
              
              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-medium">
                <p>
                  Embora existam várias abordagens terapêuticas, encontrar aquela que se alinhe com você pode otimizar os resultados esperados. É crucial compreender que não existe uma abordagem "correta" ou "incorreta", uma vez que cada indivíduo responde de maneira singular ao processo terapêutico.
                </p>
                <p>
                  Nesse contexto, é fundamental considerar não apenas a abordagem terapêutica, mas também a empatia, experiência e compatibilidade pessoal ao selecionar um psicólogo. Questione-se: <em>este profissional demonstra um genuíno interesse em meu bem-estar? Sinto-me à vontade para compartilhar meus pensamentos e sentimentos com ele?</em>
                </p>
                <p className="font-bold text-slate-800">
                  A empatia mútua entre paciente e terapeuta é essencial para estabelecer uma relação sólida e eficaz. Portanto, é prioritário encontrar um psicólogo com quem você se sinta confortável e seguro para explorar seus pensamentos e emoções.
                </p>
              </div>
            </motion.div>

            {/* Aspect 2: O Copiloto Atento */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4 pt-6 border-t border-slate-100"
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-700 px-4 py-1.5 rounded-full shadow-xs">
                <Compass className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Facilitador do Processo</span>
              </div>

              <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                O papel do psicólogo na sua jornada
              </h3>

              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-medium">
                <p>
                  É fundamental compreender que a jornada de autoconhecimento e resolução de problemas é profundamente individual e singular. O psicólogo, neste contexto, atua como um facilitador que oferece ferramentas e insights, permitindo que o sujeito explore e compreenda suas próprias dinâmicas internas.
                </p>
                <p>
                  O papel do psicólogo é proporcionar um espaço seguro e acolhedor em questões de identidade, autoimagem e pressões externas que podem ser abordadas de maneira reflexiva.
                </p>
                <p>
                  Ele incentiva o desenvolvimento de uma consciência crítica sobre as influências externas e internas, promovendo uma autonomia emocional que possibilita navegar pelas complexidades de sua vida profissional e pessoal com mais equilíbrio e resiliência. 
                </p>
                <p className="font-bold text-brand-magenta">
                  O psicólogo, assim, é um copiloto atento e empático, que auxilia na elaboração das turbulências emocionais, permitindo que o sujeito assuma o controle consciente de sua trajetória, com confiança e clareza.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
