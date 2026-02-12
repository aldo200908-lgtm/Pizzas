
import React, { useState, useEffect } from 'react';

const Location: React.FC = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/mtajg9mUyiT44wNW8";
  const address = "Jr. Sandia (Frente a la Plaza de Armas), Sandia, Puno";
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const hours = new Date().getHours();
      setIsOpen(hours >= 16 && hours < 22);
    };
    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <section id="location" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#c0392b] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#facc15] rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Columna de Información: Estética de "Tarjeta de Invitación" */}
          <div className="lg:w-1/3 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                <span className="text-[10px] font-black tracking-[0.2em] text-white/80 uppercase">
                  {isOpen ? 'Estamos Horneando Ahora' : 'Abrimos a las 4:00 PM'}
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
                El Punto <br /><span className="text-[#facc15]">Exacto</span> del Sabor
              </h2>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Te esperamos frente a la Plaza de Armas. El aroma a leña te guiará hasta nuestra puerta.
              </p>
            </div>

            <div className="bg-[#111111] border border-white/10 rounded-[2.5rem] p-8 space-y-6 shadow-2xl relative overflow-hidden group">
              {/* Decoración de tarjeta */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#c0392b]/10 rounded-full blur-2xl group-hover:bg-[#c0392b]/20 transition-all"></div>
              
              <div className="relative z-10">
                <h4 className="text-[10px] font-black text-[#facc15] tracking-[0.3em] uppercase mb-4">Nuestra Casa</h4>
                <p className="text-lg font-bold text-white mb-2 leading-snug">
                  {address}
                </p>
                <button 
                  onClick={copyAddress}
                  className="flex items-center gap-2 text-[10px] font-black text-white/40 hover:text-white transition-colors uppercase tracking-widest"
                >
                  {copied ? '✅ DIRECCIÓN COPIADA' : '📋 COPIAR DIRECCIÓN'}
                </button>
              </div>

              <div className="pt-6 border-t border-white/5 relative z-10">
                <h4 className="text-[10px] font-black text-[#facc15] tracking-[0.3em] uppercase mb-3">Horario de Magia</h4>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Lunes a Domingo</span>
                  <span className="text-white font-bold text-sm">4:00 PM - 10:00 PM</span>
                </div>
              </div>

              <a 
                href={googleMapsUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#c0392b] hover:bg-white hover:text-black text-white text-center py-5 rounded-2xl font-black text-[11px] tracking-[0.2em] transition-all shadow-xl active:scale-95"
              >
                ABRIR EN GOOGLE MAPS
              </a>
            </div>
          </div>

          {/* Columna del Mapa: Estética de "Ventana al Local" */}
          <div className="lg:w-2/3 relative group">
            {/* Marco decorativo "Glowing" */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#c0392b] to-[#facc15] rounded-[3.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative h-[500px] lg:h-full min-h-[450px] bg-[#111111] rounded-[3rem] overflow-hidden border border-white/10 shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418.6659616086785!2d-69.43105788107567!3d-14.477753697960163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9166f772e0439d0d%3A0xc3f98276f7a62788!2sJhony%20Pizzas!5e0!3m2!1ses-419!2spe!4v1710000000000!5m2!1ses-419!2spe" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                className="grayscale-[20%] contrast-[1.1] brightness-[0.8] hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                title="Ubicación Jhony Pizzas Sandia"
              ></iframe>

              {/* Overlay informativo sobre el mapa */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end pointer-events-none">
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#c0392b] rounded-full flex items-center justify-center text-xl">🍕</div>
                    <div>
                      <p className="text-white font-black text-[10px] tracking-widest uppercase">Punto de Sabor</p>
                      <p className="text-white/60 text-[9px] uppercase">Jhony Pizzas Sandia</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#facc15] text-black px-4 py-2 rounded-xl font-black text-[9px] tracking-widest uppercase shadow-2xl rotate-3">
                  Sandia, Puno
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
