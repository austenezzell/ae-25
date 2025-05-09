'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PageNavigation from './PageNavigation';

export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  date?: string;
}

interface SlideshowProps {
  title: string;
  onClose: () => void;
  mediaItems: MediaItem[];
  showDate?: boolean;
  autoAdvance?: boolean;
  autoAdvanceInterval?: number;
  initialIndex?: number;
  className?: string;
  onIndexChange?: (index: number) => void;
  onHoverChange?: (paused: boolean) => void;
}

export default function Slideshow({ 
  title, 
  onClose, 
  mediaItems,
  showDate = false,
  autoAdvance = true,
  autoAdvanceInterval = 4000,
  initialIndex = 0,
  className = '',
  onIndexChange,
  }: SlideshowProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [lastChangeTime, setLastChangeTime] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldSlideHeader, setShouldSlideHeader] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClose = useCallback((fromButton: boolean = false) => {
    setIsClosing(true);
    setShouldSlideHeader(fromButton);
    
    // Remove transition class
    const mainContainer = document.querySelector('.main-container');
    const footer = document.querySelector('footer');
    if (mainContainer) {
      mainContainer.classList.remove('transition-colors', 'duration-500');
    }
    if (footer) {
      footer.classList.remove('opacity-0', 'transition-opacity', 'duration-500');
    }
    
    // Wait for the transition to complete before closing
    setTimeout(() => {
      onClose();
      // Use replace instead of push to prevent adding to history
      router.replace('/');
    }, 500); // Match the duration of the transition
  }, [onClose, router]);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
      setLastChangeTime(Date.now());
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mainContainer = document.querySelector('.main-container');
    const footer = document.querySelector('footer');
    if (mainContainer) {
      // Add transition class to main container
      mainContainer.classList.add('transition-colors', 'duration-500');
    }
    if (footer) {
      footer.classList.add('opacity-0', 'transition-opacity', 'duration-500');
    }
    return () => {
      const mainContainer = document.querySelector('.main-container');
      const footer = document.querySelector('footer');
      if (mainContainer) {
        // Remove transition class
        mainContainer.classList.remove('transition-colors', 'duration-500');
      }
      if (footer) {
        footer.classList.remove('opacity-0', 'transition-opacity', 'duration-500');
      }
    };
  }, [currentIndex, mediaItems]);
  
  useEffect(() => {
    if (isPaused || !autoAdvance) return;

    const timer = setInterval(() => {
      const now = Date.now();
      if (now - lastChangeTime >= autoAdvanceInterval) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
        setLastChangeTime(now);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [lastChangeTime, isPaused, autoAdvance, autoAdvanceInterval, mediaItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length);
        setLastChangeTime(Date.now());
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
        setLastChangeTime(Date.now());
      } else if (e.key === 'Escape') {
        handleClose(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mediaItems.length, handleClose]);

  useEffect(() => {
    setIsVisible(true);
    if (onIndexChange) {
      onIndexChange(currentIndex);
    }
  }, [currentIndex, onIndexChange]);

  if (!mounted) return null;

  return (
    <div 
      className={`media-overlay fixed inset-0 backdrop-blur-sm z-50 flex flex-col items-center justify-center transition-all duration-500 ${
        isClosing ? 'opacity-0' : isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      onClick={() => handleClose(false)}
    >
      {/* Header */}
      <div 
        onClick={e => e.stopPropagation()}
        className={`transition-all duration-500 ${
          isClosing && shouldSlideHeader ? '-translate-y-full' : isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <PageNavigation 
          title={title} 
          onClose={() => handleClose(true)}
          onHoverChange={setIsPaused}
        >
          <div className="flex gap-1 w-full max-w-[300px]">
            {mediaItems.map((_, i) => (
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
        className={`relative w-full max-w-4xl aspect-[16/9] cursor-pointer transition-all duration-500 ${
          isClosing ? 'opacity-0' : isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
            setLastChangeTime(Date.now());
            setTimeout(() => setIsTransitioning(false), 500);
          }
        }}
      >
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-0 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
                priority={index === currentIndex}
              />
            ) : (
              <video
                key={`${item.src}-${currentIndex}`}
                src={item.src}
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
      {showDate && (
        <div 
          className={`absolute bottom-0 left-0 right-0 p-4 flex items-center transition-all duration-500 ${
            isClosing ? 'opacity-0' : isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <span className="bg-[rgba(0,0,0,0.6)] text-white px-4 py-3 rounded-lg text-sm">{title}</span>
          <span className="text-black border-[1px] border-[rgba(0,0,0,0.6)] px-4 py-3 rounded-full text-sm">
            {mediaItems[currentIndex].date}
          </span>
        </div>
      )}
    </div>
  );
} 