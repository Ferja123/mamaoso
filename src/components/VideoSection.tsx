import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Award, Sparkles, ArrowDown } from 'lucide-react';

export const VideoSection: React.FC<{ onOrderClick: () => void }> = ({ onOrderClick }) => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-slate-900 via-brand-dark to-slate-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/15 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 text-brand-primary font-bold text-[10px] uppercase tracking-widest bg-brand-primary/5">
            <Sparkles className="w-3 h-3" /> Producto Estrella
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-black text-white">
            ¿Por Qué <span className="text-brand-primary">Mama Oso</span> es Diferente?
          </h2>
        </div>

        {/* Interactive Product Showcase - Mobile First */}
        <div className="relative max-w-sm mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm p-6 md:p-8"
          >
            {/* Product Image with Float Animation */}
            <div className="flex justify-center mb-6">
              <motion.img
                src="/mama_oso_original_white.png"
                alt="Mama Oso Crema Original"
                className="w-52 md:w-64 object-contain drop-shadow-[0_20px_40px_rgba(16,185,129,0.3)]"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Key Features */}
            <div className="grid gap-3">
              {[
                { icon: <ShieldCheck className="w-4 h-4 text-white" />, bg: 'bg-green-500', title: 'Registro Sanitario', sub: 'Producto certificado y regulado' },
                { icon: <Users className="w-4 h-4 text-white" />, bg: 'bg-brand-primary', title: '+1679 Clientes Satisfechos', sub: 'En todo el Perú' },
                { icon: <Award className="w-4 h-4 text-white" />, bg: 'bg-yellow-500', title: 'Alta Demanda 🔥', sub: 'Producto de alta rotación' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/5"
                >
                  <div className={`w-8 h-8 ${item.bg} rounded-lg flex items-center justify-center shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{item.title}</p>
                    <p className="text-white/50 text-xs">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onOrderClick}
              className="w-full mt-6 bg-brand-primary text-white font-black py-4 rounded-2xl text-base flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/30 hover:bg-brand-secondary transition-colors"
            >
              PEDIR AHORA <ArrowDown className="w-5 h-5 animate-bounce" />
            </motion.button>
          </motion.div>
        </div>

        {/* Trust Stats Row */}
        <div className="flex justify-center gap-6 md:gap-12 mt-10 text-center">
          {[
            { value: '100g', label: 'Contenido' },
            { value: '98%', label: 'Satisfacción' },
            { value: '90d', label: 'Garantía' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl md:text-3xl font-black text-brand-primary">{stat.value}</div>
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
