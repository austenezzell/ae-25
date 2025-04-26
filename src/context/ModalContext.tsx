'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isPortfoliosModalOpen: boolean;
  setIsPortfoliosModalOpen: (isOpen: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isPortfoliosModalOpen, setIsPortfoliosModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isPortfoliosModalOpen, setIsPortfoliosModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
} 