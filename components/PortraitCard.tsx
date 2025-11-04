import React from 'react';
import { QrCodeIcon } from './icons';

const QrCodePlaceholder = () => (
  <div className="w-32 h-32 bg-white p-2 rounded-lg shadow-md flex items-center justify-center">
    <QrCodeIcon className="w-28 h-28 text-gray-400" />
  </div>
);

const PortraitCard: React.FC = () => {
  return (
    <div className="relative text-black p-4 sm:p-6 w-full h-full flex flex-col items-center justify-center text-center overflow-hidden">
       {/* Photo Frame Placeholders */}
      <div className="absolute top-4 left-4 w-1/2 h-1/3 bg-black/15 rounded-lg transform -rotate-3 border-2 border-white/50 shadow-lg"></div>
      <div className="absolute bottom-1/4 right-4 w-1/3 h-1/2 bg-black/15 rounded-lg transform rotate-2 border-2 border-white/50 shadow-lg"></div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {/* RSVP Section */}
        <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-2">RSVP</h2>
        <p className="text-base leading-relaxed max-w-lg mx-auto font-sans text-neutral-700">
          Kindly confirm your attendance by March 11, 2027. Your reply is requested to secure your seat and receive venue details.
        </p>
        <div className="my-4 flex justify-center">
          <QrCodePlaceholder />
        </div>
        <p className="text-xs text-neutral-700 max-w-md mx-auto font-sans">
          Your details will be used solely for event coordination and will be kept confidential. We look forward to celebrating with you.
        </p>

        <div className="w-48 h-px bg-neutral-300 my-6"></div>

        {/* Footer Quote */}
        <div>
          <p className="text-xl sm:text-2xl italic text-black font-serif">
            “We can’t wait to celebrate this magical day with you!”
          </p>
          <div className="mt-4">
            <p className="text-2xl sm:text-3xl font-bold font-serif">Karl & Louise</p>
            <p className="font-bold tracking-widest font-sans text-sm mt-1">APR. 11, 2027</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortraitCard;