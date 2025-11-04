import React from 'react';
import { ChevronDownIcon } from './icons';

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => (
  <details className="group border-b-2 border-neutral-300 py-3 last:border-b-0">
    <summary className="font-serif text-lg cursor-pointer list-none flex justify-between items-center group-hover:text-neutral-700 transition-colors duration-200">
      {question}
      <ChevronDownIcon className="w-5 h-5 text-neutral-800 transition-transform duration-300 group-open:rotate-180 flex-shrink-0" />
    </summary>
    <div className="mt-2 text-base text-neutral-700 leading-relaxed font-sans pr-4">
      {children}
    </div>
  </details>
);

const InvitationCard: React.FC = () => {
  return (
    <div className="relative text-black p-4 sm:p-6 w-full h-full flex flex-col overflow-hidden">
      {/* Photo Frame Placeholders */}
      <div className="absolute -top-8 -left-8 w-1/2 h-1/3 bg-black/15 rounded-lg transform -rotate-12 border-2 border-white/50 shadow-lg"></div>
      <div className="absolute -bottom-8 -right-8 w-2/5 h-2/5 bg-black/15 rounded-lg transform rotate-12 border-2 border-white/50 shadow-lg"></div>

      <div className="relative z-10 flex flex-col h-full">
        <h2 className="text-2xl sm:text-3xl text-center font-bold font-serif mb-4 flex-shrink-0">FAQ's</h2>
      
        <div className="space-y-1 overflow-y-auto flex-grow pr-2">
          <FaqItem question="Can I bring a plus one?">
            <p>Unfortunately, no. Due to limited venue space, the seats are strictly reserved for invited guests only. We appreciate your understanding.</p>
          </FaqItem>
          <FaqItem question="Can I bring my child?">
            <p>We kindly ask that you don’t. The event is for adults only, and guests 16 years old and below (including babies and toddlers) will not be allowed to attend.</p>
          </FaqItem>
          <FaqItem question="Can I take home food?">
            <p>We’re sorry, but no take-home food will be allowed. Meal portions are prepared exactly for the confirmed number of guests, so we appreciate your cooperation.</p>
          </FaqItem>
          <FaqItem question="Can I arrive late?">
            <p>We kindly ask that you arrive on time. The event will follow a strict program schedule, and late arrivals will cause interruptions.</p>
          </FaqItem>
          <FaqItem question="Can I film or take photos using my phone?">
            <p>We ask that you refrain from doing this. A professional photo and video team will capture the entire event, and we want you to have undivided attention from the program. You may, however, enjoy taking personal photos at the photobooth provided.</p>
          </FaqItem>
          <FaqItem question="What’s the dress code or theme?">
            <p>Our theme is Black-Tie Formal — we encourage suits for gentlemen and long dresses for ladies.</p>
          </FaqItem>
          <FaqItem question="Can I wear a different color?">
            <p>We request that all guests wear emerald green to maintain the event’s cohesive and elegant look. Wearing a different color will make you stand out awkwardly in photos.</p>
          </FaqItem>
          <FaqItem question="What gifts can I bring for the couple?">
            <p>If you wish to share a gift, please scan the QR code on the last page of this invitation to view our wedding wish-list.</p>
          </FaqItem>
          <FaqItem question="Where are the ceremony and reception located?">
            <p>For privacy and security reasons, venue details will only be shared after you confirm your attendance through the RSVP form.</p>
          </FaqItem>
          <FaqItem question="How do I reserve my seat or ensure entry?">
            <p>Simply scan the RSVP QR code on the last page of this invitation. Only guests with confirmed attendance will be allowed entry and have reserved seats at the venue.</p>
          </FaqItem>
          <FaqItem question="Can I bring alcohol, cigarettes, vapes, or any sharp objects?">
            <p>No, please refrain from bringing these items. We aim to keep our event safe, family-friendly, and comfortable for everyone, especially for guests with asthma or respiratory sensitivities. We want to ensure that everyone leaves the venue safely and responsibly, without any risk of DUI-related incidents.</p>
          </FaqItem>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;