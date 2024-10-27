export type Language = 'en' | 'es' | 'fr' | 'de' | 'pt';

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const languageNames = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português'
};