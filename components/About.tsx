
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-[#0a0a0a] overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Collage de Imágenes - Más pequeño */}
          <div className="lg:w-5/12 relative">
            <div className="relative w-full aspect-[4/5]">
              <div className="absolute top-0 left-0 w-[90%] h-[85%] z-20 shadow-2xl overflow-hidden rounded-sm transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80" 
                  alt="Jhony preparando pizza" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[60%] h-[50%] z-30 shadow-2xl border-[6px] border-[#0a0a0a] overflow-hidden rounded-sm rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1610423329916-f03339d4bb38?auto=format&fit=crop&w=600&q=80" 
                  alt="Frutas Sandia" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Texto Narrativo y Características Fusionadas */}
          <div className="lg:w-7/12 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-[#c0392b]"></div>
                <h4 className="text-[#facc15] font-bold tracking-[0.3em] text-[10px] uppercase">Nuestra Historia</h4>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-white">
                El Sabor <span className="text-[#c0392b]">del Valle</span>
              </h2>
              <p className="text-base text-white/60 max-w-xl">
                Jhony Pizzas nace de la pasión por los ingredientes locales de Sandia. 
                Combinamos la técnica del horno de piedra con la frescura de nuestra selva alta.
              </p>
            </div>

            {/* Características integradas aquí (Antes eran una sección aparte) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <div className="text-[#facc15]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z" /></svg>
                </div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-white">Horno Real</h5>
                <p className="text-[11px] text-white/40">Sabor ahumado único en piedra volcánica.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[#65a30d]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-white">100% Fresco</h5>
                <p className="text-[11px] text-white/40">Frutas del día cosechadas en Sandia.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[#c0392b]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-white">Envío Rápido</h5>
                <p className="text-[11px] text-white/40">Caliente hasta tu puerta en minutos.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="text-2xl font-serif text-white/30 italic">Jhony P.</span>
              <div className="h-4 w-[1px] bg-white/10"></div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#facc15] font-bold">Maestro Pizzero</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
