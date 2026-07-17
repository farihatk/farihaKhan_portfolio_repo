import { useState } from 'react';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import "./Footer.css"

function Footer() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("fariha.khan2805@outlook.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div className="footer__left col-6 col-12-sm">
            <p className="footer__name">Fariha Khan</p>
            <button className="footer__hi-btn" onClick={copyEmail}>
              Say hi to me!
              <span className="footer__hi-btn-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              {copied && <span className="footer__email-tooltip">Email copied!</span>}
            </button>

          </div>
          <nav className="footer__nav col-6 col-12-sm">
            <div className="footer__nav-col">
              <Link to="/">Home</Link>
              <Link to="/projects">Work</Link>
              <Link to="/about">About</Link>
              <Link to="/playground">Playground</Link>
            </div>
            <div className="footer__nav-col">
              <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer">
                <span className="footer__social-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </span>
              </a>
              <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer">
                <span className="footer__social-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </span>
              </a>
              <a href="#" download>
                <span className="footer__social-icon">
                  <FontAwesomeIcon icon={faFileArrowDown} />
                </span>
              </a>
            </div>
          </nav>
        </div>
      </div>

      <p className="footer__credit">
        Designed &amp; Developed by Fariha 💕 &nbsp;|&nbsp; Built with React &amp; Alot of Tears 🥲 &nbsp;|&nbsp; ©2026 all rights reserved
      </p>
    </footer>
  )
}

export default Footer