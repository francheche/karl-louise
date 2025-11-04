
import React from 'react';
import { RingsIcon, CameraIcon, PeopleIcon, DancingIcon, WineIcon, FoodIcon, FlowerIcon } from './icons';

const ItineraryItem: React.FC<{ time: string; title: string; description: string; icon: React.ReactNode }> = ({ time, title, description, icon }) => (
  <li className="flex items-start gap-4">
    <div className="flex flex-col items-center">
      <div className="bg-stone-100 p-3 rounded-full text-emerald-700 shadow-md">
        {icon}
      </div>
      <p className="font-bold text-lg mt-1">{time}</p>
    </div>
    <div className="pt-2">
      <p className="font-bold text-xl">{title}</p>
      <p className="text-md mt-1">{description}</p>
    </div>
  </li>
);

const TimelineCard: React.FC = () => {
  return (
    <div className="bg-emerald-600 text-stone-100 p-6 rounded-lg border-4 border-stone-100 h-full shadow-lg">
      <div className="flex items-center justify-center gap-2 mb-6">
        <FlowerIcon className="w-8 h-8" />
        <h2 className="text-4xl text-center font-bold">ITINERARY</h2>
        <FlowerIcon className="w-8 h-8" />
      </div>
      <ul className="space-y-8 relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-stone-100 opacity-50 hidden sm:block"></div>
        <ItineraryItem time="9AM" title="Union of Souls" description="Witness the heartfelt vows at the wedding ceremony that mark the beginning of forever." icon={<RingsIcon className="w-8 h-8" />} />
        <ItineraryItem time="10AM" title="Memento Hour" description="Capture post-nuptial keepsakes with family and friends to preserve the joy of the day." icon={<CameraIcon className="w-8 h-8" />} />
        <ItineraryItem time="11AM" title="Gathering of Hearts" description="Welcome the newlyweds as they make their grand and entrance to the reception." icon={<PeopleIcon className="w-8 h-8" />} />
        <ItineraryItem time="12PM" title="Eternal Waltz" description="Feel the magic as the couple shares their first dance as one." icon={<DancingIcon className="w-8 h-8" />} />
        <ItineraryItem time="1PM" title="Cheers to Forever" description="Celebrate love and new beginnings of the couple while they toast a wine and slice a cake." icon={<WineIcon className="w-8 h-8" />} />
        <ItineraryItem time="2PM" title="Lover’s Banquet" description="Share a delightful feast as we savor love, laughter, and togetherness." icon={<FoodIcon className="w-8 h-8" />} />
      </ul>
    </div>
  );
};

export default TimelineCard;
