
import React, { useState } from 'react';
import { PizzaItem } from '../types';

interface MenuProps {
  onAddToCart: (item: PizzaItem) => void;
}

const pizzaItems: PizzaItem[] = [
  { id: 'p1', name: 'Margarita Jhony', description: 'Tomates del valle, albahaca fresca y mozzarella doble.', price: 26, image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=600&q=80' },
  { id: 'p2', name: 'Pepperoni Supreme', description: 'Capa extra de pepperoni premium y orégano.', price: 32, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80' },
  { id: 'p3', name: 'Selva & Sierra', description: 'Jamón regional, piña de Sandia y toque de ají local.', price: 30, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80' },
  { id: 'p4', name: 'Jhony Especial', description: 'Chorizo artesanal, tocino, jamón y pimientos rojos.', price: 35, image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80' },
];

const smoothieItems: PizzaItem[] = [
  { id: 's1', name: 'Green Valley', description: 'Espinaca, piña de la zona y miel de abeja pura.', price: 15, image: 'https://images.unsplash.com/photo-1543573852-1a71a6ce19bc?auto=format&fit=crop&w=600&q=80' },
  { id: 's2', name: 'Tropical Sandia', description: 'Mango, maracuyá y naranja recién exprimida.', price: 15, image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80' },
  { id: 's3', name: 'Sunrise Berry', description: 'Mix de frutos rojos locales con un toque de limón.', price: 16, image: 'https://images.unsplash.com/photo-1481671703460-040cb8a2d909?auto=format&fit=crop&w=600&q=80' },
];

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<'pizzas' | 'smoothies'>('pizzas');

  return (
    <section id="menu" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-[#facc15] font-bold tracking-[0.2em] text-xs uppercase mb-3">Sabor Artesanal</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Nuestra Carta</h2>
          
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setActiveCategory('pizzas')}
              className={`px-8 py-3 rounded-full text-xs font-bold transition-all ${activeCategory === 'pizzas' ? 'bg-[#c0392b] text-white' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
            >
              PIZZAS
            </button>
            <button 
              onClick={() => setActiveCategory('smoothies')}
              className={`px-8 py-3 rounded-full text-xs font-bold transition-all ${activeCategory === 'smoothies' ? 'bg-[#65a30d] text-white' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
            >
              SMOOTHIES
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {(activeCategory === 'pizzas' ? pizzaItems : smoothieItems).map((item) => (
            <div key={item.id} className="group bg-[#111111] rounded-3xl overflow-hidden border border-white/5 hover:border-[#facc15]/30 transition-all duration-500">
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-[#facc15] font-bold">
                  S/. {item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#facc15] transition-colors">{item.name}</h3>
                <p className="text-white/40 text-sm mb-6 line-clamp-2">{item.description}</p>
                <button 
                  onClick={() => onAddToCart(item)}
                  className={`w-full py-3 rounded-xl font-bold text-[10px] tracking-widest uppercase transition-all active:scale-95 ${
                    activeCategory === 'pizzas' ? 'bg-white/5 text-white hover:bg-[#c0392b]' : 'bg-white/5 text-white hover:bg-[#65a30d]'
                  }`}
                >
                  AÑADIR AL PEDIDO
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
