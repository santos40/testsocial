import { en } from './languages/en';
import { es } from './languages/es';
import { fr } from './languages/fr';
import { de } from './languages/de';
import { pt } from './languages/pt';

export const translations = {
  en,
  es,
  fr,
  de,
  pt,
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;