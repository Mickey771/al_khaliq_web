'use client';

import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import AppPreview from './components/AppPreview';
import Download from './components/Download';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AlKhaliqLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <main>
        <Hero />
        <Features />
        <AppPreview />
        <Download />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default AlKhaliqLandingPage;