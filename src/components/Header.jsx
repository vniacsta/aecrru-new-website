import { FacebookIcon, InstagramIcon, MenuIcon } from "./icons";

function Header({ menuOpen, onToggleMenu, onCloseMenu, navLinks }) {
  return (
    <header className="header">
      <nav className="navbar">
        <a className="navbar-brand" href="#home" onClick={onCloseMenu}>
          <img src="/media/icon.png" height="40" alt="Logo AECRRU" />
        </a>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
        >
          <MenuIcon />
        </button>

        <div className={`navbar-panel ${menuOpen ? "is-open" : ""}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={onCloseMenu}>
                  {link.label}
                </a>
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
