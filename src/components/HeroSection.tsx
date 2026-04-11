import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, PlayCircle } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <section className="relative pt-10 pb-12 md:pt-16 md:pb-24 overflow-hidden px-4 bg-brand-light">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 bg-gradient-to-b from-brand-primary/5 to-transparent rounded-b-[100px]" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-5 md:space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary font-bold text-xs uppercase tracking-widest">
            <Sparkles className="w-3 h-3" /> 
            Alivio Rápido y Efectivo
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-black text-brand-dark leading-[1.05]">
            Relajación Muscular <span className="text-brand-primary">Garantizada.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 font-body max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            La textura hiper-hidratante que alivia molestias, nutre profundamente y recupera tu cuerpo tras el esfuerzo físico. <br/><span className="text-brand-dark font-bold">Fórmula Original de Alta Demanda.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button 
              onClick={onOrderClick}
              className="group relative px-8 py-5 bg-brand-primary text-white rounded-2xl font-black text-lg overflow-hidden shadow-2xl shadow-brand-primary/30 transition-all hover:scale-[1.02] active:scale-95"
            >
              <div className="absolute inset-0 bg-brand-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10" />
              <span className="flex items-center justify-center gap-2">
                QUIERO MI MAMA OSO <ArrowRight className="w-5 h-5" />
              </span>
            </button>
            
            <div className="flex items-center gap-3 justify-center text-slate-500 font-medium text-sm">
              <span className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-green-200" />
                ))}
              </span>
              +15k Clientes Felices
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* TikTok Style "Video" Wrapper for the Image */}
          <div className="relative group cursor-pointer" onClick={onOrderClick}>
            <div className="absolute -inset-8 bg-brand-primary/10 rounded-[3rem] blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
               <motion.img 
                src="/mama_oso_original_white.png" 
                alt="Mama Oso Crema Original" 
                className="w-full max-w-[400px] md:max-w-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Play Button Overlay to simulate TikTok Video feel */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                 <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl opacity-90 group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-10 h-10 text-brand-primary" />
                 </div>
              </div>
              
              {/* Trust Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur border border-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                   <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                     <Sparkles className="w-5 h-5" />
                   </div>
                   <div>
                     <p className="text-[10px] font-black uppercase text-brand-primary tracking-widest">Crema Dermocosmética</p>
                     <p className="text-sm font-bold text-brand-dark">Con Registro Sanitario P.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
