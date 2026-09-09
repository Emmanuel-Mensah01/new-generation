'use client';
import React from 'react';

import { CameraIcon } from '@heroicons/react/24/outline';
import { type Language } from '@/lib/i18n';


interface GalleryHeroProps {
  lang: Language;
  photoCount: number;
  categoryCount: number;
}

export default function GalleryHero({ lang, photoCount, categoryCount }: GalleryHeroProps) {
  return (
    <section className="relative hero-gradient text-white py-20 lg:py-28 overflow-hidden pt-[104px] lg:pt-[120px]">
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
            <span className="flex items-center gap-1.5"><CameraIcon className="w-4 h-4" />{photoCount} {lang === 'sw' ? 'Picha' : 'Photos'}</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>{categoryCount} {lang === 'sw' ? 'Makundi' : 'Categories'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
