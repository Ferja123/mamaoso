import React from 'react';
import { motion } from 'framer-motion';
import { Play, ShieldCheck, Users, Award } from 'lucide-react';

export const VideoSection: React.FC<{ onOrderClick: () => void }> = ({ onOrderClick }) => {
  return (
    <section className="py-16 md:py-24 px-4 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-secondary rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white">
            Mira Cómo <span className="text-brand-primary">Funciona</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Miles de personas ya experimentan alivio inmediato con la Crema Mama Oso. Descubre cómo puede ayudarte a ti también.
          </p>
        </div>

        {/* Video Container - Interactive TikTok Style */}
        <div className="relative max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 aspect-[9/14] md:aspect-video bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark cursor-pointer group"
            onClick={onOrderClick}
          >
            {/* Animated Product Showcase */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <motion.img
                  src="/mama_oso_original_white.png"
                  alt="Mama Oso Crema"
                  className="w-48 md:w-64 object-contain drop-shadow-2xl"
                  animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Glow effect */}
                <div className="absolute -inset-8 bg-brand-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
              </div>
            </div>

            {/* Floating Info Cards */}
            <motion.div
              className="absolute top-6 left-4 md:left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl max-w-[180px]"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-black text-brand-dark uppercase">Registro Sanitario</p>
                  <p className="text-[8px] text-slate-500">Producto Certificado</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-6 right-4 md:right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl max-w-[180px]"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-black text-brand-dark uppercase">+1679 Clientes</p>
                  <p className="text-[8px] text-slate-500">Satisfechos en Perú</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-4 md:left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl max-w-[200px]"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-black text-brand-dark uppercase">Alta Demanda 🔥</p>
                  <p className="text-[8px] text-slate-500">Producto de Alta Rotación</p>
                </div>
              </div>
            </motion.div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30 group-hover:scale-110 transition-transform"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </motion.div>
            </div>

            {/* Bottom CTA Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <div className="text-center">
                <p className="text-white font-black text-lg md:text-xl mb-2">¡Ordena la Tuya Ahora!</p>
                <p className="text-white/70 text-xs">Toca para ir al formulario de pedido</p>
              </div>
            </div>

            {/* TikTok-style engagement indicators */}
            <div className="absolute right-3 bottom-24 flex flex-col items-center gap-4">
              <div className="text-center">
                <div className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-1">
                  <span className="text-lg">❤️</span>
                </div>
                <span className="text-white text-[10px] font-bold">15.2k</span>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-1">
                  <span className="text-lg">💬</span>
                </div>
                <span className="text-white text-[10px] font-bold">892</span>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-1">
                  <span className="text-lg">🔗</span>
                </div>
                <span className="text-white text-[10px] font-bold">Pedir</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
