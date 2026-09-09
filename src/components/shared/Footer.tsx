'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getTranslations, type Language } from '@/lib/i18n';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = getTranslations(lang);

  const quickLinks = [
    { href: '/', label: lang === 'sw' ? 'Nyumbani' : 'Home' },
    { href: '/about', label: lang === 'sw' ? 'Kuhusu' : 'About' },
    { href: '/academics', label: t.nav.academics },
    { href: '/facilities', label: t.nav.facilities },
    { href: '/gallery', label: lang === 'sw' ? 'Picha' : 'Gallery' },
    { href: '/rules', label: lang === 'sw' ? 'Kanuni' : 'Rules' },
    { href: '/admissions', label: t.nav.admissions },
  ];

  const programmes = [
    { href: '/academics#daycare', label: lang === 'sw' ? 'Huduma ya Watoto (Miaka 2–3)' : 'Day Care (Ages 2–3)' },
    { href: '/academics#nursery', label: lang === 'sw' ? 'Chekechea (Miaka 3–5)' : 'Nursery Division (Ages 3–5)' },
    { href: '/academics#primary', label: lang === 'sw' ? 'Shule ya Msingi (Std 1–7)' : 'Primary Division (Std 1–7)' },
    { href: '/admissions', label: lang === 'sw' ? 'Jinsi ya Kuomba' : 'How to Apply' },
    { href: '/facilities', label: lang === 'sw' ? 'Vifaa vya Shule' : 'School Facilities' },
  ];

  return (
    <footer className="bg-school-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-school-yellow/30">
                <Image src="/assets/images/WhatsApp_Image_2026-09-08_at_7.05.23_PM-1788894389720.jpeg" alt="New Generation School Logo" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-extrabold text-sm leading-tight">New Generation School</div>
                <div className="text-white/50 text-xs">Nursery &amp; Primary School</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {lang === 'sw' ? 'Kutoa elimu bora kwa watoto wa Tabata Chang\'ombe na mazingira yake.' : 'Providing quality education for children of Tabata Chang\'ombe and surrounding areas.'}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-school-yellow font-bold text-sm tracking-wider">LEARN · GROW · SHINE</span>
            </div>
            <div className="flex gap-3 pt-1">
              <a href="https://wa.me/255717437788" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-school-yellow hover:text-school-foreground transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
              <a href="tel:+255717437788"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-school-yellow hover:text-school-foreground transition-colors">
                <PhoneIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="font-bold text-white">{lang === 'sw' ? 'Viungo' : 'Quick Links'}</p>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                  <ChevronRightIcon className="w-3 h-3 text-school-yellow" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Programmes */}
          <div className="space-y-4">
            <p className="font-bold text-white">{lang === 'sw' ? 'Programu Zetu' : 'Our Programmes'}</p>
            <div className="space-y-2">
              {programmes.map((link) => (
                <Link key={link.href} href={link.href} className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                  <ChevronRightIcon className="w-3 h-3 text-school-yellow" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-bold text-white">{lang === 'sw' ? 'Wasiliana' : 'Contact'}</p>
            <div className="space-y-3 text-sm text-white/60">
              <a href="tel:+255717437788" className="flex items-center gap-2 hover:text-white transition-colors">
                <PhoneIcon className="w-4 h-4 flex-shrink-0 text-school-yellow" />+255 717 437 788
              </a>
              <a href="tel:+255767539963" className="flex items-center gap-2 hover:text-white transition-colors">
                <PhoneIcon className="w-4 h-4 flex-shrink-0 text-school-yellow" />+255 767 539 963
              </a>
              <a href="mailto:newgeneration1420@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <EnvelopeIcon className="w-4 h-4 flex-shrink-0 text-school-yellow" />newgeneration1420@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPinIcon className="w-4 h-4 flex-shrink-0 mt-0.5 text-school-yellow" />
                <span>Tabata Chang&apos;ombe, Machimbo Ward, Ilala, Dar es Salaam</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} New Generation Nursery &amp; Primary School. All rights reserved.</span>
          <span className="text-school-yellow/60">Learn. Grow. Shine. ✨</span>
        </div>
      </div>
    </footer>
  );
}
