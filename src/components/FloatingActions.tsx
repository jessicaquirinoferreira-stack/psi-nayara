import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Instagram, Bot, X, Send, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  actions?: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    isExternal?: boolean;
  }>;
}

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Olá! Sou a Assistente Virtual da Psi Nayra Araújo. Estou aqui para acolher você e te direcionar para o canal de atendimento ideal. Como posso te ajudar hoje?',
      actions: [
        {
          label: 'Agendar Consulta / Sessão',
          href: 'https://wa.me/5527998625590?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20sessões%20de%20psicoterapia%20e%20agendar%20um%20horário.',
          isExternal: true
        },
        {
          label: 'Curso: Abrindo as Portas',
          href: 'https://wa.me/5527998625590?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20e%20fazer%20minha%20inscrição%20no%20curso%20Abrindo%20as%20Portas%20da%20Clínica.',
          isExternal: true
        },
        {
          label: 'Atendimento Social',
          onClick: () => handleScrollToSection('atendimento-social')
        },
        {
          label: 'Acompanhar no Instagram',
          href: 'https://www.instagram.com/psi.nayaraujo/',
          isExternal: true
        }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleScrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const userMsgId = Date.now().toString();
    
    // Add user message
    setMessages((prev) => [...prev, { id: userMsgId, sender: 'user', text: userText }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and replying
    setTimeout(() => {
      setIsTyping(false);
      const reply = getAIResponse(userText);
      setMessages((prev) => [...prev, reply]);
    }, 1200);
  };

  const getAIResponse = (text: string): Message => {
    const lowercase = text.toLowerCase();
    const replyId = Date.now().toString();

    // Consultation / Schedule
    if (
      lowercase.includes('consulta') || 
      lowercase.includes('agendar') || 
      lowercase.includes('sessao') || 
      lowercase.includes('sessão') || 
      lowercase.includes('marcar') || 
      lowercase.includes('horario') || 
      lowercase.includes('horário') || 
      lowercase.includes('terapia') || 
      lowercase.includes('atendimento') ||
      lowercase.includes('valor') ||
      lowercase.includes('preço') ||
      lowercase.includes('preco')
    ) {
      return {
        id: replyId,
        sender: 'bot',
        text: 'Para verificar valores, horários e agendar sua sessão de psicoterapia online diretamente com a Psi Nayra Araújo, clique no link abaixo para iniciar uma conversa exclusiva no WhatsApp!',
        actions: [
          {
            label: 'Chamar no WhatsApp',
            href: 'https://wa.me/5527998625590?text=Olá!%20Gostaria%20de%20saber%20valores%20e%20agendar%20uma%20sessão%20de%20terapia.',
            isExternal: true
          }
        ]
      };
    }

    // Course / Supervision
    if (
      lowercase.includes('curso') || 
      lowercase.includes('formacao') || 
      lowercase.includes('formação') || 
      lowercase.includes('aula') || 
      lowercase.includes('clinica') || 
      lowercase.includes('clínica') ||
      lowercase.includes('supervisao') ||
      lowercase.includes('supervisão')
    ) {
      return {
        id: replyId,
        sender: 'bot',
        text: 'O curso "Abrindo as Portas da Clínica" e os encontros de Supervisão Clínica são ideais para o desenvolvimento profissional de psicólogos de forma ética e segura. Fale diretamente no WhatsApp para tirar dúvidas ou fazer sua inscrição!',
        actions: [
          {
            label: 'Informações no WhatsApp',
            href: 'https://wa.me/5527998625590?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20curso%20ou%20supervisão.',
            isExternal: true
          }
        ]
      };
    }

    // Social Project
    if (
      lowercase.includes('social') || 
      lowercase.includes('atendimento social') || 
      lowercase.includes('triagem') || 
      lowercase.includes('carente') || 
      lowercase.includes('bolsa') || 
      lowercase.includes('desconto')
    ) {
      return {
        id: replyId,
        sender: 'bot',
        text: 'Oferecemos um programa de Atendimento Social estruturado para tornar a psicoterapia acessível. Você pode conferir os pré-requisitos e preencher o formulário de triagem diretamente na nossa seção no site!',
        actions: [
          {
            label: 'Ver Atendimento Social',
            onClick: () => handleScrollToSection('atendimento-social')
          }
        ]
      };
    }

    // Instagram
    if (
      lowercase.includes('instagram') || 
      lowercase.includes('insta') || 
      lowercase.includes('rede') || 
      lowercase.includes('social') || 
      lowercase.includes('publicacao') || 
      lowercase.includes('post')
    ) {
      return {
        id: replyId,
        sender: 'bot',
        text: 'Acompanhe reflexões diárias, textos técnicos e o dia a dia da psicologia seguindo @psi.nayaraujo no Instagram!',
        actions: [
          {
            label: 'Seguir @psi.nayaraujo',
            href: 'https://www.instagram.com/psi.nayaraujo/',
            isExternal: true
          }
        ]
      };
    }

    // Default Fallback
    return {
      id: replyId,
      sender: 'bot',
      text: 'Compreendi perfeitamente sua mensagem! Para que você receba um acolhimento sob medida, sugiro que converse diretamente com a Psi Nayra Araújo no WhatsApp ou acompanhe os conteúdos no Instagram.',
      actions: [
        {
          label: 'Falar no WhatsApp',
          href: 'https://wa.me/5527998625590?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20atendimento.',
          isExternal: true
        },
        {
          label: 'Acessar Instagram',
          href: 'https://www.instagram.com/psi.nayaraujo/',
          isExternal: true
        }
      ]
    };
  };

  return (
    <>
      {/* LEFT SIDE: AI ASSISTANT WIDGET */}
      <div className="fixed bottom-6 left-6 z-50 font-sans">
        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex items-center justify-center p-3 rounded-full shadow-2xl transition-all cursor-pointer border border-white/15 ${
            isOpen ? 'bg-slate-900 text-white p-4' : 'bg-white text-brand-magenta hover:bg-slate-50 border-brand-magenta/20'
          }`}
          aria-label="Assistente Virtual"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative w-8 h-8 flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/htygLrLz/Chat-GPT-Image-9-de-jul-de-2026-13-15-20.png" 
                alt="Logo" 
                className="w-full h-full object-contain p-0.5 bg-white rounded-full"
                referrerPolicy="no-referrer"
              />
              {/* Pulsing indicator badge */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-magenta opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-magenta"></span>
              </span>
            </div>
          )}
        </motion.button>

        {/* Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="absolute bottom-20 left-0 w-[calc(100vw-3rem)] sm:w-96 bg-white rounded-3xl border border-slate-150 shadow-2xl overflow-hidden flex flex-col z-50 h-[480px]"
            >
              {/* Chat Header */}
              <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center space-x-3 text-left">
                  <div className="p-2.5 bg-brand-magenta/20 text-brand-magenta rounded-xl border border-brand-magenta/30">
                    <Sparkles className="w-5 h-5 text-brand-magenta" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-tight">Acolhimento Virtual</h3>
                    <p className="text-[10px] text-emerald-400 font-semibold flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5 inline-block animate-pulse"></span>
                      Inteligência de Direcionamento
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col space-y-1.5 max-w-[85%] ${
                      msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                    }`}
                  >
                    <div
                      className={`p-3.5 rounded-2xl text-xs leading-relaxed font-medium ${
                        msg.sender === 'user'
                          ? 'bg-brand-magenta text-white rounded-tr-none'
                          : 'bg-white text-slate-700 border border-slate-150 rounded-tl-none shadow-xs'
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* Action buttons embedded in message */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="flex flex-col gap-1.5 w-full mt-1.5">
                        {msg.actions.map((act, i) => (
                          act.href ? (
                            <a
                              key={i}
                              href={act.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-between px-3.5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 text-[11px] font-bold border border-slate-150 rounded-xl transition-all shadow-xs group"
                            >
                              <span>{act.label}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-brand-magenta transition-colors" />
                            </a>
                          ) : (
                            <button
                              key={i}
                              onClick={act.onClick}
                              className="w-full inline-flex items-center justify-between px-3.5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 text-[11px] font-bold border border-slate-150 rounded-xl transition-all shadow-xs group cursor-pointer"
                            >
                              <span>{act.label}</span>
                              <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-brand-magenta transition-colors" />
                            </button>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex space-x-1.5 items-center p-3 bg-white border border-slate-150 rounded-2xl rounded-tl-none max-w-[50px] justify-center">
                    <span className="block h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="block h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="block h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSend} className="p-3 border-t border-slate-100 bg-white flex gap-2">
                <input
                  type="text"
                  placeholder="Digite sua dúvida..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-brand-magenta focus:border-brand-magenta"
                />
                <button
                  type="submit"
                  className="bg-brand-magenta text-white p-2 rounded-xl hover:bg-brand-magenta-dark active:scale-95 transition-all shadow-md shadow-brand-magenta/10 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* RIGHT SIDE: OFFICIAL WHATSAPP & INSTAGRAM FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 font-sans">
        
        {/* Instagram Button */}
        <motion.a
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.92 }}
          href="https://www.instagram.com/psi.nayaraujo/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3.5 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full shadow-2xl border border-white/10 hover:shadow-brand-magenta/30"
          title="Instagram"
        >
          <Instagram className="w-5 h-5 stroke-[2.5]" />
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.92 }}
          href="https://wa.me/5527998625590?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20com%20a%20Psicóloga."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3.5 bg-[#25D366] text-white rounded-full shadow-2xl border border-white/10 hover:shadow-emerald-400/20"
          title="WhatsApp Oficial"
        >
          <MessageCircle className="w-5 h-5 stroke-[2.5] fill-white text-[#25D366]" />
        </motion.a>

      </div>
    </>
  );
}
