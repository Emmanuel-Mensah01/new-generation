'use client';
import React from 'react';
import Image from 'next/image';
import { BookOpenIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { type Language } from '@/lib/i18n';

interface AcademicsHeroProps {
  lang: Language;
}

export default function AcademicsHero({ lang }: AcademicsHeroProps) {
  return (
    <section className="relative bg-[#FFF8F0] pt-[104px] lg:pt-[120px] pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 blob-pink opacity-50" />
        <div className="absolute top-0 right-[180px] w-[280px] h-[280px] blob-yellow opacity-40" />
        <div className="absolute bottom-0 left-0 w-80 h-80 blob-green opacity-35" />
        <div className="absolute top-24 right-16 w-2 h-2 bg-school-yellow rounded-full opacity-80 animate-pulse-soft" />
        <div className="absolute bottom-16 left-20 w-2.5 h-2.5 bg-school-pink rounded-full opacity-50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-school-yellow border border-school-yellow-dark text-school-foreground px-4 py-2 rounded-full text-sm font-bold shadow-btn-yellow">
              <BookOpenIcon className="w-4 h-4" />
              {lang === 'sw' ? 'Programu za Masomo' : 'Academic Programmes'}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-school-green">
              {lang === 'sw' ? 'Elimu Bora' : 'Quality Education'}{' '}
              <span className="text-school-pink">{lang === 'sw' ? 'kwa Kila Hatua' : 'at Every Stage'}</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {lang === 'sw' ?'Kutoka Huduma ya Mchana kupitia Chekechea na hadi Msingi — safari ya elimu ya hali ya juu bila kikwazo kwa kila mtoto.' :'From Day Care through Nursery and into Primary — a seamless, high-quality educational journey for every child in our care.'}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                lang === 'sw' ? 'Huduma ya Mchana' : 'Day Care',
                lang === 'sw' ? 'Chekechea' : 'Nursery',
                lang === 'sw' ? 'Shule ya Msingi' : 'Primary',
                lang === 'sw' ? 'Mtaala wa NECTA' : 'NECTA Curriculum',
              ].map((b) => (
                <div key={b} className="flex items-center gap-1.5 bg-white border border-school-border text-school-foreground px-3 py-1.5 rounded-full text-xs font-semibold shadow-card">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-school-green" />
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-hero">
            <Image
              src="/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM-1788894592396.jpeg"
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
