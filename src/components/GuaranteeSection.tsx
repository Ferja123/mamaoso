import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, RotateCcw, Lock, Truck } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-brand-dark text-white overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 text-center backdrop-blur-sm">
          <div className="flex justify-center mb-8">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative w-32 h-32 md:w-40 md:h-40"
            >
              <div className="absolute inset-0 border-4 border-dashed border-brand-primary/40 rounded-full" />
              <div className="absolute inset-2 border-4 border-double border-brand-primary/60 rounded-full flex items-center justify-center bg-brand-dark shadow-2xl">
                 <div className="text-center">
                    <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-primary">Garantía</p>
                    <p className="text-3xl md:text-4xl font-black">90</p>
                    <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/50">Días</p>
                 </div>
              </div>
            </motion.div>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-black mb-6 leading-tight">
            Nuestra Promesa: <span className="text-brand-primary">100% Satisfacción</span>
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl font-body leading-relaxed max-w-3xl mx-auto mb-10">
            Estamos tan seguros de la calidad de <span className="text-white font-bold">Mama Oso</span> que te ofrecemos una garantía de 90 días. Si no sientes una mejora significativa, te devolvemos tu dinero sin preguntas.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 border-t border-white/10">
            <div className="space-y-2">
              <div className="flex justify-center"><RotateCcw className="w-6 h-6 text-brand-primary" /></div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">90 Días de Prueba</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center"><ShieldCheck className="w-6 h-6 text-brand-primary" /></div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Eficacia Probada</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center"><Lock className="w-6 h-6 text-brand-primary" /></div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Pago Seguro</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center"><Truck className="w-6 h-6 text-brand-primary" /></div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Envío Certificado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
