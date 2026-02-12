
import React from 'react';

const testimonials = [
  {
    name: 'Carmen Condori',
    content: 'Las mejores pizzas de todo Puno. La masa tiene ese toque artesanal único. ¡El smoothie Sandia es increíble!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80'
  },
  {
    name: 'Ricardo Mamani',
    content: 'Ambiente acogedor y sabor auténtico. La pizza "Selva & Sierra" es obligatoria si vienes a Sandia.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80'
  },
  {
    name: 'Elena Ramos',
    content: 'Ingredientes realmente frescos y servicio de primera. Superó mis expectativas por mucho.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold">Nuestros Clientes</h2>
          <div className="w-12 h-1 bg-[#c0392b] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#111111] p-6 rounded-xl border border-white/5 transition-all hover:border-[#facc15]/20">
              <p className="text-white/50 italic text-xs leading-relaxed mb-6">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                <h4 className="font-bold text-white text-xs">{t.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
