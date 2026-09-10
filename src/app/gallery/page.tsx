'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { getTranslations, type Language } from '../../lib/i18n';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import GalleryHero from './components/GalleryHero';
import GalleryGrid, { GALLERY_ITEMS } from './components/GalleryGrid';

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function GalleryPage() {
  const [lang, setLang] = useState<Language>('en');
  const [activeCategory, setActiveCategory] = useState(0);
  const t = getTranslations(lang);
  useScrollAnimation();

  const categories_en = ['All', 'Campus', 'Classrooms', 'Facilities', 'Students', 'Teachers'];
  const categories_sw = ['Zote', 'Kampasi', 'Madarasa', 'Vifaa', 'Wanafunzi', 'Walimu'];

  return (
    <div className="min-h-screen font-sans bg-school-off-white">
      <Navbar lang={lang} setLang={setLang} activePath="/gallery" />
      <main>
        <GalleryHero lang={lang} photoCount={GALLERY_ITEMS.length} categoryCount={categories_en.length - 1} />

        {/* Filter Tabs */}
        <section className="bg-white border-b border-school-border sticky top-[88px] lg:top-[104px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {(lang === 'sw' ? categories_sw : categories_en).map((cat, i) => (
                <button key={cat} onClick={() => setActiveCategory(i)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === i ? 'bg-school-pink text-white shadow-btn' : 'bg-school-muted text-gray-500 hover:text-school-foreground hover:bg-school-border'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <GalleryGrid lang={lang} activeCategory={activeCategory} />

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
            <div className="section-tag mx-auto mb-6">
              <SparklesIcon className="w-3.5 h-3.5" />
              {lang === 'sw' ? 'Jiunge Nasi' : 'Join Our Community'}
            </div>
            <h2 className="text-3xl font-extrabold text-school-green mb-4">
              {lang === 'sw' ? 'Mtoto Wako Anaweza Kuwa Sehemu ya Familia Hii' : 'Your Child Can Be Part of This Family'}
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
