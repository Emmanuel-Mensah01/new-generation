'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AcademicCapIcon, CheckCircleIcon, ArrowRightIcon, BookOpenIcon, BeakerIcon, CalculatorIcon, GlobeAltIcon, MusicalNoteIcon, PaintBrushIcon, SparklesIcon, HeartIcon, UserGroupIcon, StarIcon,  } from '@heroicons/react/24/outline';
import { getTranslations, type Language } from '@/lib/i18n';

interface ProgrammesSectionProps {
  lang: Language;
}

export default function ProgrammesSection({ lang }: ProgrammesSectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const t = getTranslations(lang);

  const tabs = [
    {
      label: t.academics.tab1,
      title: t.academics.dayTitle,
      age: t.academics.dayAge,
      desc: t.academics.dayDesc,
      image: '/assets/images/ChatGPT_Image_Sep_6__2026__03_37_04_PM-1788890914979.png',
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
      image: '/assets/images/ChatGPT_Image_Sep_6__2026__03_39_26_PM-1788890914978.png',
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
      image: '/assets/images/ChatGPT_Image_Sep_9__2026__08_15_30_AM-1788941762942.png',
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 animate-on-scroll">
          <div className="section-tag mx-auto">
            <AcademicCapIcon className="w-3.5 h-3.5" />
            {t.academics.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-school-foreground">{t.academics.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{t.academics.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll">
          {tabs.map((tab, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${activeTab === i ? 'tab-active' : 'bg-white border border-school-border text-gray-500 hover:border-school-pink hover:text-school-pink'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start animate-on-scroll">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-card">
            <Image src={currentTab.image} alt={currentTab.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-school-pink-dark/50 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
              <p className="font-bold text-sm text-school-pink">{currentTab.title}</p>
              <p className="text-xs text-gray-500">{currentTab.age}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-school-pink/10 text-school-pink px-3 py-1.5 rounded-full text-xs font-bold mb-3">
                <StarIcon className="w-3.5 h-3.5" />
                {currentTab.age}
              </div>
              <h3 className="text-2xl font-extrabold text-school-green mb-3">{currentTab.title}</h3>
              <p className="text-gray-500 leading-relaxed">{currentTab.desc}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {currentTab.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 bg-school-muted rounded-xl p-3 border border-school-border">
                  <CheckCircleIcon className="w-4 h-4 text-school-pink flex-shrink-0" />
                  <span className="text-xs font-semibold text-school-foreground">{h}</span>
                </div>
              ))}
            </div>

            <div>
              <p className="font-bold text-sm text-school-foreground mb-3">
                {activeTab === 1 ? t.academics.nurserySubjects : activeTab === 2 ? t.academics.primarySubjects : lang === 'sw' ? 'Shughuli Muhimu' : 'Key Activities'}
              </p>
              <div className="grid grid-cols-3 gap-2">
                {currentTab.subjects.map((subj, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5 bg-white rounded-xl p-3 border border-school-border text-center">
                    <div className="w-8 h-8 rounded-lg bg-school-pink/10 flex items-center justify-center">
                      <subj.icon className="w-4 h-4 text-school-pink" />
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
  );
}
