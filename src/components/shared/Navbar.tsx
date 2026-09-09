'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  PhoneIcon, EnvelopeIcon, Bars3Icon, XMarkIcon, ChevronDownIcon,
  ChevronRightIcon, BookOpenIcon, UserGroupIcon, CameraIcon, HeartIcon,
  SparklesIcon, AcademicCapIcon, BuildingOffice2Icon, BeakerIcon, TruckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { getTranslations, type Language } from '@/lib/i18n';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activePath?: string;
}

export default function Navbar({ lang, setLang, activePath = '/' }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const t = getTranslations(lang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStructure = [
    { href: '/', label: lang === 'sw' ? 'Nyumbani' : 'Home', dropdown: null },
    {
      href: '/about', label: lang === 'sw' ? 'Kuhusu' : 'About',
      dropdown: [
        { href: '/about', label: lang === 'sw' ? 'Hadithi Yetu' : 'Our Story', icon: BookOpenIcon },
        { href: '/about#leadership', label: lang === 'sw' ? 'Uongozi' : 'Leadership', icon: UserGroupIcon },
        { href: '/gallery', label: lang === 'sw' ? 'Picha' : 'Gallery', icon: CameraIcon },
      ],
    },
    {
      href: '/academics', label: t.nav.academics,
      dropdown: [
        { href: '/academics#daycare', label: lang === 'sw' ? 'Huduma ya Watoto' : 'Day Care', icon: HeartIcon },
        { href: '/academics#nursery', label: lang === 'sw' ? 'Chekechea' : 'Nursery Division', icon: SparklesIcon },
        { href: '/academics#primary', label: lang === 'sw' ? 'Shule ya Msingi' : 'Primary Division', icon: AcademicCapIcon },
      ],
    },
    {
      href: '/facilities', label: t.nav.facilities,
      dropdown: [
        { href: '/facilities#classrooms', label: lang === 'sw' ? 'Madarasa' : 'Classrooms', icon: BuildingOffice2Icon },
        { href: '/facilities#lab', label: lang === 'sw' ? 'Maabara' : 'Science Lab', icon: BeakerIcon },
        { href: '/facilities#transport', label: lang === 'sw' ? 'Usafiri' : 'Transport', icon: TruckIcon },
      ],
    },
    { href: '/rules', label: lang === 'sw' ? 'Kanuni' : 'Rules', dropdown: null },
    { href: '/admissions', label: t.nav.admissions, dropdown: null },
    { href: '/#contact', label: t.nav.contact, dropdown: null },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-nav border-b border-school-border`}>
      {/* Top info bar */}
      <div className="hidden lg:block bg-school-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:+255717437788" className="flex items-center gap-1.5 hover:text-school-yellow transition-colors font-medium">
              <PhoneIcon className="w-3 h-3" />+255 717 437 788
            </a>
            <a href="mailto:newgeneration1420@gmail.com" className="flex items-center gap-1.5 hover:text-school-yellow transition-colors">
              <EnvelopeIcon className="w-3 h-3" />newgeneration1420@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-school-yellow font-semibold">
              <ClockIcon className="w-3 h-3" />
              {lang === 'sw' ? 'Shule Inaanza: 7:30 Asubuhi' : 'School Hours: 7:30 AM – 3:00 PM'}
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform flex-shrink-0 border-2 border-school-yellow/30">
              <Image src="/assets/images/WhatsApp_Image_2026-09-08_at_7.05.23_PM-1788894389720.jpeg" alt="New Generation School Logo" width={40} height={40} className="w-full h-full object-cover" priority />
            </div>
            <div>
              <div className="font-extrabold text-sm text-school-green leading-tight">New Generation</div>
              <div className="font-medium text-xs text-school-muted leading-tight">Nursery &amp; Primary School</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navStructure.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${activePath === item.href ? 'text-school-green bg-school-muted font-bold' : 'text-school-foreground hover:text-school-green hover:bg-school-muted/60'}`}>
                    {item.label}
                    <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.href ? 'rotate-180 text-school-green' : 'text-school-muted'}`} />
                  </button>
                ) : (
                  <Link href={item.href} className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all ${activePath === item.href ? 'text-school-green bg-school-muted font-bold' : 'text-school-foreground hover:text-school-green hover:bg-school-muted/60'}`}>
                    {item.label}
                  </Link>
                )}
                {item.dropdown && activeDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-2xl shadow-xl border border-school-border overflow-hidden z-50">
                    <div className="p-2">
                      {item.dropdown.map((sub) => (
                        <Link key={sub.href} href={sub.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-school-foreground hover:bg-school-muted/60 hover:text-school-green transition-all group">
                          <div className="w-7 h-7 rounded-lg bg-school-muted/60 group-hover:bg-school-green/10 flex items-center justify-center flex-shrink-0 transition-colors">
                            <sub.icon className="w-3.5 h-3.5 text-school-green" />
                          </div>
                          <span className="font-medium">{sub.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-school-border px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center gap-3 p-3 bg-school-muted/60 rounded-xl mb-3">
            <PhoneIcon className="w-4 h-4 text-school-green flex-shrink-0" />
            <a href="tel:+255717437788" className="text-sm font-semibold text-school-green">+255 717 437 788</a>
          </div>
          {navStructure.map((item) => (
            <div key={item.href}>
              <Link href={item.href}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-school-foreground hover:bg-school-muted/60 hover:text-school-green transition-colors"
                onClick={() => !item.dropdown && setMobileOpen(false)}>
                {item.label}
                {item.dropdown && <ChevronRightIcon className="w-4 h-4 text-school-muted" />}
              </Link>
              {item.dropdown && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-school-border pl-3">
                  {item.dropdown.map((sub) => (
                    <Link key={sub.href} href={sub.href}
                      className="flex items-center gap-2 py-2 px-2 rounded-lg text-xs font-medium text-school-muted hover:text-school-green transition-colors"
                      onClick={() => setMobileOpen(false)}>
                      <sub.icon className="w-3.5 h-3.5 text-school-green" />
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link href="/admissions" className="btn-accent w-full justify-center" onClick={() => setMobileOpen(false)}>
              {t.nav.applyNow}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
