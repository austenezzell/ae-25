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
    text: "Design is not what we make. Design is what we make possible for others",
    author: "Tim Brown"
  },
  {
    text: "Art is never finished, only abandoned",
    author: "Leonardo da Vinci"
  },
  {
    text: "Design is relationships. Design is a relationship between form and content",
    author: "Paul Rand"
  }
];

export default function Footer() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const { setIsPortfoliosModalOpen } = useModal();

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <>
      <footer className="max-w-6xl mx-auto py-6 min-h-[200px] flex items-end">
        <div className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left w-full mx-auto items-end">
          {/* Logo */}
          <div className="w-full md:w-[120px] text-center opacity-65 hover:opacity-100 order-1 md:order-2 self-end">
            <Link href="/">
              <Image
                src="/ae25.svg"
                alt="AE25"
                width={54}
                height={60}
                priority
                className="h-auto mx-auto text-black hover:text-gray transition-colors w-[120px]"
              />
            </Link>
          </div>

          {/* Navigation Columns Container */}
          <div className="flex flex-row justify-center gap-8 w-full md:w-auto order-2 md:order-3 self-end">
            {/* First Nav Column */}
            <div className="footer-nav w-1/2 md:w-auto text-center">
              <ul className="flex flex-col font-serif italic">
                <li><Link href="/design" className="hover:text-gray transition-colors opacity-65 hover:opacity-100">Design</Link></li>
                <li><Link href="#" className="hover:text-gray transition-colors opacity-65 hover:opacity-100">Photo Blog</Link></li>
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
                <li><Link href="#" className="hover:text-gray transition-colors opacity-65 hover:opacity-100">Email</Link></li>
                <li><Link href="#" className="hover:text-gray transition-colors opacity-65 hover:opacity-100">LinkedIn</Link></li>
                <li><Link href="/guestbook" className="hover:text-gray transition-colors opacity-65 hover:opacity-100">Sign the Guest Book</Link></li>
              </ul>
            </div>
          </div>

          {/* Quote Section */}
          <div className="w-full md:w-[400px] text-center order-3 md:order-1 self-end">
            <p className="text-sm mb-2 opacity-65">
              &ldquo;{quotes[currentQuoteIndex].text}&rdquo;<span className='nowrap'> — {quotes[currentQuoteIndex].author}</span>
            </p>
            <button 
              onClick={handleNextQuote}
              className="opacity-65 font-serif italic hover:text-gray transition-colors block w-full opacity-65 hover:opacity-100"
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