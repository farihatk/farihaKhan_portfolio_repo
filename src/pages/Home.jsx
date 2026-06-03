import "./Home.css"

import FkLogo from "../assets/fk-logo.png"

function Home() {
  return (
    <div className="home">

      {/* Hero */}
      <section className="hero">

        <div className="hero__text">
          <div className="hero__title-label">Visual Designer</div>
          <h1 className="hero__name">Fariha Khan</h1>
          <p className="hero__bio">
            I am a multidisciplinary designer focusing on branding, graphic design, motion graphics and UI/UX
          </p>
        </div>

        <div className="hero__visuals" aria-hidden="true">
          <img src={FkLogo} alt="" className="hero__avatar" />
        </div>
      </section>

    </div>
  )
}

export default Home