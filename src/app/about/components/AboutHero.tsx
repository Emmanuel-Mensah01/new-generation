'use client';
import React from 'react';
import Image from 'next/image';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { type Language } from '@/lib/i18n';

interface AboutHeroProps {
  lang: Language;
}

export default function AboutHero({ lang }: AboutHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F0] py-20 lg:py-28 pt-[104px] lg:pt-[120px]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-pink opacity-50" />
        <div className="absolute top-0 right-[200px] w-[300px] h-[300px] blob-yellow opacity-40" />
        <div className="absolute bottom-0 left-0 w-72 h-72 blob-green opacity-35" />
        <div className="absolute top-28 right-12 w-2.5 h-2.5 bg-school-yellow rounded-full opacity-80 animate-pulse-soft" />
        <div className="absolute bottom-20 left-16 w-2 h-2 bg-school-pink rounded-full opacity-50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-school-yellow border border-school-yellow-dark text-school-foreground rounded-full px-4 py-1.5 text-sm font-bold shadow-btn-yellow">
              <SparklesIcon className="w-4 h-4" />
              {lang === 'sw' ? 'Hadithi Yetu' : 'Our Story'}
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-school-green">
              {lang === 'sw' ? 'Kuhusu Shule ya' : 'About'}{' '}
              <span className="text-school-pink">New Generation</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              {lang === 'sw' ?'Jumuiya ya kujifunza inayokaribisha, iliyojitolea kutoa msingi imara wa elimu kwa watoto katika mazingira salama na ya kuvutia huko Tabata Chang\'ombe, Dar es Salaam.' :'A welcoming learning community committed to providing children with a strong educational foundation in a safe, supportive and engaging environment in Tabata Chang\'ombe, Dar es Salaam.'}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '📍', text: 'Tabata Chang\'ombe, Ilala' },
                { icon: '🎓', text: lang === 'sw' ? 'Mtaala wa NECTA' : 'NECTA Curriculum' },
                { icon: '👦👧', text: lang === 'sw' ? 'Wavulana & Wasichana' : 'Boys & Girls Welcome' },
              ].map((b) => (
                <span key={b.text} className="inline-flex items-center gap-2 bg-white border border-school-border rounded-full px-4 py-2 text-sm font-semibold text-school-foreground shadow-card">
                  <span>{b.icon}</span>{b.text}
                </span>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="rounded-3xl overflow-hidden shadow-hero aspect-[4/3]">
              <Image src="/assets/images/ChatGPT_Image_Sep_9__2026__08_21_56_AM-1788943777277.png" alt="New Generation School main building with Tanzanian flag and colorful garden" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-school-yellow rounded-2xl p-4 shadow-float">
              <div className="text-3xl font-extrabold text-school-foreground">400+</div>
              <div className="text-xs font-semibold text-school-foreground/70 mt-0.5">{lang === 'sw' ? 'Familia Zinazomwamini' : 'Families Trust Us'}</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-card text-center">
              <div className="text-2xl font-extrabold text-school-green">✓</div>
              <div className="text-xs font-semibold text-gray-500 mt-0.5">{lang === 'sw' ? 'Imeidhinishwa' : 'Accredited'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
