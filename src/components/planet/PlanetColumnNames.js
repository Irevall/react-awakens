import React from 'react'

import '@/styles/planet/planet-column-names.scss'

function PlanetColumnNames (props) {
  return (
    <div className={`planet-column-names${props.type ? ` planet-column-names--${props.type}` : ''}`}>
      <div className="planet-column-names__title">
        <span>Planet Name</span>
      </div>

      <div className="planet-column-names__title">
        <span>Rotation period</span>
      </div>

      <div className="planet-column-names__title">
        <span>Orbital period</span>
      </div>

      <div className="planet-column-names__title">
        <span>Diameter</span>
      </div>

      <div className="planet-column-names__title">
        <span>Climate</span>
      </div>

      <div className="planet-column-names__title">
        <span>Surface water</span>
      </div>

      <div className="planet-column-names__title">
        <span>Population</span>
      </div>
    </div>
  )
}

export default PlanetColumnNames