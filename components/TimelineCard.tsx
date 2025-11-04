import React from 'react';

const ItineraryItem: React.FC<{ time: string; title: string; description: string; }> = ({ time, title, description }) => (
  <li className="flex items-start gap-4">
    <div className="w-16 text-right flex-shrink-0">
      <p className="font-bold text-base font-sans text-black">{time}</p>
    </div>
    <div>
      <p className="font-serif font-bold text-lg text-black">{title}</p>
      <p className="text-sm mt-1 font-sans text-neutral-700">{description}</p>
    </div>
  </li>
);

const TimelineCard: React.FC = () => {
  return (
    <div className="relative text-neutral-800 p-4 sm:p-6 w-full h-full overflow-hidden">
      {/* Photo Frame Placeholders */}
      <div className="absolute top-0 right-4 w-1/3 h-full bg-black/15 rounded-lg transform rotate-3 border-2 border-white/50 shadow-lg"></div>
      <div className="absolute bottom-4 left-4 w-2/5 h-1/4 bg-black/15 rounded-lg transform -rotate-2 border-2 border-white/50 shadow-lg"></div>

      <div className="relative z-10 h-full overflow-y-auto pr-4">
        <h2 className="text-2xl sm:text-3xl text-center font-bold font-serif text-black mb-6">ITINERARY</h2>
        <ul className="space-y-6">
          <ItineraryItem time="9AM" title="Union of Souls" description="Witness the heartfelt vows at the wedding ceremony that mark the beginning of forever." />
          <ItineraryItem time="10AM" title="Memento Hour" description="Capture post-nuptial keepsakes with family and friends to preserve the joy of the day." />
          <ItineraryItem time="11AM" title="Gathering of Hearts" description="Welcome the newlyweds as they make their grand and entrance to the reception." />
          <ItineraryItem time="12PM" title="Eternal Waltz" description="Feel the magic as the couple shares their first dance as one." />
          <ItineraryItem time="1PM" title="Cheers to Forever" description="Celebrate love and new beginnings of the couple while they toast a wine and slice a cake." />
          <ItineraryItem time="2PM" title="Lover’s Banquet" description="Share a delightful feast as we savor love, laughter, and togetherness." />
        </ul>
      </div>
    </div>
  );
};

export default TimelineCard;