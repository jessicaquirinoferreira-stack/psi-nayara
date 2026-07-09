import React from 'react';
import { motion } from 'motion/react';
import { Eye, HelpCircle, ShieldAlert, Sparkles } from 'lucide-react';
const cupImage = "https://i.postimg.cc/MHWrrkwd/Whats-App-Image-2026-07-09-at-13-04-25.jpg";

export default function EssenciaPsicanalise() {
  return (
    <section className="py-24 bg-gradient-to-tr from-pink-50/50 via-white to-cyan-50/30 relative overflow-hidden border-b border-slate-100">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-magenta/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Mockup with quote */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group max-w-sm sm:max-w-md w-full mx-auto"
            >
              {/* Backing decorative frames */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-magenta/10 to-brand-cyan/10 opacity-60 blur-xl group-hover:opacity-80 transition-opacity duration-500"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-pink-100/30 border border-slate-200 bg-white aspect-[3/2]">
                <img
                  src={cupImage}
                  alt="Nayara Helena de Araújo - Essência da Psicanálise"
                  className="w-full h-full object-cover transform group-hover:scale-104 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                
                {/* Metaphor Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md rounded-2xl p-4 border border-slate-700 shadow-xl text-white">
                  <p className="text-xs italic leading-relaxed text-slate-200">
                    "A psicanálise não entrega receitas, ela te ajuda a construir novos sentidos. O analista não diz o que você deve fazer, ele ajuda a escutar o que faz sentido para você. É como um farol que não muda o rumo do seu barco, mas ilumina o que estava encoberto pela neblina."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: The full text narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left space-y-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center space-x-2 bg-pink-50 text-brand-magenta px-4 py-1.5 rounded-full shadow-xs w-fit">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Abordagem Clínica</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              A Psicanálise <span className="text-brand-magenta">e os Novos Sentidos</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-sans font-medium">
              <p>
                A psicanálise não oferece respostas prontas porque cada sujeito carrega perguntas únicas. Vivemos em uma época que valoriza fórmulas, atalhos e soluções rápidas. Mas aquilo que nos atravessa nem sempre pode ser resolvido com conselhos simples.
              </p>
              <p>
                Na análise, o trabalho não é encontrar alguém que diga qual caminho seguir. É criar um espaço seguro e propício onde você possa escutar aquilo que, muitas vezes, foi silenciado pelo medo, pela culpa, pelas expectativas dos outros ou pela própria urgência da vida.
              </p>
              <p className="font-bold text-slate-800">
                Como um farol que não conduz o barco, mas torna visível o horizonte, a análise não escolhe por você. Ela ajuda a iluminar aquilo que já existe, mas que ainda não pôde ser visto sob a névoa.
              </p>
              <p className="text-brand-magenta font-extrabold">
                Porque, às vezes, o que verdadeiramente transforma uma vida não é uma nova resposta técnica. É um novo sentido.
              </p>
            </div>

            {/* Quick value features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-150">
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center space-x-3 text-slate-700 cursor-default"
              >
                <div className="p-2 bg-pink-50 rounded-lg text-brand-magenta">
                  <Eye className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wide">Iluminar o Horizonte</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center space-x-3 text-slate-700 cursor-default"
              >
                <div className="p-2 bg-cyan-50 rounded-lg text-brand-cyan">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wide">Descobrir Novas Perguntas</span>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
