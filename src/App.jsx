import React from 'react';
import Hero from './components/Hero.jsx';
import InfoSections from './components/InfoSections.jsx';
import Pixelverse from './components/Pixelverse.jsx';
import CommunityFooter from './components/CommunityFooter.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white scroll-smooth font-sans">
      {/* Load pixel font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
      <Hero />
      <InfoSections />
      <Pixelverse />
      <CommunityFooter />
    </div>
  );
}
