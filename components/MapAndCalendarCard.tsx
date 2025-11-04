
import React from 'react';
import { QrCodeIcon, FlowerIcon, HeartIcon } from './icons';

const QrCodePlaceholder = () => (
  <div className="w-28 h-28 bg-white p-1 rounded-lg shadow-md flex items-center justify-center">
    <QrCodeIcon className="w-24 h-24 text-gray-400" />
  </div>
);


const MapAndCalendarCard: React.FC = () => {
  return (
    <div className="bg-stone-50 text-emerald-800 p-4 sm:p-6 border-4 border-emerald-600 w-full h-full shadow-lg overflow-y-auto">
      <div className="flex flex-col gap-6 items-center h-full justify-center">
        
        {/* Wishlist section */}
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
              <HeartIcon className="w-7 h-7 text-pink-400" />
              <h3 className="text-xl sm:text-2xl font-bold font-serif">Wedding Wishlist</h3>
          </div>
          <p className="text-base leading-relaxed mb-3 font-sans">
            Not sure what gift to bring? Scan the QR code to explore our wishlist.
          </p>
          <div className="flex justify-center">
            <QrCodePlaceholder />
          </div>
          <p className="text-xs mt-1 text-emerald-600 font-sans">Scan to view our wishlist</p>
        </div>

        <div className="w-full h-0.5 bg-emerald-200"></div>
        
        {/* Support section */}
        <div className="flex-1 text-center">
           <div className="flex items-center justify-center gap-2 mb-2">
              <FlowerIcon className="w-7 h-7" />
              <h3 className="text-xl sm:text-2xl font-bold font-serif">Share Your Blessings</h3>
          </div>
          <p className="text-base leading-relaxed mb-3 font-sans">
            We warmly welcome any heartfelt contributions to make our day more magical.
          </p>
          <div className="text-left bg-emerald-50 p-3 rounded-lg border border-emerald-200 font-sans text-sm">
            <p className="font-bold text-center mb-1">You can send donations here:</p>
            <ul className="list-disc list-inside space-y-0.5 pl-2">
              <li>BPI</li>
              <li>GoTyme</li>
              <li>Security Bank</li>
              <li>BDO</li>
              <li>GCash</li>
              <li>Maya</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MapAndCalendarCard;