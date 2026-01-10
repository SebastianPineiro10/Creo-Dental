// src/context/LanguageContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const defaultLang = localStorage.getItem("lang") || "es";
  const [language, setLanguage] = useState(defaultLang);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ✅ Esta línea estaba faltando
export const useLanguage = () => useContext(LanguageContext);
