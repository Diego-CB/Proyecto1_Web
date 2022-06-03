import React, { useState } from 'react'
import '../../css/Carussel.scss'

import ArrowButton from './ArrowButton'
import Slider from './Slider'

const Carussel = () => {
  const [isMoving, setIsMoving] = useState(false)
  const [direction, setDirection] = useState('')

  const setter = moveDirection => {
    setIsMoving(true)
    setDirection(moveDirection)
  }

  return (
    <section className="carusel-container">
      <div className="carussel">
        <ArrowButton setter={setter} direction="left" />
        <Slider
          isMoving={isMoving}
          direction={direction}
          setIsMoving={setIsMoving}
        />
        <ArrowButton setter={setter} direction="right" />
      </div>

      <div className="slider-button">
        <button type="button">
          VER MENÚ
        </button>
      </div>
    </section>
  )
}

export default Carussel
