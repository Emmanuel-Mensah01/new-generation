'use client';
import React from 'react';
import Image from 'next/image';
import { BookOpenIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { type Language } from '@/lib/i18n';

// Image path — update this to change the academics hero image
const IMG_CLASSROOM3 = '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM-1788894592396.jpeg';

interface AcademicsHeroProps {
  lang: Language;
}

export default function AcademicsHero({ lang }: AcademicsHeroProps) {
  return (
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
              src={IMG_CLASSROOM3}
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
  );
}
