'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations, type Language } from '../lib/i18n';
import { AcademicCapIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, CheckCircleIcon, StarIcon, UserGroupIcon, BookOpenIcon, ShieldCheckIcon, TruckIcon, BuildingLibraryIcon, BeakerIcon, MusicalNoteIcon, PaintBrushIcon, CalculatorIcon, GlobeAltIcon, HeartIcon, SparklesIcon, ArrowRightIcon, TrophyIcon, ClockIcon, CalendarIcon, LightBulbIcon, HandRaisedIcon, ChatBubbleLeftRightIcon, CameraIcon, DocumentTextIcon, ArrowUpRightIcon,  } from '@heroicons/react/24/outline';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Icon from '@/components/ui/AppIcon';

// ─── Data ────────────────────────────────────────────────────────────────────

const GALLERY_ITEMS = [
  { src: '/assets/images/ChatGPT_Image_Sep_9__2026__08_21_56_AM-1788943777277.png', alt: 'New Generation School main building exterior', label: 'Our School' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__1_-1788894589650.jpeg', alt: 'Students in bright classroom at New Generation School', label: 'Our Classrooms' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM-1788894592396.jpeg', alt: 'Learning environment at New Generation School', label: 'Learning in Action' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788895053341.jpeg', alt: 'School facilities at New Generation School', label: 'School Facilities' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.03_PM-1788895054202.jpeg', alt: 'Campus life at New Generation School', label: 'Campus Life' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.04_PM-1788895054747.jpeg', alt: 'School activities at New Generation School', label: 'School Activities' },
  { src: '/assets/images/new-gen_schoo_l_bus-1788940178107.png', alt: 'Students and teachers at New Generation School', label: 'Students & Teachers' },
  { src: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM-1788895052060.jpeg', alt: 'School environment at New Generation School', label: 'Our Environment' },
  { src: '/assets/images/ChatGPT_Image_Sep_6__2026__03_35_32_PM-1788890911576.png', alt: 'Students engaged in learning at New Generation School', label: 'Engaged Learning' },
  { src: '/assets/images/ChatGPT_Image_Sep_6__2026__03_37_04_PM-1788890914979.png', alt: 'Nursery children at New Generation School', label: 'Nursery Division' },
  { src: '/assets/images/build-1788890877045.jpeg', alt: 'School building at New Generation School', label: 'School Building' },
  { src: '/assets/images/ChatGPT_Image_Sep_9__2026__08_15_30_AM-1788941762942.png', alt: 'Primary students at New Generation School', label: 'Primary Division' },
];

const NURSERY_SUBJECTS = [
  { icon: SparklesIcon, label: 'Play-Based Learning' },
  { icon: BookOpenIcon, label: 'Language & Literacy' },
  { icon: CalculatorIcon, label: 'Numeracy Basics' },
  { icon: PaintBrushIcon, label: 'Arts & Crafts' },
  { icon: MusicalNoteIcon, label: 'Music & Movement' },
  { icon: HeartIcon, label: 'Social Skills' },
];

const PRIMARY_SUBJECTS = [
  { icon: BookOpenIcon, label: 'English Language' },
  { icon: CalculatorIcon, label: 'Mathematics' },
  { icon: BeakerIcon, label: 'Science' },
  { icon: GlobeAltIcon, label: 'Social Studies' },
  { icon: MusicalNoteIcon, label: 'Kiswahili' },
  { icon: PaintBrushIcon, label: 'Creative Arts' },
];

const DAYCARE_SUBJECTS = [
  { icon: HeartIcon, label: 'Nurturing Care' },
  { icon: SparklesIcon, label: 'Play & Explore' },
  { icon: MusicalNoteIcon, label: 'Songs & Rhymes' },
  { icon: PaintBrushIcon, label: 'Creative Play' },
  { icon: BookOpenIcon, label: 'Story Time' },
  { icon: UserGroupIcon, label: 'Social Play' },
];

const LEADERSHIP = [
  { key: 'director', icon: '🎓', color: 'bg-school-green text-white', size: 'large' },
  { key: 'manager', icon: '🏫', color: 'bg-school-yellow text-school-foreground', size: 'large' },
  { key: 'committee', icon: '👥', color: 'bg-white border-2 border-school-green text-school-green', size: 'medium' },
  { key: 'bursar', icon: '💰', color: 'bg-white border-2 border-school-yellow text-school-foreground', size: 'medium' },
  { key: 'headTeacher', icon: '📚', color: 'bg-white border-2 border-school-green text-school-green', size: 'medium' },
  { key: 'academic', icon: '✏️', color: 'bg-white border-2 border-school-green text-school-green', size: 'small' },
  { key: 'disciplinary', icon: '⚖️', color: 'bg-white border-2 border-school-yellow text-school-foreground', size: 'small' },
  { key: 'social', icon: '🤝', color: 'bg-white border-2 border-school-green text-school-green', size: 'small' },
] as const;

const RULE_ICONS = [
  CheckCircleIcon, ClockIcon, ClockIcon, ShieldCheckIcon,
  AcademicCapIcon, UserGroupIcon, SparklesIcon, ShieldCheckIcon,
  ShieldCheckIcon, HeartIcon, MapPinIcon, UserGroupIcon,
  MapPinIcon, GlobeAltIcon, CalendarIcon,
];

const RULES_EN = [
  'All students must attend school regularly.',
  'Students are required to always be punctual.',
  'School starts at 7:30 am.',
  'The school gate will be closed at 9:00 am; pupils who arrive after this time will not be allowed to enter.',
  'Students must remain quiet, attentive, and well-behaved during lessons.',
  'Students must wear a neat school uniform and maintain high standards of personal hygiene.',
  'Hair plaiting is permitted for girls; boys must keep their hair short and tidy.',
  'Students are not allowed to bring valuables or large sums of money to school.',
  'The use of vulgar or abusive language is strictly prohibited. Any student who steals or engages in fighting that causes serious injury to others may be dismissed from school.',
  'Students must show respect to teachers, elders, and national as well as school symbols.',
  'Students must keep the school campus clean and must not damage any school property.',
  'Students are responsible for taking care of their personal belongings.',
  'Students are not allowed to leave the school campus during learning hours without permission.',
  'Students are required to speak English while at school.',
  'Students must maintain a minimum of 90% attendance to qualify for promotion to the next class.',
];

const RULES_SW = [
  'Wanafunzi wote lazima wahudhirie shule mara kwa mara.',
  'Wanafunzi wanahitajika kuwa wachapakazi daima.',
  'Shule inaanza saa 1:30 asubuhi.',
  'Lango la shule litafungwa saa 3:00 asubuhi; wanafunzi wanaofika baada ya wakati huu hawataruhusiwa kuingia.',
  'Wanafunzi lazima wakae kimya, wawe makini, na wawe na tabia nzuri wakati wa masomo.',
  'Wanafunzi lazima wavae sare ya shule safi na kudumisha viwango vya juu vya usafi wa kibinafsi.',
  'Kusuka nywele kunaruhusiwa kwa wasichana; wavulana lazima waweke nywele zao fupi na nadhifu.',
  'Wanafunzi hawaruhusiwi kuleta vitu vya thamani au pesa nyingi shuleni.',
  'Matumizi ya lugha chafu au ya matusi ni marufuku kabisa.',
  'Wanafunzi lazima waheshimu walimu, wazee, na alama za kitaifa na za shule.',
  'Wanafunzi lazima waweke kampasi ya shule safi na wasiharibu mali yoyote ya shule.',
  'Wanafunzi wanawajibika kutunza mali zao za kibinafsi.',
  'Wanafunzi hawaruhusiwi kuondoka kampasi ya shule wakati wa masomo bila ruhusa.',
  'Wanafunzi wanahitajika kuzungumza Kiingereza wakiwa shuleni.',
  'Wanafunzi lazima wadumishe angalau 90% ya mahudhurio ili kustahili kupandishwa darasa.',
];

const TESTIMONIALS_EN = [
  { quote: 'New Generation School has transformed my daughter completely. The teachers are dedicated, caring, and truly invested in every child\'s success. She looks forward to school every single day.', name: 'Mrs. Amina Hassan', role: 'Parent, Nursery Division', initial: 'A' },
  { quote: 'The academic standard here is exceptional. My son\'s performance improved dramatically within one term. The school\'s motto truly reflects how they operate — Learn, Grow, Shine.', name: 'Mr. John Mwangi', role: 'Parent, Primary Division', initial: 'J' },
  { quote: 'What sets New Generation apart is the balance between academics and character development. My children are not just learning — they are growing into confident individuals.', name: 'Mrs. Grace Kimani', role: 'Parent, Primary Division', initial: 'G' },
  { quote: 'The environment is safe and nurturing. As a parent, I have complete peace of mind knowing my children are in such capable and caring hands every day.', name: 'Mr. David Osei', role: 'Parent, Nursery Division', initial: 'D' },
];

const TESTIMONIALS_SW = [
  { quote: 'Shule ya New Generation imebadilisha binti yangu kabisa. Walimu wanajitolea, wanajali, na kweli wanawekeza katika mafanikio ya kila mtoto.', name: 'Bi. Amina Hassan', role: 'Mzazi, Kitengo cha Chekechea', initial: 'A' },
  { quote: 'Kiwango cha kitaaluma hapa ni cha kipekee. Utendaji wa mwanangu uliboreshwa sana ndani ya muhula mmoja. Kauli mbiu ya shule inaonyesha jinsi wanavyofanya kazi.', name: 'Bw. John Mwangi', role: 'Mzazi, Kitengo cha Msingi', initial: 'J' },
  { quote: 'Kinachoweka New Generation mbali ni usawa kati ya masomo na ukuaji wa tabia. Watoto wangu hawajifunzi tu — wanakua kuwa watu wenye ujasiri.', name: 'Bi. Grace Kimani', role: 'Mzazi, Kitengo cha Msingi', initial: 'G' },
  { quote: 'Mazingira ni salama na ya kulelea. Kama mzazi, nina amani kamili ya akili nikijua watoto wangu wako mikononi mwa watu wenye uwezo na wanaojali kila siku.', name: 'Bw. David Osei', role: 'Mzazi, Kitengo cha Chekechea', initial: 'D' },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
    );
    const els = document.querySelectorAll(
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-up'
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    let s = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      s += step;
      if (s >= target) { setCount(target); clearInterval(timer); } else setCount(Math.floor(s));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return { count, ref };
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <div className="stat-number">{count}{suffix}</div>
      <div className="text-sm text-school-muted font-medium mt-1.5 leading-tight">{label}</div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HomePage() {
  const [lang, setLang] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState(0);
  const [rulesLang, setRulesLang] = useState<'en' | 'sw'>('en');
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');
  const t = getTranslations(lang);
  const testimonials = lang === 'sw' ? TESTIMONIALS_SW : TESTIMONIALS_EN;

  useScrollAnimation();

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    setContactError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...contactForm, lang }),
      });
      if (!res.ok) throw new Error('Failed to send');
      setContactSubmitted(true);
      setContactForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setContactError(lang === 'sw' ? 'Hitilafu imetokea. Tafadhali jaribu tena au wasiliana nasi kwa simu.' : 'Something went wrong. Please try again or contact us by phone.');
    } finally {
      setContactSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-school-off-white">
      <Navbar lang={lang} setLang={setLang} activePath="/" />

      {/* HERO */}
      <section id="home" className="relative min-h-screen hero-gradient flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-school-yellow/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-school-green-light/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-hero-pattern opacity-30" />
          <div className="absolute top-28 left-12 w-2.5 h-2.5 bg-school-yellow rounded-full opacity-70 animate-pulse-soft" />
          <div className="absolute top-52 left-24 w-1.5 h-1.5 bg-white rounded-full opacity-40" />
          <div className="absolute bottom-36 right-24 w-3 h-3 bg-school-yellow/60 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-56 right-48 w-1.5 h-1.5 bg-white/50 rounded-full" />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-school-yellow/40 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-white space-y-7 animate-fade-up">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xl border-2 border-school-yellow/50 flex-shrink-0">
                  <Image src="/assets/images/WhatsApp_Image_2026-09-08_at_7.05.23_PM-1788894389720.jpeg" alt="New Generation School Logo" width={56} height={56} className="w-full h-full object-cover" priority />
                </div>
                <div>
                  <p className="font-extrabold text-white text-base leading-tight">New Generation School</p>
                  <p className="text-white/65 text-sm">Nursery &amp; Primary School</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 bg-school-yellow/20 border border-school-yellow/40 text-school-yellow px-4 py-2 rounded-full text-sm font-bold">
                <div className="w-2 h-2 rounded-full bg-school-yellow animate-pulse-soft" />
                {t.hero.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
                {t.hero.headline1}{' '}
                <span className="text-school-yellow relative inline-block">
                  {t.hero.headline2}
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-school-yellow/35 rounded-full" />
                </span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-xl">{t.hero.subtext}</p>
              <div className="flex flex-wrap gap-2.5">
                {[t.hero.badge1, t.hero.badge2, t.hero.badge3, t.hero.badge4].map((b) => (
                  <div key={b} className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-school-yellow" />{b}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/admissions" className="btn-accent text-base px-6 py-3">
                  {t.hero.cta1}<ArrowRightIcon className="w-4 h-4" />
                </Link>
                <a href="#about" className="btn-outline-white text-base px-6 py-3">{t.hero.cta2}</a>
              </div>
              <div className="flex flex-wrap gap-4 pt-1">
                <a href="tel:+255717437788" className="flex items-center gap-2 text-white/75 hover:text-white transition-colors text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><PhoneIcon className="w-4 h-4" /></div>
                  {t.hero.phone}
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-hero aspect-[4/3]">
                <Image src="/assets/images/ChatGPT_Image_Sep_9__2026__08_21_56_AM-1788943777277.png" alt="New Generation School building — a modern and welcoming learning environment" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/55 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2">
                    <p className="text-xs font-bold text-school-green">New Generation School</p>
                    <p className="text-xs text-school-muted">{t.hero.locationLabel}</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-float p-4 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-school-yellow flex items-center justify-center">
                  <TrophyIcon className="w-5 h-5 text-school-foreground" />
                </div>
                <div>
                  <p className="font-extrabold text-sm text-school-foreground">5+</p>
                  <p className="text-xs text-school-muted">{t.hero.yearsLabel}</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-card">
                <Image src="/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788895053341.jpeg" alt="New Generation School classroom" fill className="object-cover" />
              </div>
              <div className="absolute top-1/2 -right-8 bg-school-green text-white rounded-2xl shadow-card p-3 hidden xl:flex flex-col items-center gap-1">
                <StarIcon className="w-5 h-5 text-school-yellow" />
                <p className="text-xs font-bold">98%</p>
                <p className="text-xs opacity-80 text-center leading-tight">Parent<br />Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white border-b border-school-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-school-border">
            <StatCounter value={200} suffix="+" label={t.stats.students} />
            <StatCounter value={20} suffix="+" label={t.stats.teachers} />
            <StatCounter value={5} suffix="+" label={t.stats.years} />
            <StatCounter value={98} suffix="%" label={t.stats.satisfaction} />
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT BANNER */}
      <section className="bg-school-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="pulse-dot flex-shrink-0" />
              <p className="font-bold text-school-foreground text-sm">
                🎓 {lang === 'sw' ? 'Usajili wa 2025/2026 Umefunguliwa — Nafasi Chache Zimebaki!' : 'Admissions 2025/2026 Now Open — Limited Spaces Available!'}
              </p>
            </div>
            <Link href="/admissions" className="flex items-center gap-1.5 bg-school-foreground text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-school-green transition-colors flex-shrink-0">
              {lang === 'sw' ? 'Omba Sasa' : 'Apply Now'}<ArrowRightIcon className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 lg:py-28 bg-school-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 animate-on-scroll-left">
              <div className="section-tag"><AcademicCapIcon className="w-3.5 h-3.5" />{t.about.tag}</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-school-foreground leading-tight">{t.about.title}</h2>
              <p className="text-school-muted leading-relaxed">{t.about.p1}</p>
              <p className="text-school-muted leading-relaxed">{t.about.p2}</p>
              <div className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-school-border shadow-card">
                <div className="w-11 h-11 rounded-xl bg-school-green flex items-center justify-center flex-shrink-0">
                  <ShieldCheckIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm text-school-foreground">{t.about.accredited}</p>
                  <p className="text-xs text-school-muted">{t.about.accreditedSub}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-school-green rounded-2xl p-5 text-white">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mb-3">
                    <LightBulbIcon className="w-4 h-4 text-school-yellow" />
                  </div>
                  <p className="font-bold text-sm mb-2">{t.about.visionTitle}</p>
                  <p className="text-white/80 text-xs leading-relaxed">{t.about.visionText}</p>
                </div>
                <div className="bg-school-yellow rounded-2xl p-5 text-school-foreground">
                  <div className="w-8 h-8 rounded-lg bg-school-foreground/10 flex items-center justify-center mb-3">
                    <HeartIcon className="w-4 h-4 text-school-foreground" />
                  </div>
                  <p className="font-bold text-sm mb-2">{t.about.missionTitle}</p>
                  <p className="text-school-foreground/75 text-xs leading-relaxed">{t.about.missionText}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 animate-on-scroll-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-card relative">
                  <Image src="/assets/images/build-1788890877045.jpeg" alt="New Generation School building exterior with Tanzanian flag" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-card relative">
                  <Image src="/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__1_-1788894589650.jpeg" alt="Students in bright classroom with educational posters" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card relative" style={{ height: '208px' }}>
                <Image src="/assets/images/WhatsApp_Image_2026-09-08_at_7.06.03_PM-1788895054202.jpeg" alt="Students in green uniform at New Generation School campus" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: AcademicCapIcon, title: t.about.feat1Title, sub: t.about.feat1Sub },
                  { icon: UserGroupIcon, title: t.about.feat2Title, sub: t.about.feat2Sub },
                  { icon: ShieldCheckIcon, title: t.about.feat3Title, sub: t.about.feat3Sub },
                  { icon: MapPinIcon, title: t.about.feat4Title, sub: t.about.feat4Sub },
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white rounded-xl p-3 border border-school-border hover:border-school-green transition-colors shadow-card">
                    <div className="w-8 h-8 rounded-lg bg-school-muted/60 flex items-center justify-center flex-shrink-0">
                      <feat.icon className="w-4 h-4 text-school-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs text-school-foreground">{feat.title}</p>
                      <p className="text-xs text-school-muted">{feat.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14 animate-on-scroll">
            <div className="section-tag mx-auto"><StarIcon className="w-3.5 h-3.5" />{lang === 'sw' ? 'Kwa Nini Sisi' : 'Why Choose Us'}</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-school-foreground">{lang === 'sw' ? 'Tunachokifanya Tofauti' : 'What Makes New Generation Different'}</h2>
            <p className="text-school-muted max-w-2xl mx-auto">{lang === 'sw' ? 'Tunatoa elimu bora inayochanganya masomo, tabia, na ukuaji wa kibinafsi.' : 'We deliver quality education that blends academics, character, and personal growth in a safe, nurturing environment.'}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[280px] group bento-card animate-on-scroll">
              <Image src="/assets/images/home_image-1788940686115.png" alt="Students actively learning in a colorful classroom at New Generation School" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-school-green-dark/92 via-school-green-dark/60 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-xl bg-school-yellow flex items-center justify-center mb-4"><AcademicCapIcon className="w-5 h-5 text-school-foreground" /></div>
                <h3 className="text-2xl font-extrabold text-white mb-2">{lang === 'sw' ? 'Mtaala wa NECTA' : 'NECTA-Aligned Curriculum'}</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-md">{lang === 'sw' ? 'Tunafuata mtaala wa Tanzania NECTA ukichanganywa na mbinu za kisasa za kufundishia.' : 'We follow the Tanzania NECTA curriculum enriched with modern teaching methods, practical learning, and critical thinking activities.'}</p>
              </div>
            </div>
            <div className="bg-school-green rounded-3xl p-7 flex flex-col justify-between min-h-[280px] bento-card animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center"><ShieldCheckIcon className="w-6 h-6 text-white" /></div>
              <div>
                <h3 className="text-xl font-extrabold text-white mb-3">{lang === 'sw' ? 'Mazingira Salama' : 'Safe & Secure Campus'}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{lang === 'sw' ? 'Usalama wa watoto wetu ni kipaumbele chetu. Kampasi yetu ina usalama wa hali ya juu.' : 'Our campus is fully secured with controlled entry, supervised play areas, and a caring staff team watching over every child.'}</p>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 w-fit">
                <CheckCircleIcon className="w-4 h-4 text-school-yellow" />
                <span className="text-white text-xs font-semibold">{lang === 'sw' ? 'Salama 24/7' : 'Safe 24/7'}</span>
              </div>
            </div>
            <div className="bg-school-yellow rounded-3xl p-7 bento-card animate-on-scroll" style={{ transitionDelay: '150ms' }}>
              <div className="w-12 h-12 rounded-2xl bg-school-foreground/10 flex items-center justify-center mb-4"><UserGroupIcon className="w-6 h-6 text-school-foreground" /></div>
              <h3 className="text-lg font-extrabold text-school-foreground mb-2">{lang === 'sw' ? 'Walimu Waliohitimu' : 'Qualified Teachers'}</h3>
              <p className="text-school-foreground/70 text-sm leading-relaxed">{lang === 'sw' ? 'Walimu wetu wana uzoefu na wanajitolea kwa mafanikio ya kila mtoto.' : 'Our 20+ dedicated teachers bring passion, expertise, and genuine care to every classroom.'}</p>
            </div>
            <div className="bg-school-off-white border border-school-border rounded-3xl p-7 bento-card animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="w-12 h-12 rounded-2xl bg-school-green/10 flex items-center justify-center mb-4"><ChatBubbleLeftRightIcon className="w-6 h-6 text-school-green" /></div>
              <h3 className="text-lg font-extrabold text-school-foreground mb-2">{lang === 'sw' ? 'Lugha Mbili' : 'Bilingual Education'}</h3>
              <p className="text-school-muted text-sm leading-relaxed">{lang === 'sw' ? 'Masomo yanafanywa kwa Kiingereza na Kiswahili ili kuhakikisha uelewa kamili.' : 'English-medium instruction with Kiswahili support, preparing students for national and global success.'}</p>
            </div>
            <div className="relative rounded-3xl overflow-hidden min-h-[200px] group bento-card animate-on-scroll" style={{ transitionDelay: '250ms' }}>
              <Image src="/assets/images/sch lab.png" alt="Science laboratory with equipment for hands-on student experiments" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2"><BeakerIcon className="w-4 h-4 text-school-yellow" /><span className="text-school-yellow text-xs font-bold uppercase tracking-wider">{lang === 'sw' ? 'Maabara' : 'Science Lab'}</span></div>
                <h3 className="text-lg font-extrabold text-white">{lang === 'sw' ? 'Kujifunza kwa Vitendo' : 'Hands-On Learning'}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS SECTION */}
      <section className="py-20 lg:py-28 bg-school-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll-left">
              <div className="section-tag"><BuildingLibraryIcon className="w-3.5 h-3.5" />{t.campus.tag}</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-school-foreground leading-tight">{t.campus.title}</h2>
              <p className="text-school-muted leading-relaxed">{t.campus.subtitle}</p>
              <div className="flex flex-wrap gap-3">
                {[t.campus.feat1, t.campus.feat2, t.campus.feat3].map((f) => (
                  <div key={f} className="feature-badge"><CheckCircleIcon className="w-3.5 h-3.5" />{f}</div>
                ))}
              </div>
              <Link href="/facilities" className="btn-primary inline-flex">
                {lang === 'sw' ? 'Angalia Vifaa Vyote' : 'Explore All Facilities'}<ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-on-scroll-right">
              <div className="col-span-2 campus-card rounded-2xl overflow-hidden" style={{ height: '220px' }}>
                <Image src="/assets/images/ChatGPT_Image_Sep_9__2026__08_21_56_AM-1788943777277.png" alt="New Generation School main building with colorful garden and Tanzanian flag" fill className="object-cover" />
                <div className="overlay" />
                <div className="info">
                  <div>
                    <p className="text-white font-bold text-sm">{t.campus.main}</p>
                    <p className="text-white/70 text-xs flex items-center gap-1"><MapPinIcon className="w-3 h-3" />{t.campus.mainSub}</p>
                  </div>
                  <div className="expand-btn"><ArrowUpRightIcon className="w-3.5 h-3.5 text-white" /></div>
                </div>
                <div className="absolute top-3 right-3 bg-school-green text-white text-xs font-bold px-2.5 py-1 rounded-full">{t.campus.label}</div>
              </div>
              <div className="campus-card rounded-2xl overflow-hidden" style={{ height: '160px' }}>
                <Image src="/assets/images/ChatGPT_Image_Sep_6__2026__03_39_26_PM-1788890914978.png" alt="Classroom with chalkboard and colorful educational displays" fill className="object-cover" />
                <div className="overlay" />
                <div className="info"><p className="text-white text-xs font-semibold">{t.facilities.classrooms}</p></div>
              </div>
              <div className="campus-card rounded-2xl overflow-hidden" style={{ height: '160px' }}>
                <Image src="/assets/images/sch lab.png" alt="Science lab with equipment for student experiments" fill className="object-cover" />
                <div className="overlay" />
                <div className="info"><p className="text-white text-xs font-semibold">{lang === 'sw' ? 'Maabara ya Sayansi' : 'Science Lab'}</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMICS SECTION */}
      <section id="academics" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 animate-on-scroll">
            <div className="section-tag mx-auto"><BookOpenIcon className="w-3.5 h-3.5" />{t.academics.tag}</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-school-foreground">{t.academics.title}</h2>
            <p className="text-school-muted max-w-2xl mx-auto">{t.academics.subtitle}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-on-scroll">
            {[t.academics.tab1, t.academics.tab2, t.academics.tab3].map((tab, i) => (
              <button key={i} onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${activeTab === i ? 'tab-active' : 'bg-white border border-school-border text-school-muted hover:border-school-green hover:text-school-green'}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center animate-on-scroll">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-card">
              <Image
                src={activeTab === 0 ? '/assets/images/ChatGPT_Image_Sep_6__2026__03_37_04_PM-1788890914979.png' : activeTab === 1 ? '/assets/images/ChatGPT_Image_Sep_6__2026__03_35_32_PM-1788890911576.png' : '/assets/images/ChatGPT_Image_Sep_9__2026__08_15_30_AM-1788941762942.png'}
                alt={activeTab === 0 ? 'Day care children in bright classroom' : activeTab === 1 ? 'Nursery classroom with educational displays' : 'Primary classroom with teacher'}
                fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/50 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                <p className="font-bold text-sm text-school-green">
                  {activeTab === 0 ? t.academics.dayTitle : activeTab === 1 ? t.academics.nurseryTitle : t.academics.primaryTitle}
                </p>
                <p className="text-xs text-school-muted">
                  {activeTab === 0 ? t.academics.dayAge : activeTab === 1 ? t.academics.nurseryAge : t.academics.primaryAge}
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-school-foreground">
                  {activeTab === 0 ? t.academics.dayTitle : activeTab === 1 ? t.academics.nurseryTitle : t.academics.primaryTitle}
                </h3>
                <p className="text-school-yellow font-semibold text-sm mt-1">
                  {activeTab === 0 ? t.academics.dayAge : activeTab === 1 ? t.academics.nurseryAge : t.academics.primaryAge}
                </p>
              </div>
              <p className="text-school-muted leading-relaxed">
                {activeTab === 0 ? t.academics.dayDesc : activeTab === 1 ? t.academics.nurseryDesc : t.academics.primaryDesc}
              </p>
              <div>
                <p className="font-bold text-sm text-school-foreground mb-3">
                  {activeTab === 1 ? t.academics.nurserySubjects : t.academics.primarySubjects}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(activeTab === 0 ? DAYCARE_SUBJECTS : activeTab === 1 ? NURSERY_SUBJECTS : PRIMARY_SUBJECTS).map((subj, i) => (
                    <div key={i} className="flex items-center gap-2 bg-school-off-white rounded-lg px-3 py-2 border border-school-border hover:border-school-green transition-colors">
                      <subj.icon className="w-4 h-4 text-school-green flex-shrink-0" />
                      <span className="text-xs font-medium text-school-foreground">{subj.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Link href="/academics" className="btn-primary inline-flex">
                  {lang === 'sw' ? 'Soma Zaidi' : 'Learn More'}<ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link href="/admissions" className="btn-outline inline-flex">
                  {activeTab === 0 ? t.academics.applyDay : activeTab === 1 ? t.academics.applyNursery : t.academics.applyPrimary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-20 lg:py-28 bg-school-green-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="section-tag bg-white/10 border-white/20 text-white"><CameraIcon className="w-3.5 h-3.5" />{t.gallery.tag}</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{t.gallery.title}</h2>
              <p className="text-white/70">{t.gallery.subtitle}</p>
            </div>
            <div className="flex items-center gap-5">
              <div className="text-right">
                <p className="text-3xl font-extrabold text-school-yellow">200+</p>
                <p className="text-white/65 text-xs">{t.gallery.families}</p>
              </div>
              <Link href="/gallery" className="btn-outline-white flex-shrink-0">
                {lang === 'sw' ? 'Tazama Zaidi' : 'View Gallery'}<ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="overflow-hidden mb-4">
          <div className="flex gap-4 animate-scroll-left" style={{ width: 'max-content' }}>
            {[...GALLERY_ITEMS, ...GALLERY_ITEMS].map((item, i) => (
              <div key={i} className="relative w-64 h-44 rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer group">
                <Image src={item.src} alt={item.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="absolute bottom-2 left-3 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-right" style={{ width: 'max-content' }}>
            {[...GALLERY_ITEMS.slice().reverse(), ...GALLERY_ITEMS.slice().reverse()].map((item, i) => (
              <div key={i} className="relative w-64 h-44 rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer group">
                <Image src={item.src} alt={item.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="absolute bottom-2 left-3 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES SECTION */}
      <section id="facilities" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 animate-on-scroll-left">
              <div className="section-tag"><BuildingLibraryIcon className="w-3.5 h-3.5" />{t.facilities.tag}</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-school-foreground">{t.facilities.title}</h2>
              <p className="text-school-muted max-w-xl">{t.facilities.subtitle}</p>
            </div>
            <Link href="/facilities" className="btn-outline animate-on-scroll-right flex-shrink-0">
              {t.facilities.viewAll}<ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { img: '/assets/images/ChatGPT_Image_Sep_6__2026__03_35_32_PM-1788890911576.png', alt: 'Modern classroom with chalkboard and educational displays', label: t.facilities.classrooms, tag: 'Academic', icon: AcademicCapIcon },
              { img: '/assets/images/sports.png', alt: 'Students in uniform at school sports area', label: t.facilities.sports, tag: 'Athletics', icon: TrophyIcon },
              { img: '/assets/images/sch lab.png', alt: 'Science laboratory with equipment for student experiments', label: lang === 'sw' ? 'Maabara ya Sayansi' : 'Science Lab', tag: 'Science', icon: BeakerIcon },
              { img: '/assets/images/assembly hall.png', alt: 'Teacher with students in well-equipped classroom', label: t.facilities.hall, tag: 'Events', icon: UserGroupIcon },
              { img: '/assets/images/garden.png', alt: 'School garden with colorful plants and decorative animals', label: t.facilities.garden, tag: 'Outdoor', icon: SparklesIcon },
              { img: '/assets/images/new-gen_schoo_l_bus-1788940178107.png', alt: 'Yellow school van for student transport', label: t.facilities.transport, tag: 'Transport', icon: TruckIcon },
            ].map((fac, i) => (
              <div key={i} className="facility-card animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative aspect-video">
                  <Image src={fac.img} alt={fac.alt} fill className="object-cover" />
                  <div className="overlay" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-school-yellow text-school-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                    <fac.icon className="w-3 h-3" />{fac.tag}
                  </div>
                  <h3 className="absolute bottom-3 left-3 text-white font-bold text-sm">{fac.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOOL VALUES */}
      <section className="py-16 bg-school-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{lang === 'sw' ? 'Maadili Yetu ya Shule' : 'Our School Values'}</h2>
            <p className="text-white/65 text-sm mt-2">{lang === 'sw' ? 'Misingi inayotuongoza kila siku' : 'The principles that guide us every day'}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: AcademicCapIcon, label: lang === 'sw' ? 'Ubora' : 'Excellence' },
              { icon: HeartIcon, label: lang === 'sw' ? 'Huruma' : 'Compassion' },
              { icon: ShieldCheckIcon, label: lang === 'sw' ? 'Uadilifu' : 'Integrity' },
              { icon: UserGroupIcon, label: lang === 'sw' ? 'Ushirikiano' : 'Teamwork' },
              { icon: LightBulbIcon, label: lang === 'sw' ? 'Ubunifu' : 'Creativity' },
              { icon: HandRaisedIcon, label: lang === 'sw' ? 'Heshima' : 'Respect' },
            ].map((val, i) => (
              <div key={i} className="flex flex-col items-center gap-3 bg-white/10 rounded-2xl p-5 text-center hover:bg-white/20 transition-colors animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-school-yellow/20 flex items-center justify-center">
                  <val.icon className="w-6 h-6 text-school-yellow" />
                </div>
                <span className="text-white font-bold text-sm">{val.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="py-20 lg:py-28 bg-school-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14 animate-on-scroll">
            <div className="section-tag mx-auto"><UserGroupIcon className="w-3.5 h-3.5" />{t.leadership.tag}</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-school-foreground">{t.leadership.title}</h2>
            <p className="text-school-muted max-w-2xl mx-auto">{t.leadership.subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
            {LEADERSHIP.slice(0, 2).map((leader, i) => (
              <div key={i} className="leadership-card flex-1 max-w-xs mx-auto sm:mx-0 animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className={`w-16 h-16 rounded-2xl ${leader.color} flex items-center justify-center text-2xl mx-auto mb-4`}>{leader.icon}</div>
                <p className="font-bold text-school-foreground">{t.leadership[leader.key as keyof typeof t.leadership]}</p>
                <p className="text-xs text-school-muted mt-1">{t.leadership[`${leader.key}Sub` as keyof typeof t.leadership]}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
            {LEADERSHIP.slice(2, 5).map((leader, i) => (
              <div key={i} className="leadership-card animate-on-scroll" style={{ transitionDelay: `${(i + 2) * 100}ms` }}>
                <div className={`w-12 h-12 rounded-xl ${leader.color} flex items-center justify-center text-xl mx-auto mb-3`}>{leader.icon}</div>
                <p className="font-bold text-sm text-school-foreground">{t.leadership[leader.key as keyof typeof t.leadership]}</p>
                <p className="text-xs text-school-muted mt-1">{t.leadership[`${leader.key}Sub` as keyof typeof t.leadership]}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {LEADERSHIP.slice(5, 8).map((leader, i) => (
              <div key={i} className="leadership-card animate-on-scroll" style={{ transitionDelay: `${(i + 5) * 100}ms` }}>
                <div className={`w-12 h-12 rounded-xl ${leader.color} flex items-center justify-center text-xl mx-auto mb-3`}>{leader.icon}</div>
                <p className="font-bold text-sm text-school-foreground">{t.leadership[leader.key as keyof typeof t.leadership]}</p>
                <p className="text-xs text-school-muted mt-1">{t.leadership[`${leader.key}Sub` as keyof typeof t.leadership]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RULES SECTION */}
      <section id="rules" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div className="space-y-3 animate-on-scroll-left">
              <div className="section-tag"><ShieldCheckIcon className="w-3.5 h-3.5" />{t.rules.tag}</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-school-foreground">{t.rules.title}</h2>
              <p className="text-school-muted max-w-xl">{t.rules.subtitle}</p>
            </div>
            <div className="flex gap-2 animate-on-scroll-right">
              <button onClick={() => setRulesLang('en')} className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${rulesLang === 'en' ? 'tab-active' : 'bg-school-muted/60 text-school-muted hover:text-school-green'}`}>{t.rules.english}</button>
              <button onClick={() => setRulesLang('sw')} className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${rulesLang === 'sw' ? 'tab-active' : 'bg-school-muted/60 text-school-muted hover:text-school-green'}`}>{t.rules.kiswahili}</button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {(rulesLang === 'en' ? RULES_EN : RULES_SW).map((rule: string, i: number) => {
              const Icon = RULE_ICONS[i] || CheckCircleIcon;
              return (
                <div key={i} className="rule-item animate-on-scroll" style={{ transitionDelay: `${i * 35}ms` }}>
                  <div className="w-8 h-8 rounded-full bg-school-green text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                  <div className="flex items-start gap-2 flex-1">
                    <Icon className="w-4 h-4 text-school-green flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-school-foreground leading-relaxed">{rule}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-school-muted/60 rounded-2xl p-5 flex items-start gap-3 border border-school-border">
            <ShieldCheckIcon className="w-5 h-5 text-school-green flex-shrink-0 mt-0.5" />
            <p className="text-sm text-school-muted">{t.rules.footer}</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-school-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 animate-on-scroll">
            <div className="section-tag mx-auto"><StarIcon className="w-3.5 h-3.5" />{t.testimonials.tag}</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-school-foreground">{t.testimonials.title}</h2>
            <p className="text-school-muted">{t.testimonials.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((item, i) => (
              <div key={i} className="testimonial-card animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <StarIcon key={s} className="w-4 h-4 text-school-yellow fill-school-yellow" style={{ fill: 'var(--accent)' }} />
                  ))}
                </div>
                <p className="text-sm text-school-muted leading-relaxed mb-4 flex-1">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-3 border-t border-school-border">
                  <div className="w-10 h-10 rounded-full bg-school-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{item.initial}</div>
                  <div>
                    <p className="font-bold text-sm text-school-foreground">{item.name}</p>
                    <p className="text-xs text-school-muted">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSIONS CTA */}
      <section id="admissions" className="py-20 lg:py-28 bg-school-green relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-school-yellow/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll-left">
              <div className="inline-flex items-center gap-2 bg-school-yellow/20 border border-school-yellow/30 text-school-yellow px-4 py-2 rounded-full text-sm font-semibold">
                <SparklesIcon className="w-4 h-4" />{t.admissions.tag}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{t.admissions.title}</h2>
              <p className="text-white/80 leading-relaxed">{t.admissions.subtitle}</p>
              <div className="space-y-3">
                {[
                  { step: '1', text: lang === 'sw' ? 'Jaza fomu ya mtandaoni' : 'Fill the online request form' },
                  { step: '2', text: lang === 'sw' ? 'Shule itawasiliana nawe' : 'School contacts you by SMS/call' },
                  { step: '3', text: lang === 'sw' ? 'Hudhuria mahojiano shuleni' : 'Attend interview at school' },
                  { step: '4', text: lang === 'sw' ? 'Lipa ada ya TZS 20,000 shuleni' : 'Pay TZS 20,000 fee physically' },
                ].map((s) => (
                  <div key={s.step} className="admission-step">
                    <div className="w-7 h-7 rounded-full bg-school-yellow text-school-foreground text-xs font-extrabold flex items-center justify-center flex-shrink-0">{s.step}</div>
                    <p className="text-white/90 text-sm">{s.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4 border border-white/20">
                <CheckCircleIcon className="w-5 h-5 text-school-yellow flex-shrink-0" />
                <p className="text-white font-semibold text-sm">{t.admissions.feeLabel}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/admissions" className="btn-accent">{t.admissions.applyOnline}<ArrowRightIcon className="w-4 h-4" /></Link>
                <a href="#contact" className="btn-outline-white">{t.admissions.contactUs}</a>
              </div>
            </div>
            <div className="relative animate-on-scroll-right">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-hero">
                <Image src="/assets/images/ChatGPT_Image_Sep_6__2026__03_43_29_PM-1788890914868.png" alt="Students in green uniform standing by yellow school van at New Generation School" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/40 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2">
                  <p className="text-xs font-bold text-school-green">🎓 {t.admissions.enrollLabel}</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-card p-4 max-w-[180px]">
                <p className="font-bold text-xs text-school-green mb-2 flex items-center gap-1">
                  <DocumentTextIcon className="w-3.5 h-3.5" />{lang === 'sw' ? 'Mahitaji' : 'Requirements'}
                </p>
                {['Birth Certificate', 'Photos (2)', 'Parent ID'].map((r) => (
                  <div key={r} className="flex items-center gap-1.5 text-xs text-school-muted py-0.5">
                    <CheckCircleIcon className="w-3 h-3 text-school-green flex-shrink-0" />{r}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 animate-on-scroll">
            <div className="section-tag mx-auto"><PhoneIcon className="w-3.5 h-3.5" />{t.contact.tag}</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-school-foreground">{t.contact.title}</h2>
            <p className="text-school-muted max-w-xl mx-auto">{t.contact.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { icon: PhoneIcon, title: t.contact.phone, lines: ['+255 717 437 788', '+255 767 539 963'], href: 'tel:+255717437788', color: 'bg-school-green', textColor: 'text-white' },
              { icon: EnvelopeIcon, title: t.contact.email, lines: ['newgeneration1420@gmail.com'], href: 'mailto:newgeneration1420@gmail.com', color: 'bg-school-yellow', textColor: 'text-school-foreground' },
              { icon: MapPinIcon, title: t.contact.location, lines: [t.contact.locationText], href: 'https://maps.google.com/?q=Tabata+Changombe+Dar+es+Salaam', color: 'bg-school-green', textColor: 'text-white' },
              { icon: SparklesIcon, title: t.contact.social, lines: ['@newgeneration_school'], href: 'https://instagram.com/newgeneration_school', color: 'bg-school-yellow', textColor: 'text-school-foreground' },
            ].map((item, i) => (
              <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="contact-card animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-5 h-5 ${item.textColor}`} />
                </div>
                <p className="font-bold text-sm text-school-foreground mb-2">{item.title}</p>
                {item.lines.map((line, j) => <p key={j} className="text-xs text-school-muted">{line}</p>)}
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 animate-on-scroll">
            <div className="bg-school-green-dark rounded-3xl p-8 text-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-school-yellow flex items-center justify-center mb-6">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-school-foreground" />
                </div>
                <h3 className="text-2xl font-extrabold mb-3">{lang === 'sw' ? 'Wasiliana Nasi' : 'Send Us a Message'}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-8">{lang === 'sw' ? 'Una maswali kuhusu shule yetu? Jaza fomu hii na tutakujibu haraka iwezekanavyo.' : 'Have questions about our school? Fill in the form and we\'ll get back to you as soon as possible.'}</p>
                <div className="space-y-4">
                  {[
                    { icon: PhoneIcon, label: '+255 717 437 788 / +255 767 539 963' },
                    { icon: EnvelopeIcon, label: 'newgeneration1420@gmail.com' },
                    { icon: MapPinIcon, label: 'Tabata Chang\'ombe, Ilala, Dar es Salaam' },
                    { icon: ClockIcon, label: lang === 'sw' ? 'Jumatatu–Ijumaa: 7:00 – 17:00' : 'Mon–Fri: 7:00 AM – 5:00 PM' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-school-yellow" />
                      </div>
                      <span className="text-white/80 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-school-yellow font-bold text-sm tracking-wider">LEARN · GROW · SHINE</p>
              </div>
            </div>
            <div className="bg-school-surface rounded-3xl p-8 border border-school-border shadow-card">
              {contactSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-school-green/10 flex items-center justify-center mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-school-green" />
                  </div>
                  <h3 className="text-xl font-extrabold text-school-foreground mb-2">{lang === 'sw' ? 'Ujumbe Umetumwa!' : 'Message Sent!'}</h3>
                  <p className="text-school-muted text-sm mb-6">{lang === 'sw' ? 'Asante kwa kuwasiliana nasi. Tutakujibu hivi karibuni.' : 'Thank you for reaching out. We\'ll get back to you shortly.'}</p>
                  <button onClick={() => setContactSubmitted(false)} className="btn-primary text-sm">{lang === 'sw' ? 'Tuma Ujumbe Mwingine' : 'Send Another Message'}</button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <h3 className="text-lg font-extrabold text-school-foreground mb-1">{lang === 'sw' ? 'Fomu ya Mawasiliano' : 'Inquiry Form'}</h3>
                  <p className="text-school-muted text-xs mb-4">{lang === 'sw' ? 'Sehemu zenye * zinahitajika' : 'Fields marked * are required'}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-school-foreground mb-1.5">{lang === 'sw' ? 'Jina Kamili' : 'Full Name'} *</label>
                      <input type="text" name="name" required value={contactForm.name} onChange={(e) => setContactForm((p) => ({ ...p, name: e.target.value }))} placeholder={lang === 'sw' ? 'Jina lako kamili' : 'Your full name'} className="w-full px-4 py-2.5 rounded-xl border border-school-border bg-white text-school-foreground text-sm focus:outline-none focus:ring-2 focus:ring-school-green/30 focus:border-school-green transition-colors placeholder:text-school-muted/50" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-school-foreground mb-1.5">{lang === 'sw' ? 'Nambari ya Simu' : 'Phone Number'}</label>
                      <input type="tel" name="phone" value={contactForm.phone} onChange={(e) => setContactForm((p) => ({ ...p, phone: e.target.value }))} placeholder="+255 7XX XXX XXX" className="w-full px-4 py-2.5 rounded-xl border border-school-border bg-white text-school-foreground text-sm focus:outline-none focus:ring-2 focus:ring-school-green/30 focus:border-school-green transition-colors placeholder:text-school-muted/50" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-school-foreground mb-1.5">{lang === 'sw' ? 'Barua Pepe' : 'Email Address'}</label>
                    <input type="email" name="email" value={contactForm.email} onChange={(e) => setContactForm((p) => ({ ...p, email: e.target.value }))} placeholder={lang === 'sw' ? 'barua.pepe@mfano.com' : 'your@email.com'} className="w-full px-4 py-2.5 rounded-xl border border-school-border bg-white text-school-foreground text-sm focus:outline-none focus:ring-2 focus:ring-school-green/30 focus:border-school-green transition-colors placeholder:text-school-muted/50" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-school-foreground mb-1.5">{lang === 'sw' ? 'Mada' : 'Subject'} *</label>
                    <select name="subject" required value={contactForm.subject} onChange={(e) => setContactForm((p) => ({ ...p, subject: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-school-border bg-white text-school-foreground text-sm focus:outline-none focus:ring-2 focus:ring-school-green/30 focus:border-school-green transition-colors">
                      <option value="">{lang === 'sw' ? 'Chagua mada...' : 'Select a subject...'}</option>
                      <option value="Admissions Inquiry">{lang === 'sw' ? 'Maswali ya Usajili' : 'Admissions Inquiry'}</option>
                      <option value="Fees & Payments">{lang === 'sw' ? 'Ada na Malipo' : 'Fees & Payments'}</option>
                      <option value="Academic Programs">{lang === 'sw' ? 'Programu za Masomo' : 'Academic Programs'}</option>
                      <option value="School Facilities">{lang === 'sw' ? 'Vifaa vya Shule' : 'School Facilities'}</option>
                      <option value="General Inquiry">{lang === 'sw' ? 'Swali la Jumla' : 'General Inquiry'}</option>
                      <option value="Other">{lang === 'sw' ? 'Nyingine' : 'Other'}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-school-foreground mb-1.5">{lang === 'sw' ? 'Ujumbe Wako' : 'Your Message'} *</label>
                    <textarea name="message" required rows={4} value={contactForm.message} onChange={(e) => setContactForm((p) => ({ ...p, message: e.target.value }))} placeholder={lang === 'sw' ? 'Andika ujumbe wako hapa...' : 'Write your message here...'} className="w-full px-4 py-2.5 rounded-xl border border-school-border bg-white text-school-foreground text-sm focus:outline-none focus:ring-2 focus:ring-school-green/30 focus:border-school-green transition-colors placeholder:text-school-muted/50 resize-none" />
                  </div>
                  {contactError && <p className="text-red-600 text-xs bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">{contactError}</p>}
                  <button type="submit" disabled={contactSubmitting} className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                    {contactSubmitting ? (
                      <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>{lang === 'sw' ? 'Inatuma...' : 'Sending...'}</>
                    ) : (
                      <><EnvelopeIcon className="w-4 h-4" />{lang === 'sw' ? 'Tuma Ujumbe' : 'Send Message'}</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-school-border shadow-card animate-on-scroll">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.0!2d39.2083!3d-6.8235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b0000000001%3A0x0!2sTabata+Chang'ombe%2C+Dar+es+Salaam!5e0!3m2!1sen!2stz!4v1700000000000" width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={t.contact.mapTitle} />
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
