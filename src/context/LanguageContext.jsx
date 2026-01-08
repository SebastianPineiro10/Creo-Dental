import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../translations/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const defaultLang = localStorage.getItem("lang") || "es";
  const [lang, setLang] = useState(defaultLang);

  const changeLanguage = (code) => {
    setLang(code);
    localStorage.setItem("lang", code);
  };

  const t = (key) => translations[lang]?.[key] || key;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
