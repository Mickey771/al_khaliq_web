'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Music, Headphones, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Relax & Unwind",
    description: "Curated playlists designed to help you relax and find inner peace"
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: "Find Your Vibe",
    description: "Discover music that matches your mood and energy level"
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Seamless Experience",
    description: "Enjoy uninterrupted listening with our intuitive interface"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Offline Listening",
    description: "Download your favorite tracks and listen anywhere, anytime"
  }
];

const Features = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Why Choose AL-khaliq?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/20 transition-all duration-500 hover:scale-105 hover:bg-white/20 cursor-pointer ${
                currentFeature === index ? 'ring-2 ring-purple-400 bg-white/20' : ''
              }`}
              onClick={() => setCurrentFeature(index)}
            >
              <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-100 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-purple-200 group-hover:text-purple-100 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;