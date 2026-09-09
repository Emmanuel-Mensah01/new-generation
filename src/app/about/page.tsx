'use client';
import React, { useState, useEffect } from 'react';
import { type Language } from '../../lib/i18n';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import AboutHero from './components/AboutHero';
import OurStorySection from './components/OurStorySection';
import ValuesSection from './components/ValuesSection';

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-up')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function AboutPage() {
  const [lang, setLang] = useState<Language>('en');
  useScrollAnimation();

  return (
    <div className="min-h-screen font-sans bg-school-off-white">
      <Navbar lang={lang} setLang={setLang} activePath="/about" />
      <main className="pt-[88px] lg:pt-[104px]">
        <AboutHero lang={lang} />
        <OurStorySection lang={lang} />
        <ValuesSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
