import { useState, useCallback, useEffect } from "react"
import { Link } from "react-router-dom"

import useEmblaCarousel from 'embla-carousel-react'

import { projects } from "../data/projects"

import "./FeaturedProjects.css"


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

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {featuredProjects.map((project, index) => {
            const isFocused = index === selectedIndex
            return (
              <Link
                to={project.path || "#"}
                className={`embla__slide featured-card ${isFocused ? "featured-card--focused" : ""}`}
                key={project.id}
              >
                {project.video
                  ? <video src={project.video} autoPlay loop muted playsInline className="featured-card__img" />
                  : <img src={project.img} alt="" className="featured-card__img" />
                }
                <div className="featured-card__details">
                  <p className="featured-card__tag">{project.tags.join(", ")}</p>
                  <h3 className="featured-card__title">{project.title}</h3>
                  <p className="featured-card__desc">{project.summary}</p>
                </div>
              </Link>
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