'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AcademicCapIcon, PhoneIcon, CheckCircleIcon, ArrowRightIcon, ArrowLeftIcon, DocumentTextIcon, CalendarIcon, ClockIcon, UserIcon, PhoneArrowUpRightIcon, ShieldCheckIcon,  } from '@heroicons/react/24/outline';
import { getTranslations, type Language } from '@/lib/i18n';

interface FormData {
  parentName: string;
  childName: string;
  phone: string;
  grade: string;
  date: string;
  time: string;
  notes: string;
}

interface ApplicationFormProps {
  lang: Language;
}

export default function ApplicationForm({ lang }: ApplicationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const t = getTranslations(lang);

  const [form, setForm] = useState<FormData>({
    parentName: '', childName: '', phone: '', grade: '', date: '', time: '', notes: '',
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
      setSubmitError(lang === 'sw' ? 'Hitilafu imetokea. Tafadhali jaribu tena au wasiliana nasi kwa simu.' : 'Something went wrong. Please try again or contact us by phone.');
    } finally {
      setSubmitting(false);
    }
  };

  const PROCESS_STEPS = [
    { icon: '🌐', title: t.admissions.step1, desc: t.admissions.step1Desc },
    { icon: '📝', title: t.admissions.step2, desc: t.admissions.step2Desc },
    { icon: '📱', title: t.admissions.step3, desc: t.admissions.step3Desc },
    { icon: '🤝', title: t.admissions.step4, desc: t.admissions.step4Desc },
    { icon: '✅', title: t.admissions.step5, desc: t.admissions.step5Desc },
  ];

  const REQUIREMENTS = [
    t.admissions.req1, t.admissions.req2, t.admissions.req3,
    t.admissions.req4, t.admissions.req5, t.admissions.req6,
  ];

  const GRADES = lang === 'sw'
    ? ['Huduma ya Mchana (Umri 2–3)', 'Baby Class (Umri 3)', 'Middle Class (Umri 4)', 'Top Class (Umri 5)', 'Darasa la 1', 'Darasa la 2', 'Darasa la 3', 'Darasa la 4', 'Darasa la 5', 'Darasa la 6', 'Darasa la 7']
    : ['Day Care (Ages 2–3)', 'Baby Class (Age 3)', 'Middle Class (Age 4)', 'Top Class (Age 5)', 'Standard 1', 'Standard 2', 'Standard 3', 'Standard 4', 'Standard 5', 'Standard 6', 'Standard 7'];

  return (
    <>
      {/* Admission Process */}
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
              <div key={i} className={`relative text-center cursor-pointer transition-all ${activeStep === i ? 'scale-105' : ''}`} onClick={() => setActiveStep(i)}>
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

      {/* Form + Requirements */}
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
                      <div>
                        <label className="block text-sm font-semibold text-school-foreground mb-1.5">{t.admissions.parentName} <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-school-muted" />
                          <input type="text" name="parentName" value={form.parentName} onChange={handleChange} required placeholder={lang === 'sw' ? 'Jina lako kamili' : 'Your full name'} className="w-full pl-10 pr-4 py-3 rounded-xl border border-school-border bg-school-off-white text-sm text-school-foreground placeholder:text-school-muted focus:outline-none focus:border-school-green focus:ring-2 focus:ring-school-green/20 transition-all" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-school-foreground mb-1.5">{t.admissions.childName} <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <AcademicCapIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-school-muted" />
                          <input type="text" name="childName" value={form.childName} onChange={handleChange} required placeholder={lang === 'sw' ? 'Jina la mtoto' : "Child's full name"} className="w-full pl-10 pr-4 py-3 rounded-xl border border-school-border bg-school-off-white text-sm text-school-foreground placeholder:text-school-muted focus:outline-none focus:border-school-green focus:ring-2 focus:ring-school-green/20 transition-all" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-school-foreground mb-1.5">{t.admissions.phone} <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-school-muted" />
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+255 7XX XXX XXX" className="w-full pl-10 pr-4 py-3 rounded-xl border border-school-border bg-school-off-white text-sm text-school-foreground placeholder:text-school-muted focus:outline-none focus:border-school-green focus:ring-2 focus:ring-school-green/20 transition-all" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-school-foreground mb-1.5">{t.admissions.grade} <span className="text-red-500">*</span></label>
                        <select name="grade" value={form.grade} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-school-border bg-school-off-white text-sm text-school-foreground focus:outline-none focus:border-school-green focus:ring-2 focus:ring-school-green/20 transition-all">
                          <option value="">{lang === 'sw' ? 'Chagua darasa...' : 'Select grade...'}</option>
                          {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-school-foreground mb-1.5">{t.admissions.date} <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-school-muted" />
                          <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 rounded-xl border border-school-border bg-school-off-white text-sm text-school-foreground focus:outline-none focus:border-school-green focus:ring-2 focus:ring-school-green/20 transition-all" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-school-foreground mb-1.5">{t.admissions.time} <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <ClockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-school-muted" />
                          <input type="time" name="time" value={form.time} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 rounded-xl border border-school-border bg-school-off-white text-sm text-school-foreground focus:outline-none focus:border-school-green focus:ring-2 focus:ring-school-green/20 transition-all" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-school-foreground mb-1.5">{lang === 'sw' ? 'Maelezo ya Ziada (Hiari)' : 'Additional Notes (Optional)'}</label>
                      <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder={lang === 'sw' ? 'Maelezo yoyote ya ziada...' : 'Any additional information...'} className="w-full px-4 py-3 rounded-xl border border-school-border bg-school-off-white text-sm text-school-foreground placeholder:text-school-muted focus:outline-none focus:border-school-green focus:ring-2 focus:ring-school-green/20 transition-all resize-none" />
                    </div>
                    <div className="bg-school-yellow/10 border border-school-yellow/30 rounded-xl p-4 flex items-start gap-3">
                      <ShieldCheckIcon className="w-5 h-5 text-school-yellow flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-sm text-school-foreground">{t.admissions.noteTitle}</p>
                        <p className="text-xs text-school-muted mt-1">{t.admissions.noteText}</p>
                      </div>
                    </div>
                    {submitError && <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">{submitError}</div>}
                    <button type="submit" disabled={submitting} className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                      {submitting ? (lang === 'sw' ? 'Inatuma...' : 'Sending...') : t.admissions.submit}
                      {!submitting && <ArrowRightIcon className="w-5 h-5" />}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
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

              <div className="bg-school-green rounded-3xl p-6 text-white">
                <h3 className="font-extrabold text-lg mb-4">{lang === 'sw' ? 'Una Maswali?' : 'Have Questions?'}</h3>
                <p className="text-white/80 text-sm mb-5">{lang === 'sw' ? 'Timu yetu iko hapa kukusaidia.' : 'Our team is here to help. Contact us by phone or WhatsApp.'}</p>
                <div className="space-y-3">
                  <a href="tel:+255717437788" className="flex items-center gap-2 text-white/90 hover:text-white text-sm"><PhoneIcon className="w-4 h-4 text-school-yellow" />+255 717 437788</a>
                  <a href="tel:+255767539963" className="flex items-center gap-2 text-white/90 hover:text-white text-sm"><PhoneIcon className="w-4 h-4 text-school-yellow" />+255 767 539 963</a>
                  <a href="https://wa.me/255717437788" className="flex items-center gap-2 text-white/90 hover:text-white text-sm"><PhoneArrowUpRightIcon className="w-4 h-4 text-school-yellow" />WhatsApp</a>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <Image src="/assets/images/WhatsApp_Image_2026-09-08_at_7.05.57_PM-1788894591347.jpeg" alt="New Generation School building exterior" width={400} height={300} className="w-full h-full object-cover" />
              </div>

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
    </>
  );
}
