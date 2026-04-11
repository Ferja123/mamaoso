import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'lucide-react';

interface MiddleCTAProps {
  onOrderClick: () => void;
  text?: string;
  subtext?: string;
}

export const MiddleCTA: React.FC<MiddleCTAProps> = ({
  onOrderClick,
  text = "¡QUIERO MI MAMA OSO!",
  subtext = "Pago contraentrega · Envío a todo el Perú"
}) => {
  return (
    <div className="py-8 px-4 bg-gradient-to-r from-brand-primary to-brand-secondary">
      <div className="max-w-xl mx-auto text-center space-y-4">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOrderClick}
          className="w-full bg-white text-brand-primary font-black py-5 px-8 rounded-2xl shadow-2xl text-lg uppercase tracking-wide flex items-center justify-center gap-3 hover:bg-brand-light transition-colors"
        >
          <ShoppingCart className="w-6 h-6" />
          {text}
          <ArrowRight className="w-5 h-5" />
        </motion.button>
        <p className="text-white/80 text-xs font-medium">{subtext}</p>
      </div>
    </div>
  );
};
