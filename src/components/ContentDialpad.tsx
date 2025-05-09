'use client';

import { MediaItem } from './Slideshow';
import Slideshow from './Slideshow';

interface ContentDialpadProps {
  onClose: () => void;
}

export default function ContentDialpad({ onClose }: ContentDialpadProps) {
  const slides: MediaItem[] = [
    {
      type: 'video' as const,
      src: '/dialpad/1.mp4',
      alt: 'Dialpad Video 1',
      date: '2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/2.jpg',
      alt: 'Dialpad Image 2',
      date: '2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/3.jpg',
      alt: 'Dialpad Image 3',
      date: '2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/4.jpg',
      alt: 'Dialpad Image 4',
      date: '2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/5.jpg',
      alt: 'Dialpad Image 5',
      date: '2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/6.jpg',
      alt: 'Dialpad Image 6',
      date: '2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/7.jpg',
      alt: 'Dialpad Image 7',
      date: '2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/8.jpg',
      alt: 'Dialpad Image 8',
      date: '2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/9.jpg',
      alt: 'Dialpad Image 9',
      date: '2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/10.jpg',
      alt: 'Dialpad Image 10',
      date: '2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/11.jpg',
      alt: 'Dialpad Image 11',
      date: '2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/12.jpg',
      alt: 'Dialpad Image 12',
      date: '2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/13.jpg',
      alt: 'Dialpad Image 13',
      date: '2025'
    }
  ];

  return (
    <Slideshow
      title="Dialpad"
      onClose={onClose}
      mediaItems={slides}
      showDate={true}
      autoAdvance={true}
      autoAdvanceInterval={4000}
    />
  );
} 