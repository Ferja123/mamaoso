import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowDown, Star, Truck, ShieldCheck, RotateCcw } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <section className="relative pt-8 pb-10 md:pt-14 md:pb-20 overflow-hidden px-4 bg-white">
      {/* Subtle gradient bg */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full -z-10 bg-gradient-to-b from-brand-primary/10 via-brand-primary/5 to-transparent rounded-b-[100px]" />

      <div className="max-w-6xl mx-auto">
        {/* Main Hero Grid - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* LEFT: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-black text-[10px] uppercase tracking-[0.2em]">
              <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
              Producto Original Certificado
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-black text-brand-dark leading-[1.05] tracking-tight">
              Alivio Real para la <span className="text-brand-primary relative">
                Neuropatía
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 Q 75 10 100 5" stroke="#10b981" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              Elimina el ardor, hormigueo y entumecimiento con la fórmula original de <strong className="text-brand-dark">Mama Oso</strong>. Resultados garantizados desde la primera aplicación.
            </p>

            {/* Stars Row */}
            <div className="flex items-center justify-center lg:justify-start gap-4 bg-slate-50 py-3 px-5 rounded-2xl w-fit mx-auto lg:mx-0 border border-slate-100">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
              </div>
              <span className="text-xs font-black text-brand-dark">+1,600 Clientes Felices en Perú</span>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onOrderClick}
                className="bg-brand-primary hover:bg-brand-secondary text-white font-black py-5 px-10 rounded-2xl text-lg shadow-[0_20px_40px_-10px_rgba(16,185,129,0.5)] transition-all hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-3 uppercase tracking-tight"
              >
                <Zap className="w-5 h-5 fill-white" /> COMPRAR AHORA
              </button>
              <button
                onClick={onOrderClick}
                className="bg-white border-2 border-slate-200 text-slate-500 font-black py-5 px-8 rounded-2xl text-sm hover:border-brand-primary hover:text-brand-primary transition-all flex items-center justify-center gap-2"
              >
                <ArrowDown className="w-4 h-4" /> VER OFERTAS
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative max-w-[380px] md:max-w-[500px] w-full p-4">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
              <img
                src="/mama_oso_verified.png"
                alt="Mama Oso Crema Original"
                className="w-full object-contain drop-shadow-[0_45px_65px_rgba(0,0,0,0.15)] filter brightness-105"
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 right-0 bg-white shadow-2xl p-4 rounded-3xl border border-brand-primary/10 flex flex-col items-center gap-1 z-20"
              >
                <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-black italic">100g</div>
                <p className="text-[10px] font-black uppercase text-brand-primary tracking-tighter">Poder Natural</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Quick Review Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 md:mt-24">
          {[
            { icon: <Truck className="w-6 h-6" />, title: 'Envío Gratis', sub: 'A todo el Perú hoy' },
            { icon: <RotateCcw className="w-6 h-6" />, title: 'Paga al Recibir', sub: 'Efectivo, Yape o Plin' },
            { icon: <ShieldCheck className="w-6 h-6" />, title: 'Original NL NUTRA', sub: 'Registro Sanitario' },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="flex items-center gap-5 bg-slate-50 p-6 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div>
                <p className="font-heading font-black text-brand-dark tracking-tight">{item.title}</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
