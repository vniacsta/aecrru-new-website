import "./Header.css";
import { NavLink } from "react-router-dom";
import { FacebookIcon, InstagramIcon, MenuIcon } from "./icons";

import { useState } from "react";

function Header({ navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const iconSrc = `${import.meta.env.BASE_URL}media/icon.png`;

  return (
    <header className="header">
      <nav className="navbar">
        <NavLink className="navbar-brand" to="/" onClick={closeMenu}>
          <img src={iconSrc} height="40" alt="Logo AECRRU" />
        </NavLink>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <MenuIcon />
        </button>

        <div className={`navbar-panel ${menuOpen ? "is-open" : ""}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? "is-active" : "")}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="social-media">
            <a
              className="nav-social"
              href="https://www.facebook.com/AECRRU"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              className="nav-social"
              href="https://www.instagram.com/aecrru/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
