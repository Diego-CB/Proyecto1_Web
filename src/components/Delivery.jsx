import React from 'react'
import '../css/Delivery.scss'

import taco from '../assets/images/delivery/taco.png'
import uber from '../assets/images/delivery/uber.png'
import hugo from '../assets/images/delivery/hugo.png'
import ya from '../assets/images/delivery/ya.png'
import what from '../assets/images/delivery/what.png'
import star from '../assets/images/delivery/star.png'

const Delivery = () => (
  <section className="delivery-container">
    <div className="delivery">
      <div className="delivery-header">
        <div className="delivery-title">
          <img src={taco} alt="" />
          <h1>DELIVERY</h1>
        </div>
        <div className="delivery-apps">
          <img src={uber} alt="" />
          <img src={hugo} alt="" />
          <img src={ya} alt="" />
        </div>
      </div>
      <div className="delivery-footer">
        <img src={what} alt="" />
        <div className="stars">
          <img src={star} alt="" />
          <p>
            Pide directo y acumula puntos para burrito gratis!
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Delivery
