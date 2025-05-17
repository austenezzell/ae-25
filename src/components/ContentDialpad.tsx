'use client';

import Slideshow from './Slideshow';

interface ContentDialpadProps {
  onClose: () => void;
  title: string;
}

export default function ContentDialpad({ onClose, title }: ContentDialpadProps) {
  const mediaItems = [
    {
      type: 'video' as const,
      src: '/dialpad/1.mp4',
      alt: 'Dialpad Video 1',
      date: 'May 15, 2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/2.jpg',
      alt: 'Dialpad Image 2',
      date: 'May 15, 2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/3.jpg',
      alt: 'Dialpad Image 3',
      date: 'May 15, 2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/4.jpg',
      alt: 'Dialpad Image 4',
      date: 'May 15, 2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/5.jpg',
      alt: 'Dialpad Image 5',
      date: 'May 15, 2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/6.jpg',
      alt: 'Dialpad Image 6',
      date: 'May 15, 2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/7.jpg',
      alt: 'Dialpad Image 7',
      date: 'May 15, 2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/8.jpg',
      alt: 'Dialpad Image 8',
      date: 'May 15, 2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/9.jpg',
      alt: 'Dialpad Image 9',
      date: 'May 15, 2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/10.jpg',
      alt: 'Dialpad Image 10',
      date: 'May 15, 2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/11.jpg',
      alt: 'Dialpad Image 11',
      date: 'May 15, 2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/12.jpg',
      alt: 'Dialpad Image 12',
      date: 'May 15, 2025'
    },
    {
      type: 'image' as const,
      src: '/dialpad/13.jpg',
      alt: 'Dialpad Image 13',
      date: 'May 15, 2025'
    }
  ];

  return (
    <Slideshow
      title={title}
      onClose={onClose}
      mediaItems={mediaItems}
      showDate={true}
      autoAdvance={true}
      autoAdvanceInterval={4000}
    />
  );
} 