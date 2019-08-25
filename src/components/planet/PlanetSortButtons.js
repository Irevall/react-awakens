import React from 'react'

import '@/styles/planet/planet-sort-buttons.scss'
import { toggleClassName } from '@/helpers'

function PlanetSortButtons ({ movie, property }) {
  return (
    <div className={toggleClassName('planet-sort-buttons', 'active', movie.planetPropertySort.property === property)}>
      <div className={toggleClassName('planet-sort-buttons__button', 'active',
        movie.planetPropertySort.property === property && movie.planetPropertySort.order === 'asc')}
           onClick={() => {
        movie.planetPropertySort = { property, order: 'asc' }
      }}> </div>
      <div className={toggleClassName('planet-sort-buttons__button', 'active',
        movie.planetPropertySort.property === property && movie.planetPropertySort.order === 'desc')}
           onClick={() => {
             movie.planetPropertySort = { property, order: 'desc' }
           }}> </div>
    </div>
  )
}

export default PlanetSortButtons