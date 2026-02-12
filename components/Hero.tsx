
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
    <section id="home" className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=80"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dizesmfnk/video/upload/v1770868846/Create_a_cinematic_202602112255_h0u4n_izlsph.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <h4 className="text-[#facc15] font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4 animate-fadeIn">Sabor que une a Sandia</h4>
        <h1 className="text-4xl md:text-8xl font-serif font-bold mb-4 leading-tight animate-scaleIn">
          JHONY <br /> <span className="text-[#c0392b]">PIZZAS</span>
        </h1>
        <p className="text-sm md:text-lg font-light mb-8 text-white/80 max-w-xl mx-auto italic animate-fadeIn">
          Masas artesanales al horno de piedra y smoothies de pura fruta del valle.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('menu')}
            className="w-full sm:w-auto bg-[#c0392b] text-white px-8 py-4 rounded-full font-bold text-[10px] tracking-widest hover:bg-white hover:text-black transition-all shadow-xl active:scale-95"
          >
            VER CARTA
          </button>
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-[10px] tracking-widest hover:bg-[#25D366] hover:border-[#25D366] transition-all flex items-center justify-center gap-2"
          >
            PEDIR POR WHATSAPP
          </a>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer opacity-30 hover:opacity-100"
        onClick={() => scrollToSection('about')}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
