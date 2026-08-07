import { useState, useEffect } from 'react'
import "./About.css"

import Pic1 from "../assets/about-me-pic1.jpg"
import Pic2 from "../assets/about-me-pic2.jpg"
import Pic3 from "../assets/about-me-pic3.jpg"
import Pic4 from "../assets/about-me-pic4.jpg"
import Pic5 from "../assets/about-me-pic5.jpg"
import Pic6 from "../assets/about-me-pic6.jpg"
import Pic7 from "../assets/about-me-pic7.jpg"
import Pic8 from "../assets/about-me-pic8.jpg"

const PICS = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8]
const ROTATIONS = [0, -8, 8, -5, 5, -3, 3, -2] // no two adjacent cards share 0deg (avoids invisible overlap behind pic1)
import AboutMyStory from "../assets/about-myStory.JPEG"
import AboutEducation from "../assets/about-education.jpg"
import AboutArt from "../assets/about-art.jpg"
import AboutAnime from "../assets/about-anime.jpg"
import AboutCozyGames from "../assets/about-cozyGames.jpg"
import AboutEmpathy from "../assets/about-empathy.svg"
import AboutCuriosity from "../assets/about-curiousity.svg"
import AboutBalance from "../assets/about-balance.svg"

function About() {
  const [step, setStep] = useState(PICS.length) // start at second cycle so pic1 always has a card behind it

  useEffect(() => {
    let interval
    const delay = setTimeout(() => {
      interval = setInterval(() => setStep(s => s + 1), 1500)
    }, 600)
    return () => { clearTimeout(delay); clearInterval(interval) }
  }, [])

  const activeIdx = step % PICS.length
  const prevIdx   = (step - 1) % PICS.length

  return (
    <div className="about">

      {/* ── Intro ── */}
      <section className="about-intro container">
        <div className="about-intro__stack">
          <div className="about-card-stack" aria-hidden="true">
            {PICS.map((pic, i) => (
              <div
                key={i}
                className={`about-card${i === activeIdx || i === prevIdx ? ' about-card--visible' : ''}`}
                style={{
                  transform: `rotate(${ROTATIONS[i]}deg)`,
                  zIndex: i === activeIdx ? 2 : i === prevIdx ? 1 : 0
                }}
              >
                <img src={pic} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="about-intro__right">
          <h1 className="about-intro__title">Hi, I'm Fariha !</h1>
          <div className="about-facts">
            <p className="about-fact">✈️ From DAC to YVR — Small town girl, big dreams 💜</p>
            <p className="about-fact">👚 Self-employed outfit curator — MUST match a color palette </p>
            <p className="about-fact">♊️ Quirkiest Gemini you'll meet 😉</p>
            <p className="about-fact">🧋 OBSESSED with milk tea — no pearls though 😏</p>
            <p className="about-fact">📸 I'm not shy, I don't look at the camera for the ✨mystery✨</p>
          </div>
        </div>
      </section>

      {/* ── My Story ── */}
      <section className="about-story">
        <div className="about-story__photo-wrap">
          <div className="about-story__photo-frame">
            <img src={AboutMyStory} alt="Fariha Khan" className="about-story__photo" />
          </div>
        </div>
        <div className="about-story__text">
          <h2 className="about-story__title">My Story</h2>
          <p className="about-story__subtitle">I knew I'd be a designer since I was seven..</p>
          <p className="about-story__body">
            Not literally, but there were signs. I spent my teens making hand-made gifts for friends
            and paying attention to every decor detail in The Sims. At 25, I found the New Media
            program at BCIT where my design journey truly started. Through my time in this program
            I realized I had the potential all along. Now, I can confidently say I cannot see myself
            doing anything else other than design.
            <br /><br />
            What's amazing about graphic design is that it combines the two things I care about the
            most, creativity and people. Nothing brings me more joy than creating art and being able
            to help people. And what is design if not creative solutions that solve people's problems?
          </p>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="about-education">
        <div className="about-education__text">
          <h2 className="about-education__title">Education</h2>
          <p className="about-education__subtitle">I completed my Bachelor's in Sociology</p>
          <p className="about-education__body">
            As a Sociology major, studying people, community, and cultural context taught me to see
            the world through a deeply human lens. This perspective translated naturally into UX
            design. Understanding and researching why people think and behave the way they do has
            become one of my greatest strengths as a designer.
          </p>
        </div>
        <div className="about-education__photo-wrap">
          <div className="about-education__photo-frame">
            <img src={AboutEducation} alt="Fariha Khan at her BCIT graduation" className="about-education__photo" />
          </div>
        </div>
      </section>

            {/* ── My Inspo ── */}
      <section className="about-inspo">
        <div className="container">
          <h2 className="about-inspo__title">My Inspo</h2>
          <div className="grid">

            <div className="about-inspo__card col-4 col-12-sm">
              <div className="about-inspo__card-img-wrap">
                <img src={AboutArt} alt="" className="about-inspo__card-img" />
              </div>
              <p className="about-inspo__card-label">art</p>
              <p className="about-inspo__card-desc">
                Practicing art helps me view the world from a creative lens and teaches me the
                discipline of everyday practice to master new skills.
              </p>
            </div>

            <div className="about-inspo__card col-4 col-12-sm">
              <div className="about-inspo__card-img-wrap">
                <img src={AboutAnime} alt="" className="about-inspo__card-img" />
              </div>
              <p className="about-inspo__card-label">anime & k-pop</p>
              <p className="about-inspo__card-desc">
                Japanese animation and K-pop's visual language shape how I approach color, layout,
                and storytelling in my work.
              </p>
            </div>

            <div className="about-inspo__card col-4 col-12-sm">
              <div className="about-inspo__card-img-wrap">
                <img src={AboutCozyGames} alt="" className="about-inspo__card-img" />
              </div>
              <p className="about-inspo__card-label">cozy games</p>
              <p className="about-inspo__card-desc">
                Cozy games inform how I think about functional design, balancing a cohesive visual
                concept while making sure the user journey remains as smooth as possible.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── My Values ── */}
      <section className="about-values">
        <div className="container">
          <h2 className="about-values__title">My Values</h2>
          <div className="grid">

            <div className="about-values__item col-4">
              <div className="about-values__circle">
                <img src={AboutEmpathy} alt="" />
              </div>
              <p className="about-values__label">Empathy</p>
              <p className="about-values__desc">
                Understanding how people feel and why is at the core of everything I design.
              </p>
            </div>

            <div className="about-values__item col-4">
              <div className="about-values__circle">
                <img src={AboutCuriosity} alt="" />
              </div>
              <p className="about-values__label">Curiosity</p>
              <p className="about-values__desc">
                I approach every project as a chance to learn something new about people, craft, and the world.
              </p>
            </div>

            <div className="about-values__item col-4">
              <div className="about-values__circle">
                <img src={AboutBalance} alt="" />
              </div>
              <p className="about-values__label">Balance</p>
              <p className="about-values__desc">
                Balance informs how I think about functional design — cohesive vision without sacrificing clarity.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default About