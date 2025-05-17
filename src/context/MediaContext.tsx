'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface MediaItem {
  id: string;
  src: string;
  alt: string;
}

interface MediaContextType {
  isOpen: boolean;
  currentMedia: MediaItem | null;
  mediaList: MediaItem[];
  openMedia: (media: MediaItem) => void;
  closeMedia: () => void;
  setMediaList: (list: MediaItem[]) => void;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export function MediaProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState<MediaItem | null>(null);
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);

  const openMedia = (media: MediaItem) => {
    setCurrentMedia(media);
    setIsOpen(true);
  };

  const closeMedia = () => {
    setIsOpen(false);
    setCurrentMedia(null);
  };

  return (
    <MediaContext.Provider value={{ isOpen, currentMedia, mediaList, openMedia, closeMedia, setMediaList }}>
      {children}
    </MediaContext.Provider>
  );
}

export function useMediaContext() {
  const context = useContext(MediaContext);
  if (context === undefined) {
    throw new Error('useMediaContext must be used within a MediaProvider');
  }
  return context;
} 