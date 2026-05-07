import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';
import type { Lang, Translations } from '../i18n/translations';

interface LanguageCtx {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageCtx>({
  lang: 'ar',
  t: translations.ar as unknown as Translations,
  toggleLang: () => {},
  isRTL: true,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('zamba-lang') as Lang) || 'ar';
  });

  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.body.style.fontFamily = isRTL
      ? "'Cairo', 'Segoe UI', -apple-system, sans-serif"
      : "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
    localStorage.setItem('zamba-lang', lang);
  }, [lang, isRTL]);

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'ar' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] as Translations, toggleLang, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
