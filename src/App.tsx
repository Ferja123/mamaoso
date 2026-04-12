import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, MessageCircle } from 'lucide-react';

// Components
import { UrgencyBanner } from './components/UrgencyBanner';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { BenefitsGrid } from './components/BenefitsGrid';
import { EmbeddedVideo } from './components/EmbeddedVideo';
import { ExpertEndorsement } from './components/ExpertEndorsement';
import { SolutionSection } from './components/SolutionSection';
import { IngredientsSection } from './components/IngredientsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { OrderForm } from './components/OrderForm';
import { LivePurchaseNotification } from './components/LivePurchaseNotification';

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
      setShowFloatingCTA(scrollPos > 500 && !orderVisible);
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
    <div className="min-h-screen bg-white font-body text-slate-900">
      {/* 1. Sticky Urgency Banner */}
      <UrgencyBanner timeLeft={timeLeft} formatTime={formatTime} />

      <main>
        {/* 2. Hero: Real Product + CTA + Trust Badges */}
        <HeroSection onOrderClick={scrollToOrder} />

        {/* 3. Problem Agitation: Pain points + Solution intro */}
        <ProblemSection onOrderClick={scrollToOrder} />

        {/* 4. Benefits: What does MAMAOSO do? */}
        <BenefitsGrid />

        {/* 5. High Impact Video Showcase */}
        <EmbeddedVideo onOrderClick={scrollToOrder} />

        {/* 6. Expert Endorsement: Trust anchor with Medical Professional */}
        <ExpertEndorsement />

        {/* 7. How To Use + Product Detail + Who It's For */}
        <SolutionSection onOrderClick={scrollToOrder} />

        {/* 8. Ingredients + Botanical Imagery */}
        <IngredientsSection />

        {/* 9. Social Proof: Reviews with photos */}
        <ReviewsSection />

        {/* 10. Guarantee Promise: Risk reversal */}
        <GuaranteeSection />

        {/* 11. Order Form with Pack Images */}
        <OrderForm stock={stock} />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 text-center border-t border-brand-primary/10">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="text-brand-primary font-heading font-black text-2xl uppercase tracking-tight">MAMAOSO · NL NUTRA</div>
          <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">© 2026 MAMAOSO Perú · Con Registro Sanitario · Todos los derechos reservados</p>
          <div className="flex flex-wrap justify-center gap-4 text-slate-400 text-[10px] uppercase font-bold tracking-widest">
            <span>Envío Gratis</span>
            <span className="text-white/20">|</span>
            <span>Pago Contraentrega</span>
            <span className="text-white/20">|</span>
            <span>Garantía de Satisfacción</span>
          </div>
          <p className="text-[9px] text-slate-600 max-w-md mx-auto italic leading-relaxed pt-4">
            Este producto cuenta con Registro Sanitario. Los resultados pueden variar dependiendo de la condición física de cada persona. No reemplaza el consejo médico profesional ni pretende diagnosticar enfermedades. Crema dermocosmética de uso tópico externo.
          </p>
        </div>
      </footer>

      {/* Floating CTA + WhatsApp */}
      <AnimatePresence>
        {showFloatingCTA && (
          <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-[150] flex items-end gap-3">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/51919749480?text=Hola,%20quiero%20información%20sobre%20la%20Crema%20MAMAOSO"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="bg-green-500 text-white h-12 w-12 rounded-full shadow-2xl flex items-center justify-center border-3 border-white hover:bg-green-600 transition-colors shadow-green-500/40 shrink-0"
            >
              <MessageCircle className="w-6 h-6 fill-white" />
            </motion.a>

            {/* Order CTA */}
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToOrder}
              className="bg-brand-primary text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 border-2 border-white/20 uppercase font-black text-xs tracking-wider shadow-brand-primary/40 flex-1 md:flex-none"
            >
              <Truck className="w-4 h-4" />
              ORDENAR AHORA
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Live Sales Notification */}
      <LivePurchaseNotification />
    </div>
  );
}
