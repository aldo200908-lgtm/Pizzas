
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] overflow-hidden relative">
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <span className="absolute -top-20 -left-20 text-[20vw] font-serif font-bold text-white whitespace-nowrap">ARTESANÍA</span>
        <span className="absolute -bottom-20 -right-20 text-[20vw] font-serif font-bold text-[#facc15] whitespace-nowrap">SANDIA</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Collage de Imágenes */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              {/* Imagen Principal: El Maestro */}
              <div className="absolute top-0 left-0 w-[85%] h-[85%] z-20 shadow-2xl overflow-hidden rounded-sm transform hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80" 
                  alt="Jhony preparando pizza artesanal" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Imagen Secundaria: Ingredientes del Valle */}
              <div className="absolute bottom-0 right-0 w-[55%] h-[50%] z-30 shadow-2xl border-[8px] border-[#0a0a0a] overflow-hidden rounded-sm transform rotate-3 hover:rotate-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1610423329916-f03339d4bb38?auto=format&fit=crop&w=600&q=80" 
                  alt="Frutas frescas de Sandia" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decoración: Sello de Calidad */}
              <div className="absolute -top-6 -right-6 w-32 h-32 z-40 animate-[spin_10s_linear_infinite] hidden md:block">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="fill-[#facc15] text-[10px] font-bold tracking-widest uppercase">
                    <textPath xlinkHref="#circlePath">
                      • ORIGEN SANDIA • SABOR ARTESANAL • CALIDAD JHONY •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Texto Narrativo */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#c0392b]"></div>
                <h4 className="text-[#facc15] font-bold tracking-[0.3em] text-xs uppercase">Nuestra Herencia</h4>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold leading-[0.9] text-white">
                Donde el Fuego <br /> <span className="text-[#c0392b]">Besa el Valle</span>
              </h2>
            </div>

            <div className="space-y-6 text-white/80">
              <p className="text-xl font-serif italic border-l-4 border-[#facc15] pl-6 py-2 leading-relaxed">
                "En el corazón de Sandia, entre nubes y cafetales, nació una idea: que la pizza no solo sea comida, sino un tributo a nuestra tierra."
              </p>
              
              <div className="space-y-4 text-base leading-relaxed text-white/60">
                <p>
                  Jhony Pizzas no es solo un restaurante, es el resultado de años perfeccionando el equilibrio entre la técnica italiana y el alma puneña. Utilizamos <span className="text-white font-bold">horno de piedra</span> para dar ese carácter ahumado a nuestras masas maduradas lentamente.
                </p>
                <p>
                  Pero un festín en Sandia no está completo sin frescura. Por eso, recolectamos las frutas más vibrantes de nuestro valle para crear <span className="text-[#65a30d] font-bold">smoothies naturales</span> que limpian el paladar y alegran el espíritu.
                </p>
              </div>
            </div>

            {/* Características en Iconos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <div className="text-[#facc15]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z" /></svg>
                </div>
                <h5 className="font-bold text-sm uppercase tracking-wider text-white">Horno Real</h5>
                <p className="text-xs text-white/40">Piedra volcánica y calor constante.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[#65a30d]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <h5 className="font-bold text-sm uppercase tracking-wider text-white">Valle Vivo</h5>
                <p className="text-xs text-white/40">Frutas cosechadas el mismo día.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[#c0392b]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h5 className="font-bold text-sm uppercase tracking-wider text-white">Sello Local</h5>
                <p className="text-xs text-white/40">Identidad 100% Sandina.</p>
              </div>
            </div>

            {/* Firma */}
            <div className="pt-6">
              <p className="text-3xl font-serif text-white/30 italic">Jhony P.</p>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#facc15] font-bold mt-2">Fundador & Maestro Pizzero</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
