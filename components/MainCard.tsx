
import React from 'react';
import { HeartIcon, SparkleIcon, FlowerIcon } from './icons';

const MainCard: React.FC = () => {
  return (
    <div className="relative bg-emerald-600 text-stone-100 p-6 sm:p-8 rounded-lg border-4 border-stone-100 flex flex-col items-center text-center shadow-lg overflow-hidden">
      {/* Decorative elements */}
      <SparkleIcon className="absolute top-8 left-8 w-6 h-6 text-stone-100 opacity-80" />
      <SparkleIcon className="absolute top-20 right-10 w-4 h-4 text-stone-100 opacity-70" />
      <FlowerIcon className="absolute bottom-24 left-6 w-8 h-8 text-pink-300 opacity-90" />
      <HeartIcon className="absolute top-12 right-20 w-5 h-5 text-pink-300 opacity-90 rotate-12" />
      
      <p className="text-2xl sm:text-3xl">You are invited!</p>
      <p className="text-lg mt-2 leading-relaxed max-w-md">
        To witness two hearts, one love, forever bound. We’re finally tying the knot — and we can’t imagine celebrating this magical day without you there!
      </p>

      <div className="my-8">
        <img 
          src="https://picsum.photos/seed/weddingcouple2/300/300" 
          alt="Karl & Louise" 
          className="rounded-full shadow-xl border-4 border-stone-100 object-cover w-48 h-48 sm:w-64 sm:h-64"
        />
      </div>

      <div className="text-center z-10">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-wider">Karl & Louise</h1>
        <p className="text-xl mt-4 bg-stone-100 text-emerald-800 font-bold px-4 py-1 rounded-full inline-block shadow-md">
          APR. 11, 2027 | WEDDING DAY
        </p>
         <p className="text-2xl mt-2">SAVE THE DATE</p>
      </div>
    </div>
  );
};

export default MainCard;
