'use client';

import { useState, useEffect } from 'react';

export default function TitleOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if overlay has been shown before
    const hasShownOverlay = localStorage.getItem('titleOverlayShown');
    
    if (!hasShownOverlay) {
      // Show the overlay immediately
      setIsVisible(true);
      // Mark as shown
      localStorage.setItem('titleOverlayShown', 'true');

      // Start closing after 4 seconds
      const closeTimer = setTimeout(() => {
        setIsClosing(true);
      }, 4000);

      // Remove the overlay after the transition
      const removeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 4500);

      return () => {
        clearTimeout(closeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="font-instrument-serif text-7xl md:text-9xl lg:text-12xl font-extrabold text-center light-gray-color opacity-95 px-10 leading-tight max-w-[1200px]">
        THE DESIGN PRACTICE OF AUSTEN EZZELL
      </div>
    </div>
  );
} 