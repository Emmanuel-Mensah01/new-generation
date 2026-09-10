'use client';
import React from 'react';
import Image from 'next/image';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { type Language } from '@/lib/i18n';

interface OurStorySectionProps {
  lang: Language;
}

export default function OurStorySection({ lang }: OurStorySectionProps) {
  const stats = [
    { label: lang === 'sw' ? 'Wanafunzi' : 'Students', value: '400+', icon: '👨‍🎓' },
    { label: lang === 'sw' ? 'Walimu' : 'Teachers', value: '20+', icon: '👩‍🏫' },
    { label: lang === 'sw' ? 'Miaka ya Uzoefu' : 'Years Experience', value: '5+', icon: '🏆' },
    { label: lang === 'sw' ? 'Kuridhika kwa Wazazi' : 'Parent Satisfaction', value: '98%', icon: '⭐' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll-left">
            <div className="section-tag mb-6">
              <BookOpenIcon className="w-3.5 h-3.5" />
              {lang === 'sw' ? 'Historia Yetu' : 'Our History'}
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-school-foreground mb-6 leading-tight">
              {lang === 'sw' ? 'Shule ya Karibu Yenye Maono ya Ubora' : 'A Welcoming School With a Vision for Excellence'}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {lang === 'sw' ?'Shule ya Chekechea na Msingi ya New Generation ni jumuiya ya kujifunza inayokaribisha, iliyojitolea kutoa msingi imara wa elimu kwa watoto katika mazingira salama, ya kusaidia na ya kuvutia.' :'New Generation Day Care Nursery & Primary School is a welcoming learning community committed to providing children with a strong educational foundation in a safe, supportive and engaging environment.'}
              </p>
              <p>
                {lang === 'sw' ?'Iko Tabata Chang\'ombe, Kata ya Machimbo, Wilaya ya Ilala, Dar es Salaam. Shule inakuza watoto wenye ujuzi, nidhamu, ujasiri na uwajibikaji huku ikijenga udadisi, ubunifu na uhuru.'
                  : 'Located in Tabata Chang\'ombe, Machimbo Ward, Ilala District, Dar es Salaam. The school nurtures knowledgeable, disciplined, confident and responsible children while developing curiosity, creativity and independence.'}
              </p>
              <p>
                {lang === 'sw' ?'Shule inatumia mafunzo ya darasani, kujifunza kwa vitendo, michezo, shughuli za ziada na fursa kwa wanafunzi kuchunguza vipaji vyao vya kibinafsi.' :'The school uses classroom instruction, practical learning, sports, extracurricular activities and opportunities for pupils to explore their individual talents.'}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-4 border border-school-border shadow-sm">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-extrabold text-school-pink">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-on-scroll-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-card col-span-1 relative">
                <Image src="/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__1_-1788894589650.jpeg" alt="Students in bright classroom at New Generation School" fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden aspect-square shadow-card relative">
                  <Image src="/assets/images/ChatGPT_Image_Sep_6__2026__03_35_32_PM-1788890911576.png" alt="Learning environment at New Generation School" fill className="object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-square shadow-card relative">
                  <Image src="/assets/images/WhatsApp_Image_2026-09-08_at_7.06.03_PM-1788895054202.jpeg" alt="Students and teachers at New Generation School" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}