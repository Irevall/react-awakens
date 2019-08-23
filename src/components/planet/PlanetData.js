import React from 'react'

import '@/styles/planet/planet-data.scss'
import PlanetColumnNames from '@/components/planet/PlanetColumnNames'

function PlanetData (props) {
  return (
    <div className="planet-data">
      <PlanetColumnNames type="vertical"/>

      <div className="planet-data__data-wrapper">
        <div className="planet-data__data">
          <span>{props.planet.name}</span>
        </div>

        <div className="planet-data__data">
          <span>{props.planet.rotationPeriod}</span>
        </div>

        <div className="planet-data__data">
          <span>{props.planet.orbitalPeriod}</span>
        </div>

        <div className="planet-data__data">
          <span>{props.planet.diameter}</span>
        </div>

        <div className="planet-data__data">
          <span>{props.planet.climate}</span>
        </div>

        <div className="planet-data__data">
          <span>{props.planet.surfaceWater}</span>
        </div>

        <div className="planet-data__data">
          <span>{props.planet.population}</span>
        </div>
      </div>
    </div>
  )
}

export default PlanetData