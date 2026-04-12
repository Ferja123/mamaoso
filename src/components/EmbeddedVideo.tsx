import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const EmbeddedVideo: React.FC<{ onOrderClick?: () => void }> = ({ onOrderClick }) => {
  return (
    <section className="py-16 md:py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[120px]" />
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4">
          Descubre el <span className="text-brand-primary">Poder de Mama Oso</span>
        </h2>
        <p className="text-slate-400 mb-12 text-lg">Mira cómo actúa directamente sobre el origen del dolor y devuelve la tranquilidad.</p>

        <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
          {/* High Impact HTML Video iframe */}
          <iframe 
             src="/promo_video.html"
             className="relative z-10 w-full h-full object-cover border-none bg-slate-900 pointer-events-none"
             title="Mama Oso Promo Animation"
             scrolling="no"
          />
        </div>

        {onOrderClick && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <button
              onClick={onOrderClick}
              className="bg-brand-primary text-white font-black py-4 px-10 rounded-2xl text-lg shadow-[0_20px_40px_-10px_rgba(16,185,129,0.5)] transition-all hover:scale-[1.03] active:scale-95 uppercase tracking-tight"
            >
              LO QUIERO AHORA
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
