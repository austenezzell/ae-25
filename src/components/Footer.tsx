'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PortfoliosModal from './PortfoliosModal';
import { useModal } from '@/context/ModalContext';

const quotes = [
  {
    text: "As AI gets smarter, the need for human-centered design becomes greater, not lesser",
    author: "Don Norman"
  },
  {
    text: "It took me four years to paint like Raphael, but a lifetime to paint like a child",
    author: "Pablo Picasso"
  },
  {
    text: "Be curious, not judgmental",
    author: "Ted Lasso"
  },
  {
    text: "Fall in love with the problem, not the solution",
    author: "Uri Levine"
  },
  {
    text: "You can observe a lot just by watching",
    author: "Yogi Berra"
  },
  {
    text: "Never delegate understanding",
    author: "Charles Emes"
  },
  {
    text: "Art is never finished, only abandoned",
    author: "Leonardo da Vinci"
  },
  {
    text: "Design is relationships. Design is a relationship between form and content",
    author: "Paul Rand"
  },
  {
    text: "Art is more about what it is, then what it isn't",
    author: "Michael Ezzell"
  },
  {
    text: "Just make something fancy that is'nt a lot of work",
    author: "Brian Peterson"
  }
];

export default function Footer() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const { setIsPortfoliosModalOpen } = useModal();

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const currentQuote = quotes[currentQuoteIndex] || quotes[0];

  return (
    <>
      <footer className="w-full py-8 px-6 md:px-8 flex flex-col md:flex-row justify-between items-end gap-8 md:gap-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left w-full md:w-auto mx-auto items-end">
          {/* Logo */}
          <div className="w-full md:w-[120px] text-center order-1 md:order-2 self-end">
            <div className="flex justify-center">
              <Link href="/" className="opacity-65 hover:opacity-100">
                <Image
                  src="/ae25.svg"
                  alt="AE25"
                  width={54}
                  height={60}
                  priority
                  className="h-auto text-black hover:text-gray transition-colors w-[120px]"
                />
              </Link>
            </div>
          </div>

          {/* Navigation Columns Container */}
          <div className="flex flex-row justify-center gap-2 md:gap-8 w-full md:w-auto order-2 md:order-3 self-center max-w-[350px] mx-auto">
            {/* First Nav Column */}
            <div className="footer-nav w-1/2 md:w-auto text-center">
              <ul className="flex flex-col font-serif italic">
                <li><Link href="/design" className="hover:text-gray transition-colors opacity-65 hover:opacity-100">Design</Link></li>
                <li><Link href="/photoblog" className="hover:text-gray transition-colors opacity-65 hover:opacity-100">Photo Blog</Link></li>
                <li>
                  <button
                    onClick={() => setIsPortfoliosModalOpen(true)}
                    className="hover:text-gray transition-colors opacity-65 hover:opacity-100"
                  >
                    Portfolios Past
                  </button>
                </li>
              </ul>
            </div>
            {/* Second Nav Column */}
            <div className="footer-nav w-1/2 md:w-auto text-center">
              <ul className="flex flex-col font-serif italic">
                <li><Link href="mailto:austenezzell@gmail.com" className="hover:text-gray transition-colors opacity-65 hover:opacity-100">Email</Link></li>
                <li><Link href="https://www.are.na/austen-ezzell/" className="hover:text-gray transition-colors opacity-65 hover:opacity-100">Are.na</Link></li>
                <li><Link href="https://www.linkedin.com/in/austenezzell/" className="hover:text-gray transition-colors opacity-65 hover:opacity-100">LinkedIn</Link></li>
              </ul>
            </div>
          </div>

          {/* Quote Section */}
          <div className="w-full max-w-[400px] md:w-[400px] text-center order-3 md:order-1 self-end mx-auto px-8 md:px-0 flex flex-col justify-end">
            <p className="text-sm mb-2 opacity-65">
              &ldquo;{currentQuote.text}&rdquo;<span className='nowrap'> — {currentQuote.author}</span>
            </p>
            <button 
              onClick={handleNextQuote}
              className="opacity-65 font-serif italic hover:text-gray transition-colors hover:opacity-100"
            >
              (view another)
            </button>
          </div>
        </div>
      </footer>

      <PortfoliosModal />
    </>
  );
} 