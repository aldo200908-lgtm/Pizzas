
import React, { useState } from 'react';
import { PizzaItem } from '../types';

interface MenuProps {
  onAddToCart: (item: PizzaItem) => void;
}

const pizzaItems: PizzaItem[] = [
  { id: 'p1', name: 'Margarita Jhony', description: 'Tomates, albahaca fresca y mozzarella premium.', price: 26, image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=600&q=80' },
  { id: 'p2', name: 'Pepperoni Supreme', description: 'Doble capa de pepperoni sobre queso fundido.', price: 32, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80' },
  { id: 'p3', name: 'Selva & Sierra', description: 'Jamón regional, piña de Sandia y un toque secreto.', price: 30, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80' },
  { id: 'p4', name: 'Jhony Especial', description: 'Chorizo artesanal, tocino ahumado y jamón.', price: 35, image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80' },
];

const smoothieItems: PizzaItem[] = [
  { id: 's1', name: 'Green Valley', description: 'Espinaca del valle, piña y miel pura de abeja.', price: 15, image: 'https://images.unsplash.com/photo-1543573852-1a71a6ce19bc?auto=format&fit=crop&w=600&q=80' },
  { id: 's2', name: 'Tropical Sandia', description: 'Mango, maracuyá y naranja recién exprimida.', price: 15, image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80' },
  { id: 's3', name: 'Sunrise Berry', description: 'Mix de frutos rojos locales con yogurt natural.', price: 16, image: 'https://images.unsplash.com/photo-1481671703460-040cb8a2d909?auto=format&fit=crop&w=600&q=80' },
];

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<'pizzas' | 'smoothies'>('pizzas');

  return (
    <section id="menu" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-20 -right-20 opacity-[0.03] select-none pointer-events-none">
        <span className="text-[300px]">🍕</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h4 className="text-[#c0392b] font-black tracking-[0.4em] text-xs uppercase mb-4">Sandia sobre la mesa</h4>
          <h2 className="text-5xl md:text-8xl font-serif font-bold text-white mb-10 leading-none">La <span className="text-[#facc15]">Cosecha</span> Sagrada</h2>
          
          <div className="inline-flex bg-white/5 p-2 rounded-3xl border border-white/10 backdrop-blur-md">
            <button 
              onClick={() => setActiveCategory('pizzas')}
              className={`px-8 py-4 rounded-2xl text-[11px] font-black tracking-widest transition-all duration-300 ${activeCategory === 'pizzas' ? 'bg-[#c0392b] text-white shadow-xl scale-105' : 'text-white/40 hover:text-white'}`}
            >
              PIZZAS ARTESANALES
            </button>
            <button 
              onClick={() => setActiveCategory('smoothies')}
              className={`px-8 py-4 rounded-2xl text-[11px] font-black tracking-widest transition-all duration-300 ${activeCategory === 'smoothies' ? 'bg-[#65a30d] text-white shadow-xl scale-105' : 'text-white/40 hover:text-white'}`}
            >
              SMOOTHIES FRESCOS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {(activeCategory === 'pizzas' ? pizzaItems : smoothieItems).map((item) => (
            <div 
              key={item.id} 
              className="group bg-[#111111] rounded-[3rem] overflow-hidden border border-white/5 hover:border-[#facc15]/30 transition-all duration-500 pizza-hover-card flex flex-col h-full"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-[#facc15] px-4 py-2 rounded-full font-black text-xs shadow-2xl border border-white/10">
                  S/. {item.price.toFixed(2)}
                </div>
                {/* Visual indicator for 'Hot' */}
                {activeCategory === 'pizzas' && (
                  <div className="absolute top-4 right-4 bg-[#c0392b] text-white text-[9px] font-black px-3 py-1 rounded-full animate-pulse">
                    NUEVA
                  </div>
                )}
              </div>
              
              <div className="p-8 text-center flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#facc15] transition-colors">{item.name}</h3>
                <p className="text-white/40 text-xs mb-8 leading-relaxed h-10 line-clamp-2">{item.description}</p>
                <button 
                  onClick={() => onAddToCart(item)}
                  className={`mt-auto w-full py-5 rounded-[1.5rem] font-black text-[11px] tracking-widest uppercase transition-all shadow-xl active:scale-95 border border-white/5 ${
                    activeCategory === 'pizzas' ? 'bg-[#c0392b] text-white hover:bg-white hover:text-black' : 'bg-[#65a30d] text-white hover:bg-white hover:text-black'
                  }`}
                >
                  Añadir al Horno
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
