import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, VolumeX } from 'lucide-react';

export const VideoShowcase: React.FC<{ onOrderClick?: () => void }> = ({ onOrderClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      img: '/hero_studio_jar_1775966524951.png',
      title: 'MAMAOSO',
      subtitle: 'Crema Dermocosmética NL Nutra',
      accent: 'Alivio Natural del Dolor',
    },
    {
      img: '/jar_application_hands_1775966545620.png',
      title: 'Absorción Rápida',
      subtitle: 'Textura suave, no grasa',
      accent: 'Actúa Donde Más Lo Necesitas',
    },
    {
      img: '/ingredients_botanical_1775966600111.png',
      title: '5 Ingredientes Activos',
      subtitle: 'Árnica · Uña de Gato · Eucalipto · Aloe Vera · Pantenol',
      accent: 'Sinergia Natural',
    },
    {
      img: '/senior_relief_1775966614001.png',
      title: 'Recupera Tu Bienestar',
      subtitle: 'Para adultos mayores, deportistas y toda la familia',
      accent: '+1,600 Clientes Satisfechos',
    },
    {
      img: '/triple_jar_bundle_1775966570362.png',
      title: 'Packs con Descuento',
      subtitle: 'Envío gratis · Pago contraentrega',
      accent: '¡Ordena Ahora!',
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  return (
    <section className="py-16 md:py-24 px-4 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[800px] h-[800px] bg-green-500/20 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4">
            Descubre el <span className="text-brand-primary">Poder de MAMAOSO</span>
          </h2>
          <p className="text-slate-400 text-lg">Experiencia visual de nuestra fórmula premium</p>
        </div>

        {/* Video-like Container */}
        <div 
          className="relative aspect-video w-full max-w-4xl mx-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(16,185,129,0.3)] border border-white/10 cursor-pointer group"
          onClick={() => setIsPaused(!isPaused)}
        >
          {/* Slide Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={slides[currentSlide].img}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Text Overlay */}
          <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${currentSlide}`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="inline-block bg-brand-primary/90 text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  {slides[currentSlide].accent}
                </div>
                <h3 className="text-2xl md:text-5xl font-heading font-black text-white drop-shadow-lg leading-tight mb-1">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-white/70 text-sm md:text-lg drop-shadow-md">
                  {slides[currentSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pause indicator */}
          {isPaused && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center z-20 backdrop-blur-sm"
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </motion.div>
          )}

          {/* Progress indicators */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 z-30">
            <div className="flex w-full h-full">
              {slides.map((_, i) => (
                <div key={i} className="h-full flex-1 border-r border-black/30 last:border-0 relative overflow-hidden">
                  {i < currentSlide && (
                    <div className="absolute inset-0 bg-brand-primary" />
                  )}
                  {i === currentSlide && !isPaused && (
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4.5, ease: "linear" }}
                      className="absolute top-0 left-0 h-full bg-brand-primary shadow-[0_0_10px_#10b981]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA below video */}
        {onOrderClick && (
          <div className="flex justify-center mt-10">
            <button
              onClick={onOrderClick}
              className="bg-brand-primary hover:bg-brand-secondary text-white font-black py-4 px-10 rounded-2xl text-lg shadow-[0_20px_40px_-10px_rgba(16,185,129,0.5)] transition-all hover:scale-[1.03] active:scale-95 uppercase tracking-tight"
            >
              QUIERO MI CREMA MAMAOSO
            </button>
          </div>
        )}

        {/* Trust Message */}
        <div className="mt-8 flex items-center justify-center gap-4 text-white/40 font-black text-[10px] tracking-[0.3em] uppercase">
          <span>Producto Original</span>
          <div className="w-1.5 h-1.5 bg-brand-primary rounded-full shadow-[0_0_10px_#10b981]" />
          <span>NL Nutra</span>
          <div className="w-1.5 h-1.5 bg-brand-primary rounded-full shadow-[0_0_10px_#10b981]" />
          <span>Pago Contraentrega</span>
        </div>
      </div>
    </section>
  );
};
