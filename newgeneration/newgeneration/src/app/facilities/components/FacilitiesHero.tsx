'use client';
import React from 'react';
import Image from 'next/image';
import { BuildingLibraryIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { type Language } from '@/lib/i18n';

// Image path — update this to change the facilities hero image
const IMG_CLASSROOM2 = '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788894592616.jpeg';

interface FacilitiesHeroProps {
  lang: Language;
}

export default function FacilitiesHero({ lang }: FacilitiesHeroProps) {
  return (
    <section className="relative hero-gradient text-white py-20 lg:py-28 overflow-hidden pt-[104px] lg:pt-[120px]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-school-yellow/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-school-yellow/20 border border-school-yellow/30 text-school-yellow px-4 py-2 rounded-full text-sm font-semibold">
              <BuildingLibraryIcon className="w-4 h-4" />
              {lang === 'sw' ? 'Vifaa vya Shule' : 'School Facilities'}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              {lang === 'sw' ? 'Vifaa vya Kiwango cha Juu' : 'World-Class'}{' '}
              <span className="text-school-yellow">{lang === 'sw' ? 'kwa Kujifunza' : 'Facilities'}</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              {lang === 'sw' ?'Kila kona ya kampasi yetu imeundwa kwa makini kusaidia kujifunza, ubunifu na ukuaji wa kila mtoto.' :'Every corner of our campus is thoughtfully designed to support learning, creativity and the growth of every child in our care.'}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                lang === 'sw' ? 'Madarasa ya Kisasa' : 'Modern Classrooms',
                lang === 'sw' ? 'Maabara ya Sayansi' : 'Science Lab',
                lang === 'sw' ? 'Maktaba' : 'Library',
                lang === 'sw' ? 'Usafiri' : 'Transport',
              ].map((b) => (
                <div key={b} className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 px-3 py-1.5 rounded-full text-xs font-semibold">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-school-yellow" />{b}
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="rounded-3xl overflow-hidden shadow-hero aspect-[4/3]">
              <Image src={IMG_CLASSROOM2} alt="Modern science laboratory at New Generation School" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/40 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2">
                <p className="text-xs font-bold text-school-green">{lang === 'sw' ? 'Maabara ya Sayansi' : 'Science Laboratory'}</p>
                <p className="text-xs text-school-muted">{lang === 'sw' ? 'Vifaa vya Kisasa' : 'Modern Equipment'}</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-school-yellow rounded-2xl p-4 shadow-float">
              <div className="text-2xl font-extrabold text-school-foreground">6+</div>
              <div className="text-xs font-semibold text-school-foreground/70 mt-0.5">{lang === 'sw' ? 'Vifaa Bora' : 'Key Facilities'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
