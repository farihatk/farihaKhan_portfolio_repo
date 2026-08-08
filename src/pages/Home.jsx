import { useEffect, useRef } from 'react'
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
import HeroCharacterLuma from "../assets/fk-logo-luma.mp4"

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator?.userAgent ?? '');

function HeroVideo() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isSafari) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let offCtx = null;
    let width = 0;
    let height = 0;
    let rafId;

    function draw() {
      if (video.readyState >= 2 && offCtx) {
        offCtx.drawImage(video, 0, 0);
        const frame = offCtx.getImageData(0, 0, width * 2, height);
        const out = new ImageData(width, height);
        const src = frame.data;
        const dst = out.data;
        const stride = width * 2 * 4;
        const half = width * 4;
        for (let y = 0; y < height; y++) {
          const row = y * stride;
          for (let x = 0; x < width; x++) {
            const si = row + x * 4;
            const di = (y * width + x) * 4;
            dst[di]     = src[si];
            dst[di + 1] = src[si + 1];
            dst[di + 2] = src[si + 2];
            dst[di + 3] = src[si + half];
          }
        }
        ctx.putImageData(out, 0, 0);
      }
      rafId = requestAnimationFrame(draw);
    }

    video.addEventListener('loadedmetadata', () => {
      width = video.videoWidth / 2;
      height = video.videoHeight;
      canvas.width = width;
      canvas.height = height;
      const off = document.createElement('canvas');
      off.width = width * 2;
      off.height = height;
      offCtx = off.getContext('2d', { willReadFrequently: true });
    });

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  if (!isSafari) {
    return <video src={HeroCharacter} autoPlay muted loop playsInline />;
  }

  return (
    <>
      <video
        ref={videoRef}
        src={HeroCharacterLuma}
        autoPlay muted loop playsInline
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: '1px', height: '1px' }}
      />
      <canvas ref={canvasRef} />
    </>
  );
}


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
            <HeroVideo />
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
          <a href="#featured" aria-label="Scroll down to featured projects">scroll down</a>
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