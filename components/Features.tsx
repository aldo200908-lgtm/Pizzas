
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Ingredientes Frescos',
      description: 'Seleccionamos cada vegetal y carne de productores locales de Sandia para garantizar frescura absoluta.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Horno Tradicional',
      description: 'Nuestra masa se cocina en un horno de piedra artesanal, logrando ese crujido y sabor ahumado único.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      )
    },
    {
      title: 'Entrega Rápida',
      description: 'Entregamos tu pizza caliente y lista para disfrutar en la comodidad de tu hogar en todo Sandia.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-20 h-20 bg-[#c0392b]/10 rounded-full flex items-center justify-center mx-auto mb-8 text-[#c0392b] group-hover:bg-[#c0392b] group-hover:text-white transition-all duration-500 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
