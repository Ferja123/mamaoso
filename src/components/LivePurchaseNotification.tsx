import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const names = ['María', 'Rosa', 'Carmen', 'Ana', 'Laura', 'Sofía', 'Lucía', 'Juana', 'Elena', 'Teresa', 'Martha', 'Patricia', 'Isabel', 'Elizabeth', 'Katy'];
const cities = ['Lima', 'Arequipa', 'Trujillo', 'Chiclayo', 'Piura', 'Cusco', 'Ica', 'Huancayo', 'Tacna', 'Juliaca', 'Cajamarca', 'Pucallpa'];
const products = ['1 Frasco de MAMAOSO', 'Promo 2 Frascos', 'Promo 3 Frascos', '1 Frasco de MAMAOSO', 'Promo 2 Frascos'];
const networks = ['TikTok', 'Facebook', 'Instagram'];
const times = ['hace 1 minuto', 'hace 2 minutos', 'hace 3 minutos', 'hace 5 minutos', 'hace 8 minutos', 'justo ahora'];

const avatars = [
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1544168190-79c15427015d?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1531123897727-8f129e1b4dce?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1544711317-0638eb76451a?w=100&h=100&fit=crop'
];

export const LivePurchaseNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [purchaseData, setPurchaseData] = useState({ name: '', city: '', product: '', time: '', network: '', avatar: '' });

  useEffect(() => {
    const triggerNotification = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      const product = products[Math.floor(Math.random() * products.length)];
      const time = times[Math.floor(Math.random() * times.length)];
      const network = networks[Math.floor(Math.random() * networks.length)];
      const avatar = avatars[Math.floor(Math.random() * avatars.length)];

      setPurchaseData({ name, city, product, time, network, avatar });
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
           className="fixed top-20 left-4 right-4 md:top-auto md:bottom-6 md:left-6 md:right-auto md:w-80 z-[160] flex items-center bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] border border-slate-100 p-2 pr-4 pointer-events-none"
         >
           {/* Avatar */}
           <div className="w-12 h-12 shrink-0 mr-3 relative">
             <img 
               src={purchaseData.avatar} 
               alt={purchaseData.name} 
               className="w-full h-full object-cover rounded-lg border-2 border-brand-primary/10"
             />
             <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm p-0.5">
                <img 
                  src="/premium_jar_1775966136593.png" 
                  alt="prod" 
                  className="w-full h-full object-contain"
                />
             </div>
           </div>
           
           {/* Text Content */}
           <div className="flex-1 min-w-0">
             <div className="flex items-center justify-between mb-0.5 relative">
               <p className="text-[11px] font-bold text-slate-800 truncate pr-2">
                 {purchaseData.name} de {purchaseData.city}
               </p>
               <div className="flex items-center gap-1 shrink-0">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
               </div>
             </div>
             
             <p className="text-[10px] text-slate-500 line-clamp-1 leading-tight mb-0.5">
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
