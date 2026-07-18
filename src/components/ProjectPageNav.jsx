import { useState, useEffect } from 'react'

import "./ProjectPageNav.css"

function ProjectPageNav({ navItems }) {
  const [activeHref, setActiveHref] = useState(navItems[0]?.href)

  useEffect(() => {
    const observers = navItems.map(({ href }) => {
      const target = document.querySelector(href)
      if (!target) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveHref(href) },
        { rootMargin: '0px 0px -30% 0px' }
      )
      observer.observe(target)
      return observer
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [navItems])

  function handleClick(e, href) {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside className="project-page-nav">
      <nav>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href} className={`project-page-nav__link ${activeHref === item.href ? 'project-page-nav__link--active' : ''}`}
            onClick={(e) => handleClick(e, item.href)}>
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default ProjectPageNav