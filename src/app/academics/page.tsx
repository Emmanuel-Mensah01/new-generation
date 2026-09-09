'use client';
import React, { useState, useEffect } from 'react';
import { type Language } from '../../lib/i18n';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import AcademicsHero from './components/AcademicsHero';
import ProgrammesSection from './components/ProgrammesSection';
import ScienceLabSection from './components/ScienceLabSection';

function useScrollAnimation() {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function AcademicsPage() {
  const [lang, setLang] = useState<Language>('en');
  useScrollAnimation();

  return (
    <div className="min-h-screen font-sans bg-school-off-white">
      <Navbar lang={lang} setLang={setLang} activePath="/academics" />
      <main>
        <AcademicsHero lang={lang} />
        <ProgrammesSection lang={lang} />
        <ScienceLabSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}