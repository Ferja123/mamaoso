import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Thermometer, UserCheck, Droplet, ShoppingCart, CheckCircle2 } from 'lucide-react';

interface SolutionProps {
  onOrderClick?: () => void;
}

export const SolutionSection: React.FC<SolutionProps> = ({ onOrderClick }) => {
  const verifiedJar = '/mama_oso_verified.png';
  const lifestyleImg = '/lifestyle_impact_1.jpg';

  return (
    <section className="py-16 md:py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
        
        {/* Active Lifestyle & Relief Connection */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary font-black text-[10px] uppercase tracking-widest border border-brand-primary/20">
              <Activity className="w-3 h-3" /> Resultados Reales
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-dark leading-tight tracking-tight">
              Recupera el placer de <span className="text-brand-primary">moverte sin límites</span>
            </h2>
            
            <p className="text-lg text-slate-500 leading-relaxed font-body">
              No dejes que el hormigueo y el dolor detengan tu día. La Crema Mama Oso ha sido formulada para actuar rápidamente, devolviéndote la libertad que necesitas para tus actividades diarias.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
               {[
                 { title: "Alivio Profundo", desc: "Actúa en la raíz del malestar." },
                 { title: "Recuperación Veloz", desc: "Ideal para después del ejercicio." },
                 { title: "Bienestar Diario", desc: "Para adultos de todas las edades." },
                 { title: "Poder Natural", desc: "Magnesio y extractos puros." }
               ].map((benefit, i) => (
                 <div key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <div>
                       <p className="font-bold text-brand-dark text-sm">{benefit.title}</p>
                       <p className="text-xs text-slate-400">{benefit.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            {onOrderClick && (
              <button 
                onClick={onOrderClick} 
                className="bg-brand-primary hover:bg-brand-secondary text-white font-black py-5 px-10 rounded-2xl text-lg shadow-xl shadow-brand-primary/30 transition-all hover:scale-[1.03] flex items-center gap-3 active:scale-95 group"
              >
                <ShoppingCart className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                SÍ, QUIERO EL ALIVIO
              </button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-brand-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border-8 border-white bg-slate-50 relative aspect-[4/5] md:aspect-auto">
              {/* High Impact Lifestyle Image from Oechsle Source */}
              <img 
                src={lifestyleImg} 
                alt="Estilo de vida activo con Mama Oso" 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent p-10 flex flex-col items-center">
                 <div className="bg-white/90 backdrop-blur rounded-2xl py-3 px-6 shadow-2xl border border-white/20">
                    <p className="text-brand-dark font-black text-sm text-center tracking-tighter uppercase whitespace-nowrap">✨ Fórmula Original NL Nutra</p>
                 </div>
              </div>
            </div>
            
            {/* Floating Trust Indicator */}
            <div className="absolute -top-6 -right-6 md:-right-12 bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 flex flex-col items-center gap-2">
               <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-black italic shadow-inner">100g</div>
               <p className="text-[10px] font-black uppercase text-brand-primary tracking-widest text-center leading-tight">Envase<br/>Original</p>
            </div>
          </motion.div>
        </div>

        {/* Product Application & Detail */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="bg-slate-900 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden text-white group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full" />
              <div className="relative z-10 space-y-8">
                 <h3 className="text-2xl font-black text-white">¿Cómo aplicarlo?</h3>
                 <div className="space-y-6">
                    {[
                      { step: "01", title: "Limpiar", desc: "Asegura que la zona esté limpia y seca.", icon: <Droplet className="w-5 h-5"/> },
                      { step: "02", title: "Aplicar", desc: "Pon una pequeña cantidad sobre el área.", icon: <Activity className="w-5 h-5"/> },
                      { step: "03", title: "Masajear", desc: "Fricciona suavemente hasta absorber.", icon: <Thermometer className="w-5 h-5"/> }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-5 group/item">
                        <div className="text-brand-primary font-black text-2xl opacity-40 group-hover/item:opacity-100 transition-opacity">{item.step}</div>
                        <div>
                          <p className="font-black text-lg text-white">{item.title}</p>
                          <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
                 
                 <div className="pt-8 flex justify-center scale-110 md:scale-125">
                   <img src={verifiedJar} alt="Frasco Mama Oso Verificado" className="w-40 h-40 object-contain drop-shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-transform group-hover:scale-105 duration-500" />
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-dark leading-tight">
              Especificaciones de <span className="text-brand-primary">Calidad</span>
            </h2>
            
            <div className="grid gap-4">
               {[
                 { label: "Contenido Neto", value: "100 Gramos", icon: "💎" },
                 { label: "Fabricante", value: "NL Nutra", icon: "🏢" },
                 { label: "Registro Sanitario", value: "Vigente y Verificado", icon: "📑" },
                 { label: "Categoría", value: "Bienestar Muscular", icon: "🌿" }
               ].map((spec, i) => (
                 <div key={i} className="flex justify-between items-center p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3">
                       <span className="text-xl">{spec.icon}</span>
                       <span className="text-slate-500 font-bold text-sm uppercase tracking-wide">{spec.label}</span>
                    </div>
                    <span className="text-brand-dark font-black text-sm md:text-base">{spec.value}</span>
                 </div>
               ))}
            </div>

            <div className="p-8 bg-brand-primary/5 rounded-[2.5rem] border-2 border-dashed border-brand-primary/20 flex flex-col items-center text-center gap-3">
              <UserCheck className="w-10 h-10 text-brand-primary mb-2" />
              <p className="text-brand-dark font-black text-lg">Recomendado por Especialistas</p>
              <p className="text-slate-500 text-sm">El uso constante de Mama Oso ha reportado una mejora del 94% en la sensación de confort en adultos mayores.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
