import "./About.css"

import AboutMePic from "../assets/about-me-pic.png"
import AboutMyStory from "../assets/about-myStory.JPEG"
import AboutEducation from "../assets/about-education.jpg"
import AboutArt from "../assets/about-art.jpg"
import AboutAnime from "../assets/about-anime.jpg"
import AboutCozyGames from "../assets/about-cozyGames.png"
import AboutEmpathy from "../assets/about-empathy.png"
import AboutCuriosity from "../assets/about-curiousity.png"
import AboutBalance from "../assets/about-balace.png"
import Pointer1 from "../assets/about-pointer-1.png"
import Pointer2 from "../assets/about-pointer-2.png"

function About() {
  return (
    <div className="about">

      {/* ── Intro ── */}
      <section className="about-intro">
        <div className="about-intro__photo-wrap">
          <img src={AboutMePic} alt="" className="about-intro__photo" />
        </div>

        <h1 className="about-intro__title">Hi, I'm Fariha</h1>

        <div className="about-pointer-wrap about-pointer--1">
          <img src={Pointer1} alt="" className="about-pointer__line" />
          <p className="about-pointer__text">From Bangladesh to Vancity</p>
        </div>

        <div className="about-pointer-wrap about-pointer--2">
          <img src={Pointer1} alt="" className="about-pointer__line" />
          <p className="about-pointer__text">Always wears color coded outfits</p>
        </div>

        <div className="about-pointer-wrap about-pointer--3">
          <img src={Pointer2} alt="" className="about-pointer__line" />
          <p className="about-pointer__text">Quirkiest Gemini you'll meet</p>
        </div>

        <div className="about-pointer-wrap about-pointer--4">
          <img src={Pointer2} alt="" className="about-pointer__line" />
          <p className="about-pointer__text">OBSESSED with milk tea</p>
        </div>
      </section>

      {/* ── My Story ── */}
      <section className="about-story">
        <div className="about-story__photo-wrap">
          <div className="about-story__photo-frame">
            <img src={AboutMyStory} alt="" className="about-story__photo" />
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
            <img src={AboutEducation} alt="" className="about-education__photo" />
          </div>
        </div>
      </section>

            {/* ── My Inspo ── */}
      <section className="about-inspo">
        <div className="container">
          <h2 className="about-inspo__title">My Inspo</h2>
          <div className="grid">

            <div className="about-inspo__card col-4">
              <div className="about-inspo__card-img-wrap">
                <img src={AboutArt} alt="" className="about-inspo__card-img" />
              </div>
              <p className="about-inspo__card-label">art</p>
              <p className="about-inspo__card-desc">
                Practicing art helps me view the world from a creative lens and teaches me the
                discipline of everyday practice to master new skills.
              </p>
            </div>

            <div className="about-inspo__card col-4">
              <div className="about-inspo__card-img-wrap">
                <img src={AboutAnime} alt="" className="about-inspo__card-img" />
              </div>
              <p className="about-inspo__card-label">anime & k-pop</p>
              <p className="about-inspo__card-desc">
                Japanese animation and K-pop's visual language shape how I approach color, layout,
                and storytelling in my work.
              </p>
            </div>

            <div className="about-inspo__card col-4">
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
                Cozy games inform how I think about functional design — cohesive vision without sacrificing clarity.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default About