'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations, type Language } from '../../lib/i18n';
import {
  AcademicCapIcon, PhoneIcon, EnvelopeIcon, ArrowRightIcon, Bars3Icon, XMarkIcon,
  UserGroupIcon, BookOpenIcon, ShieldCheckIcon, HeartIcon, SparklesIcon, LightBulbIcon,
  StarIcon, GlobeAltIcon, ChevronRightIcon, CheckCircleIcon, MapPinIcon,
} from '@heroicons/react/24/outline';

const IMGS = {
  logo:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.05.23_PM-1788894389720.jpeg',
  building:  '/assets/images/WhatsApp_Image_2026-09-08_at_7.05.57_PM-1788894591347.jpeg',
  cls1:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__1_-1788894589650.jpeg',
  cls2:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788894592616.jpeg',
  cls3:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM-1788894592396.jpeg',
  new3:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.03_PM-1788895054202.jpeg',
  new4:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.04_PM-1788895054747.jpeg',
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

const LEADERSHIP = [
  { key: 'director',     icon: '🎓', color: 'bg-school-green text-white',                                    role_en: 'Director',            role_sw: 'Mkurugenzi',           desc_en: 'Overall school vision & strategic leadership',    desc_sw: 'Maono ya shule na uongozi wa kimkakati',   size: 'large' },
  { key: 'manager',      icon: '🏫', color: 'bg-school-yellow text-school-foreground',                       role_en: 'School Manager',      role_sw: 'Meneja wa Shule',      desc_en: 'Day-to-day operations & administration',          desc_sw: 'Uendeshaji wa kila siku na utawala',       size: 'large' },
  { key: 'committee',    icon: '👥', color: 'bg-white border-2 border-school-green text-school-green',       role_en: 'Parent Committee',    role_sw: 'Kamati ya Wazazi',     desc_en: 'Community liaison & support',                     desc_sw: 'Uhusiano wa jamii na msaada',              size: 'medium' },
  { key: 'bursar',       icon: '💰', color: 'bg-white border-2 border-school-yellow text-school-foreground', role_en: 'Bursar',              role_sw: 'Msimamizi wa Fedha',   desc_en: 'Financial management',                            desc_sw: 'Usimamizi wa fedha',                       size: 'medium' },
  { key: 'headTeacher',  icon: '📚', color: 'bg-white border-2 border-school-green text-school-green',       role_en: 'Head Teacher',        role_sw: 'Mwalimu Mkuu',         desc_en: 'Academic leadership',                             desc_sw: 'Uongozi wa kitaaluma',                     size: 'medium' },
  { key: 'academic',     icon: '✏️', color: 'bg-white border-2 border-school-green text-school-green',       role_en: 'Academic Teacher',    role_sw: 'Mwalimu wa Masomo',    desc_en: 'Curriculum & instruction',                        desc_sw: 'Mtaala na mafunzo',                        size: 'small' },
  { key: 'disciplinary', icon: '⚖️', color: 'bg-white border-2 border-school-yellow text-school-foreground',role_en: 'Disciplinary Teacher',role_sw: 'Mwalimu wa Nidhamu',   desc_en: 'Student conduct & welfare',                       desc_sw: 'Mwenendo wa wanafunzi na ustawi',          size: 'small' },
  { key: 'social',       icon: '🤝', color: 'bg-white border-2 border-school-green text-school-green',       role_en: 'Social Teacher',      role_sw: 'Mwalimu wa Jamii',     desc_en: 'Counselling & social development',                desc_sw: 'Ushauri na maendeleo ya kijamii',          size: 'small' },
];

const VALUES = [
  { icon: AcademicCapIcon, en: 'Academic Excellence', sw: 'Ubora wa Kitaaluma',   desc_en: 'We hold every learner to the highest academic standards.',              desc_sw: 'Tunashikilia kila mwanafunzi kwa viwango vya juu zaidi vya kitaaluma.', color: 'bg-school-green', textColor: 'text-white' },
  { icon: ShieldCheckIcon, en: 'Discipline & Respect', sw: 'Nidhamu na Heshima',  desc_en: 'We build character through consistent values and mutual respect.',       desc_sw: 'Tunajenga tabia kupitia maadili thabiti na heshima ya pande zote.',     color: 'bg-school-yellow', textColor: 'text-school-foreground' },
  { icon: HeartIcon,       en: 'Inclusivity',          sw: 'Ujumuishaji',          desc_en: 'Every child, regardless of background, is welcomed and valued.',         desc_sw: 'Kila mtoto, bila kujali asili yake, anakaribisha na kuthaminiwa.',      color: 'bg-white border border-school-border', textColor: 'text-school-foreground' },
  { icon: LightBulbIcon,   en: 'Creativity & Curiosity',sw: 'Ubunifu na Udadisi', desc_en: 'We nurture inquisitive minds and encourage creative thinking.',           desc_sw: 'Tunalisha akili za udadisi na kuhimiza fikira za ubunifu.',             color: 'bg-white border border-school-border', textColor: 'text-school-foreground' },
  { icon: UserGroupIcon,   en: 'Community Partnership',sw: 'Ushirikiano wa Jamii', desc_en: 'Parents, teachers and pupils work together as one family.',              desc_sw: 'Wazazi, walimu na wanafunzi wanafanya kazi pamoja kama familia moja.',  color: 'bg-school-green/10 border border-school-green/20', textColor: 'text-school-foreground' },
  { icon: GlobeAltIcon,    en: 'Global Citizenship',   sw: 'Uraia wa Kimataifa',   desc_en: 'We prepare children to thrive in a connected, diverse world.',           desc_sw: 'Tunaandaa watoto kustawi katika ulimwengu uliounganishwa na tofauti.',  color: 'bg-school-green/10 border border-school-green/20', textColor: 'text-school-foreground' },
];

export default function AboutPage() {
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
    { href: '/about', label: t.nav.about, active: true },
    { href: '/academics', label: t.nav.academics },
    { href: '/facilities', label: t.nav.facilities },
    { href: '/gallery', label: lang === 'sw' ? 'Picha' : 'Gallery' },
    { href: '/rules', label: t.nav.rules },
    { href: '/admissions', label: t.nav.admissions },
    { href: '/#contact', label: t.nav.contact },
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
        <section className="relative overflow-hidden hero-gradient text-white py-20 lg:py-28">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-school-yellow/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">{t.nav.home}</Link>
              <ChevronRightIcon className="w-4 h-4 text-white/40" />
              <span className="text-school-yellow text-sm font-semibold">{t.nav.about}</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-up">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold">
                  <SparklesIcon className="w-4 h-4 text-school-yellow" />
                  {lang === 'sw' ? 'Hadithi Yetu' : 'Our Story'}
                </div>
                <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                  {lang === 'sw' ? 'Kuhusu Shule ya' : 'About'}{' '}
                  <span className="text-school-yellow">New Generation</span>
                </h1>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  {lang === 'sw' ?'Jumuiya ya kujifunza inayokaribisha, iliyojitolea kutoa msingi imara wa elimu kwa watoto katika mazingira salama na ya kuvutia huko Tabata Chang\'ombe, Dar es Salaam.' :'A welcoming learning community committed to providing children with a strong educational foundation in a safe, supportive and engaging environment in Tabata Chang\'ombe, Dar es Salaam.'}
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: '📍', text: 'Tabata Chang\'ombe, Ilala' },
                    { icon: '🎓', text: lang === 'sw' ? 'Mtaala wa NECTA' : 'NECTA Curriculum' },
                    { icon: '👦👧', text: lang === 'sw' ? 'Wavulana & Wasichana' : 'Boys & Girls Welcome' },
                  ].map((b) => (
                    <span key={b.text} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                      <span>{b.icon}</span>{b.text}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative animate-fade-in">
                <div className="rounded-3xl overflow-hidden shadow-hero aspect-[4/3]">
                  <Image src={IMGS.building} alt="New Generation School main building with Tanzanian flag and colorful garden" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/40 to-transparent" />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-school-yellow rounded-2xl p-4 shadow-float">
                  <div className="text-3xl font-extrabold text-school-foreground">200+</div>
                  <div className="text-xs font-semibold text-school-foreground/70 mt-0.5">{lang === 'sw' ? 'Familia Zinazomwamini' : 'Families Trust Us'}</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-card text-center">
                  <div className="text-2xl font-extrabold text-school-green">✓</div>
                  <div className="text-xs font-semibold text-school-muted mt-0.5">{lang === 'sw' ? 'Imeidhinishwa' : 'Accredited'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR STORY ── */}
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
                <div className="space-y-4 text-school-muted leading-relaxed">
                  <p>{lang === 'sw' ? 'Shule ya Chekechea na Msingi ya New Generation ni jumuiya ya kujifunza inayokaribisha, iliyojitolea kutoa msingi imara wa elimu kwa watoto katika mazingira salama, ya kusaidia na ya kuvutia.' : 'New Generation Day Care Nursery & Primary School is a welcoming learning community committed to providing children with a strong educational foundation in a safe, supportive and engaging environment.'}</p>
                  <p>{lang === 'sw' ? 'Iko Tabata Chang\'ombe, Kata ya Machimbo, Wilaya ya Ilala, Dar es Salaam. Shule inakuza watoto wenye ujuzi, nidhamu, ujasiri na uwajibikaji huku ikijenga udadisi, ubunifu na uhuru.' : 'Located in Tabata Chang\'ombe, Machimbo Ward, Ilala District, Dar es Salaam. The school nurtures knowledgeable, disciplined, confident and responsible children while developing curiosity, creativity and independence.'}</p>
                  <p>{lang === 'sw' ? 'Shule inatumia mafunzo ya darasani, kujifunza kwa vitendo, michezo, shughuli za ziada na fursa kwa wanafunzi kuchunguza vipaji vyao vya kibinafsi.' : 'The school uses classroom instruction, practical learning, sports, extracurricular activities and opportunities for pupils to explore their individual talents.'}</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { label: lang === 'sw' ? 'Wanafunzi' : 'Students', value: '200+', icon: '👨‍🎓' },
                    { label: lang === 'sw' ? 'Walimu' : 'Teachers', value: '20+', icon: '👩‍🏫' },
                    { label: lang === 'sw' ? 'Miaka ya Uzoefu' : 'Years Experience', value: '5+', icon: '🏆' },
                    { label: lang === 'sw' ? 'Kuridhika kwa Wazazi' : 'Parent Satisfaction', value: '98%', icon: '⭐' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-school-off-white rounded-2xl p-4 border border-school-border">
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-2xl font-extrabold text-school-green">{stat.value}</div>
                      <div className="text-xs text-school-muted font-medium mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-on-scroll-right">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-card col-span-1">
                    <Image src={IMGS.cls1} alt="Students in bright classroom at New Generation School" fill className="object-cover" style={{position:'relative', height:'100%', width:'100%'}} />
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-3xl overflow-hidden aspect-square shadow-card relative">
                      <Image src={IMGS.cls2} alt="Learning environment at New Generation School" fill className="object-cover" />
                    </div>
                    <div className="rounded-3xl overflow-hidden aspect-square shadow-card relative">
                      <Image src={IMGS.new3} alt="Students and teachers at New Generation School" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VISION & MISSION ── */}
        <section className="py-20 bg-school-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 animate-on-scroll">
              <div className="section-tag mx-auto mb-4">
                <StarIcon className="w-3.5 h-3.5" />
                {lang === 'sw' ? 'Maono & Dhamira' : 'Vision & Mission'}
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-school-foreground">
                {lang === 'sw' ? 'Tunaoamini & Tunachofanya' : 'What We Believe & What We Do'}
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="animate-on-scroll-left bg-school-green rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-school-yellow/10 translate-y-1/2 -translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6 text-2xl">🔭</div>
                  <div className="text-school-yellow font-bold text-xs uppercase tracking-widest mb-3">{lang === 'sw' ? 'Maono' : 'Vision'}</div>
                  <h3 className="text-2xl font-extrabold mb-4 leading-tight">
                    {lang === 'sw' ? 'Shule Inayomwangazia Zaidi Mwanafunzi' : 'The Most Student-Centred School'}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {lang === 'sw' ?'Kuwa shule inayotambuliwa kwa ubora wa elimu, nidhamu bora na ukuaji kamili wa kila mtoto — kiakili, kijamii na kihisia.' :'To be a school recognised for educational excellence, outstanding discipline and the holistic development of every child — intellectually, socially and emotionally.'}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-school-yellow text-sm font-semibold">
                    <SparklesIcon className="w-4 h-4" />
                    {lang === 'sw' ? 'Jifunze. Kukua. Angaza.' : 'Learn. Grow. Shine.'}
                  </div>
                </div>
              </div>
              {/* Mission */}
              <div className="animate-on-scroll-right bg-white rounded-3xl p-8 lg:p-10 border border-school-border shadow-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-school-yellow/5 -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-school-yellow/15 flex items-center justify-center mb-6 text-2xl">🎯</div>
                  <div className="text-school-green font-bold text-xs uppercase tracking-widest mb-3">{lang === 'sw' ? 'Dhamira' : 'Mission'}</div>
                  <h3 className="text-2xl font-extrabold text-school-foreground mb-4 leading-tight">
                    {lang === 'sw' ? 'Kutoa Elimu Bora kwa Kila Mtoto' : 'Delivering Quality Education for Every Child'}
                  </h3>
                  <p className="text-school-muted leading-relaxed">
                    {lang === 'sw' ?'Kutoa elimu bora, ya kuvutia na inayomlenga mwanafunzi ambayo inakuza ujuzi wa kitaaluma, maadili ya tabia na ujasiri wa kibinafsi — kuandaa watoto kwa mafanikio ya maisha.' :'To provide high-quality, engaging and student-centred education that develops academic skills, strong character and personal confidence — preparing children for lifelong success.'}
                  </p>
                  <div className="mt-6 space-y-2">
                    {[
                      lang === 'sw' ? 'Ubora wa kitaaluma wa hali ya juu' : 'High academic standards',
                      lang === 'sw' ? 'Mazingira salama na ya kusaidia' : 'Safe and supportive environment',
                      lang === 'sw' ? 'Ushirikiano wa wazazi na walimu' : 'Parent-teacher partnership',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-school-foreground">
                        <CheckCircleIcon className="w-4 h-4 text-school-green flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 animate-on-scroll">
              <div className="section-tag mx-auto mb-4">
                <HeartIcon className="w-3.5 h-3.5" />
                {lang === 'sw' ? 'Maadili Yetu' : 'Our Core Values'}
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-school-foreground">
                {lang === 'sw' ? 'Tunachoamini' : 'What We Stand For'}
              </h2>
            </div>
            {/* Bento-style values grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map((v, i) => (
                <div key={v.en}
                  className={`animate-on-scroll-up rounded-3xl p-6 lg:p-7 ${v.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${i === 0 ? 'lg:col-span-1 lg:row-span-1' : ''}`}
                  style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 ${i < 2 ? 'bg-white/20' : 'bg-school-green/10'}`}>
                    <v.icon className={`w-5 h-5 ${i === 0 ? 'text-white' : i === 1 ? 'text-school-foreground' : 'text-school-green'}`} />
                  </div>
                  <h3 className={`font-extrabold text-base mb-2 ${v.textColor}`}>{lang === 'sw' ? v.sw : v.en}</h3>
                  <p className={`text-sm leading-relaxed ${i === 0 ? 'text-white/80' : i === 1 ? 'text-school-foreground/70' : 'text-school-muted'}`}>
                    {lang === 'sw' ? v.desc_sw : v.desc_en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP ── */}
        <section id="leadership" className="py-20 bg-school-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 animate-on-scroll">
              <div className="section-tag mx-auto mb-4">
                <UserGroupIcon className="w-3.5 h-3.5" />
                {lang === 'sw' ? 'Timu Yetu' : 'Our Team'}
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-school-foreground">
                {lang === 'sw' ? 'Muundo wa Uongozi' : 'Leadership Structure'}
              </h2>
              <p className="text-school-muted mt-3 max-w-xl mx-auto">
                {lang === 'sw' ? 'Timu yetu ya uongozi iliyojitolea inafanya kazi pamoja kuhakikisha ubora wa elimu na ustawi wa kila mwanafunzi.' : 'Our dedicated leadership team works together to ensure educational excellence and the wellbeing of every student.'}
              </p>
            </div>
            {/* Top 2 large cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {LEADERSHIP.filter(l => l.size === 'large').map((leader, i) => (
                <div key={leader.key} className={`animate-on-scroll rounded-3xl p-8 text-center ${leader.color} shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover`} style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="text-4xl mb-4">{leader.icon}</div>
                  <h3 className="font-extrabold text-xl mb-2">{lang === 'sw' ? leader.role_sw : leader.role_en}</h3>
                  <p className={`text-sm leading-relaxed ${leader.color.includes('green') ? 'text-white/75' : 'text-school-foreground/65'}`}>{lang === 'sw' ? leader.desc_sw : leader.desc_en}</p>
                </div>
              ))}
            </div>
            {/* Medium 3 cards */}
            <div className="grid sm:grid-cols-3 gap-5 mb-5">
              {LEADERSHIP.filter(l => l.size === 'medium').map((leader, i) => (
                <div key={leader.key} className={`animate-on-scroll rounded-2xl p-6 text-center ${leader.color} shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover`} style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="text-3xl mb-3">{leader.icon}</div>
                  <h3 className="font-extrabold text-base mb-1.5">{lang === 'sw' ? leader.role_sw : leader.role_en}</h3>
                  <p className="text-xs text-school-muted leading-relaxed">{lang === 'sw' ? leader.desc_sw : leader.desc_en}</p>
                </div>
              ))}
            </div>
            {/* Small 3 cards */}
            <div className="grid sm:grid-cols-3 gap-5">
              {LEADERSHIP.filter(l => l.size === 'small').map((leader, i) => (
                <div key={leader.key} className={`animate-on-scroll rounded-2xl p-5 text-center ${leader.color} shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover`} style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="text-2xl mb-2">{leader.icon}</div>
                  <h3 className="font-bold text-sm mb-1">{lang === 'sw' ? leader.role_sw : leader.role_en}</h3>
                  <p className="text-xs text-school-muted leading-relaxed">{lang === 'sw' ? leader.desc_sw : leader.desc_en}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CAMPUS PHOTOS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <div className="section-tag mx-auto mb-4">
                <MapPinIcon className="w-3.5 h-3.5" />
                {lang === 'sw' ? 'Kampasi Yetu' : 'Our Campus'}
              </div>
              <h2 className="text-3xl font-extrabold text-school-foreground">{lang === 'sw' ? 'Picha za Shule' : 'School in Pictures'}</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { src: IMGS.building, alt: 'New Generation School main building exterior', label: lang === 'sw' ? 'Jengo Letu' : 'Our Building', span: 'col-span-2 row-span-2' },
                { src: IMGS.cls3, alt: 'Teacher with students in classroom at New Generation School', label: lang === 'sw' ? 'Madarasa' : 'Classrooms', span: '' },
                { src: IMGS.new4, alt: 'School environment at New Generation School', label: lang === 'sw' ? 'Mazingira' : 'Environment', span: '' },
                { src: IMGS.cls1, alt: 'Students learning at New Generation School', label: lang === 'sw' ? 'Kujifunza' : 'Learning', span: '' },
                { src: IMGS.new3, alt: 'Students and teachers at New Generation School', label: lang === 'sw' ? 'Wanafunzi' : 'Students', span: '' },
              ].map((item, i) => (
                <div key={i} className={`campus-card animate-on-scroll-up ${item.span} aspect-square`} style={{ transitionDelay: `${i * 80}ms` }}>
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                  <div className="overlay" />
                  <div className="info">
                    <span className="text-white font-bold text-sm">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 hero-gradient text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <SparklesIcon className="w-4 h-4 text-school-yellow" />
              {lang === 'sw' ? 'Jiunge Nasi' : 'Join Our Family'}
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
              {lang === 'sw' ? 'Tayari Kuanza Safari ya Elimu?' : 'Ready to Start the Learning Journey?'}
            </h2>
            <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
              {lang === 'sw' ? 'Wasiliana nasi leo ili kujua zaidi kuhusu jinsi ya kuandikisha mtoto wako katika New Generation School.' : 'Contact us today to learn more about enrolling your child at New Generation School.'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/admissions" className="btn-accent px-8 py-3 text-base">
                {t.nav.applyNow} <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <a href="tel:+255717437788" className="btn-outline-white px-8 py-3 text-base">
                <PhoneIcon className="w-4 h-4" /> +255 717 437 788
              </a>
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
