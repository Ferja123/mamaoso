import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

export const VideoSection: React.FC<{ onOrderClick: () => void }> = ({ onOrderClick }) => {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scenes = [
    {
      id: 0,
      content: (
        <motion.div key="scene1" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }} className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight uppercase">¿Dolor y Hormigueo?</h2>
          <p className="text-xl md:text-2xl font-bold text-brand-primary">La neuropatía no espera.</p>
        </motion.div>
      )
    },
    {
      id: 1,
      content: (
        <motion.div key="scene2" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-1">Descubre el Alivio</h2>
          <p className="text-sm md:text-base font-medium text-white/70 mb-4">Con la auténtica crema</p>
          <motion.h1 animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-5xl md:text-6xl font-black text-brand-primary mb-6">MAMA OSO</motion.h1>
          <motion.img 
            initial={{ y: 100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            src="/mama_oso_original_white.png" 
            className="w-48 md:w-56 drop-shadow-[0_20px_40px_rgba(16,185,129,0.4)]"
            alt="Mama Oso"
          />
        </motion.div>
      )
    },
    {
      id: 2,
      content: (
        <motion.div key="scene3" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Fórmula Botánica</h2>
          <p className="text-lg md:text-xl font-bold text-brand-primary mb-8">Absorción Inmediata</p>
          <div className="flex flex-wrap justify-center gap-3">
             <div className="bg-white/10 border border-white/20 backdrop-blur px-4 py-2 rounded-full font-bold text-sm md:text-base text-white">🌿 Árnica</div>
             <div className="bg-white/10 border border-white/20 backdrop-blur px-4 py-2 rounded-full font-bold text-sm md:text-base text-white">🪷 Uña de Gato</div>
             <div className="bg-white/10 border border-white/20 backdrop-blur px-4 py-2 rounded-full font-bold text-sm md:text-base text-white">🍃 Eucalipto</div>
             <div className="bg-white/10 border border-white/20 backdrop-blur px-4 py-2 rounded-full font-bold text-sm md:text-base text-white">💧 Aloe Vera</div>
          </div>
        </motion.div>
      )
    },
    {
      id: 3,
      content: (
        <motion.div key="scene4" initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-brand-primary/20 backdrop-blur-sm">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="bg-brand-primary text-white font-black text-2xl md:text-3xl px-8 py-4 rounded-3xl shadow-2xl mb-4 border-2 border-white/30">
            +1679 Clientes
          </motion.div>
          <p className="text-xl md:text-2xl font-bold text-white mb-8">Satisfechos en Perú</p>
          <button onClick={onOrderClick} className="bg-white text-brand-primary font-black px-10 py-5 rounded-full text-xl shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform uppercase tracking-widest">
             <ShoppingCart className="w-6 h-6" /> Pedir Ahora
          </button>
        </motion.div>
      )
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 bg-gradient-to-br from-slate-900 via-brand-dark to-slate-900 relative overflow-hidden flex flex-col justify-center items-center">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 z-0 pointer-events-none">
         <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-primary rounded-full blur-[150px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-green-400 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-[400px] md:max-w-[500px] aspect-[9/16] bg-black/40 backdrop-blur-md border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col">
        
        {/* Progress Bars */}
        <div className="absolute top-4 left-4 right-4 flex gap-2 z-20">
          {[0, 1, 2, 3].map((sceneIndex) => (
             <div key={sceneIndex} className="h-1.5 flex-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                   className="h-full bg-white"
                   initial={{ width: '0%' }}
                   animate={{ width: currentScene > sceneIndex ? '100%' : currentScene === sceneIndex ? '100%' : '0%' }}
                   transition={currentScene === sceneIndex ? { duration: 4, ease: "linear" } : { duration: 0 }}
                />
             </div>
          ))}
        </div>

        {/* Dynamic Scenes */}
        <div className="flex-1 relative w-full h-full pb-16">
           <AnimatePresence mode="wait">
              {scenes[currentScene].content}
           </AnimatePresence>
        </div>

        {/* Global Bottom CTA for Video */}
        <div className="absolute bottom-6 left-6 right-6 z-20">
           <button onClick={onOrderClick} className="w-full bg-brand-primary/90 backdrop-blur hover:bg-brand-primary text-white font-black py-4 rounded-2xl flex justify-center items-center gap-2 border border-white/20 shadow-xl transition-colors">
             ORDENAR HOY <span className="text-xs uppercase ml-2 text-white/70">PAGO CONTRAENTREGA</span>
           </button>
        </div>
      </div>
    </section>
  );
};
