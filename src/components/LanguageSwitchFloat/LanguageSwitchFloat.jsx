import "./LanguageSwitchFloat.css";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitchFloat() {
  const { lang, changeLanguage } = useLanguage();

  return (
    <div className="lang-float">
      {/* Botón México */}
      <button
        className={`lang-btn ${lang === "es" ? "active" : ""}`}
        onClick={() => changeLanguage("es")}
        aria-label="Español"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg"
          alt="Español"
          width="30"
          height="20"
          style={{ borderRadius: "4px" }}
        />
      </button>

      {/* Botón USA */}
      <button
        className={`lang-btn ${lang === "en" ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
        aria-label="English"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
          alt="English"
          width="30"
          height="20"
          style={{ borderRadius: "4px" }}
        />
      </button>
    </div>
  );
}
