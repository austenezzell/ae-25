'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useMediaContext } from '@/context/MediaContext';

export default function MediaOverlay() {
  const { isOpen, closeMedia, currentMedia, mediaList } = useMediaContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen && currentMedia) {
      const index = mediaList.findIndex(media => media.id === currentMedia.id);
      setCurrentIndex(index);
    }
  }, [isOpen, currentMedia, mediaList]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaList.length) % mediaList.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaList.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientY;
    const diff = touchStart - currentTouch;

    // If swiping down more than 100px
    if (diff < -100) {
      closeMedia();
      router.push('/');
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  if (!isOpen || !currentMedia) return null;

  const currentItem = mediaList[currentIndex];
  const nextItem = mediaList[(currentIndex + 1) % mediaList.length];
  const prevItem = mediaList[(currentIndex - 1 + mediaList.length) % mediaList.length];

  return (
    <div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={closeMedia}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        Close
      </button>
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
      >
        Next
      </button>
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Current Image */}
        <Image
          src={currentItem.src}
          alt={currentItem.alt}
          fill
          className="object-contain"
          priority
        />
        {/* Preload Next Image */}
        <div className="hidden">
          <Image
            src={nextItem.src}
            alt={nextItem.alt}
            width={1}
            height={1}
            priority
          />
        </div>
        {/* Preload Previous Image */}
        <div className="hidden">
          <Image
            src={prevItem.src}
            alt={prevItem.alt}
            width={1}
            height={1}
            priority
          />
        </div>
      </div>
    </div>
  );
} 