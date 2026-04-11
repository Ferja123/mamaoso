import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: "Carmen M",
      location: "LIMA PERÚ",
      text: "Cuando empecé el tratamiento, estaba cojeando con un fuerte dolor en el pie derecho, la cadera y la espalda, lo que hacía difícil sentarme o caminar. Ahora, me siento mucho mejor y estoy agradecido por la mejora.",
      avatar: "C"
    },
    {
      name: "Rosario Gomez",
      location: "CUSCO PERÚ",
      text: "Caminar se sentía como pisando bultos de arcilla con entumecido y hormigueo. Ahora siento texturas, mi equilibrio es mejor, y estoy sin dolor, caminando y durmiendo son mucho más fáciles.",
      avatar: "R"
    },
    {
      name: "Martha Medina",
      location: "JUNIN PERÚ",
      text: "No había dormido en días debido al dolor constante. Mis pies estaban ardiendo, frío y entumecido. Después de la primera aplicación, sentí alivio inmediato y ahora puedo caminar durante horas y dormir durante la noche.",
      avatar: "M"
    }
  ];

  return (
    <section className="py-24 px-4 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex justify-center items-center gap-1 text-yellow-500 mb-2">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-dark">
            98% de clientes están <span className="text-brand-primary">satisfechos</span>
          </h2>
          <p className="text-slate-600 text-lg">Recomendado por miles de clientes en todo el Perú que ya han recuperado su tranquilidad y bienestar.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col relative group hover:border-brand-primary/20 transition-all"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors" />
              
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              
              <p className="text-slate-600 font-body leading-relaxed flex-grow italic mb-8 relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-brand-dark text-brand-gold font-black flex items-center justify-center shrink-0 text-xl border-2 border-brand-primary/20">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-bold text-brand-dark">{review.name}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
