import React from 'react'
import '../css/Footer.scss'
import logo from '../assets/images/logo.png'

const Footer = () => (
  <footer className="burrito-footer-container">
    <div className="burrito-footer">
      <div className="footer-info">
        <img src={logo} alt="" />
        <h2 className="whatsap-info">PIDE POR WHATSAPP: 4077 2089</h2>
        <h2 className="menu-info">MENÚ</h2>
        <h2 className="links-info">EVENTOS</h2>
        <h2 className="links-info">MERCH</h2>
        <h2 className="links-info">TERRITORIO</h2>
        <h2 className="links-info">CONTÁCTANOS </h2>
      </div>
      <p className="footer-cr">
        Alimentos Pura Delicia, S.A. Todos los derechos 2022
      </p>
    </div>
  </footer>
)

export default Footer
