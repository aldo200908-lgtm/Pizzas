
import React, { useState } from 'react';
import { PizzaItem } from '../types';

interface MenuProps {
  onAddToCart: (item: PizzaItem) => void;
}

const pizzaItems: PizzaItem[] = [
  { id: 'p1', name: 'Margarita Jhony', description: 'Tomates, albahaca y mozzarella.', price: 26, image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=600&q=80' },
  { id: 'p2', name: 'Pepperoni Supreme', description: 'Capa extra de pepperoni premium.', price: 32, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80' },
  { id: 'p3', name: 'Selva & Sierra', description: 'Jamón regional y piña de Sandia.', price: 30, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80' },
  { id: 'p4', name: 'Jhony Especial', description: 'Chorizo, tocino y jamón.', price: 35, image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80' },
];

const smoothieItems: PizzaItem[] = [
  { id: 's1', name: 'Green Valley', description: 'Espinaca, piña y miel pura.', price: 15, image: 'https://images.unsplash.com/photo-1543573852-1a71a6ce19bc?auto=format&fit=crop&w=600&q=80' },
  { id: 's2', name: 'Tropical Sandia', description: 'Mango, maracuyá y naranja.', price: 15, image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80' },
  { id: 's3', name: 'Sunrise Berry', description: 'Mix de frutos rojos locales.', price: 16, image: 'https://images.unsplash.com/photo-1481671703460-040cb8a2d909?auto=format&fit=crop&w=600&q=80' },
];

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<'pizzas' | 'smoothies'>('pizzas');

  return (
    <section id="menu" className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Nuestra Carta</h2>
          
          <div className="flex justify-center gap-3">
            <button 
              onClick={() => setActiveCategory('pizzas')}
              className={`px-6 py-2.5 rounded-full text-[10px] font-bold transition-all ${activeCategory === 'pizzas' ? 'bg-[#c0392b] text-white' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
            >
              PIZZAS
            </button>
            <button 
              onClick={() => setActiveCategory('smoothies')}
              className={`px-6 py-2.5 rounded-full text-[10px] font-bold transition-all ${activeCategory === 'smoothies' ? 'bg-[#65a30d] text-white' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
            >
              SMOOTHIES
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {(activeCategory === 'pizzas' ? pizzaItems : smoothieItems).map((item) => (
            <div key={item.id} className="group bg-[#111111] rounded-2xl overflow-hidden border border-white/5 hover:border-[#facc15]/20 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-0.5 rounded-md text-[#facc15] font-bold text-xs">
                  S/. {item.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm md:text-base font-bold mb-1 truncate">{item.name}</h3>
                <p className="text-white/30 text-[10px] mb-4 line-clamp-1">{item.description}</p>
                <button 
                  onClick={() => onAddToCart(item)}
                  className={`w-full py-2.5 rounded-lg font-bold text-[9px] tracking-widest uppercase transition-all active:scale-95 ${
                    activeCategory === 'pizzas' ? 'bg-white/5 text-white hover:bg-[#c0392b]' : 'bg-white/5 text-white hover:bg-[#65a30d]'
                  }`}
                >
                  AÑADIR
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
