import React from 'react'
import PropTypes from 'prop-types'

const Burrito = ({ burrito }) => (
  <li>
    <img src={burrito[0]} alt={burrito[1]} />
    <h2 className="header-burrito">
      {burrito[1]}
    </h2>
    {burrito.length > 2 && (
      <h2 className="footer-burrito">
        {burrito[2]}
      </h2>
    )}
  </li>
)

Burrito.propTypes = {
  burrito: PropTypes.arrayOf(String).isRequired,
}

export default Burrito
