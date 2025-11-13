import { createContext, useContext, useState, useEffect } from "react";

// Idiomas soportados
const SUPPORTED_LANGS = ["es", "en"];

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  // Detectar idioma automáticamente SOLO si no hay uno guardado
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");

    if (savedLang && SUPPORTED_LANGS.includes(savedLang)) {
      setLanguage(savedLang);
      return;
    }

    // Detectar el idioma del navegador
    const browserLang = navigator.language.slice(0, 2);

    if (SUPPORTED_LANGS.includes(browserLang)) {
      setLanguage(browserLang);
    } else {
      setLanguage("es"); // español por defecto
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang); // guardar preferencia del usuario
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}