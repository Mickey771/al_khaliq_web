import React from 'react';
import Link from 'next/link';
import AlKhaliqLogo from './ui/Logo';

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 bg-black/50 backdrop-blur-sm border-t border-purple-300/20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <AlKhaliqLogo className="w-48 h-12 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Product</h3>
            <ul className="space-y-2 text-purple-200">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Company</h3>
            <ul className="space-y-2 text-purple-200">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Connect</h3>
            <div className="flex justify-center space-x-4">
              <button className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors">
                <span className="text-white font-bold">f</span>
              </button>
              <button className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors">
                <span className="text-white font-bold">t</span>
              </button>
              <button className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors">
                <span className="text-white font-bold">in</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-purple-300/20 text-purple-300">
          <p>&copy; 2024 AL-khaliq. All rights reserved. Find your perfect vibe.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;