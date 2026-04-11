import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Heart, Sparkles, Droplets } from 'lucide-react';

export const BenefitsGrid: React.FC = () => {
  const benefits = [
    { title: 'Alivia Tensión Muscular', desc: 'Ayuda a aliviar la sensación de tensión muscular diaria.', icon: <Activity className="w-8 h-8 text-white" /> },
    { title: 'Bienestar y Relajación', desc: 'Contribuye profundamente a la relajación corporal.', icon: <Heart className="w-8 h-8 text-white" /> },
    { title: 'Recuperación Física', desc: 'Apoya el descanso después de realizar esfuerzo físico intenso.', icon: <ShieldCheck className="w-8 h-8 text-white" /> },
    { title: 'Hidratación Profunda', desc: 'Hidrata, nutre y mejora visiblemente la apariencia de tu piel.', icon: <Droplets className="w-8 h-8 text-white" /> }
  ];

  return (
    <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 text-brand-primary font-bold text-[10px] uppercase tracking-widest bg-white shadow-sm"
           >
             <Sparkles className="w-3 h-3" /> Beneficios Principales
           </motion.div>
           <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-dark leading-tight">
             ¿Qué hace este producto por tu cuerpo?
           </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 group transition-all duration-300"
            >
               <div className="w-16 h-16 bg-brand-primary rounded-3xl flex items-center justify-center mb-8 shadow-lg shadow-brand-primary/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {benefit.icon}
               </div>
               <h3 className="text-xl font-heading font-black text-brand-dark mb-4 leading-tight group-hover:text-brand-primary transition-colors">
                  {benefit.title}
               </h3>
               <p className="text-slate-500 font-body leading-relaxed text-sm">
                  {benefit.desc}
               </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
