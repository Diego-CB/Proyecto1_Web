import React from 'react'
import PropTypes from 'prop-types'
import butonImg from '../assets/images/toggle_button.png'
import '../css/MenuHeader.scss'
import logo from '../assets/images/logo.png'

const MenuHeader = ({ setSideMenu, sideMenu }) => (
  <div className="menu-header">
    <button
      className="logo-button"
      // eslint-disable-next-line no-restricted-globals
      onClick={() => location.reload()}
      type="button"
    >
      <img src={logo} alt="Menú" />
    </button>
    <button
      className="toggle-side-menu"
      onClick={() => setSideMenu(!sideMenu)}
      type="button"
    >
      <img src={butonImg} alt="Menú" />
    </button>
  </div>
)

// Props Validation
MenuHeader.propTypes = {
  setSideMenu: PropTypes.func.isRequired,
  sideMenu: PropTypes.bool.isRequired,
}

export default MenuHeader
