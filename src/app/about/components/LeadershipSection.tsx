'use client';
import React from 'react';
import Image from 'next/image';
import { UserGroupIcon, AcademicCapIcon, BookOpenIcon, HeartIcon } from '@heroicons/react/24/outline';
import { type Language } from '@/lib/i18n';

interface LeadershipSectionProps {
  lang: Language;
}

const TEAM = [
  { key: 'headteacher', icon: AcademicCapIcon, nameEn: 'Head Teacher Name', nameSw: 'Jina la Mwalimu Mkuu', roleEn: 'Head Teacher', roleSw: 'Mwalimu Mkuu' },
  { key: 'deputy', icon: BookOpenIcon, nameEn: 'Deputy Name', nameSw: 'Jina la Naibu', roleEn: 'Deputy Head Teacher', roleSw: 'Naibu Mwalimu Mkuu' },
  { key: 'welfare', icon: HeartIcon, nameEn: 'Welfare Officer', nameSw: 'Afisa Ustawi', roleEn: 'Student Welfare', roleSw: 'Ustawi wa Wanafunzi' },
];

export default function LeadershipSection({ lang }: LeadershipSectionProps) {
  return (
    <section id="leadership" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14 animate-on-scroll">
          <div className="section-tag mx-auto">
            <UserGroupIcon className="w-3.5 h-3.5" />
            {lang === 'sw' ? 'Uongozi Wetu' : 'Our Leadership'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-school-green">
            {lang === 'sw' ? 'Watu Nyuma ya Maono' : 'The People Behind the Vision'}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {lang === 'sw'
              ? 'Timu inayoongoza New Generation kwa uzoefu, maono na moyo.'
              : 'The team guiding New Generation with experience, vision and heart.'}
          </p>
        </div>

        {/* Founder — featured card with photo */}
        <div className="max-w-xs mx-auto mb-12 animate-on-scroll">
          <div className="leadership-card text-center">
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden mx-auto mb-4 shadow-card">
              <Image
                src="/assets/images/founder.png"
                alt={lang === 'sw' ? 'Mwanzilishi wa New Generation' : 'Founder of New Generation School'}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-bold text-school-foreground">
              {lang === 'sw' ? 'Jina la Mwanzilishi' : 'Founder Name'}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {lang === 'sw' ? 'Mwanzilishi na Mkurugenzi' : 'Founder & Director'}
            </p>
          </div>
        </div>

        {/* Rest of the leadership team */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {TEAM.map((leader, i) => (
            <div key={leader.key} className="leadership-card animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-school-pink/10 flex items-center justify-center text-xl mx-auto mb-3">
                <leader.icon className="w-6 h-6 text-school-pink" />
              </div>
              <p className="font-bold text-sm text-school-foreground">
                {lang === 'sw' ? leader.nameSw : leader.nameEn}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {lang === 'sw' ? leader.roleSw : leader.roleEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}