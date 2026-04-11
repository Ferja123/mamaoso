import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, MessageCircle } from 'lucide-react';

// Components
import { UrgencyBanner } from './components/UrgencyBanner';
import { HeroSection } from './components/HeroSection';
import { SolutionSection } from './components/SolutionSection';
import { BenefitsGrid } from './components/BenefitsGrid';
import { IngredientsSection } from './components/IngredientsSection';
import { ScienceSection } from './components/ScienceSection';
import { ReviewsSection } from './components/ReviewsSection';
import { OrderForm } from './components/OrderForm';

export default function App() {
  const [stock, setStock] = useState(14);
  const [timeLeft, setTimeLeft] = useState(23 * 60 + 54);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  // Timers and Stock simulation (Urgency)
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => (prev > 0 ? prev - 1 : 0)), 1000);
    const stockTimer = setInterval(() => {
      setStock(prev => (prev > 3 && Math.random() > 0.7 ? prev - 1 : prev));
    }, 15000);

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const orderEl = document.getElementById('ordenar');
      let orderVisible = false;
      if (orderEl) {
        const rect = orderEl.getBoundingClientRect();
        orderVisible = rect.top < window.innerHeight && rect.bottom > 0;
      }
      setShowFloatingCTA(scrollPos > 600 && !orderVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      clearInterval(stockTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const scrollToOrder = () => {
    document.getElementById('ordenar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-light font-body text-slate-900 selection:bg-brand-gold/30">
      {/* Sticky Banner with Urgency Timer */}
      <UrgencyBanner timeLeft={timeLeft} formatTime={formatTime} />

      <main>
        {/* Premium Hero with Branding */}
        <HeroSection onOrderClick={scrollToOrder} />

        {/* Storytelling: Problem vs Solution */}
        <SolutionSection />

        {/* Benefits Grid */}
        <BenefitsGrid />

        {/* Science and Diagram */}
        <ScienceSection />

        {/* Nutritional Info Section */}
        <IngredientsSection />

        {/* Real Customer Reviews */}
        <ReviewsSection />

        {/* High Conversion Order Form with Stock Urgency */}
        <OrderForm stock={stock} />
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark py-16 px-4 text-center border-t border-brand-primary/10">
        <div className="max-w-7xl mx-auto space-y-8">
           <div className="text-brand-primary font-heading font-black text-3xl uppercase tracking-tighter">MAMA OSO ORIGINAL</div>
           <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">© 2026 Mama Oso Perú. Con Registro Sanitario. Todos los derechos reservados.</p>
           <p className="text-[10px] text-slate-500 max-w-xl mx-auto italic leading-relaxed">
              Este producto cuenta con Registro Sanitario. Los resultados pueden variar de persona a persona. No reemplaza el consejo médico profesional. Consulte a su médico antes de iniciar cualquier tratamiento para la neuropatía.
           </p>
        </div>
      </footer>

      {/* Floating Elements (CTA & WhatsApp) */}
      <AnimatePresence>
        {showFloatingCTA && (
          <div className="fixed bottom-6 right-6 z-[150] flex flex-col items-end gap-3">
            {/* Real WhatsApp Button */}
            <motion.a 
              href="https://wa.me/51919749480?text=Hola,%20quiero%20información%20sobre%20la%20Crema%20Mama%20Oso"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="bg-green-500 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border-4 border-white hover:bg-green-600 transition-colors shadow-green-500/40"
            >
              <MessageCircle className="w-8 h-8 fill-white" />
            </motion.a>

            {/* Floating Order CTA */}
            <motion.button 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToOrder}
              className="bg-brand-primary text-white px-8 py-5 rounded-full shadow-2xl flex items-center gap-3 border-2 border-white/20 uppercase font-black text-xs tracking-widest shadow-brand-primary/40"
            >
              <Truck className="w-5 h-5" />
              ORDENAR AHORA
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
