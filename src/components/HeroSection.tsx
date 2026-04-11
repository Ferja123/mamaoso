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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full -z-10 bg-gradient-to-b from-brand-primary/5 via-transparent to-transparent rounded-b-[80px]" />

      <div className="max-w-6xl mx-auto">
        {/* Main Hero Grid - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* LEFT: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-center lg:text-left order-2 lg:order-1"
          >
            <p className="text-brand-primary font-black text-xs uppercase tracking-[0.2em]">
              ¡Para manos y pies dolorosos, hormigueantes y ardientes!
            </p>

            <h1 className="text-3xl md:text-5xl font-heading font-black text-brand-dark leading-[1.1]">
              Alivio Natural para la <span className="text-brand-primary">Neuropatía</span>
            </h1>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Formulado con magnesio y extractos botánicos para aliviar el ardor, el hormigueo y el entumecimiento. <strong>Absorción directa donde más lo necesitas.</strong>
            </p>

            {/* Stats Row */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />)}
              </div>
              <span className="text-sm font-bold text-slate-600">+1679 Clientes Satisfechos</span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onOrderClick}
                className="bg-brand-primary hover:bg-brand-secondary text-white font-black py-4 px-8 rounded-2xl text-base md:text-lg shadow-xl shadow-brand-primary/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" /> COMPRAR AHORA
              </button>
              <button
                onClick={onOrderClick}
                className="border-2 border-slate-200 text-slate-600 font-bold py-4 px-6 rounded-2xl text-sm hover:border-brand-primary/30 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowDown className="w-4 h-4" /> Ver Ofertas
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative max-w-[350px] md:max-w-[420px]">
              <div className="absolute -inset-6 bg-brand-primary/10 rounded-full blur-3xl opacity-50 -z-10" />
              <img
                src="/hero_product.png"
                alt="Mama Oso Crema - Producto Hero"
                className="w-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-3 mt-8 md:mt-12 max-w-2xl mx-auto">
          {[
            { icon: <Truck className="w-5 h-5 text-brand-primary" />, title: 'Envío Gratis', sub: 'A todo el Perú' },
            { icon: <RotateCcw className="w-5 h-5 text-brand-primary" />, title: 'Garantía 90 Días', sub: 'Devolución total' },
            { icon: <ShieldCheck className="w-5 h-5 text-brand-primary" />, title: 'Calidad Premium', sub: 'Reg. Sanitario' },
          ].map((badge, i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
              <div className="flex justify-center mb-1.5">{badge.icon}</div>
              <p className="text-xs font-black text-brand-dark">{badge.title}</p>
              <p className="text-[10px] text-slate-400 font-medium">{badge.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
