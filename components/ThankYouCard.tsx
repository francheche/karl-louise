import React from 'react';

const ThankYouCard: React.FC = () => {
  return (
    <div className="relative text-neutral-800 p-4 sm:p-6 w-full h-full flex flex-col items-center text-center overflow-hidden">
      {/* Photo Frame Placeholders */}
      <div className="absolute top-4 right-4 w-1/2 h-1/4 bg-black/15 rounded-lg transform rotate-3 border-2 border-white/50 shadow-lg"></div>
      <div className="absolute bottom-4 left-4 w-1/3 h-1/2 bg-black/15 rounded-lg transform -rotate-2 border-2 border-white/50 shadow-lg"></div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-black mb-4">DRESS CODE</h2>
        <p className="text-base leading-relaxed z-10 px-2 font-sans text-neutral-700 text-left sm:text-center max-w-md">
          Our theme is Black-Tie Formal. We request that all guests wear emerald green to maintain the event’s cohesive and elegant look. We encourage suits for gentlemen and long dresses for ladies.
        </p>
        <div className="mt-8">
          <p className="font-bold text-xl mb-4 font-serif">Color Palette</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <div className="w-12 h-12 rounded-full bg-emerald-500 border-2 border-neutral-400"></div>
            <div className="w-12 h-12 rounded-full bg-emerald-600 border-2 border-neutral-400"></div>
            <div className="w-12 h-12 rounded-full bg-emerald-700 border-2 border-neutral-400"></div>
            <div className="w-12 h-12 rounded-full bg-emerald-800 border-2 border-neutral-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouCard;