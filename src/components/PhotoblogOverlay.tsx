'use client';

import { MediaItem } from './UnifiedOverlay';
import UnifiedOverlay from './UnifiedOverlay';

interface PhotoblogOverlayProps {
  onClose: () => void;
}

export default function PhotoblogOverlay({ onClose }: PhotoblogOverlayProps) {
  const slides: MediaItem[] = [
    {
      type: 'image' as const,
      src: '/photoblog/1.jpg',
      alt: 'Photoblog Image 1',
      date: 'January 1, 2024',
      backgroundColor: '#f5f5f5'
    },
    {
      type: 'image' as const,
      src: '/photoblog/2.jpg',
      alt: 'Photoblog Image 2',
      date: 'January 15, 2024',
      backgroundColor: '#ffffff'
    },
    {
      type: 'image' as const,
      src: '/photoblog/3.jpg',
      alt: 'Photoblog Image 3',
      date: 'February 1, 2024',
      backgroundColor: '#f0f0f0'
    },
    {
      type: 'image' as const,
      src: '/photoblog/4.jpg',
      alt: 'Photoblog Image 4',
      date: 'February 15, 2024',
      backgroundColor: '#e5e5e5'
    }
  ];

  return (
    <UnifiedOverlay
      title="Photoblog"
      onClose={onClose}
      mediaItems={slides}
      showDate={true}
      autoAdvance={true}
      autoAdvanceInterval={4000}
    />
  );
} 