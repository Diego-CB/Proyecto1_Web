import React from 'react'
import '../css/Services.scss'

const Services = () => (
  <section className="services-container">
    <div className="services">
      <div className="eventos">
        <h1 className="e-h1">EVENTOS</h1>
        <button type="button" className="e-button">
          COTIZAR
        </button>
      </div>
      <div className="horarios">
        <h1 className="e-h1">EVENTOS</h1>
        <div className="info-horarios">
          <div className="services-dias">
            <div className="apertura">11AM - 8PM</div>
            <p>Lunes a Jueves</p>
          </div>
          <div className="services-dias">
            <div className="apertura">11AM - 9PM</div>
            <p>Viernes a Domingo</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Services
