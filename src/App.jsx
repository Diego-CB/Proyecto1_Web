import React, { useState } from 'react'
import './css/App.scss'
import SideMenu from './components/SideMenu'
import MenuHeader from './components/MenuHeader'
import Banner from './components/Banner'

const App = () => {
  const [sideMenu, setSideMenu] = useState(false)

  return (
    <div className="App">
      <Banner />
      <MenuHeader sideMenu={sideMenu} setSideMenu={setSideMenu} />
      <SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />

      <div className="rotate-menu"> carousell </div>
      <div className="grafity"> grafity banner </div>
      <div className="merch"> merch </div>
      <div className="contact"> contact </div>
      <div className="services"> services </div>
      <div className="social"> social </div>
      <div className="footer"> footer </div>
    </div>
  )
}

export default App
