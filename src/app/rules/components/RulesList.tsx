'use client';
import React, { useState } from 'react';
import {
  CheckCircleIcon, ClockIcon, ShieldCheckIcon, UserGroupIcon, SparklesIcon,
  GlobeAltIcon, HeartIcon, MapPinIcon, CalendarIcon, AcademicCapIcon,
} from '@heroicons/react/24/outline';
import { type Language } from '@/lib/i18n';

interface RulesListProps {
  lang: Language;
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
  Respect: 'bg-school-pink/10 text-school-pink', Heshima: 'bg-school-pink/10 text-school-pink',
  Campus: 'bg-teal-100 text-teal-700', Kampasi: 'bg-teal-100 text-teal-700',
  Responsibility: 'bg-indigo-100 text-indigo-700', Uwajibikaji: 'bg-indigo-100 text-indigo-700',
  Language: 'bg-pink-100 text-pink-700', Lugha: 'bg-pink-100 text-pink-700',
};

export { RULES_EN, RULES_SW };

export default function RulesList({ lang }: RulesListProps) {
  const [rulesLang, setRulesLang] = useState<'en' | 'sw'>('en');
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
    <>
      {/* Category Summary */}
      <section className="py-10 bg-white border-b border-school-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
            {categorySummary.map((cat, i) => (
              <div key={cat.label} className="text-center animate-on-scroll-up" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="text-2xl mb-1">{cat.icon}</div>
                <div className="text-lg font-extrabold text-school-pink">{cat.count}</div>
                <div className="text-xs text-gray-500 font-medium">{cat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Switcher */}
      <section className="py-5 bg-school-off-white border-b border-school-border sticky top-[88px] lg:top-[104px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-gray-600 font-medium">
            {lang === 'sw' ? 'Kanuni zinapatikana kwa Kiingereza na Kiswahili' : 'Rules available in English and Kiswahili'}
          </p>
          <div className="flex items-center gap-1.5 bg-white rounded-xl p-1 border border-school-border shadow-sm">
            <button onClick={() => setRulesLang('en')} className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${rulesLang === 'en' ? 'bg-school-pink text-white shadow-md' : 'text-gray-500 hover:text-school-foreground'}`}>
              🇬🇧 English
            </button>
            <button onClick={() => setRulesLang('sw')} className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${rulesLang === 'sw' ? 'bg-school-pink text-white shadow-md' : 'text-gray-500 hover:text-school-foreground'}`}>
              🇹🇿 Kiswahili
            </button>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-6 bg-school-yellow/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 bg-white border border-school-yellow/40 rounded-2xl p-5 shadow-sm">
            <ShieldCheckIcon className="w-6 h-6 text-school-yellow flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-school-foreground mb-1">
                {lang === 'sw' ? 'Taarifa Muhimu' : 'Important Notice'}
              </p>
              <p className="text-sm text-gray-600">
                {lang === 'sw' ?'Kanuni hizi zinatumika kwa wanafunzi wote wa Shule ya New Generation. Wazazi na walezi wanashauriwa kuzisoma pamoja na watoto wao.' :'These rules apply to all students of New Generation School. Parents and guardians are encouraged to read them together with their children.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules List */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {rules.map((item, i) => (
              <div key={i} className="rule-item animate-on-scroll" style={{ transitionDelay: `${i * 35}ms` }}>
                <div className="w-8 h-8 rounded-full bg-school-pink text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                <div className="flex items-start gap-2 flex-1">
                  <item.icon className="w-4 h-4 text-school-pink flex-shrink-0 mt-0.5" />
                  <div>
                    <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-1 ${CATEGORY_COLORS[item.category] || 'bg-gray-100 text-gray-700'}`}>{item.category}</span>
                    <p className="text-sm text-school-foreground leading-relaxed">{item.rule}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-school-muted/60 rounded-2xl p-5 flex items-start gap-3 border border-school-border">
            <ShieldCheckIcon className="w-5 h-5 text-school-pink flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              {lang === 'sw' ?'Kanuni hizi zinaweza kubadilishwa wakati wowote na uongozi wa shule. Wazazi wataarifiwa kuhusu mabadiliko yoyote.' :'These rules may be updated at any time by school management. Parents will be notified of any changes.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}