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
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.05.57_PM-1788894591347.jpeg', alt: 'New Generation School main building with Tanzanian flag and colorful garden', label_en: 'Our School Building', label_sw: 'Jengo Letu la Shule', category_en: 'Campus', category_sw: 'Kampasi', span: 'col-span-2 row-span-2' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__1_-1788894589650.jpeg', alt: 'Bright classroom with students in white and yellow uniforms at New Generation School', label_en: 'Modern Classrooms', label_sw: 'Madarasa ya Kisasa', category_en: 'Classrooms', category_sw: 'Madarasa' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788894592616.jpeg', alt: 'Science laboratory with equipment for student experiments at New Generation School', label_en: 'Science Laboratory', label_sw: 'Maabara ya Sayansi', category_en: 'Facilities', category_sw: 'Vifaa' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM-1788894592396.jpeg', alt: 'Classroom with chalkboard showing lessons and colorful educational displays', label_en: 'Learning in Action', label_sw: 'Kujifunza kwa Vitendo', category_en: 'Classrooms', category_sw: 'Madarasa' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788895053341.jpeg', alt: 'New Generation School real photo of school campus and students', label_en: 'Campus Life', label_sw: 'Maisha ya Kampasi', category_en: 'Campus', category_sw: 'Kampasi', span: 'col-span-2' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM-1788895052060.jpeg', alt: 'New Generation School real photo of school activities and learning', label_en: 'School Activities', label_sw: 'Shughuli za Shule', category_en: 'Students', category_sw: 'Wanafunzi' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.03_PM-1788895054202.jpeg', alt: 'New Generation School real photo of students and teachers in classroom', label_en: 'Students & Teachers', label_sw: 'Wanafunzi na Walimu', category_en: 'Teachers', category_sw: 'Walimu' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.04_PM-1788895054747.jpeg', alt: 'New Generation School real photo of school environment and facilities', label_en: 'Our Environment', label_sw: 'Mazingira Yetu', category_en: 'Facilities', category_sw: 'Vifaa' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__1_-1788894589650.jpeg', alt: 'Students seated at desks with educational posters on walls in bright classroom', label_en: 'Engaged Learning', label_sw: 'Kujifunza kwa Makini', category_en: 'Classrooms', category_sw: 'Madarasa' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788894592616.jpeg', alt: 'Colorful classroom with alphabet, numbers and shapes displays for young learners', label_en: 'Vibrant Environment', label_sw: 'Mazingira ya Uchangamfu', category_en: 'Campus', category_sw: 'Kampasi' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM-1788894592396.jpeg', alt: 'Teacher with students in classroom with educational posters at New Generation School', label_en: 'Dedicated Teachers', label_sw: 'Walimu Waliojitoa', category_en: 'Teachers', category_sw: 'Walimu' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM-1788895052060.jpeg', alt: 'Five students in green sweater uniform standing by yellow school van', label_en: 'Our Students', label_sw: 'Wanafunzi Wetu', category_en: 'Students', category_sw: 'Wanafunzi' },
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
                className={`campus-card animate-on-scroll-up cursor-pointer ${item.span || ''}`}
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
