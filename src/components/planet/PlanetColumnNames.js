import React from 'react'

import '@/styles/planet/planet-column-names.scss'
import PlanetSortButtons from '@/components/planet/PlanetSortButtons'

function PlanetColumnNames ({ movie, type }) {
  const planetProperties = [
    { name: 'Planet Name', property: 'name' },
    { name: 'Rotation period', property: 'rotationPeriod' },
    { name: 'Orbital period', property: 'orbitalPeriod' },
    { name: 'Diameter', property: 'diameter' },
    { name: 'Climate', property: 'climate' },
    { name: 'Surface water', property: 'surfaceWater' },
    { name: 'Population', property: 'population' },
  ]

  function renderSortButtons (property) {
    if (type === 'vertical') return

    return (
      <PlanetSortButtons movie={movie} property={property}/>
    )
  }

  return (
    <div className={`planet-column-names${type ? ` planet-column-names--${type}` : ''}`}>
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