'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations, type Language } from '../../lib/i18n';
import {
  PhoneIcon, EnvelopeIcon, ArrowRightIcon, Bars3Icon, XMarkIcon,
  CameraIcon, SparklesIcon, XCircleIcon, MapPinIcon,
} from '@heroicons/react/24/outline';

const IMGS = {
  logo:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.05.23_PM-1788894389720.jpeg',
  building:  '/assets/images/WhatsApp_Image_2026-09-08_at_7.05.57_PM-1788894591347.jpeg',
  cls1:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__1_-1788894589650.jpeg',
  cls2:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788894592616.jpeg',
  cls3:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM-1788894592396.jpeg',
  new1:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788895053341.jpeg',
  new2:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM-1788895052060.jpeg',
  new3:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.03_PM-1788895054202.jpeg',
  new4:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.04_PM-1788895054747.jpeg',
};

interface GalleryItem {
  src: string;
  alt: string;
  label_en: string;
  label_sw: string;
  category_en: string;
  category_sw: string;
  span?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { src: IMGS.building, alt: 'New Generation School main building with Tanzanian flag and colorful garden', label_en: 'Our School Building', label_sw: 'Jengo Letu la Shule', category_en: 'Campus', category_sw: 'Kampasi', span: 'col-span-2 row-span-2' },
  { src: IMGS.cls1, alt: 'Bright classroom with students in white and yellow uniforms at New Generation School', label_en: 'Modern Classrooms', label_sw: 'Madarasa ya Kisasa', category_en: 'Classrooms', category_sw: 'Madarasa' },
  { src: IMGS.cls2, alt: 'Science laboratory with equipment for student experiments at New Generation School', label_en: 'Science Laboratory', label_sw: 'Maabara ya Sayansi', category_en: 'Facilities', category_sw: 'Vifaa' },
  { src: IMGS.cls3, alt: 'Classroom with chalkboard showing lessons and colorful educational displays', label_en: 'Learning in Action', label_sw: 'Kujifunza kwa Vitendo', category_en: 'Classrooms', category_sw: 'Madarasa' },
  { src: IMGS.new1, alt: 'New Generation School real photo of school campus and students', label_en: 'Campus Life', label_sw: 'Maisha ya Kampasi', category_en: 'Campus', category_sw: 'Kampasi', span: 'col-span-2' },
  { src: IMGS.new2, alt: 'New Generation School real photo of school activities and learning', label_en: 'School Activities', label_sw: 'Shughuli za Shule', category_en: 'Students', category_sw: 'Wanafunzi' },
  { src: IMGS.new3, alt: 'New Generation School real photo of students and teachers in classroom', label_en: 'Students & Teachers', label_sw: 'Wanafunzi na Walimu', category_en: 'Teachers', category_sw: 'Walimu' },
  { src: IMGS.new4, alt: 'New Generation School real photo of school environment and facilities', label_en: 'Our Environment', label_sw: 'Mazingira Yetu', category_en: 'Facilities', category_sw: 'Vifaa' },
  { src: IMGS.cls1, alt: 'Students seated at desks with educational posters on walls in bright classroom', label_en: 'Engaged Learning', label_sw: 'Kujifunza kwa Makini', category_en: 'Classrooms', category_sw: 'Madarasa' },
  { src: IMGS.cls2, alt: 'Colorful classroom with alphabet, numbers and shapes displays for young learners', label_en: 'Vibrant Environment', label_sw: 'Mazingira ya Uchangamfu', category_en: 'Campus', category_sw: 'Kampasi' },
  { src: IMGS.cls3, alt: 'Teacher with students in classroom with educational posters at New Generation School', label_en: 'Dedicated Teachers', label_sw: 'Walimu Waliojitoa', category_en: 'Teachers', category_sw: 'Walimu' },
  { src: IMGS.new2, alt: 'Five students in green sweater uniform standing by yellow school van', label_en: 'Our Students', label_sw: 'Wanafunzi Wetu', category_en: 'Students', category_sw: 'Wanafunzi' },
];

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const t = getTranslations(lang);
  useScrollAnimation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/academics', label: t.nav.academics },
    { href: '/facilities', label: t.nav.facilities },
    { href: '/gallery', label: lang === 'sw' ? 'Picha' : 'Gallery', active: true },
    { href: '/rules', label: t.nav.rules },
    { href: '/admissions', label: t.nav.admissions },
    { href: '/#contact', label: t.nav.contact },
  ];

  const categories_en = ['All', 'Campus', 'Classrooms', 'Facilities', 'Students', 'Teachers'];
  const categories_sw = ['Zote', 'Kampasi', 'Madarasa', 'Vifaa', 'Wanafunzi', 'Walimu'];

  const filtered = activeCategory === 0
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) =>
        lang === 'sw' ? item.category_sw === categories_sw[activeCategory] : item.category_en === categories_en[activeCategory]
      );

  return (
    <div className="min-h-screen font-sans bg-school-off-white">
      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-nav border-b border-school-border' : 'bg-white/96 backdrop-blur-md border-b border-school-border/40'}`}>
        <div className="hidden lg:block bg-school-green text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <a href="tel:+255717437788" className="flex items-center gap-1.5 hover:text-school-yellow transition-colors font-medium"><PhoneIcon className="w-3 h-3" />+255 717 437 788</a>
              <a href="mailto:newgeneration1420@gmail.com" className="flex items-center gap-1.5 hover:text-school-yellow transition-colors"><EnvelopeIcon className="w-3 h-3" />newgeneration1420@gmail.com</a>
            </div>
            <span className="text-school-yellow font-semibold">{lang === 'sw' ? 'Shule Inaanza: 7:30 Asubuhi' : 'School Hours: 7:30 AM – 3:00 PM'}</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform flex-shrink-0 border-2 border-school-yellow/30">
                <Image src={IMGS.logo} alt="New Generation School Logo" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-extrabold text-sm text-school-green leading-tight">New Generation</div>
                <div className="font-medium text-xs text-school-muted leading-tight">Nursery &amp; Primary School</div>
              </div>
            </Link>
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${link.active ? 'text-school-green bg-school-muted font-bold' : 'text-school-foreground hover:text-school-green hover:bg-school-muted/60'}`}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <button onClick={() => setLang(lang === 'en' ? 'sw' : 'en')}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-school-border text-xs font-bold hover:bg-school-muted/60 transition-colors">
                <span className={lang === 'en' ? 'text-school-green font-bold' : 'text-school-muted'}>EN</span>
                <span className="text-school-muted">/</span>
                <span className={lang === 'sw' ? 'text-school-green font-bold' : 'text-school-muted'}>SW</span>
              </button>
              <Link href="/admissions" className="hidden sm:flex btn-accent text-sm py-2 px-4">{t.nav.applyNow}</Link>
              <button className="lg:hidden p-2 rounded-lg hover:bg-school-muted/60" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-school-border px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="block py-2.5 px-3 rounded-xl text-sm font-semibold text-school-foreground hover:bg-school-muted hover:text-school-green transition-colors"
                onClick={() => setMobileOpen(false)}>{link.label}</Link>
            ))}
          </div>
        )}
      </header>

      <main className="pt-[88px] lg:pt-[104px]">
        {/* ── HERO ── */}
        <section className="relative hero-gradient text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-school-yellow/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
                <CameraIcon className="w-4 h-4 text-school-yellow" />
                {lang === 'sw' ? 'Picha za Shule' : 'School Gallery'}
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
                {lang === 'sw' ? 'Maisha ya' : 'Life at'}{' '}
                <span className="text-school-yellow">New Generation</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                {lang === 'sw' ?'Chunguza picha za maisha ya kila siku shuleni — madarasa, michezo, shughuli za ziada na mazingira ya kujifunza yanayovutia.' :'Explore photos of everyday school life — classrooms, sports, extracurricular activities and our vibrant learning environment.'}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
                <span className="flex items-center gap-1.5"><CameraIcon className="w-4 h-4" />{GALLERY_ITEMS.length} {lang === 'sw' ? 'Picha' : 'Photos'}</span>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span>{categories_en.length - 1} {lang === 'sw' ? 'Makundi' : 'Categories'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FILTER TABS ── */}
        <section className="bg-white border-b border-school-border sticky top-[88px] lg:top-[104px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
              {(lang === 'sw' ? categories_sw : categories_en).map((cat, i) => (
                <button key={cat} onClick={() => setActiveCategory(i)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === i ? 'bg-school-green text-white shadow-btn' : 'bg-school-muted text-school-muted hover:text-school-foreground hover:bg-school-border'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY BENTO GRID ── */}
        <section className="py-12 bg-school-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[220px]">
              {filtered.map((item, i) => (
                <div key={`${item.src}-${i}`}
                  className={`campus-card animate-on-scroll-up cursor-pointer ${item.span || ''}`}
                  style={{ transitionDelay: `${(i % 8) * 60}ms` }}
                  onClick={() => setLightbox(item)}>
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                  <div className="overlay" />
                  <div className="info">
                    <div>
                      <p className="text-white font-bold text-sm leading-tight">{lang === 'sw' ? item.label_sw : item.label_en}</p>
                      <p className="text-white/60 text-xs mt-0.5">{lang === 'sw' ? item.category_sw : item.category_en}</p>
                    </div>
                    <div className="expand-btn">
                      <CameraIcon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20 text-school-muted">
                <CameraIcon className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p className="font-semibold">{lang === 'sw' ? 'Hakuna picha katika kundi hili' : 'No photos in this category'}</p>
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
            <div className="section-tag mx-auto mb-6">
              <SparklesIcon className="w-3.5 h-3.5" />
              {lang === 'sw' ? 'Jiunge Nasi' : 'Join Our Community'}
            </div>
            <h2 className="text-3xl font-extrabold text-school-foreground mb-4">
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

        {/* ── FOOTER ── */}
        <footer className="bg-school-foreground text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-school-yellow/30">
                    <Image src={IMGS.logo} alt="New Generation School Logo" width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-extrabold text-sm leading-tight">New Generation School</div>
                    <div className="text-white/50 text-xs">Nursery &amp; Primary School</div>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  {lang === 'sw' ? 'Kutoa elimu bora kwa watoto wa Tabata Chang\'ombe na mazingira yake.' : 'Providing quality education for children of Tabata Chang\'ombe and surrounding areas.'}
                </p>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-4 text-school-yellow">{lang === 'sw' ? 'Viungo' : 'Quick Links'}</h4>
                <div className="space-y-2">
                  {navLinks.slice(0, 5).map((l) => (
                    <Link key={l.href} href={l.href} className="block text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-4 text-school-yellow">{lang === 'sw' ? 'Wasiliana' : 'Contact'}</h4>
                <div className="space-y-3 text-sm text-white/60">
                  <a href="tel:+255717437788" className="flex items-center gap-2 hover:text-white transition-colors"><PhoneIcon className="w-4 h-4 flex-shrink-0" />+255 717 437 788</a>
                  <a href="mailto:newgeneration1420@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors"><EnvelopeIcon className="w-4 h-4 flex-shrink-0" />newgeneration1420@gmail.com</a>
                  <div className="flex items-start gap-2"><MapPinIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />Tabata Chang'ombe, Ilala, Dar es Salaam</div>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
              <span>© {new Date().getFullYear()} New Generation Nursery &amp; Primary School. All rights reserved.</span>
              <span className="text-school-yellow/60">Learn. Grow. Shine. ✨</span>
            </div>
          </div>
        </footer>
      </main>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors" onClick={() => setLightbox(null)}>
            <XCircleIcon className="w-10 h-10" />
          </button>
          <div className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox.src} alt={lightbox.alt} width={1200} height={800} className="w-full h-full object-contain" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white font-bold text-lg">{lang === 'sw' ? lightbox.label_sw : lightbox.label_en}</p>
              <p className="text-white/60 text-sm">{lang === 'sw' ? lightbox.category_sw : lightbox.category_en}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
