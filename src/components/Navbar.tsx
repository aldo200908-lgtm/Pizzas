
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  isScrolled: boolean;
  cartCount: number;
  onCartOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, cartCount, onCartOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [businessStatus, setBusinessStatus] = useState<{ open: boolean; message: string }>({ open: false, message: 'Cerrado' });

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const peruTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Lima"}));
      const hours = peruTime.getHours();
      const isOpenNow = hours >= 16 && hours < 22;
      setBusinessStatus({
        open: isOpenNow,
        message: isOpenNow ? 'Abierto' : 'Abrimos a las 4PM'
      });
    };
    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nuestra Historia', href: '#about' },
    { name: 'Carta de Pizzas', href: '#menu' },
    { name: 'Ubicación', href: '#location' },
    { name: 'Reservar para Eventos', href: '#events' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    setTimeout(() => {
      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 350);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 ease-out ${
          isScrolled || isOpen 
            ? 'bg-[#0a0a0a]/98 backdrop-blur-xl py-3 shadow-2xl border-b border-white/10' 
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="container mx-auto px-6 flex justify-between items-center h-full">
          <a 
            href="#home" 
            className="flex items-center gap-3 group relative z-[210] outline-none" 
            onClick={(e) => handleLinkClick(e, '#home')}
          >
            <Logo className="w-10 h-10 md:w-16 md:h-16 transition-transform duration-500 group-hover:scale-110" />
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-3xl font-serif font-bold tracking-tighter text-white transition-colors group-hover:text-[#facc15]">
                JHONY
              </span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-[#facc15]/80 mt-0.5 uppercase">
                PIZZAS
              </span>
            </div>
          </a>

          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)} 
                className="relative text-[10px] font-bold text-white/70 hover:text-white transition-colors uppercase tracking-[0.2em] outline-none group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c0392b] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
              <button 
                onClick={onCartOpen} 
                className="relative p-2.5 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all border border-white/5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#c0392b] text-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-lg ring-2 ring-[#0a0a0a]">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button 
              onClick={onCartOpen} 
              className="relative p-3 bg-white/5 rounded-full text-white z-[210] active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#c0392b] text-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full ring-2 ring-[#0a0a0a]">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="text-white focus:outline-none p-3 relative z-[210] flex items-center justify-center bg-white/5 rounded-full transition-all active:bg-white/10" 
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-6 h-4 relative flex flex-col justify-between items-end">
                <span className={`h-[2.5px] bg-white rounded-full transition-all duration-500 origin-right ${isOpen ? 'w-full -rotate-45 translate-y-[2px]' : 'w-full'}`}></span>
                <span className={`h-[2.5px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-2/3'}`}></span>
                <span className={`h-[2.5px] bg-white rounded-full transition-all duration-500 origin-right ${isOpen ? 'w-full rotate-45 -translate-y-[2px]' : 'w-full'}`}></span>
              </div>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
