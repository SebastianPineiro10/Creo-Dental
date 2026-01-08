import "./LanguageSwitchFloat.css";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitchFloat() {
  const { lang, changeLanguage } = useLanguage();

  return (
    <div className="lang-float">
      <button
        className={`lang-btn ${lang === "es" ? "active" : ""}`}
        onClick={() => changeLanguage("es")}
        aria-label="Español"
      >
        <img src="https://flagcdn.com/w20/mx.png" alt="Español" />
      </button>

      <button
        className={`lang-btn ${lang === "en" ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
        aria-label="English"
      >
        <img src="https://flagcdn.com/w20/us.png" alt="English" />
      </button>
    </div>
  );
}
