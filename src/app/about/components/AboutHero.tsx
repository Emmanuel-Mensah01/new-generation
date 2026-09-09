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
    <section className="relative overflow-hidden hero-gradient text-white py-20 lg:py-28">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-school-yellow/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold">
              <SparklesIcon className="w-4 h-4 text-school-yellow" />
              {lang === 'sw' ? 'Hadithi Yetu' : 'Our Story'}
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              {lang === 'sw' ? 'Kuhusu Shule ya' : 'About'}{' '}
              <span className="text-school-yellow">New Generation</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              {lang === 'sw' ?'Jumuiya ya kujifunza inayokaribisha, iliyojitolea kutoa msingi imara wa elimu kwa watoto katika mazingira salama na ya kuvutia huko Tabata Chang\'ombe, Dar es Salaam.' :'A welcoming learning community committed to providing children with a strong educational foundation in a safe, supportive and engaging environment in Tabata Chang\'ombe, Dar es Salaam.'}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '📍', text: 'Tabata Chang\'ombe, Ilala' },
                { icon: '🎓', text: lang === 'sw' ? 'Mtaala wa NECTA' : 'NECTA Curriculum' },
                { icon: '👦👧', text: lang === 'sw' ? 'Wavulana & Wasichana' : 'Boys & Girls Welcome' },
              ].map((b) => (
                <span key={b.text} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                  <span>{b.icon}</span>{b.text}
                </span>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="rounded-3xl overflow-hidden shadow-hero aspect-[4/3]">
              <Image src="/assets/images/WhatsApp_Image_2026-09-08_at_7.05.57_PM-1788894591347.jpeg" alt="New Generation School main building with Tanzanian flag and colorful garden" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-school-yellow rounded-2xl p-4 shadow-float">
              <div className="text-3xl font-extrabold text-school-foreground">200+</div>
              <div className="text-xs font-semibold text-school-foreground/70 mt-0.5">{lang === 'sw' ? 'Familia Zinazomwamini' : 'Families Trust Us'}</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-card text-center">
              <div className="text-2xl font-extrabold text-school-green">✓</div>
              <div className="text-xs font-semibold text-school-muted mt-0.5">{lang === 'sw' ? 'Imeidhinishwa' : 'Accredited'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
