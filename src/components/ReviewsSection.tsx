import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      name: "Carmen M.",
      location: "Lima, Perú",
      text: "Sufría de dolores terribles en la espalda y las rodillas. Desde que uso MAMAOSO, puedo caminar y hacer mis cosas sin problema. La aplico 3 veces al día y el alivio es increíble.",
      img: "/review_1.png",
      rating: 5,
      time: "Hace 2 semanas"
    },
    {
      name: "Rosario Gomez",
      location: "Cusco, Perú",
      text: "Tengo artritis y el dolor en mis manos era insoportable. MAMAOSO me ha devuelto la movilidad. La textura es suave, se absorbe rápido y no deja grasa. ¡La recomiendo al 100%!",
      img: "/review_2.png",
      rating: 5,
      time: "Hace 3 semanas"
    },
    {
      name: "Martha Medina",
      location: "Junín, Perú",
      text: "Después de mis caminatas, mis piernas quedaban adoloridas e hinchadas. Con MAMAOSO la recuperación es mucho más rápida. Me la aplico y al día siguiente estoy como nueva.",
      img: "/review_3.png",
      rating: 5,
      time: "Hace 1 mes"
    },
    {
      name: "Barbara Y.",
      location: "Arequipa, Perú",
      text: "He probado muchas cremas para el dolor muscular y ninguna me funcionó como MAMAOSO. El eucalipto te da una sensación fresca inmediata y el dolor va bajando poco a poco.",
      img: "/review_8.png",
      rating: 5,
      time: "Hace 1 semana"
    },
    {
      name: "Jorge Quispe",
      location: "Trujillo, Perú",
      text: "Trabajo en construcción y los dolores musculares eran terribles al final del día. Mi esposa me compró MAMAOSO y desde la primera semana noté un alivio increíble.",
      img: "/review_4.png",
      rating: 5,
      time: "Hace 5 días"
    },
    {
      name: "Lucía Fernández",
      location: "Lima, Perú",
      text: "Soy deportista y después de cada entrenamiento mis piernas quedaban destrozadas. Con MAMAOSO la recuperación muscular es mucho más rápida, y además me hidrata la piel.",
      img: "/review_5.png",
      rating: 5,
      time: "Hace 4 días"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 320 : scrollLeft + 320;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-1 text-yellow-500 mb-2">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-dark max-w-xl">
              Lo que dicen nuestros <span className="text-brand-primary">clientes</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-brand-primary/20 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border-2 border-brand-primary/20 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="min-w-[300px] md:min-w-[380px] bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col snap-start"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="w-16 h-16 rounded-full object-cover border-4 border-brand-primary/10" 
                />
                <div>
                  <p className="font-bold text-brand-dark">{review.name}</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{review.location}</p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mb-8 flex-grow italic">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-brand-primary" />
                  <span className="text-xs font-black text-slate-400 uppercase">Compra Verificada</span>
                </div>
                <span className="text-xs text-slate-300">{review.time}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CSS for hiding scrollbar */}
        <style dangerouslySetInnerHTML={{ __html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}} />
      </div>
    </section>
  );
};
