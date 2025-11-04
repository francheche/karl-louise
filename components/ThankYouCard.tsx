
import React from 'react';
import { FlowerIcon } from './icons';

const ThankYouCard: React.FC = () => {
  return (
    <div className="bg-emerald-600 text-stone-100 p-4 sm:p-6 w-full h-full flex flex-col items-center shadow-lg text-center overflow-y-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <FlowerIcon className="w-7 h-7" />
        <h2 className="text-2xl sm:text-3xl font-bold font-serif">DRESS CODE</h2>
        <FlowerIcon className="w-7 h-7" />
      </div>
      <div className="relative flex-grow flex flex-col justify-center items-center">
        <p className="text-base leading-relaxed z-10 px-2 font-sans">
          Emerald green, a rich and vivid shade inspired by the beauty of precious gemstones, sets the perfect tone for a wedding that radiates elegance and depth. It embodies a lush, luxurious, and timeless charm. Symbolizing growth, harmony, and renewal, it reflects the couple’s journey toward a flourishing and enduring love.
        </p>
        <div className="mt-6 z-10">
          <p className="font-bold text-xl mb-2 font-serif">Color Palette</p>
          <div className="flex gap-2 justify-center">
            <div className="w-10 h-10 rounded-full bg-emerald-900 border-2 border-stone-100"></div>
            <div className="w-10 h-10 rounded-full bg-emerald-700 border-2 border-stone-100"></div>
            <div className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-stone-100"></div>
            <div className="w-10 h-10 rounded-full bg-emerald-300 border-2 border-stone-100"></div>
            <div className="w-10 h-10 rounded-full bg-stone-100 border-2 border-emerald-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouCard;