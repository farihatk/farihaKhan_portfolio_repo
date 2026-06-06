import { Link } from "react-router-dom"

import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__left">
          <h2 className="footer__name">Fariha Khan</h2>
          <div className="footer__cta">
            <a href="mailto:fariha.t.khan99@gmail.com" className="buttons footer__hi-btn">
              Say hi to me!
            </a>
            <a href="mailto:fariha.t.khan99@gmail.com" className="footer__mail-icon icon-buttons" aria-label="Send email">
              <img src="/assets/mail-icon.svg" alt="Mail" />
            </a>
          </div>
        </div>

        <nav className="footer__nav">
          <div className="footer__nav-col">
            <Link to="/">Home</Link>
            <Link to="/projects">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/playground">Playground</Link>
          </div>
          <div className="footer__nav-col">
            <a href="/assets/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </nav>

      </div>

      <p className="footer__credit">
        Designed &amp; Developed by Fariha 💕 &nbsp;|&nbsp; Built with React &amp; Alot of Tears 🥲 &nbsp;|&nbsp; ©2026 all rights reserved
      </p>
    </footer>
  )
}

export default Footer