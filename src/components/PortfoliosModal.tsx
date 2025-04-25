'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface PortfoliosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const portfolios = [
  { year: '13', link: '#' },
  { year: '14', link: '#' },
  { year: '15', link: '#' },
  { year: '16', link: '#' },
  { year: '17', link: '#' },
  { year: '18', link: '#' },
  { year: '21', link: '#' },
  { year: '22', link: '#' },
  { year: '23', link: '#' },
];

export default function PortfoliosModal({ isOpen, onClose }: PortfoliosModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setIsVisible(false);
      setMounted(false);
    }, 500);
  };

  const handleContentClick = (e: React.MouseEvent) => {
    // Prevent clicks inside the modal from closing it
    e.stopPropagation();
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999]" onClick={handleClose}>
      {/* Background overlay */}
      <div 
        className={`fixed inset-0  bg-[rgba(220,216,217,.5)] backdrop-blur-sm transition-opacity duration-500 ${
          isClosing ? 'opacity-0' : isVisible ? 'opacity-90' : 'opacity-0'
        }`} 
        aria-hidden="true"
      />

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div 
          onClick={handleContentClick}
          className={`w-full max-w-[300px] bg-[rgba(0,0,0,0.6)] backdrop-blur-lg p-8 rounded-xl transition-all duration-500 ease-out ${
            isClosing ? '-translate-y-full opacity-0' : 
            isVisible ? 'translate-y-0 opacity-100' : 
            '-translate-y-full opacity-0'
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-white font-serif italic text-sm sm:text-base">Portfolios Past</h2>
            <button
              onClick={handleClose}
              className="text-white hover:text-gray-300 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <p className='text-gray-300 mb-4'>Previous iterations of this site <br /> 
            (minus the ones lost)</p>
            {portfolios.map((portfolio) => (
              <a
                key={portfolio.year}
                href={portfolio.link}
                className="flex items-center opacity-65 hover:opacity-100 transition-opacity group"
              >
                <span className="text-white group-hover:text-[#CBFF22] text-sm sm:text-base flex items-center gap-1 transition-colors">
                  <Image
                    src="/ae.svg"
                    alt="ae"
                    width={20}
                    height={20}
                    className="w-auto h-[.8em] inline-block group-hover:[filter:brightness(0)_saturate(100%)_invert(83%)_sepia(72%)_saturate(473%)_hue-rotate(36deg)_brightness(126%)_contrast(119%)]"
                  />
                  {portfolio.year}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return mounted && isOpen ? createPortal(modalContent, document.body) : null;
} 