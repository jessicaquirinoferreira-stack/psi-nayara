import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Redefina from './components/Redefina';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import EssenciaPsicanalise from './components/EssenciaPsicanalise';
import AtendimentoSocial from './components/AtendimentoSocial';
import FAQ from './components/FAQ';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Cursos from './components/Cursos';
import Footer from './components/Footer';
import SplashIntro from './components/SplashIntro';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashIntro key="splash" onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-brand-magenta/25 selection:text-brand-magenta-dark font-sans antialiased">
        <AnimatePresence>
          {!showSplash && (
            <motion.div
              key="main-content"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Translucent fixed header */}
              <Header />

              {/* Main sections flow */}
              <main>
                {/* Hero Banner Section */}
                <Hero />

                {/* Highlight Callout: Redefina sua Jornada Pessoal */}
                <Redefina />

                {/* Detailed Professional Biography */}
                <Sobre />

                {/* Interactive Services Board & CRP license info */}
                <Servicos />

                {/* The Essence of Psychoanalysis (Farol Metaphor) */}
                <EssenciaPsicanalise />

                {/* Atendimento Social program and Eligibility form */}
                <AtendimentoSocial />

                {/* Frequently Asked Questions */}
                <FAQ />

                {/* Spontaneous Patient Testimonials */}
                <Depoimentos />

                {/* Contact form, details & map */}
                <Contato />

                {/* Online Courses & checkout simulator */}
                <Cursos />
              </main>

              {/* Structured Footer with legal details and scroll-to-top */}
              <Footer />

              {/* Floating Social Buttons & AI Assistant */}
              <FloatingActions />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
