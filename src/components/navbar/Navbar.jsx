import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import "./navbar.css";

function Navbar() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setIsDropdownOpen(false), 120);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  return (
    <nav className="navbar" key={location.pathname}>
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dcerhiol0/image/upload/v1767643773/WhatsApp_Image_2026-01-05_at_12.11.19_1_-Photoroom_zwyueq.png"
              alt="Logo Creo Dental"
              className="logo-img"
            />
          </Link>
        </div>

        {/* LINKS DESKTOP */}
        <ul className="navbar-links">
          <li><Link to="/services">Servicios</Link></li>

          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="dropdown-toggle">Sucursales ▾</span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/sucursal/juarez" className="dropdown-item">Clínica Juárez</Link>
                {/*<Link to="/sucursal/americas" className="dropdown-item">Clínica Américas</Link>*/}
              </div>
            )}
          </li>

          <li><Link to="/especialistas">Especialistas</Link></li>
          <li><Link to="/aseguranzas">Aseguranzas</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>

        {/* MENÚ HAMBURGUESA */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menú">
          {isMenuOpen ? <X size={28} color="#b88a1a" /> : <Menu size={28} color="#b88a1a" />}
        </button>

      </div>

      {/* MENÚ MÓVIL */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Servicios</Link></li>
          <li><Link to="/sucursal/juarez" onClick={toggleMenu}>Clínica Juárez</Link></li>
          {/*<li><Link to="/sucursal/americas" onClick={toggleMenu}>Clínica Américas</Link></li>*/}
          <li><Link to="/especialistas" onClick={toggleMenu}>Especialistas</Link></li>
          <li><Link to="/aseguranzas" onClick={toggleMenu}>Aseguranzas</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contacto</Link></li>
          <li>
            <a
              href="https://wa.me/526563116130"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;