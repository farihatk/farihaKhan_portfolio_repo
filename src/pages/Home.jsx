import { useState } from 'react'

import FeaturedProjects from "../components/FeaturedProjects";

import "./Home.css"

import FkLogo from "../assets/fk-logo.png"
import Cat from "../assets/object-cat.png"
import Headphones from "../assets/object-headphones.png"
import Switch from "../assets/object-switch.png"
import Flower from "../assets/object-flower.png"
import Boba from "../assets/object-boba.png"


function Home() {

  return (
    <>

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

          <div className="hero__obj-wrap hero__obj--boba">
            <img src={Boba} alt="" className="hero__obj" />
            <div className="hero__textpop">My Energy Drink</div>
          </div>

          <div className="hero__obj-wrap hero__obj--cat">
            <img src={Cat} alt="" className="hero__obj" />
            <div className="hero__textpop">My void baby Theo</div>
          </div>

          <div className="hero__obj-wrap hero__obj--flower">
            <img src={Flower} alt="" className="hero__obj" />
            <div className="hero__textpop">My favourite flower</div>
          </div>

          <div className="hero__obj-wrap hero__obj--headphones">
            <img src={Headphones} alt="" className="hero__obj" />
            <div className="hero__textpop">My motivation</div>
          </div>

          <div className="hero__obj-wrap hero__obj--switch">
            <img src={Switch} alt="" className="hero__obj" />
            <div className="hero__textpop">My creative release</div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h2 className='projects-section__title'>Featured Projects</h2>
        <FeaturedProjects />
        <div className="projects-section__button">
          <a className="buttons" href="">See All Projects</a>
        </div>
      </section>

      <section className="testimonial-section">
        <h2 className="testimonial-section__title">Kind Words</h2>
      </section>

    </>
  )
}

export default Home