import React from 'react'
import '../css/Social.scss'
import face from '../assets/images/social/promos.png'
import insta from '../assets/images/social/promos2.png'

const Social = () => (
  <section className="social">
    <h2>PROMOS Y BURRITOS AQUÍ</h2>
    <img src={face} alt="" />
    <img src={insta} alt="" />
  </section>
)

export default Social
