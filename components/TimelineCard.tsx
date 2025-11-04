
import React from 'react';
import { RingsIcon, CameraIcon, PeopleIcon, DancingIcon, WineIcon, FoodIcon, FlowerIcon } from './icons';

const ItineraryItem: React.FC<{ time: string; title: string; description: string; icon: React.ReactNode }> = ({ time, title, description, icon }) => (
  <li className="flex items-start gap-3">
    <div className="flex flex-col items-center">
      <div className="bg-stone-100 p-2 rounded-full text-emerald-700 shadow-md">
        {icon}
      </div>
      <p className="font-bold text-base mt-1 font-sans">{time}</p>
    </div>
    <div className="pt-1">
      <p className="font-serif font-bold text-lg">{title}</p>
      <p className="text-sm mt-1 font-sans">{description}</p>
    </div>
  </li>
);

const TimelineCard: React.FC = () => {
  return (
    <div className="bg-emerald-600 text-stone-100 p-4 sm:p-6 w-full h-full shadow-lg overflow-y-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <FlowerIcon className="w-7 h-7" />
        <h2 className="text-2xl sm:text-3xl text-center font-bold font-serif">ITINERARY</h2>
        <FlowerIcon className="w-7 h-7" />
      </div>
      <ul className="space-y-4 relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-stone-100 opacity-30 hidden sm:block"></div>
        <ItineraryItem time="9AM" title="Union of Souls" description="Witness the heartfelt vows at the wedding ceremony." icon={<RingsIcon className="w-7 h-7" />} />
        <ItineraryItem time="10AM" title="Memento Hour" description="Capture post-nuptial keepsakes with family and friends." icon={<CameraIcon className="w-7 h-7" />} />
        <ItineraryItem time="11AM" title="Gathering of Hearts" description="Welcome the newlyweds as they make their grand entrance." icon={<PeopleIcon className="w-7 h-7" />} />
        <ItineraryItem time="12PM" title="Eternal Waltz" description="The couple shares their first dance as one." icon={<DancingIcon className="w-7 h-7" />} />
        <ItineraryItem time="1PM" title="Cheers to Forever" description="Celebrate with a wine toast and cake slicing." icon={<WineIcon className="w-7 h-7" />} />
        <ItineraryItem time="2PM" title="Lover’s Banquet" description="Share a delightful feast as we savor love and laughter." icon={<FoodIcon className="w-7 h-7" />} />
      </ul>
    </div>
  );
};

export default TimelineCard;