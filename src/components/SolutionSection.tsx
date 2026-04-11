import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Thermometer, UserCheck, Droplet } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Sub-section: Target Audience & Pain Points */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-full font-bold text-[10px] tracking-widest uppercase">
              🎯 Perfil Ideal
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-dark leading-tight">
              Diseñado para quienes no pueden parar de moverse.
            </h2>
            <p className="text-lg text-slate-600 font-body leading-relaxed">
              Ideal para personas activas, adultos mayores o cualquier persona con molestias corporales o cansancio acumulado tras una larga jornada.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                { icon: '👨', text: 'Personas con dolor muscular o fatiga extrema.' },
                { icon: '👵', text: 'Adultos mayores que buscan movilidad y descanso.' },
                { icon: '🏋️', text: 'Deportistas y personas físicamente activas.' },
                { icon: '👩', text: 'Público general con necesidad de bienestar y relajación.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-brand-light p-4 rounded-xl border border-slate-100 shadow-sm">
                  <div className="text-2xl bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-sm shrink-0">{item.icon}</div>
                  <p className="font-bold text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-primary/10 rounded-[3rem] blur-2xl opacity-40 -z-10" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
               {/* Aesthetic image showing active healthy person */}
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" alt="Persona activa sana" className="w-full h-[500px] object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Sub-section: How To Use & Details */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 relative"
          >
            <div className="absolute -inset-4 bg-slate-200 rounded-[3rem] blur-2xl opacity-40 -z-10" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white p-8">
              <h3 className="text-brand-dark font-black text-2xl mb-6">📦 Detalle del Producto</h3>
              <div className="grid gap-y-4">
                 <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl"><span className="text-slate-500 font-bold text-sm">Contenido</span><span className="text-brand-dark font-black">100 G</span></div>
                 <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl"><span className="text-slate-500 font-bold text-sm">Presentación</span><span className="text-brand-dark font-black">Frasco + Caja</span></div>
                 <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl"><span className="text-slate-500 font-bold text-sm">Uso</span><span className="text-brand-dark font-black">Tópico (Externo)</span></div>
                 <div className="flex justify-between items-center bg-brand-primary/10 p-4 rounded-xl border border-brand-primary/20"><span className="text-brand-primary font-bold text-sm">Registro Sanitario</span><span className="text-brand-primary font-black">✔️ DISPONIBLE</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-dark leading-tight">
              🧑‍⚕️ ¿Cómo se usa?
            </h2>
            <p className="text-lg text-slate-600 font-body leading-relaxed">
              Diseñado para una aplicación rápida y efectiva, sin dejar sensación grasosa molesta.
            </p>
            
             <ul className="grid gap-4 pt-4">
                {[
                  { title: 'Paso 1: Aplicación', desc: 'Usar una pequeña cantidad en la zona deseada.', icon: <Droplet className="w-5 h-5"/> },
                  { title: 'Paso 2: Masaje', desc: 'Masajear suavemente hasta que se absorba por completo.', icon: <Activity className="w-5 h-5"/> },
                  { title: 'Paso 3: Frecuencia', desc: 'Repetir la acción 2 a 3 veces al día.', icon: <Thermometer className="w-5 h-5"/> }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 bg-brand-primary/5 p-4 rounded-2xl border border-brand-primary/10">
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
             
             <p className="text-xs font-bold text-brand-primary uppercase tracking-widest pt-2 flex items-center gap-2">
                <UserCheck className="w-4 h-4"/> Recomendado uso continuo para mejores resultados
             </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
