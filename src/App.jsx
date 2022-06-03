import React, { useState } from 'react'
import './css/App.scss'

import SideMenu from './components/SideMenu.jsx'
import MenuHeader from './components/MenuHeader.jsx'
import Banner from './components/Banner.jsx'
import WhatsappB from './components/WhatsappB.jsx'
import Carussel from './components/Carussel/Carussel.jsx'
import Grafity from './components/Grafity.jsx'
import Merch from './components/Merch.jsx'
import Delivery from './components/Delivery.jsx'
import Services from './components/Services.jsx'
import Social from './components/Social.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  const [sideMenu, setSideMenu] = useState(false)

  return (
    <div className="App">
      <Banner />
      <MenuHeader sideMenu={sideMenu} setSideMenu={setSideMenu} />
      <SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />

      <div className="not-instant-show">
        <Carussel />
        <Grafity />
        <Merch />
        <Delivery />
        <Services />
        <Social />
        <Footer />
      </div>

      <WhatsappB />
    </div>
  )
}

export default App
