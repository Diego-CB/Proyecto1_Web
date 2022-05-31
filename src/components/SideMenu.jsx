import React from 'react'
import PropTypes from 'prop-types'
import '../css/SideMenu.scss'
import xbutton from '../assets/images/xbutton.svg'
import logo from '../assets/images/logo.png'

const SideMenu = ({ setSideMenu, sideMenu }) => {
  const menuState = sideMenu
    ? 'side-menu-shown'
    : 'side-menu-hide'

  return (
    <div className={'side-menu ' + menuState}>
      <div className="top-menu">
        <img src={logo} alt="Menú" />
        <button
          className="exit-menu"
          onClick={() => setSideMenu(!sideMenu)}
          type="button"
        >
          <img src={xbutton} alt="Menú" />
        </button>
      </div>
    </div>
  )
}

// Props Validation
SideMenu.propTypes = {
  setSideMenu: PropTypes.func.isRequired,
  sideMenu: PropTypes.bool.isRequired,
}

export default SideMenu
