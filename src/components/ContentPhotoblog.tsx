'use client';

import Slideshow from './Slideshow';

interface ContentPhotoblogProps {
  onClose: () => void;
  title: string;
}

export default function ContentPhotoblog({ onClose, title }: ContentPhotoblogProps) {
  const mediaItems = [
    {
      type: 'image' as const,
      src: '/photoblog/16_05_25_maggie.jpg',
      alt: 'Maggie',
      date: 'May 25, 2016'
    },
    {
      type: 'video' as const,
      src: '/photoblog/portugal.mp4',
      alt: 'Portugal',
      date: 'May 15, 2025'
    },
    {
      type: 'image' as const,
      src: '/photoblog/25_03_30_london.jpg',
      alt: 'London',
      date: 'March 30, 2025'
    },
    {
      type: 'image' as const,
      src: '/photoblog/23_02_10_laguna.jpg',
      alt: 'Laguna',
      date: 'February 10, 2023'
    },
    {
      type: 'image' as const,
      src: '/photoblog/22_11_03_laguna.jpg',
      alt: 'Laguna',
      date: 'November 3, 2022'
    },
    {
      type: 'image' as const,
      src: '/photoblog/18_04_09_tom.jpg',
      alt: 'Tom',
      date: 'April 9, 2018'
    },
    {
      type: 'image' as const,
      src: '/photoblog/18_03_03_everett.jpg',
      alt: 'Everett',
      date: 'March 3, 2018'
    },
    {
      type: 'image' as const,
      src: '/photoblog/18_02_17_maui.jpeg',
      alt: 'Maui',
      date: 'February 17, 2018'
    },
    {
      type: 'image' as const,
      src: '/photoblog/17_06_17_everett.jpg',
      alt: 'Everett',
      date: 'June 17, 2017'
    },
    {
      type: 'image' as const,
      src: '/photoblog/16_03_15_costa_rica.JPG',
      alt: 'Costa Rica',
      date: 'March 15, 2016'
    },
    {
      type: 'image' as const,
      src: '/photoblog/15_03_24_panama.jpg',
      alt: 'Panama',
      date: 'March 24, 2015'
    },
    {
      type: 'image' as const,
      src: '/photoblog/14_05_27_tokyo.jpg',
      alt: 'Tokyo',
      date: 'May 27, 2014'
    },
    {
      type: 'image' as const,
      src: '/photoblog/14_05_10_vietnam.jpg',
      alt: 'Vietnam',
      date: 'May 10, 2014'
    },
    {
      type: 'image' as const,
      src: '/photoblog/14_05_09_vietnam.jpg',
      alt: 'Vietnam',
      date: 'May 9, 2014'
    },
    {
      type: 'image' as const,
      src: '/photoblog/14_05_08_vietnam.jpg',
      alt: 'Vietnam',
      date: 'May 8, 2014'
    },
    {
      type: 'image' as const,
      src: '/photoblog/14_04_26_cambodia.jpg',
      alt: 'Cambodia',
      date: 'April 26, 2014'
    },
    {
      type: 'image' as const,
      src: '/photoblog/14_04_24_cambodia.jpg',
      alt: 'Cambodia',
      date: 'April 24, 2014'
    },
    {
      type: 'image' as const,
      src: '/photoblog/14_03_28_india.jpg',
      alt: 'India',
      date: 'March 28, 2014'
    },
    {
      type: 'image' as const,
      src: '/photoblog/14_03_23_india.jpg',
      alt: 'India',
      date: 'March 23, 2014'
    },
    {
      type: 'image' as const,
      src: '/photoblog/14_03_19_india.jpg',
      alt: 'India',
      date: 'March 19, 2014'
    },
    {
      type: 'image' as const,
      src: '/photoblog/14_03_03_sri_lanka.jpg',
      alt: 'Sri Lanka',
      date: 'March 3, 2014'
    },
    {
      type: 'image' as const,
      src: '/photoblog/14_03_02_sri_lanka.jpg',
      alt: 'Sri Lanka',
      date: 'March 2, 2014'
    },
    {
      type: 'image' as const,
      src: '/photoblog/14_01_11_bali.jpg',
      alt: 'Bali',
      date: 'January 11, 2014'
    },
    {
      type: 'image' as const,
      src: '/photoblog/13_04_14_thailand.jpg',
      alt: 'Thailand',
      date: 'April 14, 2013'
    },
    {
      type: 'image' as const,
      src: '/photoblog/12_11_26_bali.jpg',
      alt: 'Bali',
      date: 'November 26, 2012'
    },
    {
      type: 'image' as const,
      src: '/photoblog/12_11_21_sydney.jpg',
      alt: 'Sydney',
      date: 'November 21, 2012'
    },
    {
      type: 'image' as const,
      src: '/photoblog/12_10_26_bali.jpg',
      alt: 'Bali',
      date: 'October 26, 2012'
    },
    {
      type: 'image' as const,
      src: '/photoblog/11_07_18_nusa.jpg',
      alt: 'Nusa',
      date: 'July 18, 2011'
    },
    {
      type: 'image' as const,
      src: '/photoblog/11_03_04_cusco.jpg',
      alt: 'Cusco',
      date: 'March 4, 2011'
    },
    {
      type: 'image' as const,
      src: '/photoblog/09_08_29_kansas_city.jpg',
      alt: 'Kansas City',
      date: 'August 29, 2009'
    },
    {
      type: 'image' as const,
      src: '/photoblog/08_06_12_laguna.jpg',
      alt: 'Laguna',
      date: 'June 12, 2008'
    },
    {
      type: 'image' as const,
      src: '/photoblog/08_03_15_costa.jpg',
      alt: 'Costa',
      date: 'March 15, 2008'
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