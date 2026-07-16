import { useState } from "react"
import { Link } from "react-router-dom"

import { projects } from "../data/projects"

import "./Projects.css"

import HeyloFeatured from "../assets/heylo-featured.jpg"
import PalaceFeatured from "../assets/palace-featured.jpg"
import MakioFeatured from "../assets/makio-placeholder.jpg"



const filters = [
  { label: "All", value: "all" },
  { label: "Branding", value: "branding" },
  { label: "Motion", value: "motion graphics" },
  { label: "UI/UX", value: "ui/ux" },
]

function ProjectCard({ project }) {
  return (
    <Link to={project.path || "#"} className={`project-card col-${project.colSpan}`}>
      {project.video
        ? <video src={project.video} autoPlay loop muted playsInline className="project-card__img" />
        : <img src={project.img} alt="" className="project-card__img" />
      }
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
    ? projects
    : projects.filter(p => p.tags.some(t => t.includes(activeFilter)))

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