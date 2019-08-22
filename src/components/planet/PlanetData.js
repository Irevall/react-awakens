import React from 'react'

import '@/styles/planet/planet-data.scss'

function PlanetData (props) {
  return (
    <div className="planet-data">
      <div className="planet-data__header">
        <span>Planet Name</span>
      </div>
      <div className="planet-data__data">
        <span>{props.planet.name}</span>
      </div>

      <div className="planet-data__header">
        <span>Rotation period</span>
      </div>
      <div className="planet-data__data">
        <span>{props.planet.rotationPeriod}</span>
      </div>


      <div className="planet-data__header">
        <span>Orbital period</span>
      </div>
      <div className="planet-data__data">
        <span>{props.planet.orbitalPeriod}</span>
      </div>

      <div className="planet-data__header">
        <span>Diameter</span>
      </div>
      <div className="planet-data__data">
        <span>{props.planet.diameter}</span>
      </div>

      <div className="planet-data__header">
        <span>Climate</span>
      </div>
      <div className="planet-data__data">
        <span>{props.planet.climate}</span>
      </div>

      <div className="planet-data__header">
        <span>Surface water</span>
      </div>
      <div className="planet-data__data">
        <span>{props.planet.surfaceWater}</span>
      </div>

      <div className="planet-data__header">
        <span>Population</span>
      </div>
      <div className="planet-data__data">
        <span>{props.planet.population}</span>
      </div>
    </div>
  )
}

export default PlanetData