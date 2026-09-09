'use client';
import React from 'react';
import Image from 'next/image';
import { BeakerIcon, ShieldCheckIcon, BookOpenIcon, CalculatorIcon, GlobeAltIcon, MusicalNoteIcon, PaintBrushIcon, ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { getTranslations, type Language } from '@/lib/i18n';

// Image path — update this to change the science lab section image
const IMG_CLASSROOM2 = '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788894592616.jpeg';

interface ScienceLabSectionProps {
  lang: Language;
}

export default function ScienceLabSection({ lang }: ScienceLabSectionProps) {
  const t = getTranslations(lang);

  const subjects = [
    { icon: BookOpenIcon, label: lang === 'sw' ? 'Kiingereza' : 'English', color: 'bg-school-green' },
    { icon: CalculatorIcon, label: lang === 'sw' ? 'Hisabati' : 'Mathematics', color: 'bg-school-yellow' },
    { icon: BeakerIcon, label: lang === 'sw' ? 'Sayansi' : 'Science', color: 'bg-school-green' },
    { icon: GlobeAltIcon, label: lang === 'sw' ? 'Maarifa ya Jamii' : 'Social Studies', color: 'bg-school-yellow' },
    { icon: MusicalNoteIcon, label: 'Kiswahili', color: 'bg-school-green' },
    { icon: PaintBrushIcon, label: lang === 'sw' ? 'Sanaa' : 'Creative Arts', color: 'bg-school-yellow' },
  ];

  return (
    <>
      {/* Science Lab Highlight */}
      <section className="py-20 bg-school-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll-right order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-card">
                <Image
                  src={IMG_CLASSROOM2}
                  alt="Modern science laboratory supporting NECTA curriculum at New Generation School"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-school-yellow text-school-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                  {lang === 'sw' ? 'Maabara ya Sayansi' : 'Science Lab'}
                </div>
              </div>
            </div>
            <div className="space-y-6 animate-on-scroll-left order-1 lg:order-2">
              <div className="section-tag">
                <BeakerIcon className="w-3.5 h-3.5" />
                {lang === 'sw' ? 'Kipengele Maalum' : 'Special Feature'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-school-foreground leading-tight">
                {lang === 'sw' ? 'Sayansi ya Vitendo' : 'Hands-On Science'}
              </h2>
              <p className="text-school-muted leading-relaxed">
                {lang === 'sw' ?'Wanafunzi wetu wa Shule ya Msingi wana fursa ya kufanya majaribio ya kweli katika maabara yetu ya kisasa.' :'Our Primary students have the opportunity to conduct real experiments in our modern science laboratory. This supports a deeper understanding of science subjects and nurtures a love of discovery.'}
              </p>
              <div className="bg-school-green/5 border border-school-green/20 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheckIcon className="w-5 h-5 text-school-green flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm text-school-foreground mb-1">
                      {lang === 'sw' ? 'Sawa na Mtaala wa NECTA' : 'NECTA Curriculum Aligned'}
                    </p>
                    <p className="text-xs text-school-muted">
                      {lang === 'sw' ?'Maabara yetu inasaidia moja kwa moja masomo ya sayansi ya mtaala wa NECTA.' :'Our laboratory directly supports the NECTA science curriculum, helping students excel in their examinations.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14 animate-on-scroll">
            <div className="section-tag mx-auto">
              <BookOpenIcon className="w-3.5 h-3.5" />
              {lang === 'sw' ? 'Mtaala Wetu' : 'Our Curriculum'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-school-foreground">
              {lang === 'sw' ? 'Masomo ya Shule ya Msingi' : 'Primary School Subjects'}
            </h2>
            <p className="text-school-muted max-w-2xl mx-auto">
              {lang === 'sw' ?'Tunafuata mtaala wa NECTA wa Tanzania, ukitoa mafunzo ya kina ya kitaaluma pamoja na ukuaji wa tabia.' :'We follow the Tanzania NECTA curriculum, providing rigorous academic instruction alongside character development.'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {subjects.map((subj, i) => (
              <div key={i} className="bg-school-off-white rounded-2xl border border-school-border p-5 text-center hover:shadow-card transition-all animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className={`w-12 h-12 rounded-xl ${subj.color} flex items-center justify-center mx-auto mb-3`}>
                  <subj.icon className={`w-6 h-6 ${subj.color === 'bg-school-yellow' ? 'text-school-foreground' : 'text-white'}`} />
                </div>
                <p className="font-bold text-sm text-school-foreground">{subj.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'sw' ? 'Anza Safari ya Elimu ya Mtoto Wako' : "Start Your Child's Educational Journey"}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {lang === 'sw' ?'Jiunge na familia zaidi ya 200 zinazomwamini New Generation School kwa elimu bora na mazingira salama.' :'Join over 200 families who trust New Generation School for quality education and a safe, nurturing environment.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions" className="btn-accent">
              {t.nav.applyNow}
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <a href="tel:+255717437788" className="btn-outline-white flex items-center gap-2">
              <PhoneIcon className="w-4 h-4" />
              +255 717 437788
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
