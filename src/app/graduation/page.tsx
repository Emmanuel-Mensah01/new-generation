'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, SparklesIcon, PlayCircleIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { getTranslations, type Language } from '@/lib/i18n';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function GraduationPage() {
  const [lang, setLang] = useState<Language>('en');
  const t = getTranslations(lang);
  useScrollAnimation();

  return (
    <div className="min-h-screen font-sans bg-school-off-white">
      <Navbar lang={lang} setLang={setLang} activePath="/graduation" />

      <main className="pt-[88px] lg:pt-[104px]">

        {/* Hero */}
        <section className="relative bg-school-off-white overflow-hidden py-16 lg:py-24">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-school-pink/10 blur-3xl" />
            <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-school-yellow/20 blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="section-tag mx-auto mb-6">
              <AcademicCapIcon className="w-3.5 h-3.5" />
              {lang === 'sw' ? 'Sherehe ya Kuhitimu' : 'Graduation Ceremony'}
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-school-green mb-5 leading-tight">
              {lang === 'sw' ? 'Siku ya Kuhitimu' : 'Graduation Day'}
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {lang === 'sw' ?'Kusherehekea mafanikio ya wanafunzi wetu wanaohitimu — wakati wa furaha, fahari, na matumaini.' :'Celebrating the achievements of our graduating students — a moment of joy, pride, and new beginnings.'}
            </p>
          </div>
        </section>

        {/* Graduation Photos */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <div className="section-tag mx-auto mb-4">
                <SparklesIcon className="w-3.5 h-3.5" />
                {lang === 'sw' ? 'Picha za Kuhitimu' : 'Graduation Photos'}
              </div>
              <h2 className="text-3xl font-extrabold text-school-green">
                {lang === 'sw' ? 'Wahitimu Wetu' : 'Our Graduates'}
              </h2>
            </div>

            {/* Asymmetric photo layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
              {/* Girls photo — larger */}
              <div className="lg:col-span-3 animate-on-scroll">
                <div className="relative rounded-3xl overflow-hidden shadow-xl group" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src="/assets/images/grad_boys__2_-1789020217703.png"
                    alt="Girl graduates in purple uniforms celebrating their graduation day"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-green/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-flex items-center gap-2 bg-school-pink text-white text-sm font-bold px-4 py-2 rounded-full shadow-btn">
                      <AcademicCapIcon className="w-4 h-4" />
                      {lang === 'sw' ? 'Wasichana Wahitimu' : 'Girl Graduates'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Boys photo — smaller */}
              <div className="lg:col-span-2 animate-on-scroll">
                <div className="relative rounded-3xl overflow-hidden shadow-xl group h-full" style={{ minHeight: '280px' }}>
                  <Image
                    src="/assets/images/grad_boys-1789020217320.png"
                    alt="Boy graduates in brown uniforms posing proudly on graduation day"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-green/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-flex items-center gap-2 bg-school-yellow text-school-green text-sm font-bold px-4 py-2 rounded-full shadow-btn">
                      <AcademicCapIcon className="w-4 h-4" />
                      {lang === 'sw' ? 'Wavulana Wahitimu' : 'Boy Graduates'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-school-off-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 animate-on-scroll">
              <div className="section-tag mx-auto mb-4">
                <PlayCircleIcon className="w-3.5 h-3.5" />
                {lang === 'sw' ? 'Video ya Dansi' : 'Dance Video'}
              </div>
              <h2 className="text-3xl font-extrabold text-school-green mb-3">
                {lang === 'sw' ? 'Wahitimu Wakicheza Dansi' : 'Graduates Dancing'}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {lang === 'sw' ?'Tazama video ya wahitimu wetu wakisherehekea kwa furaha na dansi.' :'Watch our graduates celebrate with joy and dance on their special day.'}
              </p>
            </div>

            <div className="animate-on-scroll">
              {/* Local video */}
              <div className="relative rounded-3xl overflow-hidden bg-school-green/5 shadow-lg" style={{ aspectRatio: '16/9' }}>
                <video
                  src="/assets/images/grad%20vid.mp4"
                  controls
                  className="absolute inset-0 w-full h-full rounded-3xl object-cover"
                >
                  {lang === 'sw' ? 'Kivinjari chako hakiungi mkono video.' : 'Your browser does not support the video tag.'}
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
            <div className="section-tag mx-auto mb-6">
              <SparklesIcon className="w-3.5 h-3.5" />
              {lang === 'sw' ? 'Jiunge Nasi' : 'Join Our Community'}
            </div>
            <h2 className="text-3xl font-extrabold text-school-green mb-4">
              {lang === 'sw' ? 'Mtoto Wako Anaweza Kuwa Sehemu ya Familia Hii' : 'Your Child Can Be Part of This Family'}
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              {lang === 'sw' ?'Wasiliana nasi leo ili kujua zaidi kuhusu jinsi ya kuandikisha mtoto wako.' :'Contact us today to learn more about enrolling your child at New Generation School.'}
            </p>
            <Link href="/admissions" className="btn-accent px-8 py-3 text-base">
              {t.nav.applyNow} <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}