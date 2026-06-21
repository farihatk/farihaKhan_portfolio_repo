import "./ProjectPageNav.css"

function ProjectPageNav({ navItems }) {
  return (
    <aside className="project-page-nav">
      <nav>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="project-page-nav__link">
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default ProjectPageNav