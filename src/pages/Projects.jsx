import { useState } from "react"
import { Link } from "react-router-dom"
import "./Projects.css"

import HeyloFeatured from "../assets/heylo-featured.jpg"
import PalaceFeatured from "../assets/palace-featured.jpg"
import MakioFeatured from "../assets/makio-placeholder.jpg"

const allProjects = [
  {
    id: 1,
    title: "The Palace Theatre",
    tags: ["branding", "poster design"],
    img: PalaceFeatured,
    size: "full",
    path: "/projects/palace"
  },
  {
    id: 2,
    title: "Heylo Skin Care",
    tags: ["branding", "content creation"],
    img: HeyloFeatured,
    size: "half",
    path: "/projects/heylo"
  },
  {
    id: 3,
    title: "Makio App",
    tags: ["ui/ux", "product design"],
    img: MakioFeatured,
    size: "half",
  },
  {
    id: 4,
    title: "Swim - BTS Motion Music Video",
    tags: ["motion graphics", "video editing"],
    img: MakioFeatured,
    size: "full",
  },
  {
    id: 5,
    title: "Heylo Skin Care",
    tags: ["branding", "content creation"],
    img: HeyloFeatured,
    size: "half",
  },
  {
    id: 6,
    title: "Makio App",
    tags: ["ui/ux", "product design"],
    img: PalaceFeatured,
    size: "half",
  },
]

const filters = [
  { label: "All", value: "all" },
  { label: "Branding", value: "branding" },
  { label: "Motion", value: "motion graphics" },
  { label: "UI/UX", value: "ui/ux" },
]

function ProjectCard({ project }) {
  return (
    <Link to={project.path || "#"} className={`project-card ${project.size === "full" ? "col-12" : "col-6"}`}>
      <img src={project.img} alt={project.title} className="project-card__img" />
      <div className="project-card__overlay">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__tags">{project.tags.join(", ")}</p>
      </div>
    </Link>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filtered = activeFilter === "all"
    ? allProjects
    : allProjects.filter(p => p.tags.some(t => t.includes(activeFilter)))

  return (
    <div className="projects-page container">

      {/* Page header */}
      <div className="projects-page__header">
        <h1>All Projects</h1>
        <p className="projects-page__desc">
          All my projects were made with a lot of care and even more hours spent on
          making them simple and viable for users. I take great pride in each of my
          pieces and am always excited to learn new things from them.
        </p>
      </div>

      {/* Sub-navigation filters */}
      <nav className="projects-filters">
        {filters.map(f => (
          <button
            key={f.value}
            className={`projects-filters__btn ${activeFilter === f.value ? "projects-filters__btn--active" : ""}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </nav>

      {/* Project grid */}
      <div className="grid projects-grid">
        {filtered.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </div>
  )
}

export default Projects