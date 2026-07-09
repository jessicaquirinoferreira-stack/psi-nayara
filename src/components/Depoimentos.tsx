import React from 'react';
import { motion } from 'motion/react';
import { Star, Heart } from 'lucide-react';

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

export default function Depoimentos() {
  const chats = [
    {
      id: 1,
      patientName: "Rodrigo (Paciente)",
      patientInitials: "R",
      patientText: "Oi Nayara, tudo bem? Queria te mandar uma mensagem rápida pra agradecer. Excelente profissional, extremamente humana, acolhedora e ética. O processo de terapia tem sido transformador na minha vida, abrindo meus olhos para novos caminhos e escolhas saudáveis. De verdade, muito obrigado! 🙏",
      patientTime: "11:42",
      therapistText: "Olá Rodrigo! Fico imensamente feliz e emocionada com o seu feedback. É um privilégio acompanhar o seu crescimento e ver você trilhando esses novos caminhos com tanta maturidade. Nos vemos na próxima sessão! 😊",
      therapistTime: "11:45",
      subTitle: "online"
    },
    {
      id: 2,
      patientName: "Lucas Mendes",
      patientInitials: "LM",
      patientText: "Boa noite, Dra. Nayara! Passando para dar um feedback. A terapia de casal tem nos ajudado demais. Você é incrível, muito atenta aos detalhes, paciente e nos passa uma segurança imensa. Conseguimos reatar nosso diálogo graças à sua mediação e condução ética das sessões. Só temos a agradecer!",
      patientTime: "20:15",
      therapistText: "Boa noite, Lucas! Que notícia maravilhosa. Fico muito feliz em ver como vocês se dedicaram ao processo e conseguiram reconstruir essa ponte de diálogo. Vocês têm um mérito enorme nisso. Grande abraço para o casal! 🤝✨",
      therapistTime: "20:18",
      subTitle: "online"
    },
    {
      id: 3,
      patientName: "Mariana Silveira",
      patientInitials: "M",
      patientText: "Oi Nayara! Tava refletindo aqui... A melhor decisão que tomei foi iniciar o processo de terapia com você. Mudou completamente minha relação comigo mesma, com minha ansiedade e me deu ferramentas incríveis de autoestima. Sinto que me recuperei. Obrigada por tudo! 🥰",
      patientTime: "16:30",
      therapistText: "Mariana! Que mensagem linda para receber no fim de tarde. O seu processo de autodescoberta é inspirador. Ver você domando a ansiedade e florescendo na sua autoestima é a maior recompensa do meu trabalho. Seguimos firmes! ❤️",
      therapistTime: "16:34",
      subTitle: "visto por último hoje"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-150">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-magenta/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-magenta uppercase block mb-3">Opinião dos Pacientes</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Depoimentos &amp; Transformações
          </h2>
          <p className="font-sans text-base text-slate-500 mt-4 leading-relaxed font-normal">
            Acompanhe relatos reais espontâneos recebidos via aplicativo de mensagens e a avaliação oficial de nossa excelência clínica.
          </p>
        </div>

        {/* Google Reviews Badge Certificate Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl shadow-slate-100/40 max-w-4xl mx-auto mb-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 transition-transform"
        >
          {/* Backdrop shine */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-brand-magenta/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10 text-center sm:text-left">
            {/* Stamp Gold Seal */}
            <div className="w-20 h-20 rounded-full bg-slate-50 border-4 border-amber-400 flex items-center justify-center shadow-lg shadow-amber-100/60 relative shrink-0">
              <div className="absolute inset-1 rounded-full border border-dashed border-amber-400 flex flex-col items-center justify-center animate-spin-slow">
                <Star className="w-7 h-7 fill-amber-400 text-amber-400" />
                <span className="text-[10px] font-extrabold tracking-widest text-amber-600 font-mono mt-0.5">4.9</span>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
                <GoogleLogo />
                <span className="font-sans font-bold text-slate-800 tracking-tight text-sm">Google Reviews</span>
              </div>
              <h3 className="font-sans font-extrabold text-slate-900 tracking-tight text-lg sm:text-xl leading-snug">
                Certificado de Excelência Profissional
              </h3>
              <p className="text-sm text-slate-500 mt-1 max-w-md font-medium leading-relaxed">
                Reconhecimento de qualidade com média de <strong className="text-slate-800 font-semibold">4.9 estrelas</strong> baseado nas avaliações espontâneas enviadas por nossos pacientes.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end justify-center shrink-0 relative z-10 text-center md:text-right border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 w-full md:w-auto">
            <div className="flex items-center gap-1 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i === 4 ? 'fill-current opacity-95 text-amber-500' : 'fill-current'}`} />
              ))}
            </div>
            <div className="font-mono text-3xl font-black text-slate-800 flex items-baseline gap-1.5">
              4.9 <span className="text-sm font-semibold text-slate-400 font-sans">/ 5.0</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 uppercase tracking-wider mt-1.5 block">
              ✓ Verificado pelo Google
            </span>
          </div>
        </motion.div>

        {/* WhatsApp Simulated Prints Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {chats.map((chat, idx) => (
            <motion.div
              key={chat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-xl shadow-slate-100/80 flex flex-col transition-shadow"
            >
              {/* WhatsApp Header */}
              <div className="bg-[#008069] text-white px-4 py-3 flex items-center justify-between shadow-xs select-none shrink-0">
                <div className="flex items-center space-x-2.5">
                  {/* Arrow back icon */}
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/90 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  {/* Avatar circle */}
                  <div className="w-9 h-9 rounded-full bg-teal-800 border border-teal-600 flex items-center justify-center font-bold text-white shadow-inner shrink-0">
                    {chat.patientInitials}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-sm leading-tight truncate max-w-[130px] sm:max-w-none">{chat.patientName}</h4>
                    <span className="text-[10px] text-teal-100/95 flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {chat.subTitle}
                    </span>
                  </div>
                </div>
                {/* Icons */}
                <div className="flex items-center space-x-3.5 text-white/95 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                  </svg>
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.62c0-.55-.45-1-1-1z"/>
                  </svg>
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </div>
              </div>

              {/* WhatsApp Body Background */}
              <div className="flex-1 bg-[#efeae2] bg-[radial-gradient(#e5ddd5_1.5px,transparent_1.5px)] [background-size:16px_16px] p-4 flex flex-col justify-end space-y-4 overflow-y-auto min-h-[360px] max-h-[380px]">
                
                {/* Date separator */}
                <div className="flex justify-center my-1.5 shrink-0">
                  <span className="text-[10px] font-extrabold text-slate-500 bg-white/95 px-3 py-1 rounded-md shadow-[0_1px_1px_rgba(11,20,26,0.06)] uppercase tracking-widest">
                    Hoje
                  </span>
                </div>

                {/* Patient Message (Left Bubble - White) */}
                <motion.div 
                  initial={{ opacity: 0, x: -15, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex justify-start max-w-[90%] self-start relative"
                >
                  {/* Message Bubble */}
                  <div className="bg-white text-[#111b21] px-3.5 py-2.5 rounded-2xl rounded-tl-none shadow-[0_1px_1.5px_rgba(11,20,26,0.12)] relative z-10 border border-white/40">
                    {/* Tiny WhatsApp tail element on top left */}
                    <div className="absolute top-0 -left-1.5 w-3 h-3 bg-white rounded-tr-xs rotate-45 transform origin-top-right border-l border-t border-slate-50/20"></div>
                    
                    <p className="text-xs sm:text-[13px] leading-relaxed font-sans font-normal text-slate-800">
                      {chat.patientText}
                    </p>
                    <div className="text-right mt-1 shrink-0">
                      <span className="text-[9px] text-[#667781] font-mono font-medium">
                        {chat.patientTime}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Therapist Message (Right Bubble - Light Green) */}
                <motion.div 
                  initial={{ opacity: 0, x: 15, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex justify-end max-w-[90%] self-end relative mt-2"
                >
                  <div className="bg-[#d9fdd3] text-[#111b21] px-3.5 py-2.5 rounded-2xl rounded-tr-none shadow-[0_1px_1.5px_rgba(11,20,26,0.12)] relative z-10 border border-emerald-50/20">
                    {/* Tiny WhatsApp tail element on top right */}
                    <div className="absolute top-0 -right-1.5 w-3 h-3 bg-[#d9fdd3] rounded-tl-xs rotate-45 transform origin-top-left border-r border-t border-emerald-50/20"></div>
                    
                    <p className="text-xs sm:text-[13px] leading-relaxed font-sans font-normal text-slate-800">
                      {chat.therapistText}
                    </p>
                    <div className="flex items-center justify-end space-x-1 mt-1 shrink-0">
                      <span className="text-[9px] text-[#667781] font-mono font-medium">
                        {chat.therapistTime}
                      </span>
                      {/* Double Blue tick */}
                      <svg viewBox="0 0 16 11" className="w-3.5 h-3 text-[#53bdeb]" fill="currentColor">
                        <path d="M15.01 1.8L5.706 11L1 6.333l1.171-1.161l3.535 3.504l8.134-8.037l1.17 1.161z"/>
                        <path d="M9.172 1.8L8 2.962L11.535 6.46l1.171-1.161L9.172 1.8z" opacity="0.6"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* WhatsApp Footer Message Input Simulation */}
              <div className="bg-[#f0f2f5] px-3 py-2 flex items-center space-x-2 border-t border-slate-200/40 shadow-inner shrink-0 select-none">
                {/* Smiley Face Icon */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-500 shrink-0 cursor-pointer hover:text-slate-700" fill="currentColor">
                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 4c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
                {/* Plus Icon */}
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-slate-500 shrink-0 cursor-pointer hover:text-slate-700" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                {/* Input Placeholder */}
                <div className="flex-1 bg-white rounded-full px-4 py-1.5 text-xs text-slate-400 font-sans border border-slate-200/50 select-none">
                  Mensagem
                </div>
                {/* Microphone Mic button */}
                <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center text-white shrink-0 shadow-sm cursor-pointer hover:bg-[#008f70] transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                  </svg>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Footer Disclaimer */}
        <div className="text-center mt-12 flex justify-center items-center gap-2 text-xs text-slate-400 font-medium">
          <Heart className="w-3.5 h-3.5 text-brand-magenta fill-brand-magenta" />
          <span>Relatos autorizados e protegidos pelo sigilo profissional sob consentimento ético.</span>
        </div>

      </div>
    </section>
  );
}
