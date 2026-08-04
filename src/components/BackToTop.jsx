import { useState, useEffect, useRef } from 'react'   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import './BackToTop.css'

function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [bottomOffset, setBottomOffset] = useState(32)
  const buttonRef = useRef(null)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.7)

      const footer = document.querySelector('footer')
      if (footer && buttonRef.current) {
        const footerTop = footer.getBoundingClientRect().top
        const viewportHeight = window.innerHeight
        const buttonHeight = buttonRef.current.offsetHeight

        setBottomOffset(
          footerTop < viewportHeight - 32 - buttonHeight
            ? viewportHeight - footerTop + 16
            : 32
        )
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      ref={buttonRef}
      className={`back-to-top icon-buttons${visible ? ' back-to-top--visible' : ''}`}
      style={{ bottom: `${bottomOffset}px` }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <FontAwesomeIcon icon={faArrowUp} />
      <span className="back-to-top__label">top</span>
    </button>
  )
}

export default BackToTop