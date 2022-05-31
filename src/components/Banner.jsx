import React from 'react'
import '../css/Banner.scss'
import video from '../assets/videos/guacamolero_armado.mp4'
import ordenar from '../assets/images/home-ordenar.png'

const Banner = () => (
  <div className="main-menu">
    <video autoPlay loop muted src={video} />
    <div className="center-add">
      <h2>
        <span>#TODO</span>
        REAL
        <span>NADA</span>
        FAKE
      </h2>
      <img src={ordenar} alt="Ordenar" />
    </div>
  </div>
)

export default Banner
