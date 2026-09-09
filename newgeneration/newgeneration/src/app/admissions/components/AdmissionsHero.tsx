'use client';
import React from 'react';
import Image from 'next/image';
import { SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { getTranslations, type Language } from '@/lib/i18n';

// Image path — update this to change the admissions hero image
const IMG_CLASSROOM1 = '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__1_-1788894589650.jpeg';

interface AdmissionsHeroProps {
  lang: Language;
}

export default function AdmissionsHero({ lang }: AdmissionsHeroProps) {
  const t = getTranslations(lang);

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
              <SparklesIcon className="w-4 h-4" />
              {t.admissions.tag}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">{t.admissions.pageTitle}</h1>
            <p className="text-white/80 text-lg leading-relaxed">{t.admissions.pageSubtitle}</p>
            <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4 border border-white/20">
              <CheckCircleIcon className="w-5 h-5 text-school-yellow flex-shrink-0" />
              <p className="text-white font-semibold text-sm">{t.admissions.feeLabel}</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:+255717437788" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                +255 717 437788
              </a>
              <span className="text-white/30">|</span>
              <a href="tel:+255767539963" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                +255 767 539 963
              </a>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-hero">
            <Image
              src={IMG_CLASSROOM1}
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
