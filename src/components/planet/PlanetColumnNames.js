import React from 'react'

import { planetProperties } from '@/resources/planet'
import PlanetSortButtons from '@/components/planet/PlanetSortButtons'

import '@/styles/planet/planet-column-names.scss'
import { toggleClassName } from '@/helpers'

function PlanetColumnNames ({ movie, type }) {
  function renderSortButtons (property) {
    if (type === 'vertical') return

    return (
      <PlanetSortButtons movie={movie} property={property}/>
    )
  }

  return (
    <div className={toggleClassName('planet-column-names', type, type)}>
      {
        planetProperties.map(planetProperty => {
          return (
            <div className="planet-column-names__title" key={planetProperty.property}>
              <span>{planetProperty.name}</span>
              {renderSortButtons(planetProperty.property)}
            </div>
          )
        })
      }
    </div>
  )
}

export default PlanetColumnNames