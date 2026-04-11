import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Thermometer, UserCheck, Droplet, ShoppingCart } from 'lucide-react';

interface SolutionProps {
  onOrderClick?: () => void;
}

export const SolutionSection: React.FC<SolutionProps> = ({ onOrderClick }) => {
  return (
    <section className="py-12 md:py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* Target Audience */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-full font-bold text-[10px] tracking-widest uppercase">
              🎯 Perfil Ideal
            </div>
            <h2 className="text-2xl md:text-4xl font-heading font-black text-brand-dark leading-tight">
              Diseñado para quienes no pueden parar de moverse.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Ideal para personas activas, adultos mayores o cualquier persona con molestias corporales o cansancio acumulado.
            </p>
            <div className="space-y-3">
              {[
                { icon: '👨', text: 'Personas con dolor muscular o fatiga.' },
                { icon: '👵', text: 'Adultos mayores que buscan movilidad.' },
                { icon: '🏋️', text: 'Deportistas y personas activas.' },
                { icon: '👩', text: 'Público general que busca bienestar.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-brand-light p-3 rounded-xl border border-slate-100">
                  <div className="text-xl bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-sm shrink-0">{item.icon}</div>
                  <p className="font-bold text-slate-700 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="/mama_oso_hands.png" alt="Aplicación de Crema Mama Oso" className="w-full h-[350px] md:h-[450px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent rounded-3xl" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-xl">
                <p className="text-brand-dark font-bold text-sm text-center">✨ Absorción rápida · Sin residuos grasos</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* How To Use + Product Details */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8 space-y-4">
              <h3 className="text-brand-dark font-black text-xl">📦 Detalle del Producto</h3>
              <div className="grid gap-3">
                <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl"><span className="text-slate-500 font-bold text-sm">Contenido</span><span className="text-brand-dark font-black">100 G</span></div>
                <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl"><span className="text-slate-500 font-bold text-sm">Presentación</span><span className="text-brand-dark font-black">Frasco + Caja</span></div>
                <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl"><span className="text-slate-500 font-bold text-sm">Uso</span><span className="text-brand-dark font-black">Tópico (Externo)</span></div>
                <div className="flex justify-between items-center bg-brand-primary/10 p-3 rounded-xl border border-brand-primary/20"><span className="text-brand-primary font-bold text-sm">Registro Sanitario</span><span className="text-brand-primary font-black">✔️ DISPONIBLE</span></div>
              </div>
              {/* Product Image inside detail */}
              <div className="pt-4 flex justify-center">
                <img src="/mama_oso_original_white.png" alt="Mama Oso Crema" className="w-32 h-32 object-contain" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 space-y-6"
          >
            <h2 className="text-2xl md:text-4xl font-heading font-black text-brand-dark leading-tight">
              🧑‍⚕️ ¿Cómo se usa?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Aplicación rápida y efectiva, sin dejar sensación grasosa.
            </p>
            <ul className="grid gap-3">
              {[
                { title: 'Paso 1: Aplicar', desc: 'Una pequeña cantidad en la zona deseada.', icon: <Droplet className="w-5 h-5"/> },
                { title: 'Paso 2: Masajear', desc: 'Suavemente hasta que se absorba.', icon: <Activity className="w-5 h-5"/> },
                { title: 'Paso 3: Repetir', desc: '2 a 3 veces al día para mejores resultados.', icon: <Thermometer className="w-5 h-5"/> }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-brand-primary/5 p-4 rounded-2xl border border-brand-primary/10">
                  <div className="w-10 h-10 bg-white text-brand-primary rounded-full flex items-center justify-center shrink-0 shadow-sm border border-brand-primary/20">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-brand-dark font-bold text-sm">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs font-bold text-brand-primary uppercase tracking-widest flex items-center gap-2">
              <UserCheck className="w-4 h-4"/> Uso continuo = mejores resultados
            </p>
            {onOrderClick && (
              <button onClick={onOrderClick} className="w-full bg-brand-primary text-white font-black py-4 rounded-2xl text-base flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/30 hover:bg-brand-secondary transition-colors mt-4">
                <ShoppingCart className="w-5 h-5" /> COMPRAR AHORA
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
