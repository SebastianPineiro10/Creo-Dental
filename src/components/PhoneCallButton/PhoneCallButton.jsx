import "./PhoneCallButton.css";
import { Phone } from "lucide-react";

function PhoneCallButton({ phone = "+1 915 875-2441. " }) {
  return (
    <a
      href={`tel:${phone}`}
      className="phone-float"
      aria-label="Llamar ahora"
    >
      <Phone size={26} />
    </a>
  );
}

export default PhoneCallButton;