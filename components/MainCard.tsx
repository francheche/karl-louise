
import React from 'react';
import { HeartIcon, SparkleIcon, FlowerIcon } from './icons';

const MainCard: React.FC = () => {
  return (
    <div className="relative bg-emerald-600 text-stone-100 p-4 sm:p-6 w-full h-full flex flex-col items-center text-center shadow-lg overflow-hidden">
      {/* Decorative elements */}
      <SparkleIcon className="absolute top-4 left-4 w-5 h-5 text-stone-100 opacity-80" />
      <SparkleIcon className="absolute top-16 right-5 w-3 h-3 text-stone-100 opacity-70" />
      <FlowerIcon className="absolute bottom-20 left-3 w-6 h-6 text-pink-300 opacity-90" />
      <HeartIcon className="absolute top-8 right-12 w-4 h-4 text-pink-300 opacity-90 rotate-12" />
      
      <p className="text-xl sm:text-2xl font-serif">You are invited!</p>
      <p className="text-base mt-2 leading-relaxed max-w-md font-sans">
        To witness two hearts, one love, forever bound. We’re finally tying the knot — and we can’t imagine celebrating this magical day without you there!
      </p>

      <div className="my-6">
        <img 
          src="https://picsum.photos/seed/weddingcouple2/200/200" 
          alt="Karl & Louise" 
          className="rounded-full shadow-xl border-4 border-stone-100 object-cover w-32 h-32 sm:w-40 sm:h-40"
        />
      </div>

      <div className="text-center z-10">
        <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-wider">Karl & Louise</h1>
        <p className="text-base mt-3 bg-stone-100 text-emerald-800 font-bold px-3 py-1 rounded-full inline-block shadow-md font-sans">
          APR. 11, 2027 | WEDDING DAY
        </p>
         <p className="text-lg sm:text-xl mt-2 font-serif">SAVE THE DATE</p>
      </div>
    </div>
  );
};

export default MainCard;