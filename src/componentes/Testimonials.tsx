
import React from 'react';

const testimonials = [
  {
    name: 'Carmen Condori',
    role: 'Cliente Frecuente',
    content: 'Las mejores pizzas que he probado en todo Puno. La masa tiene ese toque artesanal único que solo Jhony sabe darle. ¡El smoothie Sunrise Sandia es mi favorito!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5
  },
  {
    name: 'Ricardo Mamani',
    role: 'Guía de Turismo',
    content: 'Llevo a todos mis grupos de turistas aquí. No solo por la excelente comida, sino por el ambiente acogedor. La pizza "Selva & Sierra" es una obra de arte local.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5
  },
  {
    name: 'Elena Ramos',
    role: 'Visitante de Juliaca',
    content: 'Vine por recomendación y superó mis expectativas. Los ingredientes se sienten realmente frescos y el servicio es de primera. ¡Volveré pronto!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#111111] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-[#facc15] font-bold tracking-[0.2em] text-sm uppercase mb-3">Testimonios</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Lo que dicen nuestros clientes</h2>
          <div className="w-24 h-1 bg-[#c0392b] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 shadow-2xl transition-all duration-300 hover:border-[#facc15]/30 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#facc15]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-white/70 italic mb-8 leading-relaxed">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-[#facc15] transition-colors"
                />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <span className="text-xs text-white/40 uppercase tracking-widest">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
