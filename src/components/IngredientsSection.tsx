import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, HeartPulse, Droplets, FlaskConical, Sparkles } from 'lucide-react';

export const IngredientsSection: React.FC = () => {
  const ingredients = [
    { name: 'Magnesio', role: 'Calmante', desc: 'Ayuda a estabilizar la función nerviosa.', icon: <FlaskConical className="w-5 h-5 text-brand-primary" /> },
    { name: 'Árnica', role: 'Alivio', desc: 'Alivio de molestias musculares y articulares.', icon: <HeartPulse className="w-5 h-5 text-brand-primary" /> },
    { name: 'Uña de Gato', role: 'Recuperación', desc: 'Contribuye al bienestar corporal.', icon: <Leaf className="w-5 h-5 text-brand-primary" /> },
    { name: 'Eucalipto', role: 'Frescura', desc: 'Sensación refrescante y relajante.', icon: <Droplets className="w-5 h-5 text-brand-primary" /> },
    { name: 'Aloe Vera', role: 'Protección', desc: 'Hidrata y nutre profundamente la piel.', icon: <Leaf className="w-5 h-5 text-brand-primary" /> },
  ];

  const jarSrc = '/mama_oso_verified.png';

  return (
    <section className="py-12 md:py-24 px-4 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 text-brand-primary font-black text-[10px] uppercase tracking-[0.2em] bg-brand-primary/5"
          >
            <Sparkles className="w-3 h-3" /> Poder de la Naturaleza
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-heading font-black leading-tight">
            Fórmula <span className="text-brand-primary">Original</span> NL Nutra
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            La combinación perfecta de extractos botánicos y magnesio para un alivio localizado y efectivo.
          </p>
        </div>

        {/* Ingredients Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-20">
          {ingredients.map((ing, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[2rem] text-center space-y-4 hover:border-brand-primary/40 transition-all group"
            >
              <div className="w-12 h-12 bg-brand-primary/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                {ing.icon}
              </div>
              <div>
                 <h3 className="text-white font-black text-lg group-hover:text-brand-primary transition-colors">{ing.name}</h3>
                 <p className="font-heading font-bold uppercase tracking-widest text-[9px] text-brand-primary mt-1">{ing.role}</p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{ing.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact Visuals Row */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Texture Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-video md:aspect-auto"
          >
            <img 
              src="/texture_cream.png" 
              alt="Textura Crema Mama Oso" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent flex flex-col justify-end p-8 md:p-12">
              <h3 className="text-2xl font-black mb-2">Textura Ultra Ligera</h3>
              <p className="text-slate-300 text-sm max-w-md">Se absorbe en segundos penetrando profundamente en los tejidos nerviosos sin dejar rastro graso.</p>
            </div>
          </motion.div>

          {/* Product Bundle Presentation Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/10 flex flex-col items-center justify-center text-center group"
          >
            <div className="relative w-full h-48 md:h-64 mb-8 flex items-center justify-center">
              {/* CSS Stacked 3 Jars for Ingredients section to show "Bundle" feeling */}
              <img src={jarSrc} alt="Mama Oso Layer 1" className="absolute w-[45%] left-[10%] bottom-0 object-contain drop-shadow-2xl z-0 opacity-40 -rotate-12" />
              <img src={jarSrc} alt="Mama Oso Layer 2" className="absolute w-[45%] right-[10%] bottom-0 object-contain drop-shadow-2xl z-0 opacity-40 rotate-12" />
              <img src={jarSrc} alt="Mama Oso Layer 3" className="absolute w-[65%] left-1/2 -translate-x-1/2 bottom-4 object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)] z-10" />
            </div>
            
            <h3 className="text-2xl font-black mb-2">Reserva de Calidad</h3>
            <p className="text-slate-400 text-sm mb-8">Cada frasco de 100g está sellado al vacío para preservar la potencia de sus extractos activos.</p>
            
            <div className="flex gap-4">
               <div className="flex flex-col items-center">
                  <div className="text-brand-primary font-black text-xl">100%</div>
                  <div className="text-[9px] uppercase tracking-widest text-white/40">Natural</div>
               </div>
               <div className="w-px h-10 bg-white/10" />
               <div className="flex flex-col items-center">
                  <div className="text-brand-primary font-black text-xl">90</div>
                  <div className="text-[9px] uppercase tracking-widest text-white/40">Días Garantía</div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
