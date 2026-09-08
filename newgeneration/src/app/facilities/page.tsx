'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations, type Language } from '../../lib/i18n';
import { CheckCircleIcon, ArrowRightIcon, Bars3Icon, XMarkIcon, BuildingLibraryIcon, BeakerIcon, BookOpenIcon, TruckIcon, SparklesIcon, ShieldCheckIcon, PhoneIcon, EnvelopeIcon, MapPinIcon,  } from '@heroicons/react/24/outline';

const IMGS = {
  logo:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.05.23_PM-1788894389720.jpeg',
  building:  '/assets/images/WhatsApp_Image_2026-09-08_at_7.05.57_PM-1788894591347.jpeg',
  cls1:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__1_-1788894589650.jpeg',
  cls2:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788894592616.jpeg',
  cls3:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM-1788894592396.jpeg',
  new1:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788895053341.jpeg',
  new2:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM-1788895052060.jpeg',
};

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-up')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function FacilitiesPage() {
  const [lang, setLang] = useState<Language>('en');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = getTranslations(lang);
  useScrollAnimation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/academics', label: t.nav.academics },
    { href: '/facilities', label: t.nav.facilities, active: true },
    { href: '/gallery', label: lang === 'sw' ? 'Picha' : 'Gallery' },
    { href: '/rules', label: t.nav.rules },
    { href: '/admissions', label: t.nav.admissions },
    { href: '/#contact', label: t.nav.contact },
  ];

  const facilities = [
    {
      icon: BuildingLibraryIcon,
      title: lang === 'sw' ? 'Madarasa ya Kisasa' : 'Modern Classrooms',
      desc: lang === 'sw' ? 'Madarasa yetu yenye mwanga mzuri yamepambwa kwa vifaa vya kielimu, mabango ya rangi na mazingira ya kujifunza yanayovutia watoto.' : 'Our bright, well-ventilated classrooms are equipped with educational materials, colourful displays and a stimulating learning environment for every child.',
      image: IMGS.cls1,
      alt: 'Bright classroom with students in white and yellow uniforms at New Generation School',
      badge: lang === 'sw' ? 'Darasa la Kisasa' : 'Modern Learning',
      features: [lang === 'sw' ? 'Mwanga mzuri' : 'Natural lighting', lang === 'sw' ? 'Vifaa vya kisasa' : 'Modern equipment', lang === 'sw' ? 'Mazingira ya kuvutia' : 'Stimulating displays'],
    },
    {
      icon: BeakerIcon,
      title: lang === 'sw' ? 'Maabara ya Sayansi' : 'Science Laboratory',
      desc: lang === 'sw' ? 'Maabara yetu ya kisasa ya sayansi inawapa wanafunzi fursa ya kufanya majaribio ya vitendo, kukuza udadisi na kupenda sayansi tangu wakiwa wadogo.' : 'Our modern science laboratory gives students the opportunity to conduct hands-on experiments, nurturing curiosity and a love of science from an early age.',
      image: IMGS.cls2,
      alt: 'Modern science laboratory at New Generation School with equipment and bright lighting',
      badge: lang === 'sw' ? 'Maabara ya Kisasa' : 'Hands-On Science',
      features: [lang === 'sw' ? 'Vifaa vya majaribio' : 'Lab equipment', lang === 'sw' ? 'Walimu wabobezi' : 'Expert teachers', lang === 'sw' ? 'Mtaala wa NECTA' : 'NECTA aligned'],
    },
    {
      icon: BookOpenIcon,
      title: lang === 'sw' ? 'Maktaba & Rasilimali' : 'Library & Resources',
      desc: lang === 'sw' ? 'Maktaba yetu ina vitabu mbalimbali vya kielimu, rasilimali za kujifunza na mazingira ya utulivu yanayohimiza upendo wa kusoma.' : 'Our library holds a wide range of educational books, learning resources and a quiet environment that encourages a love of reading and independent study.',
      image: IMGS.cls3,
      alt: 'Library and reading area with educational books and resources at New Generation School',
      badge: lang === 'sw' ? 'Vitabu & Rasilimali' : 'Books & Resources',
      features: [lang === 'sw' ? 'Vitabu vingi' : 'Wide book range', lang === 'sw' ? 'Mazingira ya utulivu' : 'Quiet study space', lang === 'sw' ? 'Rasilimali za kujifunza' : 'Learning resources'],
    },
    {
      icon: SparklesIcon,
      title: lang === 'sw' ? 'Eneo la Michezo' : 'Sports & Play Area',
      desc: lang === 'sw' ? 'Eneo letu la michezo na kucheza linatoa nafasi kwa wanafunzi kukua kimwili, kujifunza kufanya kazi kwa pamoja na kufurahia wakati wa mapumziko.' : 'Our sports and play area provides space for physical development, teamwork and enjoyment during break times, supporting the overall wellbeing of every child.',
      image: IMGS.new1,
      alt: 'Students enjoying outdoor play and sports at New Generation School',
      badge: lang === 'sw' ? 'Michezo & Burudani' : 'Active & Healthy',
      features: [lang === 'sw' ? 'Michezo ya nje' : 'Outdoor sports', lang === 'sw' ? 'Kazi ya pamoja' : 'Team activities', lang === 'sw' ? 'Ustawi wa kimwili' : 'Physical wellbeing'],
    },
    {
      icon: TruckIcon,
      title: lang === 'sw' ? 'Usafiri wa Shule' : 'School Transport',
      desc: lang === 'sw' ? 'Tunao usafiri wa shule salama na wa kuaminika kwa wanafunzi wanaohitaji. Gari letu la njano la shule linawahakikishia wazazi amani ya akili.' : 'We provide safe and reliable school transport for students who need it. Our distinctive yellow school van gives parents complete peace of mind.',
      image: IMGS.new2,
      alt: 'New Generation School yellow transport van with students in green uniforms',
      badge: lang === 'sw' ? 'Salama & Kuaminika' : 'Safe & Reliable',
      features: [lang === 'sw' ? 'Gari la shule' : 'School van', lang === 'sw' ? 'Salama na kuaminika' : 'Safe & reliable', lang === 'sw' ? 'Amani ya wazazi' : 'Parent peace of mind'],
    },
    {
      icon: ShieldCheckIcon,
      title: lang === 'sw' ? 'Mazingira Salama' : 'Safe & Secure Campus',
      desc: lang === 'sw' ? 'Usalama wa watoto wetu ni kipaumbele chetu. Kampasi yetu ina uzio imara, milango inayodhibitiwa na uangalizi wa kila wakati.' : 'The safety of our children is our top priority. Our campus features secure fencing, controlled entry points and constant supervision throughout the school day.',
      image: IMGS.building,
      alt: 'Secure and welcoming New Generation School campus with fencing and garden',
      badge: lang === 'sw' ? 'Usalama wa Kwanza' : 'Safety First',
      features: [lang === 'sw' ? 'Uzio imara' : 'Secure fencing', lang === 'sw' ? 'Milango inayodhibitiwa' : 'Controlled entry', lang === 'sw' ? 'Uangalizi wa kila wakati' : 'Constant supervision'],
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-school-off-white">
      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-nav border-b border-school-border' : 'bg-white/96 backdrop-blur-md border-b border-school-border/40'}`}>
        <div className="hidden lg:block bg-school-green text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <a href="tel:+255717437788" className="flex items-center gap-1.5 hover:text-school-yellow transition-colors font-medium"><PhoneIcon className="w-3 h-3" />+255 717 437 788</a>
              <a href="mailto:newgeneration1420@gmail.com" className="flex items-center gap-1.5 hover:text-school-yellow transition-colors"><EnvelopeIcon className="w-3 h-3" />newgeneration1420@gmail.com</a>
            </div>
            <span className="text-school-yellow font-semibold">{lang === 'sw' ? 'Shule Inaanza: 7:30 Asubuhi' : 'School Hours: 7:30 AM – 3:00 PM'}</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform flex-shrink-0 border-2 border-school-yellow/30">
                <Image src={IMGS.logo} alt="New Generation School Logo" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-extrabold text-sm text-school-green leading-tight">New Generation</div>
                <div className="font-medium text-xs text-school-muted leading-tight">Nursery &amp; Primary School</div>
              </div>
            </Link>
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${link.active ? 'text-school-green bg-school-muted font-bold' : 'text-school-foreground hover:text-school-green hover:bg-school-muted/60'}`}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <button onClick={() => setLang(lang === 'en' ? 'sw' : 'en')}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-school-border text-xs font-bold hover:bg-school-muted/60 transition-colors">
                <span className={lang === 'en' ? 'text-school-green font-bold' : 'text-school-muted'}>EN</span>
                <span className="text-school-muted">/</span>
                <span className={lang === 'sw' ? 'text-school-green font-bold' : 'text-school-muted'}>SW</span>
              </button>
              <Link href="/admissions" className="hidden sm:flex btn-accent text-sm py-2 px-4">{t.nav.applyNow}</Link>
              <button className="lg:hidden p-2 rounded-lg hover:bg-school-muted/60" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-school-border px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="block py-2.5 px-3 rounded-xl text-sm font-semibold text-school-foreground hover:bg-school-muted hover:text-school-green transition-colors"
                onClick={() => setMobileOpen(false)}>{link.label}</Link>
            ))}
          </div>
        )}
      </header>

      <main className="pt-[88px] lg:pt-[104px]">
        {/* ── HERO ── */}
        <section className="relative hero-gradient text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-school-yellow/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-up">
                <div className="inline-flex items-center gap-2 bg-school-yellow/20 border border-school-yellow/30 text-school-yellow px-4 py-2 rounded-full text-sm font-semibold">
                  <BuildingLibraryIcon className="w-4 h-4" />
                  {lang === 'sw' ? 'Vifaa vya Shule' : 'School Facilities'}
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                  {lang === 'sw' ? 'Vifaa vya Kiwango cha Juu' : 'World-Class'}{' '}
                  <span className="text-school-yellow">{lang === 'sw' ? 'kwa Kujifunza' : 'Facilities'}</span>
                </h1>
                <p className="text-white/80 text-lg leading-relaxed">
                  {lang === 'sw' ? 'Kila kona ya kampasi yetu imeundwa kwa makini kusaidia kujifunza, ubunifu na ukuaji wa kila mtoto.' : 'Every corner of our campus is thoughtfully designed to support learning, creativity and the growth of every child in our care.'}
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    lang === 'sw' ? 'Madarasa ya Kisasa' : 'Modern Classrooms',
                    lang === 'sw' ? 'Maabara ya Sayansi' : 'Science Lab',
                    lang === 'sw' ? 'Maktaba' : 'Library',
                    lang === 'sw' ? 'Usafiri' : 'Transport',
                  ].map((b) => (
                    <div key={b} className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 px-3 py-1.5 rounded-full text-xs font-semibold">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-school-yellow" />{b}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative animate-fade-in">
                <div className="rounded-3xl overflow-hidden shadow-hero aspect-[4/3]">
                  <Image src={IMGS.cls2} alt="Modern science laboratory at New Generation School" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2">
                    <p className="text-xs font-bold text-school-green">{lang === 'sw' ? 'Maabara ya Sayansi' : 'Science Laboratory'}</p>
                    <p className="text-xs text-school-muted">{lang === 'sw' ? 'Vifaa vya Kisasa' : 'Modern Equipment'}</p>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-5 bg-school-yellow rounded-2xl p-4 shadow-float">
                  <div className="text-2xl font-extrabold text-school-foreground">6+</div>
                  <div className="text-xs font-semibold text-school-foreground/70 mt-0.5">{lang === 'sw' ? 'Vifaa Bora' : 'Key Facilities'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FACILITIES GRID ── */}
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

            {/* Alternating layout for facilities */}
            <div className="space-y-16">
              {facilities.map((facility, i) => (
                <div key={facility.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
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
                    <div className="facility-card rounded-3xl overflow-hidden aspect-[4/3] shadow-card">
                      <Image src={facility.image} alt={facility.alt} fill className="object-cover" />
                      <div className="overlay" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-bold text-school-green">
                          <facility.icon className="w-3.5 h-3.5" />
                          {facility.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SAFETY HIGHLIGHT ── */}
        <section className="py-16 bg-school-green text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 text-center">
              {[
                { icon: '🔒', title: lang === 'sw' ? 'Usalama wa Kwanza' : 'Safety First', desc: lang === 'sw' ? 'Uzio imara na milango inayodhibitiwa' : 'Secure fencing and controlled entry' },
                { icon: '👁️', title: lang === 'sw' ? 'Uangalizi wa Kila Wakati' : 'Constant Supervision', desc: lang === 'sw' ? 'Walimu wanaangalia wanafunzi wakati wote' : 'Teachers monitor students at all times' },
                { icon: '🚌', title: lang === 'sw' ? 'Usafiri Salama' : 'Safe Transport', desc: lang === 'sw' ? 'Gari la shule salama na la kuaminika' : 'Reliable school van for safe travel' },
              ].map((item, i) => (
                <div key={i} className="animate-on-scroll-up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-extrabold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-school-off-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
            <div className="bg-white rounded-3xl p-10 lg:p-14 border border-school-border shadow-card">
              <div className="section-tag mx-auto mb-6">
                <SparklesIcon className="w-3.5 h-3.5" />
                {lang === 'sw' ? 'Tembelea Shule' : 'Visit Our School'}
              </div>
              <h2 className="text-3xl font-extrabold text-school-foreground mb-4">
                {lang === 'sw' ? 'Ona Vifaa Vyetu kwa Macho Yako Mwenyewe' : 'See Our Facilities in Person'}
              </h2>
              <p className="text-school-muted mb-8 max-w-xl mx-auto">
                {lang === 'sw' ? 'Tunakaribisha familia kutembelea shule na kuona mazingira ya kujifunza kwa macho yao wenyewe.' : 'We welcome families to visit the school and see the learning environment for themselves.'}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/admissions" className="btn-primary px-8 py-3">
                  {lang === 'sw' ? 'Panga Ziara' : 'Schedule a Visit'} <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <a href="tel:+255717437788" className="btn-outline px-8 py-3">
                  <PhoneIcon className="w-4 h-4" /> +255 717 437 788
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="bg-school-foreground text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-school-yellow/30">
                    <Image src={IMGS.logo} alt="New Generation School Logo" width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-extrabold text-sm leading-tight">New Generation School</div>
                    <div className="text-white/50 text-xs">Nursery &amp; Primary School</div>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  {lang === 'sw' ? 'Kutoa elimu bora kwa watoto wa Tabata Chang\'ombe na mazingira yake.' : 'Providing quality education for children of Tabata Chang\'ombe and surrounding areas.'}
                </p>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-4 text-school-yellow">{lang === 'sw' ? 'Viungo' : 'Quick Links'}</h4>
                <div className="space-y-2">
                  {navLinks.slice(0, 5).map((l) => (
                    <Link key={l.href} href={l.href} className="block text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-4 text-school-yellow">{lang === 'sw' ? 'Wasiliana' : 'Contact'}</h4>
                <div className="space-y-3 text-sm text-white/60">
                  <a href="tel:+255717437788" className="flex items-center gap-2 hover:text-white transition-colors"><PhoneIcon className="w-4 h-4 flex-shrink-0" />+255 717 437 788</a>
                  <a href="mailto:newgeneration1420@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors"><EnvelopeIcon className="w-4 h-4 flex-shrink-0" />newgeneration1420@gmail.com</a>
                  <div className="flex items-start gap-2"><MapPinIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />Tabata Chang'ombe, Ilala, Dar es Salaam</div>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
              <span>© {new Date().getFullYear()} New Generation Nursery &amp; Primary School. All rights reserved.</span>
              <span className="text-school-yellow/60">Learn. Grow. Shine. ✨</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
