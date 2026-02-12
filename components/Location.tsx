
import React, { useState } from 'react';

const Location: React.FC = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/mtajg9mUyiT44wNW8";
  const address = "Jr. Sandia, (Plaza de Armas) Sandia, Puno";
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <section id="location" className="py-16 bg-[#111111]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-5/12 space-y-6">
            <h4 className="text-[#c0392b] font-bold tracking-[0.2em] text-[10px] uppercase">Visítanos</h4>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">En el corazón de Sandia</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-[#facc15] mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                </div>
                <div>
                  <h5 className="font-bold text-sm mb-0.5">Dirección</h5>
                  <p className="text-white/50 text-xs">{address} 
                    <button onClick={copyAddress} className="ml-2 text-[9px] text-[#facc15] uppercase">{copied ? 'Ok!' : 'Copiar'}</button>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#facc15] mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h5 className="font-bold text-sm mb-0.5">Horario</h5>
                  <p className="text-white/50 text-xs">Diario: 4:00 PM - 10:00 PM</p>
                </div>
              </div>
            </div>
            <a 
              href={googleMapsUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#facc15] text-black px-6 py-3 rounded-full text-[10px] font-bold transition-all shadow-lg"
            >
              CÓMO LLEGAR
            </a>
          </div>
          
          <div className="lg:w-7/12 w-full h-[350px] rounded-xl overflow-hidden shadow-2xl border border-white/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418.6659616086785!2d-69.43105788107567!3d-14.477753697960163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9166f772e0439d0d%3A0xc3f98276f7a62788!2sJhony%20Pizzas!5e0!3m2!1ses-419!2spe!4v1710000000000!5m2!1ses-419!2spe" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              title="Ubicación Sandia"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
