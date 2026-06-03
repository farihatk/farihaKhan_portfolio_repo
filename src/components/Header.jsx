import { Link } from "react-router-dom"

import "./Header.css"

import FkLogo from "../assets/fk-logo.png"

function Header() {
  return (
    <header className="header">
      <div className="header__container">

        <div className="header__brand">
          <img src={FkLogo} alt="Brand logo" className="header__logo" />
          <span className="header__name">Fariha Khan</span>
        </div>

        <nav className="header__nav">
          <Link to="/projects" className="nav-buttons">Work</Link>
          <Link to="/about" className="nav-buttons">Story</Link>
          <Link to="/playground" className="nav-buttons">Playground</Link>
        </nav>

        <a href="mailto:fariha.khan2805@outlook.com" className="header__mail icon-buttons" aria-label="Send email">
          <img src="/assets/mail-icon.svg" alt="Mail" />
        </a>

      </div>
    </header>
  )
}

export default Header