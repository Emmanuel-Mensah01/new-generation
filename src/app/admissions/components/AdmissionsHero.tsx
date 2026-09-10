'use client';
import React from 'react';
import Image from 'next/image';
import { SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { getTranslations, type Language } from '@/lib/i18n';

interface AdmissionsHeroProps {
  lang: Language;
}

export default function AdmissionsHero({ lang }: AdmissionsHeroProps) {
  const t = getTranslations(lang);

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
              <SparklesIcon className="w-4 h-4" />
              {t.admissions.tag}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-school-green">{t.admissions.pageTitle}</h1>
            <p className="text-gray-600 text-lg leading-relaxed">{t.admissions.pageSubtitle}</p>
            <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-school-border shadow-card">
              <CheckCircleIcon className="w-5 h-5 text-school-green flex-shrink-0" />
              <p className="text-school-foreground font-semibold text-sm">{t.admissions.feeLabel}</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:+255717437788" className="flex items-center gap-2 text-gray-500 hover:text-school-pink transition-colors text-sm font-medium">
                +255 717 437788
              </a>
              <span className="text-gray-300">|</span>
              <a href="tel:+255767539963" className="flex items-center gap-2 text-gray-500 hover:text-school-pink transition-colors text-sm font-medium">
                +255 767 539 963
              </a>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-hero">
            <Image
              src="/assets/images/home_image-1788940686115.png"
              alt="Students in green uniform standing by yellow school van at New Generation School"
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
