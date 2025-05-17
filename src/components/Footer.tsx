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

  // Common classes
  const common = {
    hover: 'hover:text-gray transition-colors',
    opacity: 'opacity-65 hover:opacity-100',
    flex: 'flex flex-col',
    text: 'text-center'
  };

  return (
    <>
      <footer className={`
        w-full py-8 px-6
        flex flex-col justify-between items-end gap-8
        md:px-8 md:flex-row md:gap-12
      `}>
        <div className={`
          flex flex-col justify-between gap-8
          text-center w-auto mx-auto items-end
          md:flex-row md:text-left md:w-auto
        `}>
          {/* Top row with three columns on mobile */}
          <div className={`
            flex flex-row justify-between items-center gap-4
            w-auto
            max-w-[500px]
            mx-auto
            md:contents
          `}>
            {/* Logo */}
            <div className={`
              w-[100px] text-center order-1 self-end pb-[6px]
              md:w-[120px] md:order-2 md:pb-[2px]
            `}>
              <div className="flex justify-center">
                <Link href="/" className={`${common.opacity}`}>
                  <Image
                    src="/ae25.svg"
                    alt="AE25"
                    width={54}
                    height={60}
                    priority
                    className={`
                      h-auto w-[120px]
                      text-black ${common.hover}
                    `}
                  />
                </Link>
              </div>
            </div>

            {/* Navigation Columns Container */}
            <div className={`
              flex flex-row justify-between gap-4
              flex-1
              w-[200px]
              md:contents
            `}>
              {/* First Nav Column */}
              <div className={`
                footer-nav w-1/2 text-center
                md:w-auto md:order-3
              `}>
                <ul className={`${common.flex} font-serif italic`}>
                  <li><Link href="/design" className={`${common.hover} ${common.opacity}`}>Design</Link></li>
                  <li><Link href="/photoblog" className={`${common.hover} ${common.opacity}`}>Photo Blog</Link></li>
                  <li>
                    <button
                      onClick={() => setIsPortfoliosModalOpen(true)}
                      className={`${common.hover} ${common.opacity} whitespace-nowrap`}
                    >
                      Portfolios Past
                    </button>
                  </li>
                </ul>
              </div>
              {/* Second Nav Column */}
              <div className={`
                footer-nav w-1/2 text-center
                md:w-auto md:order-3
              `}>
                <ul className={`${common.flex} font-serif italic`}>
                  <li><Link href="mailto:austenezzell@gmail.com" className={`${common.hover} ${common.opacity}`}>Email</Link></li>
                  <li><Link href="https://www.are.na/austen-ezzell/" className={`${common.hover} ${common.opacity}`}>Are.na</Link></li>
                  <li><Link href="https://www.linkedin.com/in/austenezzell/" className={`${common.hover} ${common.opacity}`}>LinkedIn</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className={`
            w-full max-w-[500px] text-center order-3
            self-end mx-auto flex flex-col justify-end
            md:w-[400px] md:order-1 md:px-0
          `}>
            <p className="text-sm mb-2 opacity-65">
              &ldquo;{currentQuote.text}&rdquo;<span className='nowrap'> — {currentQuote.author}</span>
            </p>
            <button 
              onClick={handleNextQuote}
              className={`
                opacity-65 font-serif italic
                ${common.hover} hover:opacity-100
              `}
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