import { useState } from "react"
import "./Playground.css"

import BigFeelings from "../assets/poster-big-feelings.jpg"
import Empathy from "../assets/poster-empathy.jpg"
import GreyArea from "../assets/poster-grey-area-.jpg"
import SeeReflect from "../assets/poster-see-reflect.jpg"
import SpringFlowers from "../assets/poster-spring-flowers.jpg"

const items = [
  { id: 1, img: GreyArea, title: "Where Is The Grey Area?", description: "A graphic poster exploring ambiguity and perspective", category: "poster" },
  { id: 2, img: BigFeelings, title: "Big Feelings", description: "Poster exploring emotional complexity through type and image", category: "poster" },
  { id: 3, img: SeeReflect, title: "See / Reflect", description: "Part of a poster series inspired by my therapy journey", category: "poster" },
  { id: 4, img: Empathy, title: "Empathy", description: "A visual exploration of empathy and human connection", category: "poster" },
  { id: 5, img: SpringFlowers, title: "Spring Flowers", description: "A seasonal illustration experiment", category: "poster" },
]

const filters = [
  { label: "All", value: "all" },
  { label: "Poster", value: "poster" },
  { label: "Art", value: "art" },
]

function Playground() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filtered = activeFilter === "all"
    ? items
    : items.filter(item => item.category === activeFilter)

  return (
    <div className="playground container">

      <div className="playground__header">
        <h1 className="playground__title">Playground</h1>
        <p className="playground__desc">
          I am a designer who is an artist at heart. When I am not working on a project, I enjoy experimenting with different mediums such as graphic posters, 3D models, and Generative AI assets.
        </p>
      </div>

      <nav className="playground__filters">
        {filters.map(f => (
          <button
            key={f.value}
            className={`playground__filter-btn ${activeFilter === f.value ? "playground__filter-btn--active" : ""}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </nav>

      <div className="playground__grid">
        {filtered.map(item => (
          <div className="playground__item" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="playground__overlay">
              <p className="playground__overlay-title">{item.title}</p>
              <p className="playground__overlay-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Playground