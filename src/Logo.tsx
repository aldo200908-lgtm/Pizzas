
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
        {/* Outer Circles */}
        <circle cx="250" cy="250" r="240" fill="#2b2621" />
        <circle cx="250" cy="250" r="230" stroke="#facc15" strokeWidth="8" />
        <circle cx="250" cy="250" r="220" stroke="#4d7c0f" strokeWidth="4" opacity="0.5" />

        {/* Pizza Slice */}
        <g transform="translate(180, 120) rotate(-15)">
          <path d="M0 0 L120 40 L40 120 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
          <circle cx="40" cy="50" r="10" fill="#b91c1c" />
          <circle cx="70" cy="70" r="8" fill="#b91c1c" />
          <circle cx="50" cy="90" r="6" fill="#b91c1c" />
          <path d="M0 0 C-10 10 -5 20 0 30" fill="none" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* Smoothie Cup */}
        <g transform="translate(240, 130)">
          {/* Straw */}
          <path d="M50 0 L50 -40 L70 -50" fill="none" stroke="#fefce8" strokeWidth="8" strokeLinecap="round" />
          {/* Lid */}
          <path d="M10 50 Q50 10 90 50 Z" fill="#facc15" stroke="#fde047" strokeWidth="2" />
          {/* Cup */}
          <path d="M20 50 L30 150 L70 150 L80 50 Z" fill="#65a30d" stroke="#fefce8" strokeWidth="4" />
          <path d="M15 45 L85 45" stroke="#fefce8" strokeWidth="8" strokeLinecap="round" />
        </g>

        {/* Text Area Background Arc */}
        <path d="M100 320 Q250 300 400 320" fill="none" stroke="none" id="textPath" />
        
        {/* Main Text "Jhony" (Simplified script-like representation) */}
        <text x="50%" y="350" textAnchor="middle" fill="white" style={{ fontFamily: 'serif', fontSize: '90px', fontWeight: 'bold', fontStyle: 'italic' }}>
          Jhony
        </text>
        <text x="50%" y="415" textAnchor="middle" fill="white" style={{ fontFamily: 'sans-serif', fontSize: '60px', fontWeight: '900', letterSpacing: '2px' }}>
          PIZZAS
        </text>
        
        {/* Bottom Small Text */}
        <text x="50%" y="460" textAnchor="middle" fill="#facc15" style={{ fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 'bold', letterSpacing: '4px' }}>
          PIZZAS Y SMOOTHIES
        </text>
      </svg>
    </div>
  );
};

export default Logo;
