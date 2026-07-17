import { useState } from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

import "./Header.css"

import FkLogo from "../assets/fk-logo.png"

function Header() {
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("fariha.khan2805@outlook.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header__container">

        <Link to="/" className="header__brand" onClick={closeMenu}>
          <img src={FkLogo} alt="Brand logo" className="header__logo" />
          <span className="header__name">Fariha Khan</span>
        </Link>

        <button
          className="header__hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </button>

        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <Link to="/projects" className="nav-buttons">Work</Link>
          <Link to="/about" className="nav-buttons">Story</Link>
          <Link to="/playground" className="nav-buttons">Playground</Link>
          <button className="header__email-btn" onClick={copyEmail} aria-label="Copy email address">
            <FontAwesomeIcon icon={faEnvelope} />
            {copied && <span className="header__email-tooltip">Email copied!</span>}
          </button>
        </nav>

      </div>
    </header>
  )
}

export default Header