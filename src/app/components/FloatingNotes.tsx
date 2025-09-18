import React from 'react';

// Floating Music Notes Animation
const FloatingNotes = () => {
  const notes = ['♪', '♫', '♩', '♬'];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`absolute text-purple-300/30 text-2xl`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-${i % 4} ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {notes[Math.floor(Math.random() * notes.length)]}
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateX(0) rotate(0deg); opacity: 0; }
          50% { transform: translateX(20px) rotate(-180deg); opacity: 1; }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          50% { transform: translateY(-15px) translateX(15px) rotate(90deg); opacity: 1; }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          50% { transform: translateY(15px) translateX(-15px) rotate(-90deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default FloatingNotes;
