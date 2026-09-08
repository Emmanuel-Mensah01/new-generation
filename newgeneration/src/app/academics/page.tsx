'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations, type Language } from '../../lib/i18n';
import {
  AcademicCapIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
  BookOpenIcon,
  BeakerIcon,
  CalculatorIcon,
  GlobeAltIcon,
  MusicalNoteIcon,
  PaintBrushIcon,
  SparklesIcon,
  HeartIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

const IMGS = {
  logo:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.05.23_PM-1788894389720.jpeg',
  building:  '/assets/images/WhatsApp_Image_2026-09-08_at_7.05.57_PM-1788894591347.jpeg',
  classroom1: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__1_-1788894589650.jpeg',
  classroom2: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788894592616.jpeg',
  classroom3: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM-1788894592396.jpeg',
  scienceLab: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788894592616.jpeg',
};

const SCHOOL_IMAGES = IMGS;

function useScrollAnimation() {
  useEffect(() => {
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [scrolled, setScrolled] = useState(false);
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
    { href: '/gallery', label: lang === 'sw' ? 'Picha' : 'Gallery' },
    { href: '/rules', label: t.nav.rules },
    { href: '/admissions', label: t.nav.admissions },
    { href: '/#contact', label: t.nav.contact },
  ];

  const tabs = [
    {
      label: t.academics.tab1,
      title: t.academics.dayTitle,
      age: t.academics.dayAge,
      desc: t.academics.dayDesc,
      image: SCHOOL_IMAGES.classroom1,
      alt: 'Day care children in bright, colourful classroom at New Generation School',
      applyLabel: t.academics.applyDay,
      subjects: [
        { icon: HeartIcon, label: lang === 'sw' ? 'Huduma ya Kulelea' : 'Nurturing Care' },
        { icon: SparklesIcon, label: lang === 'sw' ? 'Kucheza & Kugundua' : 'Play & Explore' },
        { icon: MusicalNoteIcon, label: lang === 'sw' ? 'Nyimbo & Mashairi' : 'Songs & Rhymes' },
        { icon: PaintBrushIcon, label: lang === 'sw' ? 'Kuchora & Sanaa' : 'Creative Play' },
        { icon: BookOpenIcon, label: lang === 'sw' ? 'Wakati wa Hadithi' : 'Story Time' },
        { icon: UserGroupIcon, label: lang === 'sw' ? 'Kucheza Pamoja' : 'Social Play' },
      ],
      highlights: [
        lang === 'sw' ? 'Umri wa miaka 2–3' : 'Ages 2–3 years',
        lang === 'sw' ? 'Mazingira salama' : 'Safe environment',
        lang === 'sw' ? 'Walimu wanaojali' : 'Caring teachers',
        lang === 'sw' ? 'Shughuli za kuchekesha' : 'Fun activities',
      ],
    },
    {
      label: t.academics.tab2,
      title: t.academics.nurseryTitle,
      age: t.academics.nurseryAge,
      desc: t.academics.nurseryDesc,
      image: SCHOOL_IMAGES.classroom2,
      alt: 'Nursery classroom with colourful educational displays and happy children',
      applyLabel: t.academics.applyNursery,
      subjects: [
        { icon: SparklesIcon, label: lang === 'sw' ? 'Kujifunza kwa Kucheza' : 'Play-Based Learning' },
        { icon: BookOpenIcon, label: lang === 'sw' ? 'Lugha & Kusoma' : 'Language & Literacy' },
        { icon: CalculatorIcon, label: lang === 'sw' ? 'Hesabu za Msingi' : 'Numeracy Basics' },
        { icon: PaintBrushIcon, label: lang === 'sw' ? 'Sanaa & Ufundi' : 'Arts & Crafts' },
        { icon: MusicalNoteIcon, label: lang === 'sw' ? 'Muziki & Harakati' : 'Music & Movement' },
        { icon: HeartIcon, label: lang === 'sw' ? 'Ujuzi wa Kijamii' : 'Social Skills' },
      ],
      highlights: [
        lang === 'sw' ? 'Umri wa miaka 3–5' : 'Ages 3–5 years',
        lang === 'sw' ? 'Kujifunza kwa kucheza' : 'Play-based learning',
        lang === 'sw' ? 'Ukuaji wa kijamii' : 'Social development',
        lang === 'sw' ? 'Msingi imara' : 'Strong foundation',
      ],
    },
    {
      label: t.academics.tab3,
      title: t.academics.primaryTitle,
      age: t.academics.primaryAge,
      desc: t.academics.primaryDesc,
      image: SCHOOL_IMAGES.classroom3,
      alt: 'Primary classroom with teacher and students engaged in learning at New Generation School',
      applyLabel: t.academics.applyPrimary,
      subjects: [
        { icon: BookOpenIcon, label: lang === 'sw' ? 'Kiingereza' : 'English Language' },
        { icon: CalculatorIcon, label: lang === 'sw' ? 'Hisabati' : 'Mathematics' },
        { icon: BeakerIcon, label: lang === 'sw' ? 'Sayansi' : 'Science' },
        { icon: GlobeAltIcon, label: lang === 'sw' ? 'Maarifa ya Jamii' : 'Social Studies' },
        { icon: MusicalNoteIcon, label: lang === 'sw' ? 'Kiswahili' : 'Kiswahili' },
        { icon: PaintBrushIcon, label: lang === 'sw' ? 'Sanaa ya Ubunifu' : 'Creative Arts' },
      ],
      highlights: [
        lang === 'sw' ? 'Darasa la 1–7' : 'Standard 1–7',
        lang === 'sw' ? 'Mtaala wa NECTA' : 'NECTA curriculum',
        lang === 'sw' ? 'Maabara ya Sayansi' : 'Science laboratory',
        lang === 'sw' ? 'Michezo & Shughuli' : 'Sports & activities',
      ],
    },
  ];

  const currentTab = tabs[activeTab];

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
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${link.href === '/academics' ? 'text-school-green bg-school-muted font-bold' : 'text-school-foreground hover:text-school-green hover:bg-school-muted/60'}`}>
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
              <button className="lg:hidden p-2 rounded-lg hover:bg-school-muted/60 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
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

      {/* HERO */}
      <section className="relative hero-gradient pt-[104px] lg:pt-[120px] pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-school-yellow/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 bg-school-yellow/20 border border-school-yellow/30 text-school-yellow px-4 py-2 rounded-full text-sm font-semibold">
                <BookOpenIcon className="w-4 h-4" />
                {lang === 'sw' ? 'Programu za Masomo' : 'Academic Programmes'}
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                {lang === 'sw' ? 'Elimu Bora' : 'Quality Education'}{' '}
                <span className="text-school-yellow">{lang === 'sw' ? 'kwa Kila Hatua' : 'at Every Stage'}</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">
                {lang === 'sw' ?'Kutoka Huduma ya Mchana kupitia Chekechea na hadi Msingi — safari ya elimu ya hali ya juu bila kikwazo kwa kila mtoto.' :'From Day Care through Nursery and into Primary — a seamless, high-quality educational journey for every child in our care.'}
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  lang === 'sw' ? 'Huduma ya Mchana' : 'Day Care',
                  lang === 'sw' ? 'Chekechea' : 'Nursery',
                  lang === 'sw' ? 'Shule ya Msingi' : 'Primary',
                  lang === 'sw' ? 'Mtaala wa NECTA' : 'NECTA Curriculum',
                ].map((b) => (
                  <div key={b} className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 px-3 py-1.5 rounded-full text-xs font-semibold">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-school-yellow" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-hero">
              <Image
                src={SCHOOL_IMAGES.classroom3}
                alt="Teacher with students engaged in learning at New Generation School"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMES TABS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 animate-on-scroll">
            <div className="section-tag mx-auto">
              <AcademicCapIcon className="w-3.5 h-3.5" />
              {t.academics.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-school-foreground">{t.academics.title}</h2>
            <p className="text-school-muted max-w-2xl mx-auto">{t.academics.subtitle}</p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                  activeTab === i ? 'tab-active' : 'bg-white border border-school-border text-school-muted hover:border-school-green hover:text-school-green'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start animate-on-scroll">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-card">
              <Image
                src={currentTab.image}
                alt={currentTab.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/50 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                <p className="font-bold text-sm text-school-green">{currentTab.title}</p>
                <p className="text-xs text-school-muted">{currentTab.age}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-school-green/10 text-school-green px-3 py-1.5 rounded-full text-xs font-bold mb-3">
                  <StarIcon className="w-3.5 h-3.5" />
                  {currentTab.age}
                </div>
                <h3 className="text-2xl font-extrabold text-school-foreground mb-3">{currentTab.title}</h3>
                <p className="text-school-muted leading-relaxed">{currentTab.desc}</p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3">
                {currentTab.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 bg-school-off-white rounded-xl p-3 border border-school-border">
                    <CheckCircleIcon className="w-4 h-4 text-school-green flex-shrink-0" />
                    <span className="text-xs font-semibold text-school-foreground">{h}</span>
                  </div>
                ))}
              </div>

              {/* Subjects */}
              <div>
                <p className="font-bold text-sm text-school-foreground mb-3">
                  {activeTab === 1 ? t.academics.nurserySubjects : activeTab === 2 ? t.academics.primarySubjects : lang === 'sw' ? 'Shughuli Muhimu' : 'Key Activities'}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {currentTab.subjects.map((subj, i) => (
                    <div key={i} className="flex flex-col items-center gap-1.5 bg-school-off-white rounded-xl p-3 border border-school-border text-center">
                      <div className="w-8 h-8 rounded-lg bg-school-green/10 flex items-center justify-center">
                        <subj.icon className="w-4 h-4 text-school-green" />
                      </div>
                      <span className="text-xs font-medium text-school-foreground leading-tight">{subj.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/admissions" className="btn-primary inline-flex">
                {currentTab.applyLabel}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SCIENCE LAB HIGHLIGHT */}
      <section className="py-20 bg-school-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll-right order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-card">
                <Image
                  src={SCHOOL_IMAGES.scienceLab}
                  alt="Modern science laboratory supporting NECTA curriculum at New Generation School"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-school-yellow text-school-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                  {lang === 'sw' ? 'Maabara ya Sayansi' : 'Science Lab'}
                </div>
              </div>
            </div>
            <div className="space-y-6 animate-on-scroll-left order-1 lg:order-2">
              <div className="section-tag">
                <BeakerIcon className="w-3.5 h-3.5" />
                {lang === 'sw' ? 'Kipengele Maalum' : 'Special Feature'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-school-foreground leading-tight">
                {lang === 'sw' ? 'Sayansi ya Vitendo' : 'Hands-On Science'}
              </h2>
              <p className="text-school-muted leading-relaxed">
                {lang === 'sw' ?'Wanafunzi wetu wa Shule ya Msingi wana fursa ya kufanya majaribio ya kweli katika maabara yetu ya kisasa. Hii inasaidia kuelewa masomo ya sayansi kwa undani zaidi na kukuza upendo wa kugundua.' :'Our Primary students have the opportunity to conduct real experiments in our modern science laboratory. This supports a deeper understanding of science subjects and nurtures a love of discovery.'}
              </p>
              <div className="bg-school-green/5 border border-school-green/20 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheckIcon className="w-5 h-5 text-school-green flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm text-school-foreground mb-1">
                      {lang === 'sw' ? 'Sawa na Mtaala wa NECTA' : 'NECTA Curriculum Aligned'}
                    </p>
                    <p className="text-xs text-school-muted">
                      {lang === 'sw' ?'Maabara yetu inasaidia moja kwa moja masomo ya sayansi ya mtaala wa NECTA, ikiwasaidia wanafunzi kufanya vizuri katika mitihani.' :'Our laboratory directly supports the NECTA science curriculum, helping students excel in their examinations.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14 animate-on-scroll">
            <div className="section-tag mx-auto">
              <BookOpenIcon className="w-3.5 h-3.5" />
              {lang === 'sw' ? 'Mtaala Wetu' : 'Our Curriculum'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-school-foreground">
              {lang === 'sw' ? 'Masomo ya Shule ya Msingi' : 'Primary School Subjects'}
            </h2>
            <p className="text-school-muted max-w-2xl mx-auto">
              {lang === 'sw' ?'Tunafuata mtaala wa NECTA wa Tanzania, ukitoa mafunzo ya kina ya kitaaluma pamoja na ukuaji wa tabia.' :'We follow the Tanzania NECTA curriculum, providing rigorous academic instruction alongside character development.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: BookOpenIcon, label: lang === 'sw' ? 'Kiingereza' : 'English', color: 'bg-school-green' },
              { icon: CalculatorIcon, label: lang === 'sw' ? 'Hisabati' : 'Mathematics', color: 'bg-school-yellow' },
              { icon: BeakerIcon, label: lang === 'sw' ? 'Sayansi' : 'Science', color: 'bg-school-green' },
              { icon: GlobeAltIcon, label: lang === 'sw' ? 'Maarifa ya Jamii' : 'Social Studies', color: 'bg-school-yellow' },
              { icon: MusicalNoteIcon, label: 'Kiswahili', color: 'bg-school-green' },
              { icon: PaintBrushIcon, label: lang === 'sw' ? 'Sanaa' : 'Creative Arts', color: 'bg-school-yellow' },
            ].map((subj, i) => (
              <div key={i} className="bg-school-off-white rounded-2xl border border-school-border p-5 text-center hover:shadow-card transition-all animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className={`w-12 h-12 rounded-xl ${subj.color} flex items-center justify-center mx-auto mb-3`}>
                  <subj.icon className={`w-6 h-6 ${subj.color === 'bg-school-yellow' ? 'text-school-foreground' : 'text-white'}`} />
                </div>
                <p className="font-bold text-sm text-school-foreground">{subj.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'sw' ? 'Anza Safari ya Elimu ya Mtoto Wako' : "Start Your Child's Educational Journey"}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {lang === 'sw' ?'Jiunge na familia zaidi ya 200 zinazomwamini New Generation School kwa elimu bora na mazingira salama.' :'Join over 200 families who trust New Generation School for quality education and a safe, nurturing environment.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions" className="btn-accent">
              {t.nav.applyNow}
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <a href="tel:+255717437788" className="btn-outline-white flex items-center gap-2">
              <PhoneIcon className="w-4 h-4" />
              +255 717 437788
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
    </div>
  );
}
