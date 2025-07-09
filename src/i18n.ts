import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';

i18n
  .use(LanguageDetector) // 👈 importante: detectar idioma desde localStorage o navegador
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: 'es', // si no encuentra ningún idioma válido
    detection: {
      order: ['localStorage', 'navigator'], // primero busca en localStorage, luego en navegador
      caches: ['localStorage'], // guarda el idioma elegido en localStorage
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
