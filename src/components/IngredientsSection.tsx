import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Leaf, HeartPulse, Droplets } from 'lucide-react';

export const IngredientsSection: React.FC = () => {
  const ingredients = [
    { name: 'Árnica', role: 'Alivio', desc: 'Apoya el alivio rápido de molestias musculares.', icon: <HeartPulse className="w-5 h-5 text-brand-primary" /> },
    { name: 'Uña de Gato', role: 'Recuperación', desc: 'Contribuye al bienestar general y recuperación del cuerpo.', icon: <Leaf className="w-5 h-5 text-brand-primary" /> },
    { name: 'Eucalipto', role: 'Frescura', desc: 'Aporta una sensación intensamente refrescante y relajante.', icon: <Droplets className="w-5 h-5 text-brand-primary" /> },
    { name: 'Aloe Vera', role: 'Regeneración', desc: 'Ultra-hidratación que calma y regenera la piel.', icon: <Leaf className="w-5 h-5 text-brand-primary" /> },
    { name: 'Vitamina E', role: 'Protección', desc: 'Protección antioxidante y profunda nutrición cutánea.', icon: <CheckCircle2 className="w-5 h-5 text-brand-primary" /> },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 text-brand-primary font-bold text-[10px] uppercase tracking-widest bg-brand-primary/5"
           >
             <Leaf className="w-3 h-3" /> Extractos Naturales Puros
           </motion.div>
           <h2 className="text-4xl md:text-5xl font-heading font-black">Fórmula <span className="text-brand-primary">Botánica</span> Avanzada.</h2>
           <p className="text-slate-400 font-body text-lg">
             💡 Fórmula natural + uso constante = mejores resultados.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
           {ingredients.map((ing, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-black/40 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] text-center space-y-4 hover:border-brand-primary/40 transition-premium group"
             >
               <div className="text-white font-black text-2xl mb-1 group-hover:scale-110 transition-transform tracking-tight">{ing.name}</div>
               <div className="font-heading font-bold uppercase tracking-widest text-[10px] text-brand-primary">{ing.role}</div>
               <p className="text-xs text-slate-300 leading-relaxed italic">"{ing.desc}"</p>
               <div className="pt-2 flex justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                  {ing.icon}
               </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative rounded-[2.5rem] overflow-hidden border-8 border-white/10 shadow-2xl"
           >
              {/* Using the realistic generated texture image I made earlier to showcase the pure white hydration */}
              <img src="/mamaoso_texture_ritual_1775901603930.png" alt="Textura de Crema MAMA OSO" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white font-bold text-lg tracking-widest uppercase">🌿 Textura Ultra Hidratante</div>
           </motion.div>
           
           <div className="space-y-8">
              <h3 className="text-3xl font-heading font-black text-white">El poder de la naturaleza, para ti.</h3>
              <p className="text-slate-400 leading-relaxed">
                Nuestra crema dermocosmética está diseñada con extractos seleccionados específicamente para aliviar de manera rápida la tensión y el cansancio corporal acumulado.
              </p>
              
              <div className="grid gap-4 mt-8">
                 {[
                   'Hidrata y Nutre de forma profunda gracias al Aloe y Vitamina E.',
                   'Sensación relajante casi instantánea proporcionada por el Eucalipto.',
                   'Apoya la musculatura tras esfuerzos intensos con Árnica y Uña de Gato.'
                 ].map((point, i) => (
                   <div key={i} className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10">
                     <div className="w-10 h-10 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                     </div>
                     <p className="text-sm font-medium text-slate-200">{point}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
