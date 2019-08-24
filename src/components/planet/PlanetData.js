import React from 'react'

import '@/styles/planet/planet-data.scss'
import PlanetColumnNames from '@/components/planet/PlanetColumnNames'

function PlanetData ({ planet }) {
  return (
    <div className="planet-data">
      <PlanetColumnNames type="vertical"/>

      <div className="planet-data__data-wrapper">
        <div className="planet-data__data">
          <span>{planet.name}</span>
        </div>

        <div className="planet-data__data">
          <span>{planet.rotationPeriod}</span>
        </div>

        <div className="planet-data__data">
          <span>{planet.orbitalPeriod}</span>
        </div>

        <div className="planet-data__data">
          <span>{planet.diameter}</span>
        </div>

        <div className="planet-data__data">
          <span>{planet.climate}</span>
        </div>

        <div className="planet-data__data">
          <span>{planet.surfaceWater}</span>
        </div>

        <div className="planet-data__data">
          <span>{planet.population}</span>
        </div>
      </div>
    </div>
  )
}

export default PlanetData