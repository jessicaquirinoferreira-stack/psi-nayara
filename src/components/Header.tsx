import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onContactClick?: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check scroll position to apply style changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Atendimento Social', href: '#atendimento-social' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ];

  const dropdownLinks = [
    { label: 'Palestra Saúde Mental', href: '#palestra' },
    { label: 'Perguntas Frequentes', href: '#faq' },
    { label: 'Cursos Online', href: '#cursos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-350 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-xs py-4 border-b border-slate-100/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center space-x-3 group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative w-14 h-14 rounded-full bg-white border border-brand-magenta/20 p-1.5 overflow-hidden shadow-sm shrink-0 flex items-center justify-center"
          >
            <img 
              src="https://i.postimg.cc/htygLrLz/Chat-GPT-Image-9-de-jul-de-2026-13-15-20.png" 
              alt="Logo Psi Nayra Araújo" 
              className="w-full h-full object-contain filter drop-shadow-[0_1px_2px_rgba(219,39,119,0.1)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="flex items-baseline space-x-0.5">
            <span className="font-display text-2xl font-extrabold tracking-tight text-brand-magenta transition-colors group-hover:text-brand-magenta-dark">
              psi
            </span>
            <span className="font-sans text-xl font-bold tracking-tight text-slate-800 transition-colors group-hover:text-brand-magenta">
              NayaraAraujo
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-brand-magenta px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Dropdown Link */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseEnter={() => setIsDropdownOpen(true)}
              className="text-slate-600 hover:text-brand-magenta px-3 py-2 text-sm font-semibold tracking-wide flex items-center space-x-1 transition-colors duration-200 focus:outline-none"
            >
              <span>Mais</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Items with AnimatePresence */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-slate-100 shadow-2xl py-2 z-50 overflow-hidden"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {dropdownLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-magenta hover:text-white transition-colors duration-150 font-medium"
                    >
                      {link.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contato"
            className="inline-flex items-center space-x-2 bg-brand-magenta hover:bg-brand-magenta-dark text-white text-xs lg:text-sm font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full shadow-lg hover:shadow-brand-magenta/30 transition-all transform"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Fale Conosco</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-700 hover:text-brand-magenta p-1 transition-colors focus:outline-none"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-slate-700 hover:text-brand-magenta hover:bg-slate-50 px-3 py-3 rounded-xl text-base font-semibold transition-all"
                >
                  {link.label}
                </a>
              ))}

              {/* Separator */}
              <div className="border-t border-slate-100 my-2"></div>

              {dropdownLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-slate-600 hover:text-brand-magenta hover:bg-slate-50 px-3 py-3 rounded-xl text-base font-semibold transition-all"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 px-3">
                <motion.a
                  whileTap={{ scale: 0.98 }}
                  href="#contato"
                  onClick={handleLinkClick}
                  className="w-full text-center inline-flex justify-center items-center space-x-2 bg-brand-magenta hover:bg-brand-magenta-dark text-white font-semibold tracking-wider uppercase py-3 px-4 rounded-xl shadow-lg transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Fale Conosco</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
