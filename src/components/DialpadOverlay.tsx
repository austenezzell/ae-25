'use client';

import { MediaItem } from './UnifiedOverlay';
import UnifiedOverlay from './UnifiedOverlay';

interface DialpadOverlayProps {
  onClose: () => void;
}

export default function DialpadOverlay({ onClose }: DialpadOverlayProps) {
  const slides: MediaItem[] = [
    {
      type: 'video' as const,
      src: '/dialpad/1.mp4',
      alt: 'Dialpad Logo Update',
      date: 'March 15, 2024',
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
      backgroundColor: '#f5f5f5'
    },
    {
      type: 'image' as const,
      src: '/dialpad/4.jpg',
      alt: 'Dialpad Image 4',
      backgroundColor: '#ffffff'
    }
  ];

  return (
    <UnifiedOverlay
      title="Dialpad"
      onClose={onClose}
      mediaItems={slides}
      showDate={false}
      autoAdvance={true}
      autoAdvanceInterval={4000}
    />
  );
} 