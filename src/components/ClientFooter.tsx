'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Footer from './Footer';

export default function ClientFooter() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const footerRoot = document.getElementById('footer-root');
  if (!footerRoot) return null;

  return createPortal(<Footer />, footerRoot);
} 