import { useState } from 'react'
import { Link } from 'react-router-dom'

import FeaturedProjects from "../components/FeaturedProjects";
import TestimonialCarousel from "../components/TestimonialCarousel"
import { testimonials } from "../data/testimonials"

import "./Home.css"

import FkLogo from "../assets/fk-logo.png"
import Cat from "../assets/hero-cat.png"
import Headphones from "../assets/hero-headphones.png"
import Switch from "../assets/hero-switch.png"
import Boba from "../assets/hero-boba.png"
import HeroCharacter from "../assets/fk-logo.webm"


function Home() {

  return (
    <>

      {/* Hero */}
      <section className="hero grid">

        <div className="hero__text col-6 col-12-sm">
          <div className="hero__title-label">Visual Designer</div>
          <h1 className="hero__name">Fariha Khan</h1>
          <p className="hero__bio">
            Creating <strong>brands, products,</strong> and <strong>motion graphics</strong> with a dash of ✨whimsy✨
          </p>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="buttons">Download Resume</a>
        </div>

        <div className="hero__visuals col-6 col-12-sm" aria-hidden="true">
          <div className="hero__avatar">
            <video src={HeroCharacter} autoPlay muted loop playsInline alt="" />
          </div>

          <div className="hero__obj-wrap hero__obj--boba">
            <img src={Boba} alt="" className="hero__obj" />
            <div className="hero__textpop">My Energy Drink</div>
          </div>

          <div className="hero__obj-wrap hero__obj--cat">
            <img src={Cat} alt="" className="hero__obj" />
            <div className="hero__textpop">My void baby Theo</div>
          </div>

          {/* <div className="hero__obj-wrap hero__obj--flower">
            <img src={Flower} alt="" className="hero__obj" />
            <div className="hero__textpop">My favourite flower</div>
          </div> */}

          <div className="hero__obj-wrap hero__obj--headphones">
            <img src={Headphones} alt="" className="hero__obj" />
            <div className="hero__textpop">My motivation</div>
          </div>

          <div className="hero__obj-wrap hero__obj--switch">
            <img src={Switch} alt="" className="hero__obj" />
            <div className="hero__textpop">My creative release</div>
          </div>
        </div>

        <div className="scroll-down-btn">
          <a href="#featured">scroll down</a>
        </div>
      </section>

      <section className="projects-section" id='featured'>
        <h2 className='projects-section__title'>Featured Projects</h2>
        <FeaturedProjects />
        <div className="projects-section__button">
          <Link className="buttons" to="/projects">See All Projects</Link>
        </div>
      </section>

      <section className="kind-words">
        <h2 className="kind-words__title">Kind Words</h2>
        <TestimonialCarousel />
      </section>

    </>
  )
}

export default Home