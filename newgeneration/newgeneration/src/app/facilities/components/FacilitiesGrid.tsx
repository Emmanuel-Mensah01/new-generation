'use client';
import React from 'react';
import Image from 'next/image';
import {
  BuildingLibraryIcon, BeakerIcon, BookOpenIcon, TruckIcon, SparklesIcon, ShieldCheckIcon, CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { type Language } from '@/lib/i18n';

// Image paths — update these to change individual facility images
const IMG_CLASSROOM1 = '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__1_-1788894589650.jpeg';
const IMG_CLASSROOM2 = '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788894592616.jpeg';
const IMG_CLASSROOM3 = '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM-1788894592396.jpeg';
const IMG_CAMPUS1 = '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788895053341.jpeg';
const IMG_SCHOOL_BUS = '/assets/images/new-gen_schoo_l_bus-1788940178107.png';
const IMG_BUILDING = '/assets/images/WhatsApp_Image_2026-09-08_at_7.05.57_PM-1788894591347.jpeg';

interface FacilitiesGridProps {
  lang: Language;
}

export default function FacilitiesGrid({ lang }: FacilitiesGridProps) {
  const facilities = [
    {
      icon: BuildingLibraryIcon,
      title: lang === 'sw' ? 'Madarasa ya Kisasa' : 'Modern Classrooms',
      desc: lang === 'sw' ? 'Madarasa yetu yenye mwanga mzuri yamepambwa kwa vifaa vya kielimu, mabango ya rangi na mazingira ya kujifunza yanayovutia watoto.' : 'Our bright, well-ventilated classrooms are equipped with educational materials, colourful displays and a stimulating learning environment for every child.',
      image: IMG_CLASSROOM1,
      alt: 'Bright classroom with students in white and yellow uniforms at New Generation School',
      badge: lang === 'sw' ? 'Darasa la Kisasa' : 'Modern Learning',
      features: [lang === 'sw' ? 'Mwanga mzuri' : 'Natural lighting', lang === 'sw' ? 'Vifaa vya kisasa' : 'Modern equipment', lang === 'sw' ? 'Mazingira ya kuvutia' : 'Stimulating displays'],
    },
    {
      icon: BeakerIcon,
      title: lang === 'sw' ? 'Maabara ya Sayansi' : 'Science Laboratory',
      desc: lang === 'sw' ? 'Maabara yetu ya kisasa ya sayansi inawapa wanafunzi fursa ya kufanya majaribio ya vitendo, kukuza udadisi na kupenda sayansi tangu wakiwa wadogo.' : 'Our modern science laboratory gives students the opportunity to conduct hands-on experiments, nurturing curiosity and a love of science from an early age.',
      image: IMG_CLASSROOM2,
      alt: 'Modern science laboratory at New Generation School with equipment and bright lighting',
      badge: lang === 'sw' ? 'Maabara ya Kisasa' : 'Hands-On Science',
      features: [lang === 'sw' ? 'Vifaa vya majaribio' : 'Lab equipment', lang === 'sw' ? 'Walimu wabobezi' : 'Expert teachers', lang === 'sw' ? 'Mtaala wa NECTA' : 'NECTA aligned'],
    },
    {
      icon: BookOpenIcon,
      title: lang === 'sw' ? 'Maktaba & Rasilimali' : 'Library & Resources',
      desc: lang === 'sw' ? 'Maktaba yetu ina vitabu mbalimbali vya kielimu, rasilimali za kujifunza na mazingira ya utulivu yanayohimiza upendo wa kusoma.' : 'Our library holds a wide range of educational books, learning resources and a quiet environment that encourages a love of reading and independent study.',
      image: IMG_CLASSROOM3,
      alt: 'Library and reading area with educational books and resources at New Generation School',
      badge: lang === 'sw' ? 'Vitabu & Rasilimali' : 'Books & Resources',
      features: [lang === 'sw' ? 'Vitabu vingi' : 'Wide book range', lang === 'sw' ? 'Mazingira ya utulivu' : 'Quiet study space', lang === 'sw' ? 'Rasilimali za kujifunza' : 'Learning resources'],
    },
    {
      icon: SparklesIcon,
      title: lang === 'sw' ? 'Eneo la Michezo' : 'Sports & Play Area',
      desc: lang === 'sw' ? 'Eneo letu la michezo na kucheza linatoa nafasi kwa wanafunzi kukua kimwili, kujifunza kufanya kazi kwa pamoja na kufurahia wakati wa mapumziko.' : 'Our sports and play area provides space for physical development, teamwork and enjoyment during break times, supporting the overall wellbeing of every child.',
      image: IMG_CAMPUS1,
      alt: 'Students enjoying outdoor play and sports at New Generation School',
      badge: lang === 'sw' ? 'Michezo & Burudani' : 'Active & Healthy',
      features: [lang === 'sw' ? 'Michezo ya nje' : 'Outdoor sports', lang === 'sw' ? 'Kazi ya pamoja' : 'Team activities', lang === 'sw' ? 'Ustawi wa kimwili' : 'Physical wellbeing'],
    },
    {
      icon: TruckIcon,
      title: lang === 'sw' ? 'Usafiri wa Shule' : 'School Transport',
      desc: lang === 'sw' ? 'Tunao usafiri wa shule salama na wa kuaminika kwa wanafunzi wanaohitaji. Gari letu la njano la shule linawahakikishia wazazi amani ya akili.' : 'We provide safe and reliable school transport for students who need it. Our distinctive yellow school van gives parents complete peace of mind.',
      image: IMG_SCHOOL_BUS,
      alt: 'New Generation School yellow school bus transport van',
      badge: lang === 'sw' ? 'Salama & Kuaminika' : 'Safe & Reliable',
      features: [lang === 'sw' ? 'Gari la shule' : 'School van', lang === 'sw' ? 'Salama na kuaminika' : 'Safe & reliable', lang === 'sw' ? 'Amani ya wazazi' : 'Parent peace of mind'],
    },
    {
      icon: ShieldCheckIcon,
      title: lang === 'sw' ? 'Mazingira Salama' : 'Safe & Secure Campus',
      desc: lang === 'sw' ? 'Usalama wa watoto wetu ni kipaumbele chetu. Kampasi yetu ina uzio imara, milango inayodhibitiwa na uangalizi wa kila wakati.' : 'The safety of our children is our top priority. Our campus features secure fencing, controlled entry points and constant supervision throughout the school day.',
      image: IMG_BUILDING,
      alt: 'Secure and welcoming New Generation School campus with fencing and garden',
      badge: lang === 'sw' ? 'Usalama wa Kwanza' : 'Safety First',
      features: [lang === 'sw' ? 'Uzio imara' : 'Secure fencing', lang === 'sw' ? 'Milango inayodhibitiwa' : 'Controlled entry', lang === 'sw' ? 'Uangalizi wa kila wakati' : 'Constant supervision'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <div className="section-tag mx-auto mb-4">
            <BuildingLibraryIcon className="w-3.5 h-3.5" />
            {lang === 'sw' ? 'Vifaa Vyetu' : 'Our Facilities'}
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-school-foreground">
            {lang === 'sw' ? 'Vifaa Vilivyoundwa kwa Kujifunza' : 'Spaces Built for Learning'}
          </h2>
          <p className="text-school-muted mt-3 max-w-xl mx-auto">
            {lang === 'sw' ? 'Kila eneo la kampasi yetu limeundwa kwa makini kusaidia ukuaji wa kila mtoto.' : 'Every area of our campus is carefully designed to support the growth of every child.'}
          </p>
        </div>

        <div className="space-y-16">
          {facilities.map((facility, i) => (
            <div key={facility.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`animate-on-scroll-${i % 2 === 0 ? 'left' : 'right'} space-y-5 ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="inline-flex items-center gap-2 bg-school-muted rounded-full px-3 py-1.5 text-xs font-bold text-school-green">
                  <facility.icon className="w-3.5 h-3.5" />
                  {facility.badge}
                </div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-school-foreground leading-tight">{facility.title}</h3>
                <p className="text-school-muted leading-relaxed">{facility.desc}</p>
                <div className="grid grid-cols-3 gap-3">
                  {facility.features.map((feat) => (
                    <div key={feat} className="bg-school-off-white rounded-xl p-3 border border-school-border text-center">
                      <CheckCircleIcon className="w-4 h-4 text-school-green mx-auto mb-1.5" />
                      <p className="text-xs font-semibold text-school-foreground leading-tight">{feat}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`animate-on-scroll-${i % 2 === 0 ? 'right' : 'left'} ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="facility-card rounded-3xl overflow-hidden aspect-[4/3] shadow-card relative">
                  <Image src={facility.image} alt={facility.alt} fill className="object-cover" />
                  <div className="overlay" />
                  <div className="absolute top-4 left-4 bg-school-yellow text-school-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                    {facility.badge}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
