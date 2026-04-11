import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Leaf, HeartPulse, Droplets, FlaskConical } from 'lucide-react';

export const IngredientsSection: React.FC = () => {
  const ingredients = [
    { name: 'Magnesio', role: 'Calmante', desc: 'Ayuda a estabilizar la función nerviosa.', icon: <FlaskConical className="w-5 h-5 text-brand-primary" /> },
    { name: 'Árnica', role: 'Alivio', desc: 'Alivio de molestias musculares y articulares.', icon: <HeartPulse className="w-5 h-5 text-brand-primary" /> },
    { name: 'Uña de Gato', role: 'Recuperación', desc: 'Contribuye al bienestar corporal.', icon: <Leaf className="w-5 h-5 text-brand-primary" /> },
    { name: 'Eucalipto', role: 'Frescura', desc: 'Sensación refrescante y relajante.', icon: <Droplets className="w-5 h-5 text-brand-primary" /> },
    { name: 'Aloe Vera', role: 'Protección', desc: 'Hidrata y nutre profundamente la piel.', icon: <Leaf className="w-5 h-5 text-brand-primary" /> },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 text-brand-primary font-bold text-[10px] uppercase tracking-widest bg-brand-primary/5"
          >
            <Leaf className="w-3 h-3" /> Extractos Naturales
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-heading font-black">Fórmula <span className="text-brand-primary">Botánica Avanzada</span></h2>
          <p className="text-slate-400 text-sm md:text-base">
            Combinamos lo mejor de la naturaleza con magnesio para un alivio localizado.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-12">
          {ingredients.map((ing, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/5 backdrop-blur border border-white/10 p-4 md:p-6 rounded-2xl text-center space-y-2 hover:border-brand-primary/30 transition-all group"
            >
              <div className="text-white font-black text-base md:text-lg group-hover:text-brand-primary transition-colors">{ing.name}</div>
              <div className="font-heading font-bold uppercase tracking-widest text-[9px] text-brand-primary">{ing.role}</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">{ing.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Product Images Row with NEW CSS LAYOUT */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-gradient-to-t from-white/5 to-transparent relative"
          >
            <img src="/texture_cream.png" alt="Textura Crema Mama Oso" className="w-full h-[250px] md:h-[300px] object-cover" />
            <div className="bg-white/10 backdrop-blur p-4 text-center absolute bottom-0 left-0 w-full z-20">
              <p className="text-white font-bold text-sm">🌿 Textura Ultra Hidratante</p>
              <p className="text-white/50 text-xs">Se absorbe rápido sin residuos grasos</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-gradient-to-t from-white/5 to-transparent relative"
          >
            {/* Using the CSS bundle layout instead of a flat image */}
            <div className="w-full h-[250px] md:h-[300px] flex items-center justify-center relative pt-8">
               <img src="/pack_1.png" alt="Mama Oso Single" className="absolute w-[50%] left-4 top-12 object-contain drop-shadow-lg z-0 opacity-50" />
               <img src="/pack_2.png" alt="Mama Oso Double" className="absolute w-[50%] right-4 top-12 object-contain drop-shadow-lg z-0 opacity-50" />
               <img src="/pack_3.png" alt="Mama Oso Triple" className="absolute w-[65%] left-1/2 -translate-x-1/2 top-4 object-contain drop-shadow-2xl z-10" />
            </div>
            <div className="bg-white/10 backdrop-blur p-4 text-center absolute bottom-0 left-0 w-full z-20">
              <p className="text-white font-bold text-sm">🔥 Ofertas Especiales</p>
              <p className="text-white/50 text-xs">Packs de 1, 2 o 3 frascos con envío gratis</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
