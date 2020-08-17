import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import fr from './locales/default.json';
import en from './locales/default.en.json';

const resources = {
  fr: {
    translation: fr
  },
  en: {
    translation: en
  }
};

i18n
  .use(detector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "fr",
    fallbackLng: "fr", 

    keySeparator: false, 

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;