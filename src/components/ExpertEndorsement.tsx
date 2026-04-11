import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';

export const ExpertEndorsement: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 lg:p-16 relative border border-slate-100 shadow-xl">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-primary/5 rounded-full blur-[80px] -z-10" />
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Wrapper */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[320px] lg:max-w-[400px] shrink-0"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                {/* Using an existing portrait image from public folder */}
                <img src="/review_8.png" alt="Dr. Luis Vargas" className="w-full h-full object-cover" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-brand-primary tracking-widest">Especialista en Neurología</p>
                  <p className="text-sm font-bold text-brand-dark">Colegiado y Certificado</p>
                </div>
              </div>
            </motion.div>

            {/* Content Area */}
            <div className="space-y-6 md:space-y-8 flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-bold text-xs uppercase tracking-widest">
                <Award className="w-3 h-3" /> 
                Opinión Médica
              </div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-dark leading-tight">
                "La crema Mama Oso es ahora parte de <span className="text-brand-primary">mi arsenal terapéutico</span>."
              </h2>
              
              <div className="space-y-4 text-slate-600 text-lg md:text-xl italic leading-relaxed font-body">
                <p>
                  "Había probado varios medicamentos orales sin obtener el alivio que mis pacientes necesitaban. Les recomendé la crema Mama Oso como una alternativa innovadora y enfocada directamente en los receptores nerviosos."
                </p>
                <p>
                  "Tras usar la crema durante dos semanas, los reportes fueron una disminución significativa del dolor y del ardor. Es una solución eficaz para quienes buscan recuperar su calidad de vida."
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-200">
                <p className="font-heading font-black text-xl text-brand-dark uppercase tracking-wide">Dr. Luis Vargas</p>
                <p className="text-brand-primary font-bold text-sm tracking-widest uppercase">Especialista en Rehabilitación y Neurología</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
