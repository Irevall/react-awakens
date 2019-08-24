import React from 'react'

import { planetProperties } from '@/resources/planet'
import PlanetColumnNames from '@/components/planet/PlanetColumnNames'

import '@/styles/planet/planet-data.scss'

function PlanetData ({ planet }) {
  return (
    <div className="planet-data">
      <PlanetColumnNames type="vertical"/>

      <div className="planet-data__data-wrapper">
        {
          planetProperties.map(planetProperty => {
            return (
              <div className="planet-data__data" key={planetProperty.property}>
                <span>{planet[planetProperty.property]}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default PlanetData