import { BrowserRouter, Routes, Route } from "react-router-dom"

import PageWrapper from "./components/PageWrapper"

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Playground from "./pages/Playground"

import ProjectPalace from "./pages/ProjectPalace"
import ProjectHeylo from "./pages/ProjectHeylo"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="playground" element={<Playground />} />
          <Route path="projects/palace" element={<ProjectPalace/>} />
          <Route path="projects/heylo" element={<ProjectHeylo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
