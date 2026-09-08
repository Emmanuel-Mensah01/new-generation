'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations, type Language } from '../../lib/i18n';
import {
  AcademicCapIcon,
  PhoneIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  SparklesIcon,
  DocumentTextIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  PhoneArrowUpRightIcon,
  ShieldCheckIcon,
  XMarkIcon,
  Bars3Icon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

const IMGS = {
  logo:      '/assets/images/WhatsApp_Image_2026-09-08_at_7.05.23_PM-1788894389720.jpeg',
  building:  '/assets/images/WhatsApp_Image_2026-09-08_at_7.05.57_PM-1788894591347.jpeg',
  classroom1: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__1_-1788894589650.jpeg',
  classroom2: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788894592616.jpeg',
  classroom3: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM-1788894592396.jpeg',
  students:   '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__1_-1788894589650.jpeg',
  scienceLab: '/assets/images/WhatsApp_Image_2026-09-08_at_7.06.02_PM__2_-1788894592616.jpeg',
};

const SCHOOL_IMAGES = IMGS;

interface FormData {
  parentName: string;
  childName: string;
  phone: string;
  grade: string;
  date: string;
  time: string;
  notes: string;
}

export default function AdmissionsPage() {
  const [lang, setLang] = useState<Language>('en');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const t = getTranslations(lang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [form, setForm] = useState<FormData>({
    parentName: '',
    childName: '',
    phone: '',
    grade: '',
    date: '',
    time: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/send-admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang }),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setSubmitError(
        lang === 'sw' ?'Hitilafu imetokea. Tafadhali jaribu tena au wasiliana nasi kwa simu.' :'Something went wrong. Please try again or contact us by phone.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/academics', label: t.nav.academics },
    { href: '/facilities', label: t.nav.facilities },
    { href: '/gallery', label: lang === 'sw' ? 'Picha' : 'Gallery' },
    { href: '/rules', label: t.nav.rules },
    { href: '/admissions', label: t.nav.admissions },
    { href: '/#contact', label: t.nav.contact },
  ];

  const PROCESS_STEPS = [
    { icon: '🌐', title: t.admissions.step1, desc: t.admissions.step1Desc },
    { icon: '📝', title: t.admissions.step2, desc: t.admissions.step2Desc },
    { icon: '📱', title: t.admissions.step3, desc: t.admissions.step3Desc },
    { icon: '🤝', title: t.admissions.step4, desc: t.admissions.step4Desc },
    { icon: '✅', title: t.admissions.step5, desc: t.admissions.step5Desc },
  ];

  const REQUIREMENTS = [
    t.admissions.req1,
    t.admissions.req2,
    t.admissions.req3,
    t.admissions.req4,
    t.admissions.req5,
    t.admissions.req6,
  ];

  const GRADES = lang === 'sw'
    ? ['Huduma ya Mchana (Umri 2–3)', 'Baby Class (Umri 3)', 'Middle Class (Umri 4)', 'Top Class (Umri 5)', 'Darasa la 1', 'Darasa la 2', 'Darasa la 3', 'Darasa la 4', 'Darasa la 5', 'Darasa la 6', 'Darasa la 7']
    : ['Day Care (Ages 2–3)', 'Baby Class (Age 3)', 'Middle Class (Age 4)', 'Top Class (Age 5)', 'Standard 1', 'Standard 2', 'Standard 3', 'Standard 4', 'Standard 5', 'Standard 6', 'Standard 7'];

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
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${link.href === '/admissions' ? 'text-school-green bg-school-muted font-bold' : 'text-school-foreground hover:text-school-green hover:bg-school-muted/60'}`}>
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
              <button className="lg:hidden p-2 rounded-lg hover:bg-school-muted/60 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
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

      {/* HERO */}
      <section className="relative hero-gradient pt-[104px] lg:pt-[120px] pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-school-yellow/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 bg-school-yellow/20 border border-school-yellow/30 text-school-yellow px-4 py-2 rounded-full text-sm font-semibold">
                <SparklesIcon className="w-4 h-4" />
                {t.admissions.tag}
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                {t.admissions.pageTitle}
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">{t.admissions.pageSubtitle}</p>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4 border border-white/20">
                <CheckCircleIcon className="w-5 h-5 text-school-yellow flex-shrink-0" />
                <p className="text-white font-semibold text-sm">{t.admissions.feeLabel}</p>
              </div>
              <div className="flex items-center gap-3">
                <a href="tel:+255717437788" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                  <PhoneIcon className="w-4 h-4" />
                  +255 717 437788
                </a>
                <span className="text-white/30">|</span>
                <a href="tel:+255767539963" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                  <PhoneIcon className="w-4 h-4" />
                  +255 767 539 963
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-hero">
              <Image
                src={SCHOOL_IMAGES.students}
                alt="Students in green uniform standing by yellow school van at New Generation School"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <div className="section-tag mx-auto">
              <DocumentTextIcon className="w-3.5 h-3.5" />
              {t.admissions.processTitle}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-school-foreground">{t.admissions.processTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={i}
                className={`relative text-center cursor-pointer transition-all ${activeStep === i ? 'scale-105' : ''}`}
                onClick={() => setActiveStep(i)}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 transition-all ${activeStep === i ? 'bg-school-green shadow-btn' : 'bg-school-muted hover:bg-school-green/20'}`}>
                  {step.icon}
                </div>
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeStep === i ? 'bg-school-yellow text-school-foreground' : 'bg-school-border text-school-muted'}`}>
                  {i + 1}
                </div>
                <p className="font-bold text-sm text-school-foreground mb-1">{step.title}</p>
                <p className="text-xs text-school-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: Form + Requirements */}
      <section className="py-16 bg-school-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-school-border shadow-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-school-green flex items-center justify-center">
                    <DocumentTextIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-xl text-school-foreground">{t.admissions.formTitle}</h2>
                    <p className="text-xs text-school-muted">{t.admissions.formSubtitle}</p>
                  </div>
                </div>

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-20 h-20 rounded-full bg-school-green/10 flex items-center justify-center mx-auto">
                      <CheckCircleIcon className="w-10 h-10 text-school-green" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-school-foreground">{t.admissions.successTitle}</h3>
                    <p className="text-school-muted max-w-md mx-auto">{t.admissions.successMsg}</p>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                      <button onClick={() => { setSubmitted(false); setForm({ parentName: '', childName: '', phone: '', grade: '', date: '', time: '', notes: '' }); }} className="btn-outline">
                        {lang === 'sw' ? 'Wasilisha Ombi Jingine' : 'Submit Another Request'}
                      </button>
                      <Link href="/" className="btn-primary">
                        <ArrowLeftIcon className="w-4 h-4" />
                        {t.nav.home}
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Parent Name */}
                      <div>
                        <label className="block text-sm font-semibold text-school-foreground mb-1.5">
                          {t.admissions.parentName} <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-school-muted" />
                          <input type="text" name="parentName" value={form.parentName} onChange={handleChange} required placeholder={lang === 'sw' ? 'Jina lako kamili' : 'Your full name'} className="w-full pl-10 pr-4 py-3 rounded-xl border border-school-border bg-school-off-white text-sm text-school-foreground placeholder:text-school-muted focus:outline-none focus:border-school-green focus:ring-2 focus:ring-school-green/20 transition-all" />
                        </div>
                      </div>
                      {/* Child Name */}
                      <div>
                        <label className="block text-sm font-semibold text-school-foreground mb-1.5">
                          {t.admissions.childName} <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <AcademicCapIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-school-muted" />
                          <input type="text" name="childName" value={form.childName} onChange={handleChange} required placeholder={lang === 'sw' ? 'Jina la mtoto' : "Child's full name"} className="w-full pl-10 pr-4 py-3 rounded-xl border border-school-border bg-school-off-white text-sm text-school-foreground placeholder:text-school-muted focus:outline-none focus:border-school-green focus:ring-2 focus:ring-school-green/20 transition-all" />
                        </div>
                      </div>
                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-semibold text-school-foreground mb-1.5">
                          {t.admissions.phone} <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-school-muted" />
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+255 7XX XXX XXX" className="w-full pl-10 pr-4 py-3 rounded-xl border border-school-border bg-school-off-white text-sm text-school-foreground placeholder:text-school-muted focus:outline-none focus:border-school-green focus:ring-2 focus:ring-school-green/20 transition-all" />
                        </div>
                      </div>
                      {/* Grade */}
                      <div>
                        <label className="block text-sm font-semibold text-school-foreground mb-1.5">
                          {t.admissions.grade} <span className="text-red-500">*</span>
                        </label>
                        <select name="grade" value={form.grade} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-school-border bg-school-off-white text-sm text-school-foreground focus:outline-none focus:border-school-green focus:ring-2 focus:ring-school-green/20 transition-all">
                          <option value="">{lang === 'sw' ? 'Chagua darasa...' : 'Select grade...'}</option>
                          {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
                        </select>
                      </div>
                      {/* Date */}
                      <div>
                        <label className="block text-sm font-semibold text-school-foreground mb-1.5">
                          {t.admissions.date} <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-school-muted" />
                          <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 rounded-xl border border-school-border bg-school-off-white text-sm text-school-foreground focus:outline-none focus:border-school-green focus:ring-2 focus:ring-school-green/20 transition-all" />
                        </div>
                      </div>
                      {/* Time */}
                      <div>
                        <label className="block text-sm font-semibold text-school-foreground mb-1.5">
                          {t.admissions.time} <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <ClockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-school-muted" />
                          <input type="time" name="time" value={form.time} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 rounded-xl border border-school-border bg-school-off-white text-sm text-school-foreground focus:outline-none focus:border-school-green focus:ring-2 focus:ring-school-green/20 transition-all" />
                        </div>
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-sm font-semibold text-school-foreground mb-1.5">
                        {lang === 'sw' ? 'Maelezo ya Ziada (Hiari)' : 'Additional Notes (Optional)'}
                      </label>
                      <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder={lang === 'sw' ? 'Maelezo yoyote ya ziada...' : 'Any additional information...'} className="w-full px-4 py-3 rounded-xl border border-school-border bg-school-off-white text-sm text-school-foreground placeholder:text-school-muted focus:outline-none focus:border-school-green focus:ring-2 focus:ring-school-green/20 transition-all resize-none" />
                    </div>

                    {/* Important note */}
                    <div className="bg-school-yellow/10 border border-school-yellow/30 rounded-xl p-4 flex items-start gap-3">
                      <ShieldCheckIcon className="w-5 h-5 text-school-yellow flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-sm text-school-foreground">{t.admissions.noteTitle}</p>
                        <p className="text-xs text-school-muted mt-1">{t.admissions.noteText}</p>
                      </div>
                    </div>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
                        {submitError}
                      </div>
                    )}

                    <button type="submit" disabled={submitting} className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                      {submitting
                        ? (lang === 'sw' ? 'Inatuma...' : 'Sending...')
                        : t.admissions.submit}
                      {!submitting && <ArrowRightIcon className="w-5 h-5" />}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar: Requirements */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl border border-school-border shadow-card p-6">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircleIcon className="w-5 h-5 text-school-green" />
                  <h3 className="font-extrabold text-lg text-school-foreground">{t.admissions.requirementsTitle}</h3>
                </div>
                <div className="space-y-3">
                  {REQUIREMENTS.map((req, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-school-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircleIcon className="w-3 h-3 text-school-green" />
                      </div>
                      <p className="text-sm text-school-muted">{req}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact card */}
              <div className="bg-school-green rounded-3xl p-6 text-white">
                <h3 className="font-extrabold text-lg mb-4">{lang === 'sw' ? 'Una Maswali?' : 'Have Questions?'}</h3>
                <p className="text-white/80 text-sm mb-5">
                  {lang === 'sw' ? 'Timu yetu iko hapa kukusaidia. Wasiliana nasi kwa simu au WhatsApp.' : 'Our team is here to help. Contact us by phone or WhatsApp.'}
                </p>
                <div className="space-y-3">
                  <a href="tel:+255717437788" className="flex items-center gap-2 text-white/90 hover:text-white text-sm">
                    <PhoneIcon className="w-4 h-4 text-school-yellow" />
                    +255 717 437788
                  </a>
                  <a href="tel:+255767539963" className="flex items-center gap-2 text-white/90 hover:text-white text-sm">
                    <PhoneIcon className="w-4 h-4 text-school-yellow" />
                    +255 767 539 963
                  </a>
                  <a href="https://wa.me/255717437788" className="flex items-center gap-2 text-white/90 hover:text-white text-sm">
                    <PhoneArrowUpRightIcon className="w-4 h-4 text-school-yellow" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* School image */}
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <Image src={SCHOOL_IMAGES.building} alt="New Generation School building exterior" width={400} height={300} className="w-full h-full object-cover" />
              </div>

              {/* Fee note */}
              <div className="bg-school-yellow/10 border border-school-yellow/30 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheckIcon className="w-5 h-5 text-school-yellow" />
                  <p className="font-bold text-sm text-school-foreground">{t.admissions.noteTitle}</p>
                </div>
                <p className="text-xs text-school-muted">{t.admissions.noteText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
