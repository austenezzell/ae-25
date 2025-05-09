'use client';

import { MediaItem } from './Slideshow';
import Slideshow from './Slideshow';

interface ContentPhotoblogProps {
  onClose: () => void;
}

export default function ContentPhotoblog({ onClose }: ContentPhotoblogProps) {
  const mediaItems = [
    {
      type: 'image' as const,
      src: '/photoblog/1.jpg',
      alt: 'Photoblog image 1',
      date: '2024-03-20'
    },
    {
      type: 'image' as const,
      src: '/photoblog/2.jpg',
      alt: 'Photoblog image 2',
      date: '2024-03-19'
    },
    {
      type: 'image' as const,
      src: '/photoblog/3.jpg',
      alt: 'Photoblog image 3',
      date: '2024-03-18'
    },
    {
      type: 'image' as const,
      src: '/photoblog/4.jpg',
      alt: 'Photoblog image 4',
      date: '2024-03-17'
    }
  ];

  return (
    <Slideshow
      title="Photoblog"
      onClose={onClose}
      mediaItems={mediaItems}
      showDate={true}
      autoAdvance={true}
      autoAdvanceInterval={4000}
    />
  );
} 