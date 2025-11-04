import React, { useState, useRef } from 'react';
import HeroCard from './components/MainCard';
import ItineraryCard from './components/TimelineCard';
import FaqCard from './components/InvitationCard';
import DressCodeCard from './components/ThankYouCard';
import GiftingCard from './components/MapAndCalendarCard';
import RsvpCard from './components/PortraitCard';
import { HeartIcon, FlowerIcon } from './components/icons';

const CoverPage: React.FC = () => (
  <div className="bg-emerald-600 text-stone-100 w-full h-full flex flex-col justify-center items-center p-8 text-center border-4 border-stone-100 rounded-lg">
    <FlowerIcon className="w-16 h-16 mb-4" />
    <h1 className="text-5xl sm:text-7xl font-serif font-bold">Karl & Louise</h1>
    <p className="text-xl mt-4 bg-stone-100 text-emerald-800 font-bold px-4 py-1 rounded-full inline-block shadow-md font-sans">
      APR. 11, 2027
    </p>
    <p className="mt-8 text-2xl font-serif tracking-wider">Wedding Invitation</p>
  </div>
);

const BackCoverPage: React.FC = () => (
   <div className="bg-emerald-600 text-stone-100 w-full h-full flex flex-col justify-center items-center p-8 text-center border-4 border-stone-100 rounded-lg">
    <HeartIcon className="w-16 h-16 mb-4 text-pink-300" />
    <p className="text-3xl sm:text-4xl italic text-stone-100 font-serif">
      “We can’t wait to celebrate with you!”
    </p>
  </div>
);


const pageContents = [
  CoverPage,
  HeroCard,
  ItineraryCard,
  DressCodeCard,
  FaqCard,
  GiftingCard,
  RsvpCard,
  BackCoverPage,
];

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const isDragging = useRef(false);

  const totalPages = pageContents.length;

  const handleInteractionStart = (y: number) => {
    touchStartY.current = y;
    touchEndY.current = y;
  };

  const handleInteractionMove = (y: number) => {
    if (touchStartY.current === null) return;
    touchEndY.current = y;
  };

  const handleInteractionEnd = () => {
    if (touchStartY.current === null || touchEndY.current === null) return;
    
    const deltaY = touchStartY.current - touchEndY.current;
    const absDeltaY = Math.abs(deltaY);
    const SWIPE_THRESHOLD = 50;

    if (absDeltaY > SWIPE_THRESHOLD) {
      if (deltaY > 0) { // Swiped Up
        setCurrentPage(p => Math.min(p + 1, totalPages - 1));
      } else { // Swiped Down
        setCurrentPage(p => Math.max(p - 1, 0));
      }
    }
    
    touchStartY.current = null;
    touchEndY.current = null;
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => handleInteractionStart(e.targetTouches[0].clientY);
  const handleTouchMove = (e: React.TouchEvent) => handleInteractionMove(e.targetTouches[0].clientY);
  const handleTouchEnd = () => handleInteractionEnd();
  
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    handleInteractionStart(e.clientY);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleInteractionMove(e.clientY);
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    handleInteractionEnd();
  };

  return (
    <main 
      className="bg-stone-200 min-h-screen p-4 sm:p-8 flex flex-col items-center justify-center overflow-hidden select-none"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="relative book-container cursor-grab"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        {pageContents.map((Content, index) => (
          <div
            key={index}
            className={`page rounded-lg shadow-xl ${index < currentPage ? 'flipped' : ''}`}
            style={{ zIndex: pageContents.length - index }}
          >
            <div className="page-front bg-white rounded-lg overflow-hidden">
              <Content />
            </div>
            <div className="page-back bg-stone-100 rounded-lg">
              {/* This is the back of the flipped page */}
            </div>
          </div>
        ))}
         {/* Cover page for when all pages are flipped */}
        <div 
          className="absolute w-full h-full bg-stone-100 rounded-lg shadow-inner"
          style={{ zIndex: 0 }}
        ></div>
      </div>

      <div className="mt-8 text-center text-emerald-800 opacity-80 font-sans">
        <p className="text-lg">Swipe up or down to turn pages</p>
        <p className="text-sm">Page {currentPage + 1} of {totalPages}</p>
      </div>
    </main>
  );
};

export default App;