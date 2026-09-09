'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { getTranslations, type Language } from '../../lib/i18n';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import FacilitiesHero from './components/FacilitiesHero';
import FacilitiesGrid from './components/FacilitiesGrid';

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

export default function FacilitiesPage() {
  const [lang, setLang] = useState<Language>('en');
  const t = getTranslations(lang);
  useScrollAnimation();

  return (
    <div className="min-h-screen font-sans bg-school-off-white">
      <Navbar lang={lang} setLang={setLang} activePath="/facilities" />
      <main>
        <FacilitiesHero lang={lang} />
        <FacilitiesGrid lang={lang} />

        {/* CTA */}
        <section className="py-16 bg-school-off-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
            <div className="section-tag mx-auto mb-6">
              <SparklesIcon className="w-3.5 h-3.5" />
              {lang === 'sw' ? 'Jiunge Nasi' : 'Join Our Community'}
            </div>
            <h2 className="text-3xl font-extrabold text-school-foreground mb-4">
              {lang === 'sw' ? 'Mtoto Wako Anastahili Mazingira Bora' : 'Your Child Deserves the Best Environment'}
            </h2>
            <p className="text-school-muted mb-8 max-w-xl mx-auto">
              {lang === 'sw' ? 'Wasiliana nasi leo ili kujua zaidi kuhusu jinsi ya kuandikisha mtoto wako.' : 'Contact us today to learn more about enrolling your child at New Generation School.'}
            </p>
            <Link href="/admissions" className="btn-accent px-8 py-3 text-base">
              {t.nav.applyNow} <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
