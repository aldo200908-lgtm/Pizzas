
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a] overflow-hidden relative">
      {/* Vapor decorativo */}
      <div className="absolute -left-10 top-1/4 steam-effect text-6xl opacity-10">♨️</div>
      <div className="absolute right-10 bottom-1/4 steam-effect text-6xl opacity-10" style={{ animationDelay: '1.5s' }}>♨️</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Collage de Imágenes Interactivo */}
          <div className="lg:w-1/2 relative group">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Imagen Principal */}
              <div className="absolute top-0 left-0 w-full h-full z-20 shadow-2xl overflow-hidden rounded-[3rem] border-4 border-white/5 transition-transform duration-700 group-hover:scale-[1.02]">
                <img 
                  src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80" 
                  alt="Jhony preparando pizza" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 z-30 bg-[#facc15] text-black p-8 rounded-full shadow-2xl flex flex-col items-center justify-center w-32 h-32 rotate-12 group-hover:rotate-0 transition-transform">
                <span className="text-3xl">🔥</span>
                <span className="text-[10px] font-black text-center leading-none mt-1">SABOR A LEÑA</span>
              </div>
            </div>
          </div>

          {/* Texto Narrativo */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-0.5 w-12 bg-[#c0392b]"></div>
                <h4 className="text-[#facc15] font-black tracking-[0.4em] text-[10px] uppercase">Secreto de Familia</h4>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold leading-none text-white">
                Masa que <br /><span className="text-[#c0392b]">Cuenta Historias</span>
              </h2>
              <p className="text-lg text-white/60 font-light leading-relaxed">
                En Sandia, donde el sol se encuentra con la selva alta, Jhony perfeccionó el arte del horno de piedra. 
                Nuestras pizzas no solo se comen, se viven. Cada smoothie es una explosión de la fruta más dulce del valle.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="space-y-2 hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-2xl">🌋</div>
                <h5 className="font-black text-[10px] uppercase tracking-widest text-[#facc15]">Piedra Volcánica</h5>
                <p className="text-[11px] text-white/40">Calor puro y constante.</p>
              </div>
              <div className="space-y-2 hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-2xl">🥥</div>
                <h5 className="font-black text-[10px] uppercase tracking-widest text-[#facc15]">Fruta Local</h5>
                <p className="text-[11px] text-white/40">Cosecha de Sandia.</p>
              </div>
              <div className="hidden md:block space-y-2 hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-2xl">❤️</div>
                <h5 className="font-black text-[10px] uppercase tracking-widest text-[#facc15]">Pasión Local</h5>
                <p className="text-[11px] text-white/40">Orgullo puneño.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
