import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, MessageCircle } from 'lucide-react';

// Components
import { UrgencyBanner } from './components/UrgencyBanner';
import { HeroSection } from './components/HeroSection';
import { VideoSection } from './components/VideoSection';
import { BenefitsGrid } from './components/BenefitsGrid';
import { SolutionSection } from './components/SolutionSection';
import { IngredientsSection } from './components/IngredientsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { MiddleCTA } from './components/MiddleCTA';
import { OrderForm } from './components/OrderForm';

export default function App() {
  const [stock, setStock] = useState(14);
  const [timeLeft, setTimeLeft] = useState(23 * 60 + 54);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

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
      setShowFloatingCTA(scrollPos > 400 && !orderVisible);
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
    <div className="min-h-screen bg-brand-light font-body text-slate-900">
      {/* Sticky Urgency Banner */}
      <UrgencyBanner timeLeft={timeLeft} formatTime={formatTime} />

      <main>
        {/* Hero with Product */}
        <HeroSection onOrderClick={scrollToOrder} />

        {/* CTA after Hero */}
        <MiddleCTA onOrderClick={scrollToOrder} />

        {/* TikTok-Style Interactive Video */}
        <VideoSection onOrderClick={scrollToOrder} />

        {/* What It Does - Benefits */}
        <BenefitsGrid />

        {/* CTA after Benefits */}
        <MiddleCTA
          onOrderClick={scrollToOrder}
          text="COMPRAR AHORA"
          subtext="Oferta por tiempo limitado · Stock reducido"
        />

        {/* How to Use + Target Audience */}
        <SolutionSection />

        {/* Ingredients */}
        <IngredientsSection />

        {/* CTA after Ingredients */}
        <MiddleCTA
          onOrderClick={scrollToOrder}
          text="¡LO NECESITO!"
          subtext="Garantía de devolución de 90 días"
        />

        {/* Reviews with Photos */}
        <ReviewsSection />

        {/* Order Form */}
        <OrderForm stock={stock} />
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark py-10 px-4 text-center border-t border-brand-primary/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-brand-primary font-heading font-black text-2xl uppercase tracking-tighter">MAMA OSO ORIGINAL</div>
          <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">© 2026 Mama Oso Perú · Con Registro Sanitario · Todos los derechos reservados</p>
          <p className="text-[9px] text-slate-500 max-w-lg mx-auto italic leading-relaxed">
            Este producto cuenta con Registro Sanitario. Los resultados pueden variar. No reemplaza el consejo médico profesional.
          </p>
        </div>
      </footer>

      {/* Floating CTA + WhatsApp */}
      <AnimatePresence>
        {showFloatingCTA && (
          <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-[150] flex flex-col md:flex-row items-stretch md:items-end gap-3">
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/51919749480?text=Hola,%20quiero%20información%20sobre%20la%20Crema%20Mama%20Oso"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="bg-green-500 text-white h-14 w-14 rounded-full shadow-2xl flex items-center justify-center border-4 border-white hover:bg-green-600 transition-colors shadow-green-500/40 self-end md:self-auto"
            >
              <MessageCircle className="w-7 h-7 fill-white" />
            </motion.a>

            {/* Floating Order Button - Full width on mobile */}
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToOrder}
              className="bg-brand-primary text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 border-2 border-white/20 uppercase font-black text-sm tracking-wider shadow-brand-primary/40 w-full md:w-auto"
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
