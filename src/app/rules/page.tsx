'use client';
import React, { useState, useEffect } from 'react';
import { type Language } from '../../lib/i18n';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import RulesHero from './components/RulesHero';
import RulesList, { RULES_EN } from './components/RulesList';

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

export default function RulesPage() {
  const [lang, setLang] = useState<Language>('en');
  useScrollAnimation();

  const categorySummary = [
    { label: 'Attendance', count: RULES_EN.filter(r => r.category === 'Attendance').length },
    { label: 'Punctuality', count: RULES_EN.filter(r => r.category === 'Punctuality').length },
    { label: 'Conduct', count: RULES_EN.filter(r => r.category === 'Conduct').length },
    { label: 'Uniform', count: RULES_EN.filter(r => r.category === 'Uniform').length },
    { label: 'Safety', count: RULES_EN.filter(r => r.category === 'Safety').length },
    { label: 'Language', count: RULES_EN.filter(r => r.category === 'Language').length },
  ];

  return (
    <div className="min-h-screen font-sans bg-school-off-white">
      <Navbar lang={lang} setLang={setLang} activePath="/rules" />
      <main>
        <RulesHero lang={lang} rulesCount={RULES_EN.length} categoryCount={categorySummary.length} />
        <RulesList lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
