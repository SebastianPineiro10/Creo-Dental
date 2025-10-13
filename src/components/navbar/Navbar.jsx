import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  let closeTimeout;
  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setIsDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => setIsDropdownOpen(false), 120);
  };

  return (
    <nav className="navbar" key={location.pathname}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dcerhiol0/image/upload/v1759950620/logo-white_peh5mv.png"
              alt="Logo Creo Dental"
              className="logo-img"
            />
          </Link>
        </div>

        <ul className="navbar-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/services">Servicios</Link></li>

          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="dropdown-toggle">Sucursales ▾</span>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/sucursal/juarez" className="dropdown-item">
                  Clínica Juárez
                </Link>
                <Link to="/sucursal/americas" className="dropdown-item">
                  Clínica Américas
                </Link>
              </div>
            )}
          </li>

          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;