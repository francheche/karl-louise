
import React from 'react';
import HeroCard from './components/MainCard';
import ItineraryCard from './components/TimelineCard';
import FaqCard from './components/InvitationCard';
import DressCodeCard from './components/ThankYouCard';
import GiftingCard from './components/MapAndCalendarCard';
import RsvpCard from './components/PortraitCard';

const App: React.FC = () => {
  return (
    <main className="bg-emerald-900 min-h-screen p-2 sm:p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto bg-stone-100 shadow-2xl rounded-lg p-4 sm:p-6 space-y-6">
        <HeroCard />
        <ItineraryCard />
        <FaqCard />
        <DressCodeCard />
        <GiftingCard />
        <RsvpCard />
      </div>
    </main>
  );
};

export default App;
