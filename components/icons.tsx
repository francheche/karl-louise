
import React from 'react';

export const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const FlowerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25c-2.488 0-4.5 2.012-4.5 4.5s2.012 4.5 4.5 4.5 4.5-2.012 4.5-4.5-2.012-4.5-4.5-4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25c1.933 0 3.5 1.567 3.5 3.5v.001c0 1.933-1.567 3.5-3.5 3.5h.001c-1.933 0-3.5-1.567-3.5-3.5v-.001c0-1.933 1.567-3.5 3.5-3.5z" transform="rotate(60 12 12)" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25c1.933 0 3.5 1.567 3.5 3.5v.001c0 1.933-1.567 3.5-3.5 3.5h.001c-1.933 0-3.5-1.567-3.5-3.5v-.001c0-1.933 1.567-3.5 3.5-3.5z" transform="rotate(-60 12 12)" />
    </svg>
);


export const SparkleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0l2.1 6.9h7.2l-5.8 4.3 2.2 6.8-5.7-4.2-5.7 4.2 2.2-6.8-5.8-4.3h7.2z" />
    </svg>
);


export const CarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 16H9m10 0h1.12a1 1 0 00.97-1.23l-1-4.8A1 1 0 0019 9h-2.22a1 1 0 00-.97.77L14.36 15M11.64 15L10.2 9.23A1 1 0 009.22 8H7a1 1 0 00-1 1v5a1 1 0 001 1h2.12" />
    <path d="M5 16h-.12a1 1 0 01-.97-1.23l1-4.8A1 1 0 015 9h2.22a1 1 0 01.97.77L9.64 15" />
    <path d="M17.5 16.5a.5.5 0 11-1 0 .5.5 0 011 0zM7.5 16.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
  </svg>
);

export const FoodIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h18M5 12V6a2 2 0 012-2h10a2 2 0 012 2v6" />
    <path d="M12 12v8m-4 0h8" />
    <path d="M7 6V5a1 1 0 011-1h1" />
  </svg>
);

export const RingsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="12" r="4" /><circle cx="14" cy="12" r="4" />
  </svg>
);

export const CameraIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

export const PeopleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const DancingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v5" />
    <path d="M10 12l-4 4" />
    <path d="M14 12l4 4" />
    <path d="M6 12l-2-2" />
    <path d="M18 12l2-2" />
  </svg>
);

export const WineIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22h8" />
    <path d="M12 11v11" />
    <path d="M12 11c4.4-1.7 6-6 6-9h-12c0 3 1.6 7.3 6 9z" />
  </svg>
);

export const QrCodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <line x1="14" y1="14" x2="14" y2="14.01" />
    <line x1="21" y1="14" x2="21" y2="14.01" />
    <line x1="14" y1="21" x2="14" y2="21.01" />
    <line x1="17.5" y1="17.5" x2="17.5" y2="17.5.01" />
    <line x1="21" y1="17.5" x2="21" y2="17.5.01" />
    <line x1="17.5" y1="21" x2="17.5" y2="21.01" />
    <line x1="17.5" y1="14" x2="17.5" y2="14.01" />
    <line x1="21" y1="21" x2="21" y2="21.01" />
  </svg>
);
