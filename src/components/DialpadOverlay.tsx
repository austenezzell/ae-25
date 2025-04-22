'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface DialpadOverlayProps {
  onClose: () => void;
}

export default function DialpadOverlay({ onClose }: DialpadOverlayProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      type: 'image',
      src: '/billboard.png',
      alt: 'Dialpad Billboard - Less hold, more happy',
      date: 'June 14, 2014'
    },
    {
      type: 'image',
      src: '/soccer.png',
      alt: 'Dialpad Billboard - Future of work',
      date: 'August 21, 2014'
    },
    {
      type: 'image',
      src: '/billboard.png',
      alt: 'Dialpad Billboard - AI-powered communications',
      date: 'October 5, 2014'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-[#424242] p-2 flex items-center">
        <span className="text-white font-serif italic ml-4">Dialpad</span>
        <div className="flex-1 flex justify-center mx-4">
          <div className="flex gap-1">
            {slides.map((_, i) => (
              <div 
                key={i} 
                className={`h-[2px] w-12 transition-colors duration-300 ${
                  i === currentIndex ? 'bg-yellow-400' : 'bg-white/30'
                }`} 
              />
            ))}
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 transition-colors mr-4"
          aria-label="Close overlay"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-4xl aspect-[16/9]">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.src}
            alt={slide.alt}
            fill
            className={`object-contain transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === currentIndex}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
        <span className="bg-[#424242] text-white px-3 py-1 rounded-full text-sm">Dialpad</span>
        <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          {slides[currentIndex].date}
        </span>
      </div>
    </div>
  );
} 