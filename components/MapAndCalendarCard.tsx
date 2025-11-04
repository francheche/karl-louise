import React from 'react';
import { QrCodeIcon } from './icons';

const QrCodePlaceholder = () => (
  <div className="w-28 h-28 bg-white p-1 rounded-lg shadow-md flex items-center justify-center">
    <QrCodeIcon className="w-24 h-24 text-gray-400" />
  </div>
);

const MapAndCalendarCard: React.FC = () => {
  return (
    <div className="relative text-black p-4 sm:p-6 w-full h-full overflow-hidden">
       {/* Photo Frame Placeholders */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-11/12 h-1/4 bg-black/15 rounded-lg transform -rotate-1 border-2 border-white/50 shadow-lg"></div>
      <div className="absolute bottom-4 left-4 w-1/3 h-1/2 bg-black/15 rounded-lg transform rotate-3 border-2 border-white/50 shadow-lg"></div>

      <div className="relative z-10 flex flex-col items-center h-full justify-center text-center overflow-y-auto">
        <h3 className="text-xl sm:text-2xl font-bold font-serif mb-2">WISHLIST</h3>
        <div className="text-sm leading-relaxed mb-4 font-sans max-w-sm mx-auto text-neutral-700">
          <p className="mb-2">Not sure what gift to bring? Don’t worry — we’ve got you covered!</p>
          <p className="mb-3">We know choosing the perfect gift can be tricky, so we’ve made it easier for you.</p>
          <p>Simply scan the QR code below to explore our carefully curated wedding wishlist — a collection of items that will help us build our first home together. Your thoughtful gift will be a beautiful reminder of your presence and support on this special journey, allowing a touch of you to live with us in our everyday moments.</p>
        </div>
        <div className="flex justify-center">
          <QrCodePlaceholder />
        </div>
        <p className="text-xs mt-1 text-neutral-700 font-sans">Scan to view our wishlist</p>
      </div>
    </div>
  );
};

export default MapAndCalendarCard;