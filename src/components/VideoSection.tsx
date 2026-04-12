import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Zap, Sparkles, Heart } from 'lucide-react';

export const VideoSection: React.FC<{ onOrderClick: () => void }> = ({ onOrderClick }) => {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const scenes = [
    {
      id: 0,
      content: (
        <motion.div 
          key="scene1" 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, scale: 1.1 }} 
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        >
          <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mb-6 border border-brand-primary/30">
            <Sparkles className="w-10 h-10 text-brand-primary animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight uppercase tracking-tighter">
            Alivio <span className="text-brand-primary">Instantáneo</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold text-white/80">Recupera tu movilidad hoy mismo.</p>
        </motion.div>
      )
    },
    {
      id: 1,
      content: (
        <motion.div 
          key="scene2" 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: 50 }} 
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Poder Botánico</h2>
          <p className="text-sm md:text-base font-medium text-white/60 mb-8 tracking-widest uppercase">La auténtica fórmula original</p>
          <div className="relative">
            <div className="absolute inset-0 bg-brand-primary/20 blur-3xl rounded-full" />
            <motion.img 
              initial={{ y: 50, rotate: -5 }} 
              animate={{ y: 0, rotate: 0 }} 
              src="/mama_oso_verified.png" 
              className="w-56 md:w-64 drop-shadow-[0_35px_60px_rgba(16,185,129,0.5)] relative z-10"
              alt="Mama Oso Verified"
            />
          </div>
        </motion.div>
      )
    },
    {
      id: 2,
      content: (
        <motion.div 
          key="scene3" 
          initial={{ opacity: 0, scale: 1.1 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, scale: 0.9 }} 
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-brand-primary/10 backdrop-blur-sm"
        >
          <div className="bg-white/10 p-2 rounded-3xl mb-6 border border-white/20">
            <div className="bg-brand-primary text-white font-black text-2xl md:text-4xl px-8 py-6 rounded-2xl shadow-2xl border-2 border-white/40">
              1,679+ Clients
            </div>
          </div>
          <div className="flex items-center gap-2 mb-8">
            <Heart className="w-6 h-6 text-red-500 fill-red-500" />
            <p className="text-2xl md:text-3xl font-black text-white">Viviendo sin Dolor</p>
          </div>
          <button 
            onClick={onOrderClick} 
            className="group bg-white text-brand-primary font-black px-10 py-6 rounded-2xl text-xl shadow-[0_20px_50px_rgba(255,255,255,0.2)] flex items-center gap-3 hover:bg-brand-primary hover:text-white transition-all duration-300 uppercase tracking-tighter"
          >
             <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" /> 
             QUIERO MI ALIVIO
          </button>
        </motion.div>
      )
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 bg-slate-950 relative overflow-hidden flex flex-col justify-center items-center">
      {/* Background Flow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40 z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-20%] w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[180px]" />
         <div className="absolute bottom-[-20%] right-[-20%] w-[800px] h-[800px] bg-green-500/20 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 w-full max-w-[420px] md:max-w-[500px] aspect-[9/16] bg-slate-900 border-4 border-white/5 rounded-[3.5rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(16,185,129,0.3)] flex flex-col">
        
        {/* Story Progress */}
        <div className="absolute top-6 left-6 right-6 flex gap-2 z-20">
          {[0, 1, 2].map((sceneIndex) => (
             <div key={sceneIndex} className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                   className="h-full bg-white shadow-[0_0_10px_white]"
                   initial={{ width: '0%' }}
                   animate={{ width: currentScene > sceneIndex ? '100%' : currentScene === sceneIndex ? '100%' : '0%' }}
                   transition={currentScene === sceneIndex ? { duration: 4.5, ease: "linear" } : { duration: 0 }}
                />
             </div>
          ))}
        </div>

        {/* Scene Container */}
        <div className="flex-1 relative w-full h-full">
           <AnimatePresence mode="wait">
              {scenes[currentScene].content}
           </AnimatePresence>
        </div>

        {/* Fixed Quick Buy */}
        <div className="p-6 pt-0 relative z-20">
           <button 
             onClick={onOrderClick} 
             className="w-full h-16 bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white font-black rounded-2xl flex justify-center items-center gap-3 border border-white/10 shadow-lg transition-all active:scale-95"
           >
             <Zap className="w-5 h-5 text-brand-primary fill-brand-primary" />
             ORDENAR AHORA
           </button>
        </div>
      </div>

      {/* Trust Message below phone */}
      <div className="mt-8 flex items-center gap-4 text-white/40 font-black text-[10px] tracking-[0.3em] uppercase">
        <span>Producto Original</span>
        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full shadow-[0_0_10px_#10b981]" />
        <span>Pago Contraentrega</span>
      </div>
    </section>
  );
};
