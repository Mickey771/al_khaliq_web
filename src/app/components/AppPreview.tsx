import React from 'react';
import AlKhaliqLogo from './ui/Logo';
import { Music } from 'lucide-react';

const AppPreview = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Experience the Magic
        </h2>
        
        <div className="relative mx-auto w-64 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
          <div className="w-full h-full bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 rounded-2xl overflow-hidden relative">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full"></div>
            
            <div className="p-6 pt-10 h-full flex flex-col">
              <div className="text-center mb-6">
                <AlKhaliqLogo className="w-32 h-8 mx-auto mb-2" />
                <p className="text-purple-200 text-xs">Now Playing</p>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Music className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <h3 className="text-white font-semibold text-sm">Peaceful Moments</h3>
                <p className="text-purple-200 text-xs">Relaxing Vibes</p>
                
                <div className="flex items-center justify-center space-x-4 mt-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;