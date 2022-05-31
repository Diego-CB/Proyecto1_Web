import React from 'react'
import PropTypes from 'prop-types'
import '../css/SideMenu.scss'
import xbutton from '../assets/images/xbutton.svg'
import logo from '../assets/images/logo.png'
import burrito from '../assets/images/icon-burrito.png'

const MenuElement = ({ option }) => (
  <>
    <hr />
    <li>{option}</li>
  </>
)

// Props Validation
MenuElement.propTypes = {
  option: PropTypes.string.isRequired,
}

const SideMenu = ({ setSideMenu, sideMenu }) => {
  const menuState = sideMenu
    ? 'side-menu-shown'
    : 'side-menu-hide'

  const optionsMenu = [
    'EVENTOS',
    'MERCH',
    'TERRITORIO BURRITO',
    'DELIVERY',
    'CONTÁCTANOS',
  ]

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
      <nav className="side-nav">
        <ul>
          <li>
            MENÚ
            <img src={burrito} alt="" />
          </li>
          {optionsMenu.map((option, index) => (
            <MenuElement
              option={option}
              index={index}
              key={option}
            />
          ))}
        </ul>
      </nav>
    </div>
  )
}

// Props Validation
SideMenu.propTypes = {
  setSideMenu: PropTypes.func.isRequired,
  sideMenu: PropTypes.bool.isRequired,
}

export default SideMenu
