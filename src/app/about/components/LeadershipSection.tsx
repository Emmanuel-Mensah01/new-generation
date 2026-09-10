'use client';
import React from 'react';
import Image from 'next/image';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { type Language } from '@/lib/i18n';

interface LeadershipSectionProps {
  lang: Language;
}

const LEADERSHIP = [
  { key: 'director', icon: '🎓', color: 'bg-school-pink text-white' },
  { key: 'manager', icon: '🏫', color: 'bg-school-yellow text-school-foreground' },
  { key: 'committee', icon: '👥', color: 'bg-white border-2 border-school-green text-school-green' },
  { key: 'bursar', icon: '💰', color: 'bg-white border-2 border-school-yellow text-school-foreground' },
  { key: 'headTeacher', icon: '📚', color: 'bg-white border-2 border-school-green text-school-green' },
  { key: 'academic', icon: '✏️', color: 'bg-white border-2 border-school-green text-school-green' },
  { key: 'disciplinary', icon: '⚖️', color: 'bg-white border-2 border-school-yellow text-school-foreground' },
  { key: 'social', icon: '🤝', color: 'bg-white border-2 border-school-green text-school-green' },
] as const;

const LEADERSHIP_TEXT: Record<string, { nameEn: string; nameSw: string; subEn: string; subSw: string }> = {
  director: { nameEn: 'Director', nameSw: 'Mkurugenzi', subEn: 'Overall school vision & strategic leadership', subSw: 'Maono ya jumla ya shule na uongozi wa kimkakati' },
  manager: { nameEn: 'School Manager', nameSw: 'Meneja wa Shule', subEn: 'Day-to-day operations & administration', subSw: 'Uendeshaji wa kila siku na usimamizi' },
  committee: { nameEn: 'Parent Committee', nameSw: 'Kamati ya Wazazi', subEn: 'Community liaison & support', subSw: 'Uhusiano na jamii na msaada' },
  bursar: { nameEn: 'Bursar', nameSw: 'Bwana Hazina', subEn: 'Financial management', subSw: 'Usimamizi wa fedha' },
  headTeacher: { nameEn: 'Head Teacher', nameSw: 'Mwalimu Mkuu', subEn: 'Academic leadership', subSw: 'Uongozi wa kitaaluma' },
  academic: { nameEn: 'Academic Teacher', nameSw: 'Mwalimu wa Taaluma', subEn: 'Curriculum & instruction', subSw: 'Mtaala na ufundishaji' },
  disciplinary: { nameEn: 'Disciplinary Teacher', nameSw: 'Mwalimu wa Nidhamu', subEn: 'Student conduct & welfare', subSw: 'Tabia na ustawi wa wanafunzi' },
  social: { nameEn: 'Social Teacher', nameSw: 'Mwalimu wa Jamii', subEn: 'Counselling & social development', subSw: 'Ushauri na maendeleo ya kijamii' },
};

export default function LeadershipSection({ lang }: LeadershipSectionProps) {
  const topRow = LEADERSHIP.filter((l) => l.key === 'director' || l.key === 'manager');
  const midRow = LEADERSHIP.filter((l) => ['committee', 'bursar', 'headTeacher'].includes(l.key));
  const bottomRow = LEADERSHIP.filter((l) => ['academic', 'disciplinary', 'social'].includes(l.key));

  return (
    <section id="leadership" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14 animate-on-scroll">
          <div className="section-tag mx-auto">
            <UserGroupIcon className="w-3.5 h-3.5" />
            {lang === 'sw' ? 'Uongozi' : 'Leadership'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-school-green">
            {lang === 'sw' ? 'Muundo wa Uongozi wa Shule' : 'School Leadership Structure'}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {lang === 'sw'
              ? 'Timu yetu ya uongozi iliyojitolea inahakikisha viwango vya juu zaidi vya elimu na usimamizi wa shule.'
              : 'Our dedicated leadership team ensures the highest standards of education and school management.'}
          </p>
        </div>

        {/* Top row: Founder, Director, School Manager */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
          {/* Founder — photo card */}
          <div className="leadership-card flex-1 max-w-xs mx-auto sm:mx-0 animate-on-scroll">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-4 shadow-card">
              <Image
                src="/assets/images/founder.png"
                alt={lang === 'sw' ? 'Mwanzilishi wa New Generation' : 'Founder of New Generation School'}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-bold text-school-foreground">
              {lang === 'sw' ? 'Mwanzilishi' : 'Founder'}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {lang === 'sw' ? 'Maono na msingi wa shule' : 'School vision & founding leadership'}
            </p>
          </div>

          {topRow.map((leader) => {
            const text = LEADERSHIP_TEXT[leader.key];
            return (
              <div key={leader.key} className="leadership-card flex-1 max-w-xs mx-auto sm:mx-0 animate-on-scroll">
                <div className={`w-16 h-16 rounded-2xl ${leader.color} flex items-center justify-center text-2xl mx-auto mb-4`}>
                  {leader.icon}
                </div>
                <p className="font-bold text-school-foreground">{lang === 'sw' ? text.nameSw : text.nameEn}</p>
                <p className="text-xs text-gray-500 mt-1">{lang === 'sw' ? text.subSw : text.subEn}</p>
              </div>
            );
          })}
        </div>

        {/* Mid row: Parent Committee, Bursar, Head Teacher */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
          {midRow.map((leader, i) => {
            const text = LEADERSHIP_TEXT[leader.key];
            return (
              <div key={leader.key} className="leadership-card animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className={`w-12 h-12 rounded-xl ${leader.color} flex items-center justify-center text-xl mx-auto mb-3`}>
                  {leader.icon}
                </div>
                <p className="font-bold text-sm text-school-foreground">{lang === 'sw' ? text.nameSw : text.nameEn}</p>
                <p className="text-xs text-gray-500 mt-1">{lang === 'sw' ? text.subSw : text.subEn}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom row: Academic, Disciplinary, Social Teacher */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {bottomRow.map((leader, i) => {
            const text = LEADERSHIP_TEXT[leader.key];
            return (
              <div key={leader.key} className="leadership-card animate-on-scroll" style={{ transitionDelay: `${(i + 3) * 100}ms` }}>
                <div className={`w-12 h-12 rounded-xl ${leader.color} flex items-center justify-center text-xl mx-auto mb-3`}>
                  {leader.icon}
                </div>
                <p className="font-bold text-sm text-school-foreground">{lang === 'sw' ? text.nameSw : text.nameEn}</p>
                <p className="text-xs text-gray-500 mt-1">{lang === 'sw' ? text.subSw : text.subEn}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}