
import React from 'react';
import { QrCodeIcon, HeartIcon } from './icons';

const QrCodePlaceholder = () => (
  <div className="w-32 h-32 bg-white p-2 rounded-lg shadow-md flex items-center justify-center">
    <QrCodeIcon className="w-28 h-28 text-gray-400" />
  </div>
);

const PortraitCard: React.FC = () => {
  return (
    <div className="bg-stone-50 text-emerald-800 p-4 sm:p-6 border-4 border-emerald-600 w-full h-full flex flex-col items-center justify-center shadow-lg text-center overflow-y-auto">
      
      {/* RSVP Section */}
      <div className="w-full">
        <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-2">RSVP</h2>
        <p className="text-base leading-relaxed max-w-lg mx-auto font-sans">
          Save your seat and join the fun — confirm your attendance now!
        </p>
        <div className="my-4 flex justify-center">
          <QrCodePlaceholder />
        </div>
        <p className="text-xs text-emerald-700 max-w-md mx-auto font-sans">
          By opening this RSVP form, I consent to share my personal details with the couple and organizers for accommodation and updates. I agree to the event guidelines upon submitting this form.
        </p>
      </div>

      <div className="w-32 h-0.5 bg-emerald-300 my-4"></div>

      {/* Footer Quote */}
      <div className="w-full">
        <p className="text-xl sm:text-2xl italic text-emerald-700 font-serif">
          “See you there!”
        </p>
        <div className="mt-4 flex items-center justify-center gap-3 text-lg">
          <HeartIcon className="w-5 h-5 text-pink-400" />
          <div>
            <p className="text-2xl sm:text-3xl font-bold font-serif">Karl & Louise</p>
            <p className="font-bold tracking-widest font-sans text-sm">APR. 11, 2027</p>
          </div>
          <HeartIcon className="w-5 h-5 text-pink-400" />
        </div>
      </div>
    </div>
  );
};

export default PortraitCard;