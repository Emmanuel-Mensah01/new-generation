'use client';
import React from 'react';
import Image from 'next/image';
import { BuildingLibraryIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { type Language } from '@/lib/i18n';

interface FacilitiesHeroProps {
  lang: Language;
}

export default function FacilitiesHero({ lang }: FacilitiesHeroProps) {
  return (
    <section className="relative bg-[#FFF8F0] py-20 lg:py-28 overflow-hidden pt-[104px] lg:pt-[120px]">
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
            <div className="inline-flex items-center gap-2 bg-school-yellow border border-school-yellow-dark text-school-foreground px-4 py-2 rounded-full text-sm font-bold shadow-btn-yellow">
              <BuildingLibraryIcon className="w-4 h-4" />
              {lang === 'sw' ? 'Vifaa vya Shule' : 'School Facilities'}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-school-green">
              {lang === 'sw' ? 'Vifaa vya Kiwango cha Juu' : 'World-Class'}{' '}
              <span className="text-school-pink">{lang === 'sw' ? 'kwa Kujifunza' : 'Facilities'}</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {lang === 'sw' ?'Kila kona ya kampasi yetu imeundwa kwa makini kusaidia kujifunza, ubunifu na ukuaji wa kila mtoto.' :'Every corner of our campus is thoughtfully designed to support learning, creativity and the growth of every child in our care.'}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                lang === 'sw' ? 'Madarasa ya Kisasa' : 'Modern Classrooms',
                lang === 'sw' ? 'Maabara ya Sayansi' : 'Science Lab',
                lang === 'sw' ? 'Maktaba' : 'Library',
                lang === 'sw' ? 'Usafiri' : 'Transport',
              ].map((b) => (
                <div key={b} className="flex items-center gap-1.5 bg-white border border-school-border text-school-foreground px-3 py-1.5 rounded-full text-xs font-semibold shadow-card">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-school-green" />{b}
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="rounded-3xl overflow-hidden shadow-hero aspect-[4/3]">
              <Image src="/assets/images/sch_lab-1789024389935.png" alt="Modern science laboratory at New Generation School" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/40 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2">
                <p className="text-xs font-bold text-school-green">{lang === 'sw' ? 'Maabara ya Sayansi' : 'Science Laboratory'}</p>
                <p className="text-xs text-gray-500">{lang === 'sw' ? 'Vifaa vya Kisasa' : 'Modern Equipment'}</p>
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
