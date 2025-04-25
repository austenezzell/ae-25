'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PageNavigation from './PageNavigation';

interface DialpadOverlayProps {
  onClose: () => void;
}

export default function DialpadOverlay({ onClose }: DialpadOverlayProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lastChangeTime, setLastChangeTime] = useState(Date.now());
  const [isClosing, setIsClosing] = useState(false);
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      router.push('/');
    }, 500); // Match the duration of the animation
  };

  const slides = [
    {
      type: 'video',
      src: '/dialpad/1.mp4',
      alt: 'Dialpad Video',
      date: 'June 14, 2014'
    },
    {
      type: 'image',
      src: '/dialpad/2.jpg',
      alt: 'Dialpad Billboard',
      date: 'July 1, 2014'
    },
    {
      type: 'image',
      src: '/dialpad/3.jpg',
      alt: 'Dialpad Billboard',
      date: 'July 15, 2014'
    },
    {
      type: 'image',
      src: '/dialpad/4.jpg',
      alt: 'Dialpad Billboard',
      date: 'August 1, 2014'
    },
    {
      type: 'image',
      src: '/dialpad/5.jpg',
      alt: 'Dialpad Billboard',
      date: 'August 15, 2014'
    },
    {
      type: 'image',
      src: '/dialpad/6.jpg',
      alt: 'Dialpad Billboard',
      date: 'September 1, 2014'
    },
    {
      type: 'image',
      src: '/dialpad/7.jpg',
      alt: 'Dialpad Billboard',
      date: 'September 15, 2014'
    },
    {
      type: 'image',
      src: '/dialpad/8.jpg',
      alt: 'Dialpad Billboard',
      date: 'October 1, 2014'
    },
    {
      type: 'image',
      src: '/dialpad/9.jpg',
      alt: 'Dialpad Billboard',
      date: 'October 15, 2014'
    },
    {
      type: 'image',
      src: '/dialpad/10.jpg',
      alt: 'Dialpad Billboard',
      date: 'November 1, 2014'
    },
    {
      type: 'image',
      src: '/dialpad/11.jpg',
      alt: 'Dialpad Billboard',
      date: 'November 15, 2014'
    },
    {
      type: 'image',
      src: '/dialpad/12.jpg',
      alt: 'Dialpad Billboard',
      date: 'December 1, 2014'
    },
    {
      type: 'image',
      src: '/dialpad/13.jpg',
      alt: 'Dialpad Billboard',
      date: 'December 15, 2014'
    },
    {
      type: 'image',
      src: '/dialpad/14.jpg',
      alt: 'Dialpad Billboard',
      date: 'January 1, 2015'
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      const now = Date.now();
      if (now - lastChangeTime >= 4000) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setLastChangeTime(now);
      }
    }, 100); // Check more frequently

    return () => clearInterval(timer);
  }, [isPaused, lastChangeTime]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        setLastChangeTime(Date.now());
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setLastChangeTime(Date.now());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className={`dialpad-overlay fixed inset-0 bg-[rgba(220,216,217,.5)] backdrop-blur-sm z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleClose}
    >
      {/* Header */}
      <div onClick={e => e.stopPropagation()}>
        <PageNavigation title="Dialpad" onClose={handleClose}>
          <div className="flex gap-1 w-full max-w-[300px]">
            {slides.map((_, i) => (
              <button 
                key={i} 
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                  setLastChangeTime(Date.now());
                }}
                className={`h-[4px] flex-1 transition-colors duration-300 rounded-md ${
                  i === currentIndex ? 'bg-brand-color' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </PageNavigation>
      </div>

      {/* Main Content */}
      <div 
        className={`relative w-full max-w-4xl aspect-[16/9] cursor-pointer transition-transform duration-500 ${
          isClosing ? '-translate-y-full' : 'translate-y-0'
        }`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={(e) => {
          e.stopPropagation();
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
          setLastChangeTime(Date.now());
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-0 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'image' ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-contain"
                priority={index === currentIndex}
              />
            ) : (
              <video
                key={`${slide.src}-${currentIndex}`}
                src={slide.src}
                className="w-full h-full object-contain"
                autoPlay
                muted
                playsInline
              />
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div 
        className={`absolute bottom-0 left-0 right-0 p-4 flex items-center transition-transform duration-500 ${
          isClosing ? 'translate-y-full' : 'translate-y-0'
        }`}
        onClick={e => e.stopPropagation()}
      >
        <span className="bg-[rgba(0,0,0,0.6)] text-white px-4 py-3 rounded-lg text-sm">Dialpad</span>
        <span className="text-black border-[2px] border-[rgba(0,0,0,0.6)] px-4 py-3 rounded-full text-sm">
          {slides[currentIndex].date}
        </span>
      </div>
    </div>
  );
} 