import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Burrito from './Burrito'

import b1 from '../../assets/images/slider/b1.jpg'
import b2 from '../../assets/images/slider/b2.jpg'
import b3 from '../../assets/images/slider/b3.jpg'
import b4 from '../../assets/images/slider/b4.jpg'
import b5 from '../../assets/images/slider/b5.jpg'
import b6 from '../../assets/images/slider/b6.jpg'
import b7 from '../../assets/images/slider/b7.jpg'
import b8 from '../../assets/images/slider/b8.jpg'

const burritos = [
  [b1, 'NAKED BURRITO', 'PAPI'],
  [b2, 'NAKED BURRITO', 'GUACAMOLERO'],
  [b3, 'NAKED BURRITO', 'MECHAS'],
  [b4, 'NAKED BURRITO', 'ASADÓN'],
  [b5, 'EL ASADÓN'],
  [b6, 'PAPI CHIPOTLE'],
  [b7, 'EL MECHAS'],
  [b8, 'GUACAMOLERO'],
]

const Slider = ({ direction, isMoving, setIsMoving }) => {
  const [augment, setAugment] = useState(0)
  const offset = 310 * augment

  useEffect(() => {
    if (
      !isMoving
      || (augment === 4 && direction === 'right')
      || (augment === 0 && direction === 'left')
    ) return setIsMoving(false)

    const newAugment = (direction === 'left')
      ? augment - 1
      : augment + 1

    setAugment(newAugment)
    setIsMoving(false)
  }, [isMoving])

  return (
    <div className="slider-container">
      <div className="slider">
        <ul
          style={{
            transform: `translateX(-${offset}px)`,
          }}
        >
          {burritos.map((burrito) => (
            <Burrito
              burrito={burrito}
              key={burritos.indexOf(burrito)}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

// Props Validation
Slider.propTypes = {
  direction: PropTypes.string.isRequired,
  isMoving: PropTypes.bool.isRequired,
  setIsMoving: PropTypes.func.isRequired,
}

export default Slider
