import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar" key={location.pathname}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dcerhiol0/image/upload/v1759950620/logo-white_peh5mv.png"
              alt="Logo Creo Dental"
              className="logo-img"
            />
          </Link>
        </div>

        {/* Links */}
        <ul className="navbar-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/services">Servicios</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;