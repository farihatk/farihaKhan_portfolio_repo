import { useState } from "react"

import { items } from "../data/playground"

import "./Playground.css"




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