import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX, Sparkles, Video, Users, Brain, Play, Pause, Calendar, ArrowRight } from 'lucide-react';

export default function Palestra() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Use Intersection Observer to play when visible and pause when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Attempt autoplay (must be muted)
            video.play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                console.log("Autoplay blocked by browser policy. User interaction required:", error);
                setIsPlaying(false);
              });
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.25, // Starts playing when at least 25% is visible
      }
    );

    observer.observe(video);

    // Event listeners to stay sync with direct video interactions
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      observer.unobserve(video);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
      setHasInteracted(true);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log(err));
      }
      setHasInteracted(true);
    }
  };

  return (
    <section id="palestra" className="py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-brand-magenta-dark/20 text-white relative overflow-hidden border-b border-slate-800">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-magenta/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Grid Pattern Background overlay for extra texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Description & Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-brand-magenta/20 text-brand-magenta border border-brand-magenta/30 px-4 py-1.5 rounded-full shadow-md w-fit">
              <Sparkles className="w-4 h-4 animate-pulse text-brand-magenta" />
              <span className="text-xs font-bold uppercase tracking-wider">Palestra Especial</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Palestra de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-magenta to-brand-magenta-light">Saúde Mental</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              A saúde emocional nas organizações e instituições tornou-se pilar central para o bem-estar e desenvolvimento humano. Através de palestras interativas, dinâmicas e baseadas em conceitos sólidos da psicologia e psicanálise, levo uma conversa transformadora sobre o cuidado consigo mesmo e o acolhimento do outro.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-brand-magenta/10 rounded-xl border border-brand-magenta/20 text-brand-magenta mt-1 shrink-0">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Prevenção e Consciência</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Reflexões práticas sobre Burnout, estresse crônico, empatia corporativa e auto-observação do cansaço psíquico.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-brand-magenta/20 rounded-xl border border-brand-magenta/30 text-brand-magenta mt-1 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Empresas e Universidades</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Formatos customizados para impulsionar ambientes de trabalho colaborativos, humanizados e acolhedores.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400 mt-1 shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Formato Presencial ou Online</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Adaptado para a realidade técnica e geográfica da sua equipe, mantendo a proximidade e o diálogo.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="https://wa.me/5527998625590?text=Ol%C3%A1%20Nayara%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20suas%20Palestras%20de%20Sa%C3%BAde%20Mental"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-brand-magenta hover:bg-brand-magenta-dark text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg hover:shadow-brand-magenta/20 transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Palestra</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Autoplay Interactive Video Showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center relative"
          >
            {/* Visual Frame Backdrop Glow */}
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-brand-magenta/20 to-brand-cyan/20 blur-xl opacity-80 pointer-events-none"></div>

            {/* Video Container Frame */}
            <div 
              onClick={togglePlay}
              className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl aspect-[9/16] max-w-[340px] mx-auto w-full cursor-pointer group"
            >
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/cp55xx9y/video/upload/v1783696355/WhatsApp_Video_2026-07-10_at_12.03.51_rj9ude.mp4"
                className="w-full h-full object-cover transition-all duration-300"
                loop
                muted={isMuted}
                playsInline
                preload="auto"
              />

              {/* Mute / Unmute Button Overlay */}
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 z-20 p-3 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/10 hover:border-brand-magenta text-white hover:text-brand-magenta shadow-xl transition-all active:scale-90"
                title={isMuted ? "Ativar som" : "Desativar som"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 animate-pulse text-brand-magenta" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>

              {/* Playback State Overlay Indicator on hover */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white fill-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white fill-white translate-x-0.5" />
                  )}
                </div>
              </div>

              {/* Bottom Video Info Card (Autoplay indicator) */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-white z-10 transition-all duration-300 group-hover:border-brand-magenta/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      {isPlaying ? "Reproduzindo agora" : "Vídeo pausado"}
                    </span>
                  </div>
                  {!hasInteracted && isMuted && (
                    <span className="text-[9px] text-brand-magenta font-extrabold uppercase animate-pulse">
                      Clique para ouvir
                    </span>
                  )}
                </div>
                <h5 className="text-xs font-extrabold text-white mt-1 uppercase tracking-wide">
                  Palestra de Saúde Mental
                </h5>
                <p className="text-[10px] text-slate-400 mt-0.5 font-light leading-relaxed">
                  Toque para pausar/reproduzir e use o botão acima para o áudio completo.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
