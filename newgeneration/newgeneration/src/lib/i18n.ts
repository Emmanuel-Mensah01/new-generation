import enTranslations from '../locales/en.json';
import swTranslations from '../locales/sw.json';

export type Language = 'en' | 'sw';

export const SUPPORTED_LANGUAGES: { code: Language; label: string; nativeLabel: string }[] = [
  { code: 'en', label: 'English', nativeLabel: 'EN' },
  { code: 'sw', label: 'Kiswahili', nativeLabel: 'SW' },
];

type Translations = typeof enTranslations;

export function getTranslations(language: Language): Translations {
  if (language === 'sw') return swTranslations as unknown as Translations;
  return enTranslations;
}
