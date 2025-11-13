// src/context/LanguageContext.js
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  // Cargar idioma guardado
  useEffect(() => {
    const saved = localStorage.getItem("creoLang");
    if (saved) setLanguage(saved);
  }, []);

  // Guardar automáticamente cuando cambie
  useEffect(() => {
    localStorage.setItem("creoLang", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);