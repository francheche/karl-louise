
import React from 'react';
import { QrCodeIcon, HeartIcon } from './icons';

const QrCodePlaceholder = () => (
  <div className="w-48 h-48 bg-white p-2 rounded-lg shadow-md flex items-center justify-center">
    <QrCodeIcon className="w-40 h-40 text-gray-400" />
  </div>
);

const PortraitCard: React.FC = () => {
  return (
    <div className="bg-stone-50 text-emerald-800 p-6 rounded-lg border-4 border-emerald-600 h-full flex flex-col items-center justify-center shadow-lg text-center">
      
      {/* RSVP Section */}
      <div className="w-full">
        <h2 className="text-4xl font-bold mb-2">RSVP</h2>
        <p className="text-lg leading-relaxed max-w-lg mx-auto">
          Save your seat and join the fun — confirm your attendance now to find out where the celebration begins!
        </p>
        <div className="my-6 flex justify-center">
          <QrCodePlaceholder />
        </div>
        <p className="text-sm text-emerald-700 max-w-md mx-auto">
          By opening this RSVP form, I consent to share my personal details with the couple and event organizers to ensure proper accommodation, a reserved seat under my name, and timely updates regarding the event and my reservation. I acknowledge that I have read and understood the event guidelines and agree to follow them upon submitting this form.
        </p>
      </div>

      <div className="w-40 h-0.5 bg-emerald-300 my-8"></div>

      {/* Footer Quote */}
      <div className="w-full">
        <p className="text-3xl italic text-emerald-700">
          “We can’t wait to celebrate this magical day with you — see you there!”
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 text-xl">
          <HeartIcon className="w-6 h-6 text-pink-400" />
          <div>
            <p className="text-4xl font-bold">Karl & Louise</p>
            <p className="font-bold tracking-widest">APR. 11, 2027</p>
          </div>
          <HeartIcon className="w-6 h-6 text-pink-400" />
        </div>
      </div>
    </div>
  );
};

export default PortraitCard;
