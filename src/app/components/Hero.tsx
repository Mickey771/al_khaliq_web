import React from 'react';
import FloatingNotes from './FloatingNotes';
import AlKhaliqLogo from './ui/Logo';
import DownloadButtons from './DownloadButtons';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <FloatingNotes />
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <AlKhaliqLogo className="w-80 h-20" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          Find Your Perfect Vibe
        </h1>
        
        <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover music that speaks to your soul. Relax, unwind, and let AL-khaliq guide you to your perfect musical journey.
        </p>
        
        <DownloadButtons />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-300/20">
            <div className="text-3xl font-bold text-purple-300">1M+</div>
            <div className="text-purple-200">Happy Users</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-300/20">
            <div className="text-3xl font-bold text-purple-300">10K+</div>
            <div className="text-purple-200">Curated Tracks</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-300/20">
            <div className="text-3xl font-bold text-purple-300">4.9★</div>
            <div className="text-purple-200">App Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;