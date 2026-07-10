import { useState, useCallback, useEffect } from "react"
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
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => emblaApi.off("select", onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project, index) => {
            const isFocused = index === selectedIndex
            return (
              <div
                className={`embla__slide featured-card ${isFocused ? "featured-card--focused" : ""}`}
                key={project.id}
              >
                <img src={project.img} alt="" className="featured-card__img" />
                <div className="featured-card__details">
                  <p className="featured-card__tag">{project.tag}</p>
                  <h3 className="featured-card__title">{project.title}</h3>
                  <p className="featured-card__desc">{project.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <button className="embla__btn embla__btn--prev" onClick={scrollPrev}>
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <button className="embla__btn embla__btn--next" onClick={scrollNext}>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
      
    </div>
  )
}

export default FeaturedProjects