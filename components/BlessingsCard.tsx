import React from 'react';
import { QrCodeIcon } from './icons';

const QrCodePlaceholder = () => (
  <div className="w-28 h-28 bg-white p-1 rounded-lg shadow-md flex items-center justify-center">
    <QrCodeIcon className="w-24 h-24 text-gray-400" />
  </div>
);

const BlessingsCard: React.FC = () => {
  return (
    <div className="relative text-black p-4 sm:p-6 w-full h-full overflow-hidden">
      {/* Photo Frame Placeholders */}
      <div className="absolute top-4 right-4 w-1/3 h-3/4 bg-black/15 rounded-lg transform rotate-3 border-2 border-white/50 shadow-lg"></div>
      <div className="absolute bottom-4 left-4 w-2/5 h-1/4 bg-black/15 rounded-lg transform -rotate-3 border-2 border-white/50 shadow-lg"></div>

      <div className="relative z-10 flex flex-col items-center h-full justify-center text-center overflow-y-auto">
        <h3 className="text-xl sm:text-2xl font-bold font-serif mb-2">BLESSINGS</h3>
        <div className="w-full">
          <p className="text-sm leading-relaxed mb-3 font-sans max-w-sm mx-auto text-neutral-700">
            Should you wish to share a blessing to help us start our new life together, your loving contributions are deeply appreciated.
          </p>

          <div className="flex justify-center">
            <QrCodePlaceholder />
          </div>
          <p className="text-xs mt-1 mb-3 text-neutral-700 font-sans">Scan to share your blessings</p>

          <div className="text-left bg-stone-200 p-3 rounded-lg border border-neutral-300 font-sans text-sm max-w-xs mx-auto">
            <p className="font-bold text-center mb-2">You may also send your support via:</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 list-disc list-inside">
              <li>BPI</li>
              <li>GCash</li>
              <li>GoTyme</li>
              <li>Maya</li>
              <li>BDO</li>
              <li>Security Bank</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlessingsCard;