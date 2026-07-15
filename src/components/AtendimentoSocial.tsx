import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, CheckCircle, Send, AlertCircle, Heart } from 'lucide-react';

export default function AtendimentoSocial() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    incomeBracket: '',
    employmentStatus: '',
    reason: '',
    declaration: false
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email || !formData.incomeBracket || !formData.reason) {
      setErrorMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    if (!formData.declaration) {
      setErrorMessage("Você precisa declarar que as informações fornecidas são verdadeiras.");
      return;
    }
    
    setErrorMessage("");
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      incomeBracket: '',
      employmentStatus: '',
      reason: '',
      declaration: false
    });
    setFormSubmitted(false);
  };

  return (
    <section id="atendimento-social" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      {/* Visual gradients */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brand-magenta/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-magenta-light/20 border border-brand-magenta-light/40 text-brand-magenta px-4 py-1.5 rounded-full mb-4 shadow-xs">
            <Heart className="w-4 h-4 fill-current text-brand-magenta animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider">Acolhimento Acessível</span>
          </div>
          
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Sessões de Psicanálise <span className="text-brand-magenta">com Valor Social</span>
          </h2>
          
          <div className="mt-6 text-slate-600 space-y-4 text-base sm:text-lg leading-relaxed font-medium">
            <p className="font-bold text-slate-800 text-lg">
              Cuidar da saúde mental é um direito e também um ato de coragem.
            </p>
            <p>
              Se você está buscando um espaço de escuta, acolhimento e transformação, estou oferecendo sessões de psicanálise on-line com valor social. 🧠 Vamos conversar?
            </p>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Se você preenche os requisitos para o atendimento social, por favor, utilize o formulário de triagem abaixo. Ele nos ajudará a compreender sua realidade socioeconômica e acolher sua demanda de forma ética, segura e em absoluto sigilo.
            </p>
          </div>
        </motion.div>

        {/* Application Form Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl shadow-brand-magenta/5"
        >
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form 
                key="social-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                
                {errorMessage && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start space-x-2 text-red-700 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta/30 focus:border-brand-magenta transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta/30 focus:border-brand-magenta transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Endereço de E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="exemplo@email.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta/30 focus:border-brand-magenta transition-all"
                    />
                  </div>

                  {/* Employment Status */}
                  <div>
                    <label htmlFor="employmentStatus" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Situação Profissional / Ocupação
                    </label>
                    <select
                      id="employmentStatus"
                      name="employmentStatus"
                      value={formData.employmentStatus}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta/30 focus:border-brand-magenta transition-all"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="employed">Empregado (CLT / PJ)</option>
                      <option value="unemployed">Desempregado(a)</option>
                      <option value="student">Estudante</option>
                      <option value="freelancer">Autônomo / Freelancer</option>
                      <option value="retired">Aposentado(a) / Pensionista</option>
                    </select>
                  </div>
                </div>

                {/* Income Bracket */}
                <div>
                  <label htmlFor="incomeBracket" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Faixa de Renda Familiar Mensal *
                  </label>
                  <select
                    id="incomeBracket"
                    name="incomeBracket"
                    required
                    value={formData.incomeBracket}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta/30 focus:border-brand-magenta transition-all"
                  >
                    <option value="">Selecione a faixa de renda</option>
                    <option value="under1">Até 1 Salário Mínimo</option>
                    <option value="1to2">De 1 a 2 Salários Mínimos</option>
                    <option value="2to3">De 2 a 3 Salários Mínimos</option>
                    <option value="above3">Acima de 3 Salários Mínimos</option>
                  </select>
                </div>

                {/* Reason for Social Clinic */}
                <div>
                  <label htmlFor="reason" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Por que você busca o atendimento social neste momento? *
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    required
                    rows={4}
                    value={formData.reason}
                    onChange={handleInputChange}
                    placeholder="Conte um pouco sobre sua demanda clínica e necessidade socioeconômica..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta/30 focus:border-brand-magenta transition-all resize-none"
                  ></textarea>
                </div>

                {/* Declaration Checkbox */}
                <div className="flex items-start space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <input
                    type="checkbox"
                    id="declaration"
                    name="declaration"
                    checked={formData.declaration}
                    onChange={handleCheckboxChange}
                    className="mt-1 h-4 w-4 rounded text-brand-magenta border-slate-300 focus:ring-brand-magenta/30"
                  />
                  <label htmlFor="declaration" className="text-xs text-slate-500 leading-relaxed cursor-pointer font-medium">
                    Declaro que as informações preenchidas acima são verdadeiras e estou ciente de que a elegibilidade para o projeto social é submetida a triagem e limite de vagas na agenda.
                  </label>
                </div>

                {/* Action Trigger */}
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-brand-magenta hover:bg-brand-magenta-dark text-white font-bold uppercase tracking-widest text-xs py-4 px-6 rounded-2xl shadow-lg shadow-brand-magenta/15 transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitação de Triagem</span>
                  </motion.button>
                </div>

              </motion.form>
            ) : (
              /* Submission Success Screen */
              <motion.div 
                key="social-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 px-4 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-inner animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>
                
                <h3 className="font-sans text-2xl font-bold text-slate-800 mb-3 tracking-tight">
                  Solicitação Recebida com Sucesso!
                </h3>
                
                <p className="font-sans text-sm text-slate-500 max-w-lg mx-auto leading-relaxed mb-8">
                  Agradecemos sua confiança, <strong className="text-slate-800 font-bold">{formData.fullName}</strong>. Suas respostas foram salvas em nosso sistema e estão protegidas por absoluto sigilo. Entraremos em contato via WhatsApp no número <strong className="text-slate-800 font-bold">{formData.phone}</strong> em até 48 horas úteis para repassar o resultado da triagem.
                </p>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center text-xs font-bold text-brand-magenta hover:text-brand-magenta-dark underline decoration-dotted underline-offset-4 focus:outline-none"
                >
                  Preencher outro formulário
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
