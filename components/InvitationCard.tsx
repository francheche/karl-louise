
import React from 'react';
import { FlowerIcon, ChevronDownIcon } from './icons';

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => (
  <details className="group border-b-2 border-emerald-200 py-3 last:border-b-0">
    <summary className="font-serif text-lg cursor-pointer list-none flex justify-between items-center group-hover:text-emerald-900 transition-colors duration-200">
      {question}
      <ChevronDownIcon className="w-5 h-5 text-emerald-500 transition-transform duration-300 group-open:rotate-180 flex-shrink-0" />
    </summary>
    <div className="mt-2 text-base text-emerald-700 leading-relaxed font-sans pr-4">
      {children}
    </div>
  </details>
);

const InvitationCard: React.FC = () => {
  return (
    <div className="bg-stone-50 text-emerald-800 p-4 sm:p-6 border-4 border-emerald-600 w-full h-full shadow-lg flex flex-col">
       <div className="flex items-center justify-center gap-2 mb-4 flex-shrink-0">
        <FlowerIcon className="w-7 h-7" />
        <h2 className="text-2xl sm:text-3xl text-center font-bold font-serif">FAQ's</h2>
        <FlowerIcon className="w-7 h-7" />
      </div>
      
      <div className="space-y-1 overflow-y-auto flex-grow pr-2">
        <FaqItem question="Can we bring a plus one?">
          <p>We’re sorry, but no. Our venue has limited seating, and seats are strictly reserved for those listed on our guest list. Thank you for your understanding!</p>
        </FaqItem>
        <FaqItem question="Can I bring my child?">
          <p>This will be an adults-only celebration (17+). We hope you can treat this as your well-deserved night off!</p>
        </FaqItem>
        <FaqItem question="Can I attend if I’m older?">
          <p>Of course! We’d be so happy to celebrate with you, as long as you’re below 70. The venue doesn’t have special medical facilities.</p>
        </FaqItem>
         <FaqItem question="Can I take home food?">
          <p>Sorry, no take-home goodies this time! Meals are prepared based on the exact number of confirmed guests.</p>
        </FaqItem>
         <FaqItem question="Can I come late?">
          <p>Please don’t! We’d love for everyone to be on time. Late arrivals might cause interruptions to the set schedule.</p>
        </FaqItem>
        <FaqItem question="Can I film using my phone?">
          <p>No need! We have a full team of professionals capturing every moment. An unlimited photobooth will be ready for you!</p>
        </FaqItem>
        <FaqItem question="Can I use my phone during the ceremony?">
          <p>Please keep phones tucked away during the ceremony and main program, so you can be fully present for every moment.</p>
        </FaqItem>
        <FaqItem question="Can I smoke or vape?">
          <p>Nope! The venue is a smoke-free space. Please step at least 10 feet away from the entrance if you need to.</p>
        </FaqItem>
        <FaqItem question="Will there be alcohol?">
          <p>No alcohol will be served. We want to keep the atmosphere calm, joyful, and family-friendly for everyone!</p>
        </FaqItem>
        <FaqItem question="Can I bring sharp objects?">
          <p>Absolutely not. For everyone’s safety, no items that can be used as a weapon are allowed. Bags may be checked at entry.</p>
        </FaqItem>
         <FaqItem question="Can I wear something revealing?">
          <p>We’d prefer not. Please dress elegantly and modestly, so everyone feels comfortable, confident, and classy!</p>
        </FaqItem>
        <FaqItem question="Can I wear a different color?">
          <p>Let’s match! Please follow our dress code and come in shades of green to complement our theme. It’ll look amazing in photos!</p>
        </FaqItem>
         <FaqItem question="What’s the theme?">
          <p>Black-tie formal! Think elegant evening wear — long gowns, suits, or tuxedos. Time to glam up and celebrate in style!</p>
        </FaqItem>
        <FaqItem question="Where is the venue?">
          <p>For privacy and safety, addresses will be shared only after you’ve successfully filled out the RSVP form.</p>
        </FaqItem>
        <FaqItem question="What gifts can I bring?">
          <p>Your presence is a gift! But if you'd like to bless us more, please check out our wedding wishlist via the QR code.</p>
        </FaqItem>
        <FaqItem question="How do I RSVP?">
          <p>It’s easy! Just scan the RSVP QR code on the last page and fill out the form to secure your spot!</p>
        </FaqItem>
      </div>
    </div>
  );
};

export default InvitationCard;