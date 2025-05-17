'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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

export default function FooterContent() {
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
      {/* Mobile: Top row with three columns */}
      <div className={`
        flex flex-row justify-between items-center
        w-full max-w-[500px] mx-auto
        md:hidden
      `}>
        {/* Logo */}
        <div className="w-[100px]">
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

        {/* Navigation Columns */}
        <div className="flex flex-row gap-4">
          {/* First Nav Column */}
          <div className="w-[100px]">
            <ul className={`${common.flex} font-serif italic`}>
              <li><Link href="/design" className={`${common.hover} ${common.opacity}`}>Design</Link></li>
              <li><Link href="/photoblog" className={`${common.hover} ${common.opacity}`}>Photo Blog</Link></li>
              <li>
                <button
                  onClick={() => setIsPortfoliosModalOpen(true)}
                  className={`${common.hover} ${common.opacity}`}
                >
                  Portfolios Past
                </button>
              </li>
            </ul>
          </div>
          {/* Second Nav Column */}
          <div className="w-[100px]">
            <ul className={`${common.flex} font-serif italic`}>
              <li><Link href="mailto:austenezzell@gmail.com" className={`${common.hover} ${common.opacity}`}>Email</Link></li>
              <li><Link href="https://www.are.na/austen-ezzell/" className={`${common.hover} ${common.opacity}`}>Are.na</Link></li>
              <li><Link href="https://www.linkedin.com/in/austenezzell/" className={`${common.hover} ${common.opacity}`}>LinkedIn</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile: Quote Section */}
      <div className={`
        w-full max-w-[500px] text-center mx-auto
        md:hidden
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

      {/* Desktop Layout */}
      <div className="hidden md:flex md:flex-row md:justify-between md:items-end md:gap-12 md:w-full">
        {/* Quote Section */}
        <div className="w-[400px]">
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

        {/* Logo */}
        <div className="w-[120px]">
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

        {/* Navigation Columns */}
        <div className="flex flex-row gap-8">
          {/* First Nav Column */}
          <div>
            <ul className={`${common.flex} font-serif italic`}>
              <li><Link href="/design" className={`${common.hover} ${common.opacity}`}>Design</Link></li>
              <li><Link href="/photoblog" className={`${common.hover} ${common.opacity}`}>Photo Blog</Link></li>
              <li>
                <button
                  onClick={() => setIsPortfoliosModalOpen(true)}
                  className={`${common.hover} ${common.opacity}`}
                >
                  Portfolios Past
                </button>
              </li>
            </ul>
          </div>
          {/* Second Nav Column */}
          <div>
            <ul className={`${common.flex} font-serif italic`}>
              <li><Link href="mailto:austenezzell@gmail.com" className={`${common.hover} ${common.opacity}`}>Email</Link></li>
              <li><Link href="https://www.are.na/austen-ezzell/" className={`${common.hover} ${common.opacity}`}>Are.na</Link></li>
              <li><Link href="https://www.linkedin.com/in/austenezzell/" className={`${common.hover} ${common.opacity}`}>LinkedIn</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
} 