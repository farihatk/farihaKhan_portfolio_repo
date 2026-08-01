import { useEffect, useRef } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import Lenis from 'lenis';

import PageWrapper from "./components/PageWrapper"

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Playground from "./pages/Playground"

import ProjectPalace from "./pages/ProjectPalace"
import ProjectHeylo from "./pages/ProjectHeylo"
import ProjectMotion from "./pages/ProjectMotion"
import ProjectMakio from "./pages/ProjectMakio"

function LenisProvider() {
  const location = useLocation()
  const lenisRef = useRef(null)

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    const lenis = new Lenis({ duration: 1.2 })
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
  }, [location.pathname])

  return null
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <BrowserRouter>
      <LenisProvider />
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="playground" element={<Playground />} />
          <Route path="projects/palace" element={<ProjectPalace />} />
          <Route path="projects/heylo" element={<ProjectHeylo />} />
          <Route path="projects/motion" element={<ProjectMotion />} />
          <Route path="projects/makio" element={<ProjectMakio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
