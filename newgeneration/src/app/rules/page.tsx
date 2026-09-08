'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  PhoneIcon, EnvelopeIcon, ArrowRightIcon, Bars3Icon, XMarkIcon, ShieldCheckIcon,
  CheckCircleIcon, ClockIcon, UserGroupIcon, SparklesIcon, GlobeAltIcon, HeartIcon,
  MapPinIcon, CalendarIcon, ChevronRightIcon, AcademicCapIcon,
} from '@heroicons/react/24/outline';
import { getTranslations, type Language } from '../../lib/i18n';

const IMGS = {
  logo: '/assets/images/WhatsApp_Image_2026-09-08_at_7.05.23_PM-1788894389720.jpeg',
};

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-up')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const RULES_EN = [
  { icon: CheckCircleIcon, rule: 'All students must attend school regularly.', category: 'Attendance' },
  { icon: ClockIcon, rule: 'Students are required to always be punctual.', category: 'Punctuality' },
  { icon: ClockIcon, rule: 'School starts at 7:30 am.', category: 'Punctuality' },
  { icon: ShieldCheckIcon, rule: 'The school gate will be closed at 9:00 am; pupils who arrive after this time will not be allowed to enter.', category: 'Punctuality' },
  { icon: AcademicCapIcon, rule: 'Students must remain quiet, attentive, and well-behaved during lessons.', category: 'Conduct' },
  { icon: UserGroupIcon, rule: 'Students must wear a neat school uniform and maintain high standards of personal hygiene.', category: 'Uniform' },
  { icon: SparklesIcon, rule: 'Hair plaiting is permitted for girls; boys must keep their hair short and tidy.', category: 'Uniform' },
  { icon: ShieldCheckIcon, rule: 'Students are not allowed to bring valuables or large sums of money to school.', category: 'Safety' },
  { icon: ShieldCheckIcon, rule: 'The use of vulgar or abusive language is strictly prohibited. Any student who steals or engages in fighting that causes serious injury to others may be dismissed from school.', category: 'Conduct' },
  { icon: HeartIcon, rule: 'Students must show respect to teachers, elders, and national as well as school symbols.', category: 'Respect' },
  { icon: MapPinIcon, rule: 'Students must keep the school campus clean and must not damage any school property.', category: 'Campus' },
  { icon: UserGroupIcon, rule: 'Students are responsible for taking care of their personal belongings.', category: 'Responsibility' },
  { icon: MapPinIcon, rule: 'Students are not allowed to leave the school campus during learning hours without permission.', category: 'Safety' },
  { icon: GlobeAltIcon, rule: 'Students are required to speak English while at school.', category: 'Language' },
  { icon: CalendarIcon, rule: 'Students must maintain a minimum of 90% attendance to qualify for promotion to the next class. Any student who is absent for 14 consecutive days without authorization may be removed from the school register, including cases related to non-payment of school fees.', category: 'Attendance' },
];

const RULES_SW = [
  { icon: CheckCircleIcon, rule: 'Wanafunzi wote lazima wahudhirie shule mara kwa mara.', category: 'Mahudhurio' },
  { icon: ClockIcon, rule: 'Wanafunzi wanahitajika kuwa wachapakazi daima.', category: 'Muda' },
  { icon: ClockIcon, rule: 'Shule inaanza saa 1:30 asubuhi.', category: 'Muda' },
  { icon: ShieldCheckIcon, rule: 'Lango la shule litafungwa saa 3:00 asubuhi; wanafunzi wanaofika baada ya wakati huu hawataruhusiwa kuingia.', category: 'Muda' },
  { icon: AcademicCapIcon, rule: 'Wanafunzi lazima wakae kimya, wawe makini, na wawe na tabia nzuri wakati wa masomo.', category: 'Mwenendo' },
  { icon: UserGroupIcon, rule: 'Wanafunzi lazima wavae sare ya shule safi na kudumisha viwango vya juu vya usafi wa kibinafsi.', category: 'Sare' },
  { icon: SparklesIcon, rule: 'Kusuka nywele kunaruhusiwa kwa wasichana; wavulana lazima waweke nywele zao fupi na nadhifu.', category: 'Sare' },
  { icon: ShieldCheckIcon, rule: 'Wanafunzi hawaruhusiwi kuleta vitu vya thamani au pesa nyingi shuleni.', category: 'Usalama' },
  { icon: ShieldCheckIcon, rule: 'Matumizi ya lugha chafu au ya matusi ni marufuku kabisa. Mwanafunzi yeyote anayeiba au kushiriki katika mapigano anaweza kufukuzwa shuleni.', category: 'Mwenendo' },
  { icon: HeartIcon, rule: 'Wanafunzi lazima waheshimu walimu, wazee, na alama za kitaifa na za shule.', category: 'Heshima' },
  { icon: MapPinIcon, rule: 'Wanafunzi lazima waweke kampasi ya shule safi na wasiharibu mali yoyote ya shule.', category: 'Kampasi' },
  { icon: UserGroupIcon, rule: 'Wanafunzi wanawajibika kutunza mali zao za kibinafsi.', category: 'Uwajibikaji' },
  { icon: MapPinIcon, rule: 'Wanafunzi hawaruhusiwi kuondoka kampasi ya shule wakati wa masomo bila ruhusa.', category: 'Usalama' },
  { icon: GlobeAltIcon, rule: 'Wanafunzi wanahitajika kuzungumza Kiingereza wakiwa shuleni.', category: 'Lugha' },
  { icon: CalendarIcon, rule: 'Wanafunzi lazima wadumishe angalau 90% ya mahudhurio ili kustahili kupandishwa darasa. Mwanafunzi yeyote anayekosekana kwa siku 14 mfululizo bila idhini anaweza kuondolewa kwenye rejista ya shule.', category: 'Mahudhurio' },
];

const CATEGORY_COLORS: Record<string, string> = {
  Attendance: 'bg-blue-100 text-blue-700', Mahudhurio: 'bg-blue-100 text-blue-700',
  Punctuality: 'bg-amber-100 text-amber-700', Muda: 'bg-amber-100 text-amber-700',
  Conduct: 'bg-red-100 text-red-700', Mwenendo: 'bg-red-100 text-red-700',
  Uniform: 'bg-purple-100 text-purple-700', Sare: 'bg-purple-100 text-purple-700',
  Safety: 'bg-orange-100 text-orange-700', Usalama: 'bg-orange-100 text-orange-700',
  Respect: 'bg-school-green/10 text-school-green', Heshima: 'bg-school-green/10 text-school-green',
  Campus: 'bg-teal-100 text-teal-700', Kampasi: 'bg-teal-100 text-teal-700',
  Responsibility: 'bg-indigo-100 text-indigo-700', Uwajibikaji: 'bg-indigo-100 text-indigo-700',
  Language: 'bg-pink-100 text-pink-700', Lugha: 'bg-pink-100 text-pink-700',
};

const CATEGORY_ICON_COLORS: Record<string, string> = {
  Attendance: 'bg-blue-100 text-blue-600', Mahudhurio: 'bg-blue-100 text-blue-600',
  Punctuality: 'bg-amber-100 text-amber-600', Muda: 'bg-amber-100 text-amber-600',
  Conduct: 'bg-red-100 text-red-600', Mwenendo: 'bg-red-100 text-red-600',
  Uniform: 'bg-purple-100 text-purple-600', Sare: 'bg-purple-100 text-purple-600',
  Safety: 'bg-orange-100 text-orange-600', Usalama: 'bg-orange-100 text-orange-600',
  Respect: 'bg-school-green/10 text-school-green', Heshima: 'bg-school-green/10 text-school-green',
  Campus: 'bg-teal-100 text-teal-600', Kampasi: 'bg-teal-100 text-teal-600',
  Responsibility: 'bg-indigo-100 text-indigo-600', Uwajibikaji: 'bg-indigo-100 text-indigo-600',
  Language: 'bg-pink-100 text-pink-600', Lugha: 'bg-pink-100 text-pink-600',
};

export default function RulesPage() {
  const [lang, setLang] = useState<Language>('en');
  const [rulesLang, setRulesLang] = useState<'en' | 'sw'>('en');
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
    { href: '/facilities', label: t.nav.facilities },
    { href: '/gallery', label: lang === 'sw' ? 'Picha' : 'Gallery' },
    { href: '/rules', label: t.nav.rules, active: true },
    { href: '/admissions', label: t.nav.admissions },
    { href: '/#contact', label: t.nav.contact },
  ];

  const rules = rulesLang === 'en' ? RULES_EN : RULES_SW;

  const categorySummary = [
    { icon: '📅', label: rulesLang === 'en' ? 'Attendance' : 'Mahudhurio', count: rules.filter(r => r.category === (rulesLang === 'en' ? 'Attendance' : 'Mahudhurio')).length },
    { icon: '⏰', label: rulesLang === 'en' ? 'Punctuality' : 'Muda', count: rules.filter(r => r.category === (rulesLang === 'en' ? 'Punctuality' : 'Muda')).length },
    { icon: '🎓', label: rulesLang === 'en' ? 'Conduct' : 'Mwenendo', count: rules.filter(r => r.category === (rulesLang === 'en' ? 'Conduct' : 'Mwenendo')).length },
    { icon: '👕', label: rulesLang === 'en' ? 'Uniform' : 'Sare', count: rules.filter(r => r.category === (rulesLang === 'en' ? 'Uniform' : 'Sare')).length },
    { icon: '🔒', label: rulesLang === 'en' ? 'Safety' : 'Usalama', count: rules.filter(r => r.category === (rulesLang === 'en' ? 'Safety' : 'Usalama')).length },
    { icon: '🌍', label: rulesLang === 'en' ? 'Language' : 'Lugha', count: rules.filter(r => r.category === (rulesLang === 'en' ? 'Language' : 'Lugha')).length },
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
            <div className="flex items-center gap-2 mb-5">
              <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">{t.nav.home}</Link>
              <ChevronRightIcon className="w-4 h-4 text-white/40" />
              <span className="text-school-yellow text-sm font-semibold">{t.nav.rules}</span>
            </div>
            <div className="max-w-3xl animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
                <ShieldCheckIcon className="w-4 h-4 text-school-yellow" />
                {lang === 'sw' ? 'Kanuni za Shule' : 'School Rules & Policies'}
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
                {lang === 'sw' ? 'Kanuni na' : 'Rules &'}{' '}
                <span className="text-school-yellow">{lang === 'sw' ? 'Taratibu' : 'Regulations'}</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                {lang === 'sw' ?'Wanafunzi wote wanatarajiwa kuzingatia kanuni hizi ili kuhakikisha mazingira salama, ya heshima na ya kuzalisha kwa kila mtu.' :'All students are expected to uphold these rules to ensure a safe, respectful, and productive learning environment for everyone.'}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
                <span className="flex items-center gap-1.5"><ShieldCheckIcon className="w-4 h-4" />{rules.length} {lang === 'sw' ? 'Kanuni' : 'Rules'}</span>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span>{categorySummary.length} {lang === 'sw' ? 'Makundi' : 'Categories'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORY SUMMARY ── */}
        <section className="py-10 bg-white border-b border-school-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
              {categorySummary.map((cat, i) => (
                <div key={cat.label} className="text-center animate-on-scroll-up" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="text-2xl mb-1">{cat.icon}</div>
                  <div className="text-lg font-extrabold text-school-green">{cat.count}</div>
                  <div className="text-xs text-school-muted font-medium">{cat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LANGUAGE SWITCHER ── */}
        <section className="py-5 bg-school-off-white border-b border-school-border sticky top-[88px] lg:top-[104px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-school-muted font-medium">
              {lang === 'sw' ? 'Kanuni zinapatikana kwa Kiingereza na Kiswahili' : 'Rules available in English and Kiswahili'}
            </p>
            <div className="flex items-center gap-1.5 bg-white rounded-xl p-1 border border-school-border shadow-sm">
              <button onClick={() => setRulesLang('en')}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${rulesLang === 'en' ? 'bg-school-green text-white shadow-md' : 'text-school-muted hover:text-school-foreground'}`}>
                🇬🇧 English
              </button>
              <button onClick={() => setRulesLang('sw')}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${rulesLang === 'sw' ? 'bg-school-green text-white shadow-md' : 'text-school-muted hover:text-school-foreground'}`}>
                🇹🇿 Kiswahili
              </button>
            </div>
          </div>
        </section>

        {/* ── IMPORTANT NOTICE ── */}
        <section className="py-6 bg-school-yellow/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 bg-white border border-school-yellow/40 rounded-2xl p-5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-school-yellow flex items-center justify-center flex-shrink-0 text-lg">⚠️</div>
              <div>
                <div className="font-bold text-school-foreground mb-1">
                  {rulesLang === 'en' ? 'Important Notice for Parents & Guardians' : 'Taarifa Muhimu kwa Wazazi na Walezi'}
                </div>
                <p className="text-sm text-school-muted leading-relaxed">
                  {rulesLang === 'en' ?'These rules apply to all students enrolled at New Generation Nursery & Primary School. Parents and guardians are strongly encouraged to review these rules with their children regularly to ensure full understanding and compliance.' :'Kanuni hizi zinatumika kwa wanafunzi wote waliojisajili katika Shule ya Chekechea na Msingi ya New Generation. Wazazi na walezi wanahamasishwa sana kupitia kanuni hizi na watoto wao mara kwa mara kuhakikisha uelewa kamili na uzingatiaji.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── RULES LIST ── */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3">
              {rules.map((item, index) => {
                const iconColor = CATEGORY_ICON_COLORS[item.category] || 'bg-school-muted text-school-green';
                const catColor = CATEGORY_COLORS[item.category] || 'bg-school-muted text-school-muted';
                return (
                  <div key={index}
                    className="animate-on-scroll group flex items-start gap-4 bg-school-off-white rounded-2xl p-5 hover:shadow-md transition-all hover:-translate-y-0.5 border border-school-border/50 hover:border-school-green/20"
                    style={{ transitionDelay: `${(index % 8) * 40}ms` }}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${iconColor}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${catColor}`}>
                          {item.category}
                        </span>
                        <span className="text-xs text-school-muted/60 font-medium flex-shrink-0">#{index + 1}</span>
                      </div>
                      <p className="text-sm text-school-foreground leading-relaxed">{item.rule}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-school-off-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
            <div className="bg-school-green rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="text-4xl mb-4">📋</div>
                <h2 className="text-2xl font-extrabold mb-3">
                  {lang === 'sw' ? 'Una Maswali kuhusu Kanuni?' : 'Questions About Our Rules?'}
                </h2>
                <p className="text-white/75 mb-6 max-w-md mx-auto text-sm">
                  {lang === 'sw' ? 'Wasiliana nasi kwa maswali yoyote kuhusu kanuni au sera za shule.' : 'Contact us for any questions about our school rules or policies.'}
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="tel:+255717437788" className="btn-accent px-6 py-2.5 text-sm">
                    <PhoneIcon className="w-4 h-4" /> +255 717 437 788
                  </a>
                  <Link href="/admissions" className="btn-outline-white px-6 py-2.5 text-sm">
                    {t.nav.applyNow} <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
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
