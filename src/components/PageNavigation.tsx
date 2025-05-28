'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface PageNavigationProps {
  title: string;
  onClose?: () => void;
  showCloseButton?: boolean;
  children?: React.ReactNode;
  className?: string;
  width?: string;
  onHoverChange?: (isHovered: boolean) => void;
}

export default function PageNavigation({ 
  title, 
  onClose, 
  showCloseButton = true,
  children,
  className = '',
  width = 'max-w-[500px]',
  onHoverChange
}: PageNavigationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  useEffect(() => {
    // Only render the portal after the component has mounted
    setMounted(true);
    
    // Trigger the animation after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    if (onClose) {
      // Start the closing animation
      setIsClosing(true);
      
      // Wait for the animation to complete before calling onClose
      setTimeout(() => {
        onClose();
      }, 500); // Match the duration of the animation
    }
  };

  const getBackgroundColor = (title: string) => {
    switch (title) {
      case 'Design':
        return 'bg-[#FFA722]';
      case 'Tools':
        return 'bg-[#CB71FF]';
      default:
        return 'bg-[hsla(0,0%,90%,.15)]';
    }
  };

  const navigationContent = (
    <div className={`page-navigation fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] ${width} ${getBackgroundColor(title)} backdrop-blur-[7.5rem] p-7 rounded-[1.2rem] flex items-center transition-all duration-500 ease-out z-[9999] border border-black ${isClosing ? '-translate-y-full opacity-0' : isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ${className}`} style={{ backgroundBlendMode: 'luminosity' }}>
      <span className="text-black font-serif italic text-sm sm:text-base">{title}</span>
      <div 
        className="nav-buttons flex-1 flex justify-center mx-4"
        onMouseEnter={() => onHoverChange?.(true)}
        onMouseLeave={() => onHoverChange?.(false)}
      >
        {children}
      </div>
      {showCloseButton && onClose && (
        <button
          onClick={handleClose}
          className="text-black hover:text-gray-600 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={18} className="sm:w-5 sm:h-5" />
        </button>
      )}
    </div>
  );

  // Use portal if mounted and document is available, otherwise return null
  return mounted && typeof document !== 'undefined' ? createPortal(navigationContent, document.body) : null;
} 