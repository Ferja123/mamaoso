import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, MessageCircle, Sparkles, AlertTriangle, ShieldCheck, ChevronDown } from 'lucide-react';

interface OrderFormProps {
  stock: number;
}

export const OrderForm: React.FC<OrderFormProps> = ({ stock }) => {
  const [paquete, setPaquete] = useState('2 Cremas (S/ 189.00)');
  const [formData, setFormData] = useState<Record<string, string>>({
    nombre: '',
    telefono: '',
    ciudad: '',
    distrito: '',
    direccion: '',
    referencia: '',
    hora: '',
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const packs = [
    { label: 'Pruébalo', title: '1 Crema', price: '109.00', img: '/mama_oso_original_white.png', saved: '' },
    { label: 'Más Popular', title: '2 Cremas', price: '189.00', img: '/mama_oso_original_white.png', saved: '¡Ahorra S/29!' },
    { label: 'Mejor Valor', title: '3 Cremas', price: '249.00', img: '/mama_oso_original_white.png', saved: '¡Ahorra S/78!' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let error = '';
    if (!value.trim()) error = 'Este campo es obligatorio';
    else if (name === 'telefono' && !/^\d{9}$/.test(value)) error = 'Ingresa 9 dígitos';
    setFormErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fields = ['nombre', 'telefono', 'ciudad', 'distrito', 'direccion', 'referencia', 'hora'];
    const allValid = fields.every(f => validateField(f, formData[f]));
    setTouched(Object.fromEntries(fields.map(f => [f, true])));
    if (!allValid) return;
    setIsConfirmModalOpen(true);
  };

  const confirmOrder = () => {
    const phoneNumber = "51919749480";
    const message = `*NUEVO PEDIDO - MAMA OSO CREMA* 🐻\n\n` +
      `*Paquete:* ${paquete}\n` +
      `*Nombre:* ${formData.nombre}\n` +
      `*Teléfono:* ${formData.telefono}\n` +
      `*Ciudad/Dist:* ${formData.ciudad} - ${formData.distrito}\n` +
      `*Dirección:* ${formData.direccion}\n` +
      `*Referencia:* ${formData.referencia}\n` +
      `*Hora:* ${formData.hora}\n\n` +
      `*Pago Contraentrega* 🚚`;

    // TikTok Pixel Tracking
    if ((window as any).ttq) {
      (window as any).ttq.track('PlaceAnOrder', {
        content_name: paquete,
        currency: 'PEN',
        value: paquete.includes('109') ? 109 : paquete.includes('189') ? 189 : 249
      });
    }

    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
    setIsConfirmModalOpen(false);
  };

  return (
    <section id="ordenar" className="py-10 md:py-20 px-4 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-dark">Completa tu Pedido</h2>
          <p className="text-slate-500 text-sm md:text-base">Paga en efectivo al recibir. ¡Envío rápido a todo el Perú!</p>
        </div>

        <div className="bg-white p-5 md:p-10 rounded-3xl shadow-xl border border-slate-200">
          {/* Stock Bar */}
          <div className="bg-red-50 rounded-2xl p-4 mb-8 border border-red-100">
            <div className="flex justify-between items-center mb-2">
              <span className="flex items-center gap-2 text-[10px] font-black uppercase text-brand-dark tracking-widest">
                <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
                Stock Limitado
              </span>
              <span className="text-red-500 font-black text-sm">SOLO {stock} UNIDADES</span>
            </div>
            <div className="h-2 w-full bg-red-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(stock/14)*100}%` }}
                className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Pack Selection */}
            <div className="grid grid-cols-3 gap-3">
              {packs.map((pack, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setPaquete(`${pack.title} (S/ ${pack.price})`)}
                  className={`relative group rounded-2xl border-2 transition-all p-3 md:p-5 text-center ${
                    paquete.includes(pack.title) ? 'border-brand-primary bg-brand-primary/5 ring-2 ring-brand-primary/20 shadow-lg' : 'border-slate-100 hover:border-brand-primary/30'
                  }`}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[8px] md:text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                    {pack.label}
                  </div>

                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 md:mb-4">
                    <img src={pack.img} alt={pack.title} className="w-full h-full object-contain" />
                  </div>

                  <h4 className="text-brand-dark font-bold text-xs md:text-sm">{pack.title}</h4>
                  <div className="text-xl md:text-2xl font-black text-brand-dark">S/ {pack.price}</div>
                  {pack.saved && <div className="text-[9px] md:text-[10px] font-bold text-green-600 mt-1">{pack.saved}</div>}

                  <AnimatePresence>
                    {paquete.includes(pack.title) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-lg"
                      >
                        <Sparkles className="w-3 h-3 fill-current" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            {/* Form Fields */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {[
                { name: 'nombre', label: 'Nombre Completo', placeholder: 'Ej: Juan Pérez' },
                { name: 'telefono', label: 'Teléfono / WhatsApp', placeholder: '9XXXXXXXX' },
                { name: 'ciudad', label: 'Ciudad', placeholder: 'Ej: Lima' },
                { name: 'distrito', label: 'Distrito', placeholder: 'Ej: Miraflores' },
                { name: 'direccion', label: 'Dirección de Entrega', placeholder: 'Av. / Calle / Número' },
                { name: 'referencia', label: 'Referencia', placeholder: 'Color de casa / frente a...' }
              ].map((input) => (
                <div key={input.name}>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">{input.label}</label>
                  <input
                    name={input.name}
                    value={formData[input.name]}
                    onChange={handleInputChange}
                    onBlur={(e) => {
                      setTouched(prev => ({ ...prev, [input.name]: true }));
                      validateField(input.name, e.target.value);
                    }}
                    placeholder={input.placeholder}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 text-sm ${
                      touched[input.name] && formErrors[input.name] ? 'border-red-400 focus:ring-red-200' : 'border-slate-100 focus:border-brand-primary focus:ring-brand-primary/10'
                    }`}
                  />
                  {touched[input.name] && formErrors[input.name] && (
                    <p className="text-red-500 text-[10px] font-bold mt-1">{formErrors[input.name]}</p>
                  )}
                </div>
              ))}

              <div className="md:col-span-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Horario de Entrega</label>
                <div className="relative">
                  <select
                    name="hora"
                    value={formData.hora}
                    onChange={handleInputChange}
                    onBlur={(e) => {
                      setTouched(prev => ({ ...prev, hora: true }));
                      validateField('hora', e.target.value);
                    }}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 appearance-none text-sm ${
                      touched.hora && formErrors.hora ? 'border-red-400 focus:ring-red-200' : 'border-slate-100 focus:border-brand-primary focus:ring-brand-primary/10'
                    }`}
                  >
                    <option value="" disabled>Selecciona un horario...</option>
                    <option value="Mañana (8am - 12pm)">Mañana (8am - 12pm)</option>
                    <option value="Tarde (12pm - 4pm)">Tarde (12pm - 4pm)</option>
                    <option value="Noche (4pm - 8pm)">Noche (4pm - 8pm)</option>
                    <option value="Cualquier hora">Cualquier hora (Flexible)</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
                {touched.hora && formErrors.hora && <p className="text-red-500 text-[10px] font-bold mt-1">{formErrors.hora}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-green-500/20 text-lg uppercase tracking-wide flex items-center justify-center gap-3 transition-all relative overflow-hidden"
            >
              <MessageCircle className="w-7 h-7" />
              CONFIRMAR PEDIDO VÍA WHATSAPP
            </motion.button>

            <div className="flex flex-wrap justify-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-slate-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Pago Seguro</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Truck className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Entrega 24-48h</span>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {isConfirmModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[200] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-2 bg-brand-primary"></div>
              <div className="text-center mb-4">
                <img src="/mama_oso_original_white.png" alt="Mama Oso" className="w-20 h-20 mx-auto object-contain mb-3" />
                <h3 className="text-2xl font-heading font-black text-brand-dark">🎉 ¡Excelente!</h3>
              </div>
              <p className="text-slate-500 text-sm mb-6 text-center leading-relaxed">Presiona el botón para que nuestro asesor confirme tu envío gratuito.</p>

              <div className="bg-slate-50 p-4 rounded-2xl space-y-2 mb-6 border border-slate-100">
                <div className="flex justify-between"><span className="text-slate-400 text-xs">PRODUCTO:</span><span className="text-brand-dark font-bold text-xs">Mama Oso Crema</span></div>
                <div className="flex justify-between"><span className="text-slate-400 text-xs">PAQUETE:</span><span className="text-brand-dark font-bold text-xs">{paquete.split('(')[0]}</span></div>
                <div className="flex justify-between border-t border-slate-200 pt-2 mt-2"><span className="text-brand-dark font-black text-sm">TOTAL:</span><span className="text-brand-primary font-black text-lg">{paquete.split('(')[1]?.replace(')','')}</span></div>
              </div>

              <button
                onClick={confirmOrder}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-green-500/30 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5"/> COORDINAR POR WHATSAPP
              </button>

              <button onClick={() => setIsConfirmModalOpen(false)} className="w-full text-slate-400 font-bold text-xs uppercase tracking-widest py-3 mt-2">Corregir Datos</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
