// src/components/NavbarUsa.jsx
import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import "./navbar.css";

function NavbarUsa() {
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
              alt="Creo Dental Logo"
              className="logo-img"
            />
          </Link>
        </div>

        {/* LINKS DESKTOP */}
        <ul className="navbar-links">
          <li><Link to="/services">Services</Link></li>

          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="dropdown-toggle">Locations ▾</span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/sucursal/juarez-usa" className="dropdown-item">Juárez Clinic</Link>
                {/* <Link to="/sucursal/americas" className="dropdown-item">Américas Clinic</Link> */}
              </div>
            )}
          </li>

          <li><Link to="/especialistas-usa">Specialists</Link></li>
          <li><Link to="/aseguranzas-usa">Insurances</Link></li>
          <li><Link to="/contact-usa">Contact</Link></li>
        </ul>

        {/* MOBILE MENU TOGGLE */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <X size={28} color="#b88a1a" /> : <Menu size={28} color="#b88a1a" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/sucursal/juarez-usa" onClick={toggleMenu}>Juárez Clinic</Link></li>
          {/* <li><Link to="/sucursal/americas" onClick={toggleMenu}>Américas Clinic</Link></li> */}
          <li><Link to="/especialistas-usa" onClick={toggleMenu}>Specialists</Link></li>
          <li><Link to="/aseguranzas-usa" onClick={toggleMenu}>Insurances</Link></li>
          <li><Link to="/contact-usa" onClick={toggleMenu}>Contact</Link></li>
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

export default NavbarUsa;
