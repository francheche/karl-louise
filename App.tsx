import React, { useState, useEffect, useRef, useCallback } from 'react';
import HeroCard from './components/MainCard';
import ItineraryCard from './components/TimelineCard';
import FaqCard from './components/InvitationCard';
import DressCodeCard from './components/ThankYouCard';
import GiftingCard from './components/MapAndCalendarCard';
import BlessingsCard from './components/BlessingsCard';
import RsvpCard from './components/PortraitCard';

const BlankPage: React.FC = () => null;

const pageContents = [
  <HeroCard />,
  <ItineraryCard />,
  <DressCodeCard />,
  <FaqCard />,
  <GiftingCard />,
  <BlessingsCard />,
  <RsvpCard />,
];

const App: React.FC = () => {
  const pagesData = pageContents.map((content) => ({
    front: content,
    back: <BlankPage />,
  }));

  const totalPages = pagesData.length;

  const [pages, setPages] = useState(() => 
    pagesData.map((_, index) => ({
      isFlipped: false,
      zIndex: totalPages - index,
    }))
  );
  
  const [dragInfo, setDragInfo] = useState<{
    pageIndex: number,
    startX: number,
    isTurningForward: boolean,
  } | null>(null);

  const bookRef = useRef<HTMLDivElement>(null);

  const handleGrabStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>, direction: 'forward' | 'backward') => {
    if (dragInfo) return;

    let pageIndex = -1;
    let isTurningForward = false;

    if (direction === 'forward') {
        const firstUnflippedIndex = pages.findIndex(p => !p.isFlipped);
        if (firstUnflippedIndex !== -1) {
            pageIndex = firstUnflippedIndex;
            isTurningForward = true;
        }
    } else { // backward
        const lastFlippedIndex = pages.map(p => p.isFlipped).lastIndexOf(true);
        if (lastFlippedIndex !== -1) {
            pageIndex = lastFlippedIndex;
            isTurningForward = false;
        }
    }

    if (pageIndex === -1) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    
    setDragInfo({ pageIndex, startX: clientX, isTurningForward });
    
    const pageEl = bookRef.current?.querySelector(`[data-page-index="${pageIndex}"]`) as HTMLElement;
    if (pageEl) {
      pageEl.classList.add('dragging');
      pageEl.style.transition = 'none';
    }

    if (bookRef.current) {
      bookRef.current.classList.add('grabbing');
    }

    setPages(currentPages => 
      currentPages.map((p, i) => 
        i === pageIndex ? { ...p, zIndex: totalPages + 1 } : p
      )
    );
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!dragInfo) return;

    const SENSITIVITY = 1.5;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const moveX = clientX - dragInfo.startX;
    
    const pageEl = bookRef.current?.querySelector(`[data-page-index="${dragInfo.pageIndex}"]`) as HTMLElement;
    if (!pageEl || !bookRef.current) return;
    
    const amplifiedMoveX = moveX * SENSITIVITY;
    const bookWidth = bookRef.current.clientWidth / 2;
    let rotation;
    if (dragInfo.isTurningForward) {
        rotation = (amplifiedMoveX / bookWidth) * 180;
    } else {
        rotation = -180 + (amplifiedMoveX / bookWidth) * 180;
    }
    rotation = Math.max(-180, Math.min(0, rotation));
    
    // Calculate skew for curl effect
    const rotationRadians = Math.abs(rotation) * (Math.PI / 180);
    const skewAmount = Math.sin(rotationRadians) * 7; // Max 7 degrees of skew
    const skewDeg = dragInfo.isTurningForward ? -skewAmount : skewAmount;
    
    pageEl.style.transform = `rotateY(${rotation}deg) skewY(${skewDeg}deg)`;

  }, [dragInfo]);

  const handleDragEnd = useCallback((e: MouseEvent | TouchEvent) => {
    if (!dragInfo) return;

    const { pageIndex, isTurningForward } = dragInfo;
    const pageEl = bookRef.current?.querySelector(`[data-page-index="${pageIndex}"]`) as HTMLElement;
    
    if (pageEl) {
        pageEl.classList.remove('dragging');
        pageEl.style.transition = '';
        pageEl.style.transform = '';

        const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
        const moveX = clientX - dragInfo.startX;
        const bookWidth = bookRef.current!.clientWidth / 2;
        const flipThreshold = bookWidth / 4; // Reduced threshold for easier flipping

        const shouldFlip = Math.abs(moveX) > flipThreshold;
        
        const finalPages = [...pages];
        if (shouldFlip) {
            finalPages[pageIndex].isFlipped = isTurningForward;
        }

        finalPages.forEach((p, i) => {
            if (finalPages[i].isFlipped) {
                p.zIndex = i;
            } else {
                p.zIndex = totalPages - i;
            }
        });

        setPages(finalPages);
    }
    
    if (bookRef.current) {
        bookRef.current.classList.remove('grabbing');
    }
    setDragInfo(null);
  }, [dragInfo, pages, totalPages]);

  useEffect(() => {
    if (!dragInfo) return;
    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchmove', handleDragMove);
    window.addEventListener('touchend', handleDragEnd);

    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [dragInfo, handleDragMove, handleDragEnd]);

  return (
    <main className="bg-stone-300 min-h-screen p-4 sm:p-8 flex flex-col items-center justify-center select-none">
      <div className="w-full max-w-xl lg:max-w-6xl h-[80vh] max-h-[800px]">
        <div ref={bookRef} className={`relative w-full h-full flex justify-center items-center book-container ${dragInfo ? 'grabbing' : ''}`}>
          {/* Static Left-side background (visible when pages are turned) */}
          <div className="hidden lg:block absolute left-0 w-1/2 h-full bg-stone-50 shadow-inner rounded-l-lg"></div>

          {/* All Pages */}
          <div className="w-full lg:w-1/2 h-full absolute lg:right-0" style={{ transformStyle: 'preserve-3d' }}>
            {pagesData.map((page, index) => (
              <div
                key={index}
                data-page-index={index}
                className={`page ${pages[index].isFlipped ? 'flipped' : ''} absolute w-full h-full`}
                style={{ zIndex: pages[index].zIndex }}
              >
                <div 
                  className="page-front rounded-r-lg lg:rounded-none"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('https://images.unsplash.com/photo-1619043518800-7f14be467dca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {page.front}
                </div>
                <div className="page-back silk-texture rounded-l-lg">{page.back}</div>
              </div>
            ))}
          </div>
          
          {/* --- INTERACTION ZONES --- */}
          {/* Zone for turning pages FORWARD */}
          <div 
            className="absolute top-0 right-0 h-full w-1/4 z-50 grab-zone-right"
            onMouseDown={(e) => handleGrabStart(e, 'forward')}
            onTouchStart={(e) => handleGrabStart(e, 'forward')}
          ></div>

          {/* Zone for turning pages BACKWARD */}
          <div 
            className="absolute top-0 left-0 h-full w-1/4 z-50 grab-zone-left"
            onMouseDown={(e) => handleGrabStart(e, 'backward')}
            onTouchStart={(e) => handleGrabStart(e, 'backward')}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default App;