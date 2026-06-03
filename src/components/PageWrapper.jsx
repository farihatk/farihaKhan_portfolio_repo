import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

import './PageWrapper.css'

function PageWrapper() {
  return (
    <div className="page-wrapper">
      <div className="grid-bg"></div>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default PageWrapper