import React from 'react';

const MainCard: React.FC = () => {
  return (
    <div className="relative text-neutral-800 p-4 sm:p-6 w-full h-full flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Photo Frame Placeholders */}
      <div className="absolute top-4 left-4 w-1/3 h-1/4 bg-black/15 rounded-lg transform -rotate-6 border-2 border-white/50 shadow-lg"></div>
      <div className="absolute bottom-4 right-4 w-1/2 h-1/3 bg-black/15 rounded-lg transform rotate-3 border-2 border-white/50 shadow-lg"></div>

      <div className="relative z-10">
        <p className="text-xl sm:text-2xl font-serif">You are invited!</p>
        <p className="text-base mt-2 leading-relaxed max-w-md font-sans">
          To witness two hearts, one love, forever bound. We’re finally tying the knot — and we can’t imagine celebrating this magical day without you there!
        </p>

        <div className="text-center mt-8">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-wider text-black">Karl & Louise</h1>
          <p className="text-base mt-3 border border-black text-black font-bold px-3 py-1 rounded-full inline-block shadow-md font-sans">
            APR. 11, 2027 | WEDDING DAY
          </p>
           <p className="text-lg sm:text-xl mt-4 font-serif">SAVE THE DATE</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;