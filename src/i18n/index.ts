import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import EN from './locales/en/translation.json';
import RU from './locales/ru/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: EN,
      },
      ru: {
        translation: RU,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    react: {
      useSuspense: false,
    },
  });

export default i18n;
