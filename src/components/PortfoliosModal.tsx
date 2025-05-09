'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';

const portfolios = [
  { year: '13', link: 'https://2013.austenezzell.com/' },
  { year: '14', link: 'https://2014.austenezzell.com/' },
  { year: '15', link: 'https://2015.austenezzell.com/' },
  { year: '16', link: 'https://2016.austenezzell.com/' },
  { year: '17', link: 'https://2017.austenezzell.com/' },
  { year: '18', link: 'https://2018.austenezzell.com/' },
  { year: '21', link: 'https://2021.austenezzell.com/' },
  { year: '22', link: 'https://2022.austenezzell.com/' },
  { year: '23', link: 'https://2023.austenezzell.com/' },
];

export default function PortfoliosModal() {
  const { isPortfoliosModalOpen, setIsPortfoliosModalOpen } = useModal();
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Set mounted state on client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle page navigation opacity when modal is open/closed
  useEffect(() => {
    if (mounted) {
      const pageNavigations = document.querySelectorAll('.page-navigation');
      
      if (isPortfoliosModalOpen) {
        // Hide page navigation when modal is open
        pageNavigations.forEach(nav => {
          (nav as HTMLElement).style.opacity = '0';
        });
      } else {
        // Show page navigation when modal is closed
        pageNavigations.forEach(nav => {
          (nav as HTMLElement).style.opacity = '';
        });
      }
      
      // Cleanup function
      return () => {
        pageNavigations.forEach(nav => {
          (nav as HTMLElement).style.opacity = '';
        });
      };
    }
  }, [isPortfoliosModalOpen, mounted]);

  useEffect(() => {
    if (isPortfoliosModalOpen && mounted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isPortfoliosModalOpen, mounted]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsPortfoliosModalOpen(false);
      setIsClosing(false);
      setIsVisible(false);
    }, 500);
  };

  const handleContentClick = (e: React.MouseEvent) => {
    // Prevent clicks inside the modal from closing it
    e.stopPropagation();
  };

  // Don't render anything on the server
  if (!mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999]" onClick={handleClose}>
      {/* Background overlay */}
      <div 
        className={`fixed inset-0 transition-opacity duration-500 ${
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
          <div className="flex justify-between items-center mb-6">
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

  return isPortfoliosModalOpen ? createPortal(modalContent, document.body) : null;
} 