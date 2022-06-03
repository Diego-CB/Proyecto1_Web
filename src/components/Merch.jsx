import React from 'react'
import '../css/Merch.scss'
import merch from '../assets/videos/merch.gif'
import banner from '../assets/images/merch/banner.png'
import baby from '../assets/images/merch/baby.png'
import insta from '../assets/images/merch/insta.png'

const Merch = () => (
  <section className="merch-container">
    <div className="merch">
      <div className="merch-banner">
        <img src={banner} alt="" />
      </div>
      <img src={merch} alt="" />
      <div className="merch-insta">
        <img src={baby} alt="" />
        <img className="insta" src={insta} alt="" />
      </div>
    </div>
  </section>
)

export default Merch
