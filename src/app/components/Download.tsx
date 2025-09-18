import React from 'react';
import DownloadButtons from './DownloadButtons';

const Download = () => {
  return (
    <section className="relative py-20 px-4 bg-black/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Start Your Musical Journey Today
        </h2>
        
        <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
          Join millions of users who have found their perfect vibe with AL-khaliq. Download now and discover music that moves your soul.
        </p>
        
        <DownloadButtons />
      </div>
    </section>
  );
};

export default Download;