'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { CameraIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { type Language } from '@/lib/i18n';

interface GalleryItem {
  src: string;
  alt: string;
  label_en: string;
  label_sw: string;
  category_en: string;
  category_sw: string;
  span?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  // ── CAMPUS ──────────────────────────────────────────────────────────────────
  {
    src: '/assets/images/ChatGPT_Image_Sep_9__2026__08_21_56_AM-1788943777277.png',
    alt: 'New Generation School main building with Tanzanian flag and colorful garden',
    label_en: 'Our School Building', label_sw: 'Jengo Letu la Shule',
    category_en: 'Campus', category_sw: 'Kampasi', span: 'col-span-2 row-span-2',
  },
  {
    src: '/assets/images/campus.png',
    alt: 'New Generation School campus grounds with students and colorful buildings',
    label_en: 'Campus Life', label_sw: 'Maisha ya Kampasi',
    category_en: 'Campus', category_sw: 'Kampasi', span: 'col-span-2',
  },
  {
    src: '/assets/images/assem_hall-1789022263231.png',
    alt: 'School assembly hall with red corridor and students gathered',
    label_en: 'Assembly Hall', label_sw: 'Ukumbi wa Mkutano',
    category_en: 'Campus', category_sw: 'Kampasi',
  },
  {
    src: '/assets/images/hall2-1789022264017.png',
    alt: 'Colorful school building compound with bright exterior walls',
    label_en: 'Beautiful Campus', label_sw: 'Eneo la Shule',
    category_en: 'Campus', category_sw: 'Kampasi',
  },
  {
    src: '/assets/images/home_image-1788940686115.png',
    alt: 'New Generation School front view with students in uniform',
    label_en: 'School Entrance', label_sw: 'Mlango wa Shule',
    category_en: 'Campus', category_sw: 'Kampasi',
  },
  {
    src: '/assets/images/new-gen_schoo_l_bus-1788940178107.png',
    alt: 'New Generation School yellow bus parked outside school compound',
    label_en: 'School Transport', label_sw: 'Usafiri wa Shule',
    category_en: 'Campus', category_sw: 'Kampasi',
  },

  // ── CLASSROOMS ───────────────────────────────────────────────────────────────
  {
    src: '/assets/images/mor classroom.png',
    alt: 'Bright classroom with students in white and yellow uniforms at New Generation School',
    label_en: 'Modern Classrooms', label_sw: 'Madarasa ya Kisasa',
    category_en: 'Classrooms', category_sw: 'Madarasa', span: 'col-span-2',
  },
  {
    src: '/assets/images/ChatGPT_Image_Sep_10__2026__06_44_57_AM-1789022980560.png',
    alt: 'Students in school uniform seated at desks actively studying and learning in classroom',
    label_en: 'Active Studies', label_sw: 'Kujifunza kwa Vitendo',
    category_en: 'Classrooms', category_sw: 'Madarasa',
  },
  {
    src: '/assets/images/inaction.png',
    alt: 'Students engaged in group learning activity inside a well-lit classroom',
    label_en: 'Student Learning', label_sw: 'Kujifunza kwa Pamoja',
    category_en: 'Classrooms', category_sw: 'Madarasa',
  },
  {
    src: '/assets/images/ChatGPT_Image_Sep_9__2026__08_15_30_AM-1788941762942.png',
    alt: 'Teacher leading an interactive lesson with students in a colourful classroom',
    label_en: 'Birthday Celebrations', label_sw: 'Masomo ya Maingiliano',
    category_en: 'Classrooms', category_sw: 'Madarasa',
  },
  {
    src: '/assets/images/lesson.png',
    alt: 'Primary school students writing in exercise books during a class session',
    label_en: 'Interactive Session', label_sw: 'Kipindi cha Darasa',
    category_en: 'Classrooms', category_sw: 'Madarasa',
  },

  // ── FACILITIES ───────────────────────────────────────────────────────────────
  {
    src: '/assets/images/sch_lab-1789024389935.png',
    alt: 'Science laboratory with equipment for student experiments at New Generation School',
    label_en: 'Science Laboratory', label_sw: 'Maabara ya Sayansi',
    category_en: 'Facilities', category_sw: 'Vifaa', span: 'col-span-2',
  },
  {
    src: '/assets/images/hall2-1789022264017.png',
    alt: 'New Generation School well-maintained facilities and learning environment',
    label_en: 'Clean Environment', label_sw: 'Mazingira Yetu',
    category_en: 'Facilities', category_sw: 'Vifaa',
  },
  {
    src: '/assets/images/ChatGPT_Image_Sep_10__2026__07_17_53_AM-1789024697690.png',
    alt: 'School library with bookshelves and reading area for students',
    label_en: 'School Library', label_sw: 'Maktaba ya Shule',
    category_en: 'Facilities', category_sw: 'Vifaa',
  },
  {
    src: '/assets/images/sports-1789024397944.png',
    alt: 'School sports ground and outdoor play area for students',
    label_en: 'Sports Ground', label_sw: 'Uwanja wa Michezo',
    category_en: 'Facilities', category_sw: 'Vifaa',
  },
  {
    src: '/assets/images/it.png',
    alt: 'School computer lab with modern computers for student use',
    label_en: 'Computer Lab', label_sw: 'Maabara ya Kompyuta',
    category_en: 'Facilities', category_sw: 'Vifaa',
  },
 

  // ── STUDENTS ─────────────────────────────────────────────────────────────────
  {
    src: '/assets/images/campus.png',
    alt: 'New Generation School students engaged in school activities and learning',
    label_en: 'Students time', label_sw: 'Shughuli za Shule',
    category_en: 'Students', category_sw: 'Wanafunzi', span: 'col-span-2',
  },
  {
    src: '/assets/images/ChatGPT_Image_Sep_10__2026__06_59_32_AM-1789023678596.png',
    alt: 'Students in green sweater uniform standing together at New Generation School',
    label_en: 'Happy Students', label_sw: 'Wanafunzi Wetu',
    category_en: 'Students', category_sw: 'Wanafunzi',
  },
  {
    src: '/assets/images/grad_boys-1789020217320.png',
    alt: 'Graduating students in caps and gowns celebrating their achievement',
    label_en: 'Graduation Day', label_sw: 'Siku ya Kuhitimu',
    category_en: 'Students', category_sw: 'Wanafunzi',
  },
  {
    src: '/assets/images/grad_boys__2_-1789020217703.png',
    alt: 'Students in graduation attire posing proudly after ceremony',
    label_en: 'Proud Graduates', label_sw: 'Wahitimu Wanaojivunia',
    category_en: 'Students', category_sw: 'Wanafunzi',
  },
  {
    src: '/assets/images/ChatGPT_Image_Sep_10__2026__06_55_11_AM-1789023677412.png',
    alt: 'Young students in uniform participating in a school event',
    label_en: 'Student Events', label_sw: 'Matukio ya Wanafunzi',
    category_en: 'Students', category_sw: 'Wanafunzi',
  },
 

  // ── TEACHERS ─────────────────────────────────────────────────────────────────
  
  {
    src: '/assets/images/ChatGPT_Image_Sep_10__2026__07_09_11_AM-1789024194623.png',
    alt: 'Qualified teaching staff at New Generation School',
    label_en: 'Our Teaching Staff', label_sw: 'Wafanyakazi Wetu wa Kufundisha',
    category_en: 'Teachers', category_sw: 'Walimu',
  },
];

interface GalleryGridProps {
  lang: Language;
  activeCategory: number;
}

export { GALLERY_ITEMS };

export default function GalleryGrid({ lang, activeCategory }: GalleryGridProps) {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const categories_en = ['All', 'Campus', 'Classrooms', 'Facilities', 'Students', 'Teachers'];
  const categories_sw = ['Zote', 'Kampasi', 'Madarasa', 'Vifaa', 'Wanafunzi', 'Walimu'];

  const filtered = activeCategory === 0
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) =>
        lang === 'sw' ? item.category_sw === categories_sw[activeCategory] : item.category_en === categories_en[activeCategory]
      );

  return (
    <>
      <section className="py-12 bg-school-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[220px]">
            {filtered.map((item, i) => (
              <div key={`${item.src}-${i}`}
                className={`campus-card cursor-pointer ${item.span || ''}`}
                style={{ transitionDelay: `${(i % 8) * 60}ms` }}
                onClick={() => setLightbox(item)}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
                <div className="overlay" />
                <div className="info">
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">{lang === 'sw' ? item.label_sw : item.label_en}</p>
                    <p className="text-white/60 text-xs mt-0.5">{lang === 'sw' ? item.category_sw : item.category_en}</p>
                  </div>
                  <div className="expand-btn">
                    <CameraIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-school-muted">
              <CameraIcon className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="font-semibold">{lang === 'sw' ? 'Hakuna picha katika kundi hili' : 'No photos in this category'}</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-school-yellow transition-colors" onClick={() => setLightbox(null)}>
            <XCircleIcon className="w-8 h-8" />
          </button>
          <div className="relative max-w-4xl w-full aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox.src} alt={lightbox.alt} fill className="object-contain" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white font-bold">{lang === 'sw' ? lightbox.label_sw : lightbox.label_en}</p>
              <p className="text-white/60 text-sm">{lang === 'sw' ? lightbox.category_sw : lightbox.category_en}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
