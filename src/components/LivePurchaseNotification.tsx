import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const names = ['María', 'Rosa', 'Carmen', 'Ana', 'Laura', 'Sofía', 'Lucía', 'Juana', 'Elena', 'Teresa', 'Martha', 'Patricia', 'Isabel', 'Elizabeth', 'Katy'];
const cities = ['Lima', 'Arequipa', 'Trujillo', 'Chiclayo', 'Piura', 'Cusco', 'Ica', 'Huancayo', 'Tacna', 'Juliaca', 'Cajamarca', 'Pucallpa'];
const products = ['1 Frasco de MAMAOSO', 'Promo 2 Frascos', 'Promo 3 Frascos', '1 Frasco de MAMAOSO', 'Promo 2 Frascos'];
const networks = ['TikTok', 'Facebook', 'Instagram'];
const times = ['hace 1 minuto', 'hace 2 minutos', 'hace 3 minutos', 'hace 5 minutos', 'hace 8 minutos', 'justo ahora'];

export const LivePurchaseNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [purchaseData, setPurchaseData] = useState({ name: '', city: '', product: '', time: '', network: '' });

  useEffect(() => {
    const triggerNotification = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      const product = products[Math.floor(Math.random() * products.length)];
      const time = times[Math.floor(Math.random() * times.length)];
      const network = networks[Math.floor(Math.random() * networks.length)];

      setPurchaseData({ name, city, product, time, network });
      setIsVisible(true);

      // Hide after 6 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Initial delay of 1 second for immediate impact
    const initialTimer = setTimeout(triggerNotification, 1000);

    // Then random interval between 8 and 15 seconds
    const intervalMapper = setInterval(() => {
      if (!isVisible) {
         triggerNotification();
      }
    }, Math.random() * 7000 + 8000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalMapper);
    };
  }, [isVisible]);

  const renderNetworkIcon = () => {
    switch(purchaseData.network) {
      case 'TikTok':
        return <span className="font-bold text-[#00f2fe] drop-shadow-[0_0_1px_#ff0050]">TikTok</span>;
      case 'Facebook':
        return <span className="font-bold text-blue-500">Facebook</span>;
      case 'Instagram':
        return <span className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">Instagram</span>;
      default:
        return null;
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           initial={{ opacity: 0, y: -20, scale: 0.95 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           exit={{ opacity: 0, y: -20, scale: 0.95 }}
           transition={{ type: 'spring', stiffness: 400, damping: 25 }}
           className="fixed top-20 left-4 right-4 md:top-auto md:bottom-6 md:left-6 md:right-auto md:w-80 z-[160] flex items-center bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] border border-slate-100 p-3 pr-4 pointer-events-none"
         >
           {/* Image */}
           <div className="w-12 h-12 bg-slate-50 rounded-lg shrink-0 flex items-center justify-center mr-3 border border-slate-100 p-1">
             <img 
               src="/premium_jar_1775966136593.png" 
               alt="MAMAOSO" 
               className="w-full h-full object-contain drop-shadow-md"
             />
           </div>
           
           {/* Text Content */}
           <div className="flex-1 min-w-0">
             <div className="flex items-center justify-between mb-0.5 relative">
               <p className="text-xs font-bold text-slate-800 truncate pr-2">
                 {purchaseData.name} de {purchaseData.city}
               </p>
               <div className="flex items-center gap-1 shrink-0">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
               </div>
             </div>
             
             <p className="text-[11px] text-slate-500 line-clamp-1 leading-tight mb-1">
               compró <span className="font-semibold text-brand-primary">{purchaseData.product}</span>
             </p>
             <p className="text-[9px] text-slate-400 font-medium flex items-center gap-1">
               {purchaseData.time} · Vía {renderNetworkIcon()}
             </p>
           </div>
         </motion.div>
      )}
    </AnimatePresence>
  );
};
    </AnimatePresence>
  );
};
