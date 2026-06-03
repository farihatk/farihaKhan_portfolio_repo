import "./Home.css"

import FkLogo from "../assets/fk-logo.png"
import Cat from "../assets/object-cat.png"
import Headphones from "../assets/object-headphones.png"
import Switch from "../assets/object-switch.png"
import Flower from "../assets/object-flower.png"
import Boba from "../assets/object-boba.png"

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
          <img src={Boba} alt="" className="hero__obj hero__obj--boba" />
          <img src={Cat} alt="" className="hero__obj hero__obj--cat" />
          <img src={Flower} alt="" className="hero__obj hero__obj--flower" />
          <img src={Headphones} alt="" className="hero__obj hero__obj--headphones" />
          <img src={Switch} alt="" className="hero__obj hero__obj--switch" />
        </div>
      </section>

    </div>
  )
}

export default Home