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
      date: '2024',
      backgroundColor: '#000000'
    },
    {
      type: 'image' as const,
      src: '/dialpad/2.jpg',
      alt: 'Dialpad Image 2',
      date: '2024',
      backgroundColor: '#ffffff'
    },
    {
      type: 'image' as const,
      src: '/dialpad/3.jpg',
      alt: 'Dialpad Image 3',
      date: '2024',
      backgroundColor: '#f0f0f0'
    },
    {
      type: 'image' as const,
      src: '/dialpad/4.jpg',
      alt: 'Dialpad Image 4',
      date: '2024',
      backgroundColor: '#e5e5e5'
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