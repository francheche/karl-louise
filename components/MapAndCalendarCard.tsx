
import React from 'react';
import { QrCodeIcon, FlowerIcon, HeartIcon } from './icons';

const QrCodePlaceholder = () => (
  <div className="w-40 h-40 bg-white p-2 rounded-lg shadow-md flex items-center justify-center">
    <QrCodeIcon className="w-32 h-32 text-gray-400" />
  </div>
);


const MapAndCalendarCard: React.FC = () => {
  return (
    <div className="bg-stone-50 text-emerald-800 p-6 rounded-lg border-4 border-emerald-600 h-full shadow-lg">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        
        {/* Wishlist section */}
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
              <HeartIcon className="w-8 h-8 text-pink-400" />
              <h3 className="text-3xl font-bold">Wedding Wishlist</h3>
          </div>
          <p className="text-lg leading-relaxed mb-4">
            Not sure what gift to bring? Don’t worry — we’ve got you covered! Simply scan the QR code to explore our carefully curated wedding wishlist.
          </p>
          <QrCodePlaceholder />
          <p className="text-sm mt-2 text-emerald-600">Scan to view our wishlist</p>
        </div>

        <div className="w-full md:w-0.5 md:h-64 bg-emerald-200"></div>
        
        {/* Support section */}
        <div className="flex-1 text-center">
           <div className="flex items-center justify-center gap-2 mb-4">
              <FlowerIcon className="w-8 h-8" />
              <h3 className="text-3xl font-bold">Share Your Blessings</h3>
          </div>
          <p className="text-lg leading-relaxed mb-4">
            If you’d love to share in making our special day even more magical, we warmly welcome your heartfelt contributions.
          </p>
          <div className="text-left bg-emerald-50 p-4 rounded-lg border border-emerald-200">
            <p className="font-bold text-center mb-2">You can send donations here:</p>
            <ul className="list-disc list-inside space-y-1">
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
