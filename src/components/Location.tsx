
import React, { useState } from 'react';

const Location: React.FC = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/mtajg9mUyiT44wNW8";
  const address = "Jr. Sandia, (A unos pasos de la Plaza de Armas) Sandia, Puno - Perú";
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <section id="location" className="py-24 bg-[#111111]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h4 className="text-[#c0392b] font-bold tracking-[0.2em] text-sm uppercase">Nuestra Casa</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Visítanos en el corazón de Sandia</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-[#facc15] mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h5 className="font-bold text-lg mb-1 flex items-center justify-between">
                    Dirección Exacta
                    <button 
                      onClick={copyAddress}
                      className="text-[10px] uppercase tracking-tighter text-[#facc15] hover:text-white transition-colors"
                    >
                      {copied ? '¡Copiado!' : 'Copiar texto'}
                    </button>
                  </h5>
                  <p className="text-white/60 leading-relaxed">{address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-[#facc15] mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Horario de Atención</h5>
                  <p className="text-white/60">Lunes a Domingo: 4:00 PM - 10:00 PM</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href={googleMapsUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#facc15] text-black px-8 py-4 rounded-full text-sm font-bold transition-all hover:bg-white hover:scale-105 shadow-xl"
              >
                CÓMO LLEGAR (Google Maps)
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418.6659616086785!2d-69.43105788107567!3d-14.477753697960163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9166f772e0439d0d%3A0xc3f98276f7a62788!2sJhony%20Pizzas!5e0!3m2!1ses-419!2spe!4v1710000000000!5m2!1ses-419!2spe" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              title="Ubicación de Jhony Pizzas en Sandia"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/5 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
