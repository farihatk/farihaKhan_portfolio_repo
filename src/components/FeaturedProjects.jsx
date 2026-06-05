import { useState, useRef, useEffect } from "react"
import "./FeaturedProjects.css"

import HeyloFeatured from "../assets/heylo-featured.jpg"
import PalaceFeatured from "../assets/palace-featured.jpg"
import MakioFeatured from "../assets/makio-placeholder.jpg"

const projects = [
  {
    id: 1,
    title: "Heylo",
    tag: "ui/ux, branding",
    img: HeyloFeatured,
    description: "A social app designed to help people find and join local communities around shared interests.",
  },
  {
    id: 2,
    title: "The Palace",
    tag: "brand identity, content creation",
    img: PalaceFeatured,
    description: "An experience brand case study about a renovated Indie cinema theatre.",
  },
  {
    id: 3,
    title: "Makio",
    tag: "motion graphics",
    img: MakioFeatured,
    description: "A motion graphics project exploring bold typographic animation and visual storytelling.",
  },
]

// clone last card at start, first card at end
// so the list is: [Makio, Heylo, Palace, Makio, Heylo]
const loopedProjects = [
  projects[projects.length - 1],
  ...projects,
  projects[0],
]

function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(1) // start on first real card
  const scrollRef = useRef(null)
  const cardRefs = useRef([])
  const isJumping = useRef(false)

  // on mount: scroll to first real card (index 1) without animation
  useEffect(() => {
    const container = scrollRef.current
    const card = cardRefs.current[1]
    if (container && card) {
      container.scrollLeft = card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2
    }
  }, [])

  useEffect(() => {
    const container = scrollRef.current

    function getClosestIndex() {
      const containerCenter = container.scrollLeft + container.offsetWidth / 2
      let closestIndex = 1
      let closestDistance = Infinity
      cardRefs.current.forEach((card, i) => {
        if (!card) return
        const cardCenter = card.offsetLeft + card.offsetWidth / 2
        const distance = Math.abs(containerCenter - cardCenter)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = i
        }
      })
      return closestIndex
    }

    function jumpTo(index) {
      const card = cardRefs.current[index]
      if (!card) return
      isJumping.current = true
      container.style.scrollBehavior = "auto"
      container.scrollLeft = card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2
      setActiveIndex(index)
      requestAnimationFrame(() => {
        container.style.scrollBehavior = ""
        isJumping.current = false
      })
    }

    let timer
    function handleScroll() {
      if (isJumping.current) return
      const closest = getClosestIndex()
      setActiveIndex(closest)

      // after scrolling stops, check if we're on a clone and jump to real card
      clearTimeout(timer)
      timer = setTimeout(() => {
        const settled = getClosestIndex()
        if (settled === 0) {
          // on clone of last — jump to real last
          jumpTo(loopedProjects.length - 2)
        } else if (settled === loopedProjects.length - 1) {
          // on clone of first — jump to real first
          jumpTo(1)
        }
      }, 150)
    }

    container.addEventListener("scroll", handleScroll)
    return () => {
      container.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="projects-scroll" ref={scrollRef}>
      {loopedProjects.map((project, i) => (
        <div
          key={`${project.id}-${i}`}
          ref={el => cardRefs.current[i] = el}
          className={`projects-card ${i === activeIndex ? "projects-card--active" : "projects-card--inactive"}`}
        >
          <img src={project.img} alt={project.title} className="projects-card__img" />
          <p className="projects-card__tags">{project.tag}</p>
          <h3 className="projects-card__title">{project.title}</h3>
          <p className="projects-card__description">{project.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FeaturedProjects