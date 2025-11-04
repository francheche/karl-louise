
import React from 'react';
import { FlowerIcon } from './icons';

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => (
  <details className="border-b-2 border-emerald-200 py-4 last:border-b-0">
    <summary className="font-bold text-xl cursor-pointer hover:text-emerald-900 list-none flex justify-between items-center">
      {question}
      <span className="text-pink-400 text-2xl">+</span>
    </summary>
    <div className="mt-2 text-lg text-emerald-700 leading-relaxed">
      {children}
    </div>
  </details>
);

const InvitationCard: React.FC = () => {
  return (
    <div className="bg-stone-50 text-emerald-800 p-6 rounded-lg border-4 border-emerald-600 h-full shadow-lg">
       <div className="flex items-center justify-center gap-2 mb-6">
        <FlowerIcon className="w-8 h-8" />
        <h2 className="text-4xl text-center font-bold">FAQ's</h2>
        <FlowerIcon className="w-8 h-8" />
      </div>
      
      <div className="space-y-2">
        <FaqItem question="Can we bring a plus one?">
          <p>We’re sorry, but no. Our venue has limited seating, and we want to make sure every invited guest has a cozy spot waiting for them. Seats are strictly reserved for those listed on our guest list. Thank you so much for understanding and helping us keep things comfortable for everyone!</p>
        </FaqItem>
        <FaqItem question="Can I bring my child?">
          <p>We love kids — but not this time! This will be an adults-only celebration, so everyone can relax and enjoy the night. We won’t be able to accommodate babies, toddlers, or children 16 years old and below. We hope you can treat this as your well-deserved night off!</p>
        </FaqItem>
        <FaqItem question="Can I still attend even though I’m older?">
          <p>Of course! We’d be so happy to celebrate with you — as long as you’re below 70 years old. We just want to make sure everyone’s safe and comfortable since the venue doesn’t have medical staff or special facilities. Thank you for understanding!</p>
        </FaqItem>
         <FaqItem question="Can I take home food?">
          <p>Sorry, no take-home goodies this time! Our catering team will prepare meals based on the exact number of confirmed guests, so there won’t be extra portions. Don’t worry though — there’ll be plenty to enjoy while you’re with us!</p>
        </FaqItem>
         <FaqItem question="Can I come late?">
          <p>Please don’t! We’d really love for everyone to be on time for both the church ceremony and reception. We’ll be following a set schedule, and late arrivals might cause interruptions. Let’s all make every moment count together!</p>
        </FaqItem>
        <FaqItem question="Can I film using my phone?">
          <p>No need! We’ve got a full team of professional photographers, videographers, and content creators capturing every special moment. If you’d like a personal keepsake, our unlimited photobooth will be ready — so strike your best pose!</p>
        </FaqItem>
        <FaqItem question="Can I use my phone during the ceremony or program?">
          <p>We’d really appreciate it if you could keep your phones tucked away during the ceremony and main program. That way, our photographers can capture all the magic — and you can be fully present for every heartfelt moment.</p>
        </FaqItem>
        <FaqItem question="Can I bring vapes, cigarettes, or anything to smoke?">
          <p>Nope! The venue is a smoke-free space, and some guests have asthma or allergies. Please avoid smoking or vaping inside. If you really need a puff, kindly step at least 10 feet away from the entrance — or skip it and enjoy the fresh air with us instead!</p>
        </FaqItem>
        <FaqItem question="Can I drink alcohol?">
          <p>No alcohol will be served, and we promise it’s for good reasons! 1. Our schedule is already filled with fun and meaningful moments. 2. We want everyone to get home safely after the celebration. 3. Most importantly, we want to keep the atmosphere calm, joyful, and family-friendly! We’d be so grateful if you could respect this request — and let’s raise a glass of juice to love instead!</p>
        </FaqItem>
        <FaqItem question="Can I bring sharp objects or anything that can be used as a weapon?">
          <p>Absolutely not. For everyone’s safety and peace of mind, no sharp objects, knives, tools, or any items that can be used as a weapon are allowed inside the venue. Our security team may check bags at entry to ensure a safe and comfortable celebration for all our guests.</p>
        </FaqItem>
         <FaqItem question="Can I wear something revealing?">
          <p>We’d prefer not. Our guest list includes loved ones from all walks of life (traditions and beliefs), so please dress elegantly and modestly. We just want everyone to feel comfortable, confident, and classy all evening long!</p>
        </FaqItem>
        <FaqItem question="Can I wear a different color?">
          <p>Let’s match! Please follow our dress code and come in shades of green to complement our theme. We’ve included a color palette guide to help you choose your outfit — it’ll look amazing in photos, promise!</p>
        </FaqItem>
         <FaqItem question="What’s the theme?">
          <p>Black-tie formal! Think elegant evening wear — long gowns, suits, or tuxedos. Time to glam up and celebrate love in style!</p>
        </FaqItem>
        <FaqItem question="Where is the church ceremony and reception program located?">
          <p>For everyone’s privacy and safety, the addresses and map locations will be shared only after you’ve successfully filled out the RSVP form. You’ll receive the full details once your attendance is confirmed.</p>
        </FaqItem>
        <FaqItem question="What gifts can I bring for the couple?">
          <p>Your presence is already a gift, but if you’d like to bless us even more, you can check out our wedding wishlist via the QR code at the end of this invitation. It includes thoughtful ideas that will truly help us as we start our married life together.</p>
        </FaqItem>
        <FaqItem question="How do I confirm my seat or entry?">
          <p>It’s easy! Just scan the RSVP QR code on the last page of this invitation and fill out the form. Only guests with confirmed RSVPs will have reserved seats — so please confirm early to secure your spot!</p>
        </FaqItem>
      </div>
    </div>
  );
};

export default InvitationCard;
