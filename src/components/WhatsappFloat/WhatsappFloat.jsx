import { useLocation } from "react-router-dom";
import "./WhatsappFloat.css";

/**
 * Botón flotante de WhatsApp (versión Creo Dental / Casa Ojiva)
 * - Misma lógica que MP Innova, con nuevo estilo visual.
 */
export default function WhatsappFloat({
  phone,
  message = "Hola, me interesa agendar una cita en Creo Dental.",
  position = "left",
  bottom = 22,
  ariaLabel = "Chatear por WhatsApp",
  iconUrl = "https://res.cloudinary.com/dcerhiol0/image/upload/v1757132968/whatsapp_jc3tr8.png",
}) {
  const location = useLocation();

  // Ocultar en ciertas rutas
  const hideOnRoutes = ["/contacto", "/servicios", /^\/promociones/];

  const shouldHide = hideOnRoutes.some((pattern) =>
    pattern instanceof RegExp
      ? pattern.test(location.pathname)
      : location.pathname === pattern
  );

  if (!phone || shouldHide) return null;

  const encodedMsg = encodeURIComponent(message);
  const href = `https://wa.me/${phone}?text=${encodedMsg}`;
  const sideClass = position === "left" ? "wb-left" : "wb-right";
  const styleInline = { bottom: `${bottom}px` };

  return (
    <a
      className={`whatsapp-float ${sideClass}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      style={styleInline}
    >
      <span className="wb-tooltip" role="presentation">
        ¿Necesitas ayuda?
      </span>
      <img
        className="wb-icon"
        src={iconUrl}
        alt="WhatsApp"
        width={56}
        height={56}
        loading="lazy"
        decoding="async"
      />
      <span className="wb-ring" aria-hidden="true" />
      <span className="wb-glow" aria-hidden="true" />
    </a>
  );
}