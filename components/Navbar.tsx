
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  isScrolled: boolean;
  cartCount: number;
  onCartOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, cartCount, onCartOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Menú', href: '#menu' },
    { name: 'Historia', href: '#about' },
    { name: 'Eventos', href: '#events' },
    { name: 'Donde', href: '#location' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const elementPosition = (target as HTMLElement).offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[250] transition-all duration-500 ${
      isScrolled || isOpen ? 'bg-[#0a0a0a]/95 backdrop-blur-xl py-2' : 'bg-transparent py-5'
    }`}>
      {/* Cheese Drip Visual when scrolled */}
      {isScrolled && <div className="cheese-drip pointer-events-none"></div>}

      <nav className="container mx-auto px-6 flex justify-between items-center relative z-[260]">
        {/* Branding */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')} 
          className="flex items-center gap-3 group relative z-[270]"
        >
          <Logo className="w-10 h-10 md:w-14 md:h-14 group-hover:rotate-12 transition-transform duration-500" />
          <div className="flex flex-col">
            <span className="text-lg md:text-2xl font-serif font-black text-white leading-none">JHONY</span>
            <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] text-[#facc15]">PIZZAS</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} 
                 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-[#facc15] transition-all relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c0392b] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <button 
            onClick={onCartOpen}
            className="relative p-3 bg-white/5 rounded-2xl hover:bg-[#c0392b] transition-all border border-white/10 group animate-fire"
          >
            <span className="text-xl">🥡</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#facc15] text-black text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full shadow-lg">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Controls Container */}
        <div className="flex items-center gap-4 lg:hidden relative z-[270]">
          <button onClick={onCartOpen} className="relative p-2.5 bg-white/5 rounded-xl border border-white/10 active:scale-90 transition-transform">
            <span className="text-lg">🥡</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#facc15] text-black text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-md">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-white/5 rounded-xl border border-white/10 active:scale-90 transition-transform" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú"
          >
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-200 ${isOpen ? 'w-0 opacity-0' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay - FIXED STRUCTURE */}
        <div className={`fixed inset-0 bg-[#0a0a0a] z-[255] transition-transform duration-500 ease-in-out lg:hidden h-screen w-screen overflow-hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col justify-center items-center h-full gap-8 px-10">
            <div className="text-[#facc15] text-[10px] font-black tracking-[0.5em] mb-4 opacity-50 uppercase">Menú Principal</div>
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)} 
                className={`text-4xl font-serif font-bold text-white hover:text-[#c0392b] transition-all transform text-center ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {link.name}
              </a>
            ))}
            
            <div className="mt-12 flex flex-col items-center gap-6 w-full max-w-xs">
              <div className="h-px w-full bg-white/10"></div>
              <div className="flex gap-6">
                <span className="text-2xl hover:scale-125 transition-transform cursor-default">🍕</span>
                <span className="text-2xl hover:scale-125 transition-transform cursor-default">🥤</span>
                <span className="text-2xl hover:scale-125 transition-transform cursor-default">🌋</span>
              </div>
              <p className="text-white/20 text-[9px] font-black tracking-widest text-center uppercase">Sandia, Puno - Perú</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
