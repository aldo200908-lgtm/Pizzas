
import React from 'react';

const Hero: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappNumber = "51916576885";

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video with Poster Fallback */}
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

      {/* Dark Overlay with Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <h4 className="text-[#facc15] font-bold tracking-[0.4em] text-sm uppercase mb-4 fade-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>Desde Sandia para el mundo</h4>
        <h1 className="text-6xl md:text-9xl font-serif font-bold mb-6 fade-in leading-tight opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          Jhony <br /> <span className="text-[#c0392b]">Pizzas</span>
        </h1>
        <p className="text-lg md:text-2xl font-light mb-10 text-white/90 italic max-w-2xl mx-auto fade-in opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          Artesanía pura en cada rebanada y frescura natural en cada Smoothie.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          {/* Botón Principal: Ver Menú */}
          <a 
            href="#menu" 
            onClick={scrollToMenu}
            className="group shimmer-hover bg-[#facc15] text-black px-12 py-5 rounded-full font-bold text-sm tracking-widest transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(250,204,21,0.4)] flex items-center gap-3"
          >
            <span>VER MENÚ COMPLETO</span>
            <svg 
              className="w-5 h-5 transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Botón Secundario: WhatsApp */}
          <a 
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-transparent border border-white/20 text-white px-12 py-5 rounded-full font-bold text-sm tracking-widest transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform hover:scale-[1.02] hover:-translate-y-1 overflow-hidden flex items-center gap-3 hover:border-[#25D366]/50 hover:shadow-[0_15px_30px_-10px_rgba(37,211,102,0.3)]"
          >
            {/* Background Hover Slide Fill */}
            <div className="absolute inset-0 bg-[#25D366] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] -z-10"></div>
            
            <svg className="w-5 h-5 fill-current transition-colors duration-300 group-hover:text-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="transition-colors duration-300">PEDIR WHATSAPP</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-40 hover:opacity-100 cursor-pointer z-20 transition-opacity duration-300" 
        onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
