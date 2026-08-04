import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import BackToTop from "./BackToTop"

import './PageWrapper.css'

function PageWrapper() {
  return (
    <div className="page-wrapper">
      <div className="grid-bg"></div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop/>
    </div>
  )
}

export default PageWrapper