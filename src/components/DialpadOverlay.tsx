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
      backgroundColor: '#000000'
    },
    {
      type: 'image' as const,
      src: '/dialpad/2.jpg',
      alt: 'Dialpad Image 2',
      backgroundColor: '#ffffff'
    },
    {
      type: 'image' as const,
      src: '/dialpad/3.jpg',
      alt: 'Dialpad Image 3',
      backgroundColor: '#f0f0f0'
    },
    {
      type: 'image' as const,
      src: '/dialpad/4.jpg',
      alt: 'Dialpad Image 4',
      backgroundColor: '#e5e5e5'
    },
    {
      type: 'image' as const,
      src: '/dialpad/5.jpg',
      alt: 'Dialpad Image 5',
      backgroundColor: '#f0f0f0'
    },
    {
      type: 'image' as const,
      src: '/dialpad/6.jpg',
      alt: 'Dialpad Image 6',
      backgroundColor: '#e5e5e5'
    },
    {
      type: 'image' as const,
      src: '/dialpad/7.jpg',
      alt: 'Dialpad Image 7',
      backgroundColor: '#f0f0f0'
    },
    {
      type: 'image' as const,
      src: '/dialpad/8.jpg',
      alt: 'Dialpad Image 8',
      backgroundColor: '#e5e5e5'
    },
    {
      type: 'image' as const,
      src: '/dialpad/9.jpg',
      alt: 'Dialpad Image 9',
      backgroundColor: '#f0f0f0'
    },
    {
      type: 'image' as const,
      src: '/dialpad/10.jpg',
      alt: 'Dialpad Image 10',
      backgroundColor: '#e5e5e5'
    },
    {
      type: 'image' as const,
      src: '/dialpad/11.jpg',
      alt: 'Dialpad Image 11',
      backgroundColor: '#f0f0f0'
    },
    {
      type: 'image' as const,
      src: '/dialpad/12.jpg',
      alt: 'Dialpad Image 12',
      backgroundColor: '#e5e5e5'
    },
    {
      type: 'image' as const,
      src: '/dialpad/13.jpg',
      alt: 'Dialpad Image 13',
      backgroundColor: '#f0f0f0'
    }
  ];

  return (
    <Slideshow
      title="Dialpad"
      onClose={onClose}
      mediaItems={slides}
      showDate={false}
      autoAdvance={true}
      autoAdvanceInterval={4000}
    />
  );
} 