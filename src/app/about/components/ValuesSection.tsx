'use client';
import React from 'react';
import {
  AcademicCapIcon, ShieldCheckIcon, HeartIcon, LightBulbIcon, UserGroupIcon, GlobeAltIcon, StarIcon,
} from '@heroicons/react/24/outline';
import { type Language } from '@/lib/i18n';

interface ValuesSectionProps {
  lang: Language;
}

const VALUES = [
  { icon: AcademicCapIcon, en: 'Academic Excellence', sw: 'Ubora wa Kitaaluma', desc_en: 'We hold every learner to the highest academic standards.', desc_sw: 'Tunashikilia kila mwanafunzi kwa viwango vya juu zaidi vya kitaaluma.', color: 'bg-school-green', textColor: 'text-white' },
  { icon: ShieldCheckIcon, en: 'Discipline & Respect', sw: 'Nidhamu na Heshima', desc_en: 'We build character through consistent values and mutual respect.', desc_sw: 'Tunajenga tabia kupitia maadili thabiti na heshima ya pande zote.', color: 'bg-school-yellow', textColor: 'text-school-foreground' },
  { icon: HeartIcon, en: 'Inclusivity', sw: 'Ujumuishaji', desc_en: 'Every child, regardless of background, is welcomed and valued.', desc_sw: 'Kila mtoto, bila kujali asili yake, anakaribisha na kuthaminiwa.', color: 'bg-white border border-school-border', textColor: 'text-school-foreground' },
  { icon: LightBulbIcon, en: 'Creativity & Curiosity', sw: 'Ubunifu na Udadisi', desc_en: 'We nurture inquisitive minds and encourage creative thinking.', desc_sw: 'Tunalisha akili za udadisi na kuhimiza fikira za ubunifu.', color: 'bg-white border border-school-border', textColor: 'text-school-foreground' },
  { icon: UserGroupIcon, en: 'Community Partnership', sw: 'Ushirikiano wa Jamii', desc_en: 'Parents, teachers and pupils work together as one family.', desc_sw: 'Wazazi, walimu na wanafunzi wanafanya kazi pamoja kama familia moja.', color: 'bg-school-green/10 border border-school-green/20', textColor: 'text-school-foreground' },
  { icon: GlobeAltIcon, en: 'Global Citizenship', sw: 'Uraia wa Kimataifa', desc_en: 'We prepare children to thrive in a connected, diverse world.', desc_sw: 'Tunaandaa watoto kustawi katika ulimwengu uliounganishwa na tofauti.', color: 'bg-school-green/10 border border-school-green/20', textColor: 'text-school-foreground' },
];

export default function ValuesSection({ lang }: ValuesSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <div className="section-tag mx-auto mb-4">
            <StarIcon className="w-3.5 h-3.5" />
            {lang === 'sw' ? 'Maadili Yetu' : 'Our Values'}
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-school-foreground">
            {lang === 'sw' ? 'Tunachokiamini' : 'What We Stand For'}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((val, i) => (
            <div key={i} className={`rounded-3xl p-7 animate-on-scroll ${val.color}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${val.color.includes('green') && !val.color.includes('/') ? 'bg-white/20' : val.color.includes('yellow') ? 'bg-school-foreground/10' : 'bg-school-green/10'}`}>
                <val.icon className={`w-6 h-6 ${val.color.includes('green') && !val.color.includes('/') ? 'text-white' : 'text-school-green'}`} />
              </div>
              <h3 className={`text-lg font-extrabold mb-2 ${val.textColor}`}>{lang === 'sw' ? val.sw : val.en}</h3>
              <p className={`text-sm leading-relaxed ${val.textColor === 'text-white' ? 'text-white/80' : 'text-school-muted'}`}>
                {lang === 'sw' ? val.desc_sw : val.desc_en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
