
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const displayPhone = "+51 916 576 885";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-3 mb-6 group outline-none"
            >
              <Logo className="w-16 h-16 transition-transform duration-300 group-hover:scale-110" />
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-serif font-bold tracking-tighter text-white">JHONY</span>
                <span className="text-xs font-bold tracking-[0.3em] text-[#facc15]">PIZZAS</span>
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              El rincón favorito de Sandia. Donde las pizzas calientes se encuentran con los smoothies más frescos del Altiplano.
            </p>
            <div className="text-[10px] text-white/20 font-bold tracking-widest uppercase">
              RUC: 10XXXXXXXXX <span className="mx-2">|</span> Sandia - Puno
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-[10px] text-[#facc15]">Explorar</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleLinkClick(e, '#home')}
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Nuestra Historia
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  onClick={(e) => handleLinkClick(e, '#menu')}
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Carta de Pizzas
                </a>
              </li>
              <li>
                <a 
                  href="#events" 
                  onClick={(e) => handleLinkClick(e, '#events')}
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Reservar para Eventos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-[10px] text-[#facc15]">Atención</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#c0392b] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                <a 
                  href="#location" 
                  onClick={(e) => handleLinkClick(e, '#location')}
                  className="hover:text-white transition-colors"
                >
                  Jr. Sandia s/n (Frente a la plaza)<br/>Sandia, Puno - Perú
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#c0392b] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href={`tel:${displayPhone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{displayPhone}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-[10px] text-[#facc15]">Síguenos</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#3b5998] hover:text-white transition-all transform hover:-translate-y-1 shadow-lg border border-white/5">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] hover:text-white transition-all transform hover:-translate-y-1 shadow-lg border border-white/5">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 shadow-lg border border-white/5">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a8.15 8.15 0 01-1.89-1.51v6.26c0 1.09-.15 2.18-.51 3.22-.88 2.73-3.61 4.51-6.39 4.32-2.87-.2-5.32-2.58-5.63-5.44-.4-3.41 2.01-6.7 5.42-7.1v4.03c-1.28.1-2.42.92-2.75 2.17-.45 1.57.51 3.4 2.1 3.86.81.24 1.75.05 2.4-.5.67-.62.91-1.57.91-2.45V0l.02.02z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-[10px] tracking-widest uppercase text-center">
            © {currentYear} Jhony Pizzas – Sandia. Hecho con pasión en el Altiplano.
          </p>
          <div className="flex gap-6 text-[10px] tracking-widest uppercase text-white/20">
            <a href="#" className="hover:text-[#facc15] transition-colors">Términos</a>
            <a href="#" className="hover:text-[#facc15] transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
