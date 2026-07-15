import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-84 h-84 bg-brand-magenta/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-84 h-84 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-brand-magenta uppercase block mb-3">Fale comigo</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Iniciar Atendimento
          </h2>
          <p className="font-sans text-base text-slate-500 mt-4 leading-relaxed font-normal">
            Envie uma mensagem para esclarecer dúvidas sobre os planos, marcar sessões ou obter mais informações sobre o projeto social.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-150 shadow-xl shadow-brand-magenta/5 flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <h3 className="font-sans text-2xl font-bold text-slate-800 tracking-tight mb-6">Envie uma Mensagem</h3>

                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-100 text-red-700 rounded-2xl flex items-center space-x-2 text-sm"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome"
                        className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta/30 focus:border-brand-magenta transition-all"
                      />
                    </div>

                    {/* Phone Input */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(27) 99999-9999"
                        className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta/30 focus:border-brand-magenta transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Endereço de E-mail *
                      </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="voce@exemplo.com"
                      className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta/30 focus:border-brand-magenta transition-all"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Como posso te ajudar? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Escreva sua mensagem aqui..."
                      className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta/30 focus:border-brand-magenta transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-brand-magenta hover:bg-brand-magenta-dark text-white font-bold uppercase tracking-widest text-sm py-4 px-6 rounded-2xl shadow-lg shadow-brand-magenta/15 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    <span>Fale Conosco</span>
                  </motion.button>
                </motion.form>
              ) : (
                /* Success message block */
                <motion.div 
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 px-4 flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-inner animate-bounce">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  
                  <h3 className="font-sans text-2xl font-bold text-slate-800 mb-3 tracking-tight">Mensagem Enviada!</h3>
                  
                  <p className="font-sans text-sm text-slate-500 max-w-lg mx-auto leading-relaxed mb-8">
                    Olá <strong className="text-slate-800 font-bold">{formData.name}</strong>, agradecemos seu contato! Suas dúvidas foram recebidas e entraremos em contato o mais rápido possível através do e-mail <span className="text-brand-magenta font-semibold">{formData.email}</span> ou pelo telefone <span className="text-slate-800 font-semibold">{formData.phone}</span>.
                  </p>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center text-xs font-bold text-brand-magenta hover:text-brand-magenta-dark underline decoration-dotted underline-offset-4 focus:outline-none"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Contact Details + Leaflet Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Quick Details Cards in dark slate-800 / navy design style */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800 text-white rounded-3xl p-8 border border-slate-700 shadow-2xl flex-1 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-sans text-xl font-bold mb-6 text-brand-magenta tracking-tight">Canais de Atendimento</h3>
                
                <div className="space-y-5">
                  {/* Phone */}
                  <a
                    href="https://wa.me/5527998625590"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-white/5 transition-colors group border border-transparent hover:border-white/5"
                  >
                    <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">WhatsApp</h4>
                      <p className="text-sm font-bold text-slate-100 mt-0.5 group-hover:text-emerald-400 transition-colors">
                        +55 (27) 99862-5590
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:psinayaraaraujo@outlook.com"
                    className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-white/5 transition-colors group border border-transparent hover:border-white/5"
                  >
                    <div className="p-3 bg-brand-magenta/10 text-brand-magenta rounded-xl group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">E-mail</h4>
                      <p className="text-sm font-bold text-slate-100 mt-0.5 group-hover:text-brand-magenta-light transition-colors">
                        psinayaraaraujo@outlook.com
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center space-x-4 p-3 rounded-2xl">
                    <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Endereço</h4>
                      <p className="text-sm font-bold text-slate-100 mt-0.5">
                        Vila Velha, ES, Brasil
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-center space-x-4 p-3 rounded-2xl">
                    <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Horário Clínico</h4>
                      <p className="text-sm font-bold text-slate-100 mt-0.5">
                        Seg - Sex: 08:00 às 21:00
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-8 pt-6 border-t border-slate-700 text-[10px] text-gray-400 flex items-center justify-between">
                <span>Atendimento 100% Protegido</span>
                <span className="text-brand-magenta font-bold">Resolução CFP nº 11/2018</span>
              </div>
            </motion.div>

            {/* OSM Map with elegant rounded corners */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white h-60 relative group"
            >
              <iframe
                title="Localização Clínicas Vila Velha"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://www.openstreetmap.org/export/embed.html?bbox=-40.35461425781251%2C-20.370001712497645%2C-40.24543762207031%2C-20.297427926189578&amp;layer=mapnik&amp;marker=-20.3337145%2C-40.3000259"
                referrerPolicy="no-referrer"
              ></iframe>
              {/* Overlay floating badge */}
              <a 
                href="https://www.openstreetmap.org/?mlat=-20.3337&amp;mlon=-40.3000#map=14/-20.3337/-40.3000"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-slate-900/90 hover:bg-slate-900 text-white text-[10px] font-bold py-1.5 px-3 rounded-xl shadow-md border border-slate-800 flex items-center space-x-1.5 transition-all"
              >
                <span>Ver Mapa Ampliado</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
