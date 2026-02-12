
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Cumpleaños',
    eventDate: '',
    guests: '10',
    message: ''
  });

  const whatsappNumber = "51916576885";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `🍕 *RESERVA JHONY PIZZAS*\n` +
                `👤 *Nombre:* ${formData.name}\n` +
                `📞 *WhatsApp:* ${formData.phone}\n` +
                `🎉 *Evento:* ${formData.eventType}\n` +
                `📅 *Fecha:* ${formData.eventDate}\n` +
                `👥 *Invitados:* ${formData.guests}\n` +
                `💬 *Detalles:* ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="events" className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-[#111111] rounded-2xl overflow-hidden border border-white/5 shadow-2xl flex flex-col md:row">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 p-8 bg-[#c0392b] text-white flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Eventos</h3>
              <p className="text-white/80 text-xs mb-6 leading-relaxed">Reserva nuestro local para cumpleaños o reuniones. Paquetes especiales en pizzas y smoothies.</p>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Sandia, Puno</div>
            </div>

            <div className="md:col-span-3 p-8">
              <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1">
                  <input 
                    type="text" required placeholder="Tu Nombre"
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-xs text-white focus:outline-none focus:border-[#facc15]"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <input 
                    type="tel" required placeholder="WhatsApp"
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-xs text-white focus:outline-none focus:border-[#facc15]"
                  />
                </div>
                <div className="col-span-1">
                  <select 
                    value={formData.eventType} onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-xs text-white focus:outline-none"
                  >
                    <option>Cumpleaños</option>
                    <option>Aniversario</option>
                    <option>Reunión</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <input 
                    type="date" required
                    value={formData.eventDate} onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-[10px] text-white focus:outline-none"
                  />
                </div>
                <div className="col-span-2">
                  <textarea 
                    rows={2} placeholder="Notas (opcional)"
                    value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-xs text-white focus:outline-none resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="col-span-2 bg-[#facc15] text-black font-bold py-3 rounded-lg text-[10px] tracking-widest uppercase hover:bg-white transition-all active:scale-95"
                >
                  SOLICITAR RESERVA
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
