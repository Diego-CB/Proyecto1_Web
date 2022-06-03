import React, { useState } from 'react'
import './css/App.scss'

import SideMenu from './components/SideMenu'
import MenuHeader from './components/MenuHeader'
import Banner from './components/Banner'
import WhatsappB from './components/WhatsappB'
import Carussel from './components/Carussel/Carussel'
import Grafity from './components/Grafity'
import Merch from './components/Merch'
import Delivery from './components/Delivery'
import Services from './components/Services'

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
        <div className="social"> social </div>
        <div className="footer"> footer </div>
      </div>

      <WhatsappB />
    </div>
  )
}

export default App
