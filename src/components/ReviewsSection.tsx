import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      name: "Carmen Mendoza",
      location: "San Martín de Porres, Lima",
      text: "Sufría de dolores terribles en la espalda y las rodillas. Desde que uso MAMAOSO, puedo caminar y hacer mis cosas sin problema. La aplico 3 veces al día y el alivio es increíble.",
      img: "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=150&h=150&fit=crop",
      rating: 5,
      time: "Hace 2 semanas"
    },
    {
      name: "Rosario Gomez",
      location: "Cusco, Perú",
      text: "Tengo artritis y el dolor en mis manos era insoportable por el frío. MAMAOSO me ha devuelto la movilidad. La textura es suave, se absorbe rápido y no deja manchas. ¡La recomiendo!",
      img: "https://images.unsplash.com/photo-1569424785891-b1277a160a28?w=150&h=150&fit=crop",
      rating: 5,
      time: "Hace 3 semanas"
    },
    {
      name: "Martha Medina",
      location: "Chanchamayo, Junín",
      text: "Después de mis caminatas por el mercado, mis piernas quedaban adoloridas e hinchadas. Con MAMAOSO la recuperación es mucho más rápida. Me echo y al día siguiente estoy como nueva.",
      img: "https://images.unsplash.com/photo-1507120878502-04e3230dd692?w=150&h=150&fit=crop",
      rating: 5,
      time: "Hace 1 mes"
    },
    {
      name: "Julio Reyes",
      location: "Cerro Colorado, Arequipa",
      text: "He probado muchas cremas de la farmacia para el dolor muscular y ninguna me funcionó como esta crema. El eucalipto te da una frescura inmediata.",
      img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=150&h=150&fit=crop",
      rating: 5,
      time: "Hace 1 semana"
    },
    {
      name: "Jorge Quispe",
      location: "Trujillo, Perú",
      text: "Trabajo en construcción y las punzadas en la cintura eran terribles al final del día. Mi esposa me compró MAMAOSO y desde la primera semana noté tremendo alivio.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
      time: "Hace 5 días"
    },
    {
      name: "Lucía Fernández",
      location: "Villa El Salvador, Lima",
      text: "Soy muy activa y mis rodillas empezaron a fallar por la edad. Aplicarme MAMAOSO antes y después de salir a caminar ha regresado el confort a mis articulaciones.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
      rating: 5,
      time: "Hace 4 días"
    },
    {
      name: "Ana Velásquez",
      location: "Piura, Perú",
      text: "Compré el paquete de 3 frascos porque a mis papás les encanta. La uña de gato y la árnica hacen un efecto casi mágico. Excelentes resultados de verdad.",
      img: "https://images.unsplash.com/photo-1614583225154-5feaba0f707f?w=150&h=150&fit=crop",
      rating: 5,
      time: "Hace 2 meses"
    },
    {
      name: "Víctor Huamán",
      location: "El Tambo, Huancayo",
      text: "El hormigueo en mis pies no me dejaba dormir bien por las noches. Desde que la uso en mis pantorrillas y tobillos duermo tranquilo. Es una crema excelente.",
      img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=150&h=150&fit=crop",
      rating: 5,
      time: "Hace 3 días"
    },
    {
      name: "Silvia Paredes",
      location: "Ica, Perú",
      text: "Llegó súper rápido y pagué al momento de recibirlo. La crema calienta al frotar y luego refresca. Mi cuello y hombros se sienten mucho más ligeros durante mi turno de trabajo.",
      img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop",
      rating: 5,
      time: "Hace 1 mes"
    },
    {
      name: "Raúl Cárdenas",
      location: "Callao, Perú",
      text: "Tengo un esguince mal curado de joven que de vez en cuando me mataba de dolor. Esta es la primera pomada natural que de hecho desinflama. Recomendadísimo.",
      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop",
      rating: 5,
      time: "Hace 1 semana"
    },
    {
      name: "Teresa López",
      location: "Pucallpa, Perú",
      text: "La calidad se siente desde que abres el envase. Se esparce muy rico y no se pega a la ropa. Me calma en minutos los dolores por mala postura.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      rating: 5,
      time: "Hace 6 días"
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
