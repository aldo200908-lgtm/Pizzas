
import React, { useState, useEffect } from 'react';
import { PizzaItem } from '../types';

interface MenuProps {
  onAddToCart: (item: PizzaItem) => void;
}

const pizzaItems: PizzaItem[] = [
  {
    id: 'p1',
    name: 'Margarita Jhony',
    description: 'Tomates de la zona, albahaca fresca y mozzarella doble.',
    price: 26,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p2',
    name: 'Pepperoni Supreme',
    description: 'Triple ración de pepperoni premium para los amantes de lo clásico.',
    price: 32,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p3',
    name: 'Selva & Sierra',
    description: 'Jamón regional, piña de Sandia y un toque de ají local.',
    price: 30,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p4',
    name: "Jhony's Special",
    description: 'La carnívora: Pepperoni, chorizo artesanal, jamón y tocino.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p5',
    name: 'Vegetariana',
    description: 'Pimientos, cebolla roja, aceitunas, champiñones y maíz.',
    price: 28,
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p6',
    name: 'Cuatro Quesos',
    description: 'Fusión de Mozzarella, Parmesano, Gorgonzola y Queso Andino.',
    price: 34,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p7',
    name: 'Pollo a la Leña',
    description: 'Pollo marinado al estilo tradicional, cebolla y pimiento.',
    price: 31,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p8',
    name: 'Sandia Hot',
    description: 'Chorizo regional picante, jalapeños y salsa de ají limo.',
    price: 33,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p9',
    name: 'Caprese Andina',
    description: 'Mozzarella fresca, tomates cherry, albahaca y pesto casa.',
    price: 29,
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=600&q=80'
  }
];

const smoothieItems: PizzaItem[] = [
  {
    id: 's1',
    name: 'Green Energy',
    description: 'Espinaca, piña de Sandia, manzana y miel pura.',
    price: 15,
    image: 'https://images.unsplash.com/photo-1543573852-1a71a6ce19bc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's2',
    name: 'Tropical Punch',
    description: 'Mango fresco, maracuyá y naranja de nuestros valles.',
    price: 15,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's3',
    name: 'Sunrise Sandia',
    description: 'Papaya dulce de la zona, naranja y limón real.',
    price: 14,
    image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's4',
    name: 'Berry Altiplano',
    description: 'Mix de fresas, arándanos y mora con leche almendras.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's5',
    name: 'Mango Twist',
    description: 'Mango maduro, menta fresca y un toque de jengibre.',
    price: 16,
    image: 'https://images.unsplash.com/photo-1481671703460-040cb8a2d909?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's6',
    name: 'Choco-Banano',
    description: 'Cacao local, plátano de seda y leche de avena.',
    price: 17,
    image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=600&q=80'
  }
];

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<'pizzas' | 'smoothies'>('pizzas');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const currentItems = activeTab === 'pizzas' ? pizzaItems : smoothieItems;

  const openGallery = (index: number) => setSelectedItemIndex(index);
  const closeGallery = () => setSelectedItemIndex(null);

  const nextItem = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex !== null) setSelectedItemIndex((selectedItemIndex + 1) % currentItems.length);
  };

  const prevItem = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex !== null) setSelectedItemIndex((selectedItemIndex - 1 + currentItems.length) % currentItems.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'ArrowRight') nextItem();
      if (e.key === 'ArrowLeft') prevItem();
      if (e.key === 'Escape') closeGallery();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex]);

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h4 className="text-[#facc15] font-bold tracking-[0.2em] text-[10px] md:text-sm uppercase mb-2">Sabor Local</h4>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Nuestra Carta</h2>
          
          <div className="flex justify-center mt-8 gap-3">
            <button 
              onClick={() => { setActiveTab('pizzas'); setSelectedItemIndex(null); }}
              className={`px-6 py-2 md:px-10 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all ${activeTab === 'pizzas' ? 'bg-[#c0392b] text-white shadow-[0_4px_15px_rgba(192,57,43,0.3)]' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
            >
              Pizzas ({pizzaItems.length})
            </button>
            <button 
              onClick={() => { setActiveTab('smoothies'); setSelectedItemIndex(null); }}
              className={`px-6 py-2 md:px-10 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all ${activeTab === 'smoothies' ? 'bg-[#65a30d] text-white shadow-[0_4px_15px_rgba(101,163,13,0.3)]' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
            >
              Smoothies ({smoothieItems.length})
            </button>
          </div>
        </div>

        {/* Grilla compacta: 2 columnas en móvil, 4 en desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
          {currentItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group bg-[#111111] rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full hover:border-white/10 transition-all duration-300"
            >
              {/* Imagen más pequeña y cuadrada */}
              <div 
                className="relative aspect-square overflow-hidden cursor-pointer bg-[#1a1a1a]"
                onClick={() => openGallery(index)}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80';
                  }}
                />
                <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-black/70 backdrop-blur-md text-white text-[10px] md:text-xs px-2 py-1 rounded-md font-bold">
                  S/. {item.price}
                </div>
              </div>
              
              <div className="p-3 md:p-5 flex flex-col flex-grow">
                <h3 className="text-sm md:text-lg font-bold text-white mb-1 line-clamp-1">{item.name}</h3>
                <p className="text-white/40 text-[10px] md:text-xs leading-snug mb-4 line-clamp-2 flex-grow">
                  {item.description}
                </p>
                
                <button 
                  onClick={() => onAddToCart(item)}
                  className={`w-full py-2 rounded-lg font-bold text-[9px] md:text-[10px] uppercase tracking-wider transition-all active:scale-95 ${
                    activeTab === 'pizzas' 
                    ? 'bg-[#c0392b]/20 text-[#ff4d4d] hover:bg-[#c0392b] hover:text-white' 
                    : 'bg-[#65a30d]/20 text-[#a3e635] hover:bg-[#65a30d] hover:text-white'
                  }`}
                >
                  + Agregar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Imagen */}
      {selectedItemIndex !== null && (
        <div 
          className="fixed inset-0 z-[400] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeGallery}
        >
          <button className="absolute top-6 right-6 text-white/50 hover:text-white" onClick={closeGallery}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white p-2" onClick={prevItem}>
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white p-2" onClick={nextItem}>
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div className="max-w-4xl w-full text-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={currentItems[selectedItemIndex].image} 
              alt={currentItems[selectedItemIndex].name} 
              className="max-h-[70vh] mx-auto rounded-xl shadow-2xl mb-6" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80';
              }}
            />
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-2">{currentItems[selectedItemIndex].name}</h3>
            <p className="text-white/60 mb-6 px-4">{currentItems[selectedItemIndex].description}</p>
            <div className="flex flex-col items-center gap-4">
              <span className="text-3xl font-serif text-[#facc15] font-bold">S/. {currentItems[selectedItemIndex].price}</span>
              <button 
                onClick={() => { onAddToCart(currentItems[selectedItemIndex]); closeGallery(); }}
                className="bg-[#c0392b] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all"
              >
                Añadir al Pedido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
