import React, { useState, useEffect } from 'react'
import './css/App.scss'

const App = () => {
  console.log('hola')

  return (
    <div className="App">
      <div className="floating-button-container"> floating menu </div>
      <div className="side-menu"> side nav </div>
      <div className="main-menu"> main gif  </div>
      <div className="rotate-menu"> carousell </div>
      <div className="grafity"> grafity banner </div>
      <div className="merch"> merch </div>
      <div className="contact"> contact </div>
      <div className="services"> services </div>
      <div className="social"> social </div>
      <div className="footer"> footer </div>
    </div>
  )
}

export default App
