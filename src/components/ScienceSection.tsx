import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Zap, ShieldCheck } from 'lucide-react';

export const ScienceSection: React.FC = () => {
  const areas = [
    { area: 'Pies y Tobillos', desc: 'Reduce el hormigueo y el entumecimiento al caminar.' },
    { area: 'Piernas y Pantorrillas', desc: 'Alivia calambres y fatiga muscular neuropática.' },
    { area: 'Manos y Dedos', desc: 'Recupera sensibilidad y reduce el ardor constante.' },
    { area: 'Espalda Lumbar', desc: 'Calma nervios irritados que irradian hacia las piernas.' },
    { area: 'Terminales Nerviosas', desc: 'Refuerza la vaina de mielina con nutrición directa.' },
    { area: 'Articulaciones', desc: 'Mejora la flexibilidad y reduce la inflamación.' }
  ];

  return (
    <section className="py-24 px-4 bg-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center max-w-3xl mx-auto space-y-6">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-4"
           >
              <Microscope className="w-8 h-8" />
           </motion.div>
           <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-dark">Nutrición Celular para <span className="text-brand-primary">tus Nervios</span></h2>
           <p className="text-slate-500 font-body text-lg">
             Basado en el método de absorción directa de magnesio. Nuestra fórmula penetra instantáneamente la barrera cutánea para nutrir el tejido nervioso donde las pastillas no pueden llegar.
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative pt-12"
           >
              <div className="absolute inset-0 bg-brand-primary/10 blur-[120px] rounded-full" />
              <img src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2070&auto=format&fit=crop" alt="Ciencia de los nervios" className="relative z-10 w-full rounded-[3rem] shadow-2xl border-2 border-brand-primary/10" />
              
              <div className="absolute -top-6 -right-6 lg:-right-12 bg-white/90 backdrop-blur-xl shadow-2xl p-6 rounded-[2rem] max-w-[200px] border-white/50">
                 <div className="w-10 h-10 bg-brand-primary rounded-xl mb-3 flex items-center justify-center text-white font-bold">
                    <Zap className="w-6 h-6" />
                 </div>
                 <h4 className="text-brand-dark font-bold text-sm mb-1">Efecto Reparador</h4>
                 <p className="text-[10px] text-slate-500 font-medium font-body uppercase tracking-tighter">Nutre la fibra nerviosa para frenar el daño progresivo.</p>
              </div>
           </motion.div>

           <div className="grid grid-cols-2 gap-4">
              {areas.map((item, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-premium group hover:border-brand-primary/30"
                >
                   <div className="w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-xl mb-4 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-premium">
                      <ShieldCheck className="w-5 h-5" />
                   </div>
                   <h4 className="font-heading font-extrabold text-brand-dark text-xs mb-1 uppercase tracking-wider">{item.area}</h4>
                   <p className="text-[10px] text-slate-400 font-medium leading-relaxed font-body">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
