import React from 'react'
import PropTypes from 'prop-types'
import leftImg from '../../assets/images/arrow-left.png'
import rightImg from '../../assets/images/arrow-right.png'

const ArrowButton = ({ setter, direction }) => {
  const arrowImg = (direction === 'left')
    ? leftImg
    : rightImg

  return (
    <div className="arrow-container">
      <button
        className={'arrow arrow-' + direction}
        type="button"
        onClick={() => setter(direction)}
      >
        <img src={arrowImg} alt="" />
      </button>
    </div>
  )
}

// Props Validation
ArrowButton.propTypes = {
  setter: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
}

export default ArrowButton
