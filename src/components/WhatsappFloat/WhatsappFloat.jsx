import { useLocation } from "react-router-dom";
import "./WhatsappFloat.css";

export default function WhatsappFloat({
  phone,
  message = "Hola, me interesa agendar una cita en Creo Dental.",
  position = "rigth",
  bottom = 18,
  ariaLabel = "Chatear por WhatsApp",
  iconUrl = "https://res.cloudinary.com/dcerhiol0/image/upload/v1757132968/whatsapp_jc3tr8.png",
}) {
  const location = useLocation();

  const hideOnRoutes = ["/contacto", "/servicios", /^\/promociones/];
  const shouldHide = hideOnRoutes.some((pattern) =>
    pattern instanceof RegExp
      ? pattern.test(location.pathname)
      : location.pathname === pattern
  );

  if (!phone || shouldHide) return null;

  const encodedMsg = encodeURIComponent(message);
  const href = `https://wa.me/${phone}?text=${encodedMsg}`;
  const sideClass = position === "rigth" ? "wb-rigth" : "wb-rigth";

  return (
    <a
      id="whatsapp-btn"
      className={`whatsapp-float ${sideClass}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      style={{ bottom: `${bottom}px` }}
    >
      <span className="wb-tooltip">¿Necesitas ayuda?</span>
      <img className="wb-icon" src={iconUrl} alt="WhatsApp" />
      <span className="wb-ring" />
      <span className="wb-glow" />
    </a>
  );
}