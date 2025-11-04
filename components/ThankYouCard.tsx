
import React from 'react';
import { FlowerIcon } from './icons';

const ThankYouCard: React.FC = () => {
  return (
    <div className="bg-emerald-600 text-stone-100 p-6 rounded-lg border-4 border-stone-100 h-full flex flex-col items-center shadow-lg text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <FlowerIcon className="w-8 h-8" />
        <h2 className="text-4xl font-bold">DRESS CODE</h2>
        <FlowerIcon className="w-8 h-8" />
      </div>
      <div className="relative flex-grow flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-stone-100 opacity-10 rounded-lg -z-0"></div>
        <p className="text-lg leading-relaxed z-10 px-4 max-w-xl">
          Emerald green, a rich and vivid shade inspired by the beauty of precious gemstones, sets the perfect tone for a wedding that radiates elegance and depth. It embodies a lush, luxurious, and timeless charm that captivates the eye and the heart. Symbolizing growth, harmony, renewal, and prosperity, emerald green beautifully reflects the couple’s journey toward a flourishing and enduring love. Its natural sophistication and regal allure make it an ideal theme for a celebration that feels both enchanted and full of life.
        </p>
        <div className="mt-6 z-10">
          <p className="font-bold text-2xl mb-2">Color Palette</p>
          <div className="flex gap-2 justify-center">
            <div className="w-16 h-16 rounded-full bg-emerald-900 border-2 border-stone-100"></div>
            <div className="w-16 h-16 rounded-full bg-emerald-700 border-2 border-stone-100"></div>
            <div className="w-16 h-16 rounded-full bg-emerald-500 border-2 border-stone-100"></div>
            <div className="w-16 h-16 rounded-full bg-emerald-300 border-2 border-stone-100"></div>
            <div className="w-16 h-16 rounded-full bg-stone-100 border-2 border-emerald-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouCard;
