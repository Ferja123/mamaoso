import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Flame, Zap as ZapIcon, Wind } from 'lucide-react';

interface ProblemSectionProps {
  onOrderClick: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOrderClick }) => {
  const symptoms = [
    { icon: <Flame className="w-6 h-6" />, title: 'Ardor y Quemazón', desc: 'Sensaciones de calor intenso en pies y manos' },
    { icon: <ZapIcon className="w-6 h-6" />, title: 'Hormigueo', desc: 'Electricidad constante que no te deja en paz' },
    { icon: <Wind className="w-6 h-6" />, title: 'Entumecimiento', desc: 'Pérdida de sensibilidad y equilibrio' },
    { icon: <AlertCircle className="w-6 h-6" />, title: 'Mala Circulación', desc: 'Pies fríos, hinchados e incómodos' },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-primary/10 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-black leading-tight"
          >
            ¿Cansado de Vivir con <span className="text-red-400">Ardor, Hormigueo</span> y <span className="text-red-400">Entumecimiento</span>?
          </motion.h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            El <strong className="text-white">75% de los adultos en Perú</strong> tienen deficiencia de magnesio, lo cual desequilibra los nervios causando dolor, hormigueo y entumecimiento.
          </p>
        </div>

        {/* Symptoms Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {symptoms.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-5 text-center space-y-2 hover:border-red-400/30 transition-colors"
            >
              <div className="text-red-400 flex justify-center">{s.icon}</div>
              <h3 className="font-black text-sm md:text-base">{s.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution Transition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-primary/20 to-green-500/20 border border-brand-primary/30 rounded-3xl p-6 md:p-8 text-center"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src="/mama_oso_verified.png" alt="Mama Oso" className="w-24 md:w-32 object-contain drop-shadow-xl" />
            <div className="text-left space-y-2 flex-1">
              <h3 className="text-xl md:text-2xl font-black">La Crema Mama Oso ataca la raíz del problema</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Al aplicarla directamente sobre la piel, el magnesio y los extractos botánicos llegan directo a los nervios afectados, proporcionando alivio rápido y duradero <strong className="text-brand-primary">sin pasar por el sistema digestivo.</strong>
              </p>
            </div>
            <button
              onClick={onOrderClick}
              className="bg-brand-primary text-white font-black py-3 px-6 rounded-xl text-sm whitespace-nowrap hover:bg-brand-secondary transition-colors shadow-lg"
            >
              QUIERO ALIVIO
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
