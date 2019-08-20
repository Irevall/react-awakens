import React from 'react'

import '@/styles/planet/planet-header.scss'

function PlanetHeader () {
  return (
    <div className="planet-header">
      <div className="planet-header__title">
        <span>Planet Name</span>
      </div>

      <div className="planet-header__title">
        <span>Rotation period</span>
      </div>

      <div className="planet-header__title">
        <span>Orbital period</span>

      </div>

      <div className="planet-header__title">
        <span>Diameter</span>
      </div>

      <div className="planet-header__title">
        <span>Climate</span>
      </div>

      <div className="planet-header__title">
        <span>Surface water</span>
      </div>

      <div className="planet-header__title">
        <span>Population</span>
      </div>
    </div>
  )
}

export default PlanetHeader