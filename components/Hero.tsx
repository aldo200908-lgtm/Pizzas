
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappNumber = "51916576885";

  return (
    <section id="home" className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      >
        <source src="https://res.cloudinary.com/dizesmfnk/video/upload/v1770868846/Create_a_cinematic_202602112255_h0u4n_izlsph.mp4" type="video/mp4" />
      </video>

      {/* Floating Ingredients Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <span className="absolute top-[20%] left-[10%] text-4xl floating-ingredient" style={{ animationDelay: '0s' }}>🍃</span>
        <span className="absolute top-[60%] left-[5%] text-5xl floating-ingredient" style={{ animationDelay: '1s' }}>🍕</span>
        <span className="absolute top-[15%] right-[15%] text-3xl floating-ingredient" style={{ animationDelay: '2s' }}>🍅</span>
        <span className="absolute bottom-[20%] right-[10%] text-4xl floating-ingredient" style={{ animationDelay: '0.5s' }}>🔥</span>
        <span className="absolute top-[40%] right-[5%] text-2xl floating-ingredient" style={{ animationDelay: '1.5s' }}>🧄</span>
      </div>

      {/* Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[5]"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a0a0a] to-transparent z-[5]"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1 mb-6 border border-[#facc15]/30 rounded-full backdrop-blur-sm animate-fadeIn">
          <span className="text-[#facc15] font-bold tracking-[0.4em] text-[10px] uppercase">Desde el Corazón de Sandia</span>
        </div>
        
        <h1 className="text-5xl md:text-9xl font-serif font-black mb-4 leading-none tracking-tighter animate-scaleIn">
          JHONY<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0392b] to-[#facc15] drop-shadow-2xl">PIZZAS</span>
        </h1>
        
        <p className="text-sm md:text-xl font-medium mb-10 text-white/90 max-w-2xl mx-auto italic animate-fadeIn leading-relaxed">
          "Donde el fuego de la leña abraza la frescura del valle de Sandia."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('menu')}
            className="group relative w-full sm:w-auto overflow-hidden bg-[#c0392b] text-white px-10 py-5 rounded-full font-black text-xs tracking-widest transition-all btn-fire active:scale-95"
          >
            <span className="relative z-10">¡TENGO HAMBRE!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white/5 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-full font-black text-xs tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3"
          >
            <span className="text-xl">🛵</span> DELIVERY YA
          </a>
        </div>
      </div>

      {/* Animated Arrow */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer text-[#facc15] flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-all"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[10px] font-bold tracking-widest uppercase">BAJA POR QUESO</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
