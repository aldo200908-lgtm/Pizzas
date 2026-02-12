
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
    const msg = `🍕 *RESERVA DE EVENTO - JHONY PIZZAS*\n\n` +
                `👤 *Nombre:* ${formData.name}\n` +
                `📞 *WhatsApp:* ${formData.phone}\n` +
                `🎉 *Evento:* ${formData.eventType}\n` +
                `📅 *Fecha:* ${formData.eventDate}\n` +
                `👥 *Invitados:* ${formData.guests} personas\n` +
                `💬 *Detalles:* ${formData.message}`;
                
    const whatsappMessage = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="events" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-[#facc15] font-bold tracking-[0.2em] text-sm uppercase mb-3">Celebraciones Únicas</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Reserva el Local para tu Evento</h2>
            <div className="w-24 h-1 bg-[#c0392b] mx-auto mt-6"></div>
            <p className="text-white/40 mt-6 max-w-2xl mx-auto">
              Cumpleaños, aniversarios o reuniones de amigos. Haz que tu fecha especial sea inolvidable con el mejor sabor artesanal de Sandia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-[#111111] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5">
            {/* Benefits Column */}
            <div className="lg:col-span-2 p-8 md:p-12 bg-gradient-to-br from-[#c0392b] to-[#8e2419] text-white">
              <h3 className="text-3xl font-serif font-bold mb-8">¿Por qué celebrar con nosotros?</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Ambiente Exclusivo</h4>
                    <p className="text-white/70 text-sm">Zona reservada y decoración básica temática incluida en tu reserva.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Paquetes Económicos</h4>
                    <p className="text-white/70 text-sm">Precios especiales por volumen en pizzas y rondas de smoothies para grupos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Atención VIP</h4>
                    <p className="text-white/70 text-sm">Jhony y su equipo se encargarán de que a tus invitados no les falte nada.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-black/20 rounded-2xl border border-white/10">
                <p className="text-sm italic">"Hemos celebrado más de 100 cumpleaños en Sandia. ¡Tu felicidad es nuestra prioridad!"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20"></div>
                  <span className="font-bold text-sm">Jhony - Dueño</span>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <h3 className="text-2xl font-serif font-bold mb-8 text-white">Detalles de tu Reserva</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-white/40">Nombre del Anfitrión</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#facc15] transition-colors"
                      placeholder="Ej: Juan Perez"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-white/40">WhatsApp de contacto</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#facc15] transition-colors"
                      placeholder="9XXXXXXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-white/40">Motivo del Evento</label>
                    <select 
                      value={formData.eventType}
                      onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#facc15] transition-colors appearance-none"
                    >
                      <option>Cumpleaños</option>
                      <option>Aniversario</option>
                      <option>Reunión Familiar</option>
                      <option>Cena Romántica</option>
                      <option>Evento Corporativo</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-white/40">Fecha Tentativa</label>
                    <input 
                      type="date" 
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#facc15] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-white/40">Número de Invitados (Aprox)</label>
                  <div className="flex items-center gap-4 bg-[#0a0a0a] p-2 rounded-xl border border-white/10">
                    <input 
                      type="range" 
                      min="2" 
                      max="50" 
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      className="flex-grow accent-[#facc15]"
                    />
                    <span className="bg-[#facc15] text-black px-4 py-2 rounded-lg font-bold text-sm min-w-[100px] text-center">
                      {formData.guests} Pers.
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-white/40">Notas adicionales o pedidos especiales</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#facc15] transition-colors resize-none"
                    placeholder="Ejem: Necesito globos rojos, torta de chocolate, menú vegetariano..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-white text-black font-bold py-5 rounded-xl hover:bg-[#facc15] transition-all duration-300 transform active:scale-95 shadow-xl flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  SOLICITAR RESERVA POR WHATSAPP
                </button>
                <p className="text-[10px] text-center text-white/20 uppercase tracking-widest italic">La reserva está sujeta a confirmación y disponibilidad.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
