import React from 'react';

const Hero = ({ month, year }: { month: string; year: number }) => {
  return (
    <div className="relative h-64 md:h-[420px] w-full overflow-hidden bg-white select-none">
      <img 
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" 
        alt="Mountain" 
        className="w-full h-full object-cover brightness-95"
      />

      <div 
        className="absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-br from-sky-600 to-sky-700 z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"
        style={{ 
          clipPath: 'polygon(0 85%, 28% 68%, 52% 96%, 78% 52%, 100% 75%, 100% 100%, 0 100%)' 
        }}
      />

      <div className="absolute bottom-10 right-12 z-20 text-white text-right">
        <div className="flex items-center justify-end gap-2 mb-[-10px] opacity-90">
          <div className="h-[1px] w-8 bg-white/40" />
          <span className="text-xl md:text-2xl font-light tracking-[0.4em] italic">{year}</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none drop-shadow-2xl">
          {month}
        </h1>
        
        <div className="h-2 w-24 bg-white ml-auto mt-4 rounded-full opacity-80" />
      </div>
    </div>
  );
};

export default Hero;