import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const reviews = [
    {
      name: "Carmen M.",
      location: "Lima, Perú",
      text: "Cuando empecé el tratamiento, estaba cojeando con un fuerte dolor en el pie derecho, la cadera y la espalda, lo que hacía difícil sentarme o caminar. Ahora, me siento mucho mejor y estoy agradecida por la mejora.",
      img: "/review_1.png",
      rating: 5,
      time: "Hace 2 semanas"
    },
    {
      name: "Rosario Gomez",
      location: "Cusco, Perú",
      text: "Caminar se sentía como pisando bultos de arcilla con entumecido y hormigueo. Ahora siento texturas, mi equilibrio es mejor, y estoy sin dolor. Caminar y dormir son mucho más fáciles.",
      img: "/review_2.png",
      rating: 5,
      time: "Hace 3 semanas"
    },
    {
      name: "Martha Medina",
      location: "Junín, Perú",
      text: "No había dormido en días debido al dolor constante. Mis pies estaban ardiendo, fríos y entumecidos. Después de la primera aplicación, sentí alivio inmediato y ahora puedo caminar durante horas y dormir toda la noche.",
      img: "/review_3.png",
      rating: 5,
      time: "Hace 1 mes"
    },
    {
      name: "Barbara Y.",
      location: "Arequipa, Perú",
      text: "He intentado de todo, desde pastillas hasta ejercicios. Solo la Crema Mama Oso es la única cosa que me ha funcionado para aliviar mi neuropatía. La recomiendo al 100%.",
      img: "/review_8.png",
      rating: 5,
      time: "Hace 1 semana"
    },
    {
      name: "Jorge Quispe",
      location: "Trujillo, Perú",
      text: "Trabajo en construcción y los dolores musculares eran terribles al final del día. Mi esposa me compró esta crema y desde la primera semana noté un alivio increíble. Ahora la uso todas las noches sin falta.",
      img: "/review_4.png",
      rating: 5,
      time: "Hace 5 días"
    },
    {
      name: "Lucía Fernández",
      location: "Lima, Perú",
      text: "Soy maratonista y después de cada entrenamiento mis piernas quedaban destrozadas. Con Mama Oso la recuperación es mucho más rápida. Lo aplico después de correr y al día siguiente estoy lista para entrenar de nuevo.",
      img: "/review_5.png",
      rating: 5,
      time: "Hace 4 días"
    },
    {
      name: "Don Pedro Huamán",
      location: "Huancayo, Perú",
      text: "Tengo 72 años y mis rodillas ya no me dejaban caminar tranquilo. Mi hija me regaló esta cremita y es lo mejor que me han dado. Me la pongo por las mañanas y puedo salir a caminar al parque sin problemas.",
      img: "/review_6.png",
      rating: 5,
      time: "Hace 1 semana"
    },
    {
      name: "Ana María Torres",
      location: "Piura, Perú",
      text: "Me encanta la textura, se absorbe super rápido y no deja sensación grasosa. El aroma a eucalipto es muy agradable y siento el frescor al instante. Ya voy por mi tercer frasco y no pienso dejarlo.",
      img: "/review_7.png",
      rating: 5,
      time: "Hace 3 días"
    }
  ];

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, reviews.length));
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex justify-center items-center gap-1 text-yellow-500 mb-2">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-dark">
            +1679 Clientes <span className="text-brand-primary">Satisfechos</span>
          </h2>
          <p className="text-slate-500 text-base">Recomendado por miles de clientes en todo el Perú que ya han recuperado su tranquilidad.</p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-3 mb-12 max-w-lg mx-auto">
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-slate-100">
            <div className="text-2xl font-black text-brand-primary">98%</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Satisfechos</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-slate-100">
            <div className="text-2xl font-black text-brand-primary">4.9</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Calificación</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-slate-100">
            <div className="text-2xl font-black text-brand-primary">1679+</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Reseñas</div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {reviews.slice(0, visibleCount).map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-slate-100 flex flex-col relative group hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <img src={review.img} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-brand-primary/20 shadow-sm shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-brand-dark text-sm truncate">{review.name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{review.location}</p>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: review.rating }).map((_, s) => (
                      <Star key={s} className="w-3 h-3 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 shrink-0 font-medium">{review.time}</span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                "{review.text}"
              </p>

              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-50">
                <ThumbsUp className="w-3 h-3 text-brand-primary" />
                <span className="text-[10px] text-slate-400 font-bold">Compra verificada ✓</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < reviews.length && (
          <div className="text-center mt-8">
            <button
              onClick={showMore}
              className="px-8 py-3 bg-white border-2 border-brand-primary/20 text-brand-primary font-bold text-sm rounded-full hover:bg-brand-primary hover:text-white transition-all"
            >
              Ver más reseñas ({reviews.length - visibleCount} restantes)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
