
import React, { useState, useEffect } from 'react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

interface Coupon {
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
}

const VALID_COUPONS: Coupon[] = [
  { code: 'SANDIA10', type: 'percentage', value: 10 },
  { code: 'JHONY20', type: 'percentage', value: 20 },
  { code: 'PRIMERAVEZ', type: 'fixed', value: 5 },
];

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [couponError, setCouponError] = useState('');
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const peruTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Lima"}));
      const hours = peruTime.getHours();
      setIsOpenNow(hours >= 16 && hours < 22);
    };
    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  const whatsappNumber = "51916576885";
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  
  let discount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'percentage') {
      discount = (subtotal * appliedCoupon.value) / 100;
    } else {
      discount = Math.min(subtotal, appliedCoupon.value);
    }
  }

  const total = subtotal - discount;

  const handleApplyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    const found = VALID_COUPONS.find(c => c.code === code);
    
    if (found) {
      setAppliedCoupon(found);
      setCouponError('');
      setCouponInput('');
    } else {
      setCouponError('Código inválido');
      setTimeout(() => setCouponError(''), 3000);
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = "🍕 *NUEVO PEDIDO - JHONY PIZZAS*\n";
    if (!isOpenNow) message = "⚠️ *PEDIDO PROGRAMADO (LOCAL CERRADO)*\n" + message;
    message += "---------------------------------\n\n";
    
    items.forEach(item => {
      message += `✅ *${item.quantity}x* ${item.name}\n`;
      message += `   _S/. ${item.price} c/u_ → *S/. ${item.price * item.quantity}*\n\n`;
    });

    message += "---------------------------------\n";
    message += `🛒 *Subtotal:* S/. ${subtotal.toFixed(2)}\n`;
    
    if (appliedCoupon) {
      message += `🎟️ *Cupón:* ${appliedCoupon.code} (-S/. ${discount.toFixed(2)})\n`;
    }
    
    message += `💰 *TOTAL A PAGAR: S/. ${total.toFixed(2)}*\n\n`;
    message += "💳 *Método de Pago:* Yape / Plin / Efectivo\n";
    message += "📍 *Ubicación:* Sandia, Puno\n";
    message += isOpenNow 
      ? "⏳ _Por favor, confírmeme el tiempo de entrega._"
      : "🕒 _Entiendo que el local está cerrado, por favor procéselo en cuanto abran._";

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[300] transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div 
        className={`fixed top-0 right-0 h-[100dvh] w-full max-w-md bg-[#0a0a0a] z-[310] shadow-2xl border-l border-white/10 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header - Fijo */}
        <div className="flex-none p-6 md:p-8 border-b border-white/10 flex justify-between items-center bg-[#0d0d0d]">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">Tu Pedido</h2>
            <span className="bg-[#facc15] text-black text-[10px] font-black px-2.5 py-1 rounded-full">
              {totalQuantity}
            </span>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Lista de Items - Scrollable */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-hide">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
              <p className="text-lg">Tu carrito está vacío</p>
              <button onClick={onClose} className="mt-4 text-[#facc15] font-bold uppercase tracking-widest text-xs">Ir a la carta</button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-[#1a1a1a] border border-white/10">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200'; }}
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h4 className="font-bold text-white text-sm line-clamp-1">{item.name}</h4>
                    <button onClick={() => onRemove(item.id)} className="text-white/20 hover:text-red-500"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[#facc15] font-bold text-xs">S/. {item.price}</span>
                    <div className="flex items-center gap-3 bg-white/5 px-2 py-1 rounded-lg">
                      <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-white/40 hover:text-white">-</button>
                      <span className="text-white font-bold text-xs w-4 text-center">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-white/40 hover:text-white">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer - Siempre Visible si hay items */}
        {items.length > 0 && (
          <div className="flex-none p-6 md:p-8 bg-[#0d0d0d] border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-end">
                <span className="text-white/40 uppercase text-[10px] font-black tracking-widest">Total del Pedido</span>
                <span className="text-3xl font-serif font-bold text-white">S/. {total.toFixed(2)}</span>
              </div>
            </div>
            
            <button 
              onClick={handleCheckout}
              className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.1em] text-xs transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 ${
                isOpenNow ? 'bg-[#25D366] text-white hover:bg-[#1ebd5e]' : 'bg-[#facc15] text-black hover:bg-white'
              }`}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {isOpenNow ? 'ENVIAR PEDIDO POR WHATSAPP' : 'DEJAR PEDIDO PROGRAMADO'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
