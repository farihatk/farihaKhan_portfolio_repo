import { useState, useRef, useEffect } from "react"

import useEmblaCarousel from 'embla-carousel-react'

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

  {
    id: 4,
    title: "Makio",
    tag: "motion graphics",
    img: MakioFeatured,
    description: "A motion graphics project exploring bold typographic animation and visual storytelling.",
  },

  {
    id: 5,
    title: "Makio",
    tag: "motion graphics",
    img: MakioFeatured,
    description: "A motion graphics project exploring bold typographic animation and visual storytelling.",
  },

  {
    id: 6,
    title: "Makio",
    tag: "motion graphics",
    img: MakioFeatured,
    description: "A motion graphics project exploring bold typographic animation and visual storytelling.",
  },
]


function FeaturedProjects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project) => (

            <div className="embla__slide featured-card" key={project.id}>
              <img src={project.img} alt="" className="featured-card__img" />
              <p className="featured-card__tag">{project.tag}</p>
              <h3 className="featured-card__title">{project.title}</h3>
              <p className="featured-card__desc">{project.description}</p>
              

            </div>
          ))}


        </div>
      </div>

      <button className="embla__prev" onClick={scrollPrev}>
        Scroll to prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Scroll to next
      </button>
    </div>
  )
}

export default FeaturedProjects