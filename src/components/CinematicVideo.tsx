import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

export const CinematicVideo: React.FC<{ onOrderClick?: () => void }> = ({ onOrderClick }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);

  const frames = [
    {
      id: 1,
      img: '/active_seniors_1775965368178.png',
      title: 'Recupera tu Movilidad',
      subtitle: 'Disfruta cada paso sin dolor',
    },
    {
      id: 2,
      img: '/cream_texture_1775965354080.png',
      title: 'Textura Ultra Absorbente',
      subtitle: 'Sensación fresca e hidratante',
    },
    {
      id: 3,
      img: '/neuropathy_pain_relief_1775965340622.png',
      title: 'Alivio Profundo',
      subtitle: 'Trata la neuropatía de raíz',
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentFrame(prev => (prev + 1) % frames.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, frames.length]);

  return (
    <section className="py-16 md:py-24 px-4 bg-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
        {/* Video Container Aspect Ratio */}
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 bg-slate-900 group">
          
          {/* Main Cinematic Image Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFrame}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img 
                src={frames[currentFrame].img} 
                alt={frames[currentFrame].title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Text Overlay */}
          <div className="absolute bottom-8 left-8 right-8 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${currentFrame}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-3xl md:text-5xl font-heading font-black text-white drop-shadow-lg leading-tight mb-2">
                  {frames[currentFrame].title}
                </h3>
                <p className="text-white/80 text-lg drop-shadow-md">
                  {frames[currentFrame].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pause/Play Overlay Indicator */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20 backdrop-blur-sm transition-all">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                <Play className="w-8 h-8 text-white fill-white ml-2" />
              </div>
            </div>
          )}

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/20 z-30">
            <div className="flex w-full h-full">
              {frames.map((_, i) => (
                <div key={i} className="h-full flex-1 border-r border-black/20 last:border-0 relative">
                  {i === currentFrame && isPlaying && (
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4, ease: "linear" }}
                      className="absolute top-0 left-0 h-full bg-brand-primary"
                    />
                  )}
                  {i < currentFrame && (
                    <div className="absolute top-0 left-0 h-full w-full bg-brand-primary" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional Action Button below video */}
        {onOrderClick && (
          <div className="flex justify-center mt-10">
            <button 
              onClick={(e) => { e.stopPropagation(); onOrderClick(); }}
              className="bg-brand-primary hover:bg-brand-secondary text-white font-black py-4 px-10 rounded-2xl text-lg shadow-[0_20px_40px_-10px_rgba(16,185,129,0.5)] transition-all hover:scale-[1.03] active:scale-95 uppercase tracking-tight"
            >
              QUIERO MI CREMA MAMA OSO
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
