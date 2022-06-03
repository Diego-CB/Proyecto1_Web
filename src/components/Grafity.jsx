import React from 'react'
import '../css/Grafity.scss'
import burrito from '../assets/images/grafity/burrito.jpg'
import specs from '../assets/images/grafity/specs.png'

const Grafity = () => (
  <section className="grafity">
    <div className="grafity-content">
      <div className="grafity-specs">
        <div className="grafity-paper">
          <h1>BURRITO</h1>
          <h3>(Sustantivo)</h3>
          <p>
            Nombre que describe a la invención
            <br />
            más deliciosa del mundo
          </p>
          <p>
            Combinación que al envolverse
            <br />
            forma la burrito-trifuerza
            <br />
            sabrosura, felicidad y adicción
          </p>
        </div>
        <img src={specs} alt="" />
      </div>
      <div className="grafity-banner">
        <img src={burrito} alt="" />
      </div>
    </div>
  </section>
)

export default Grafity
