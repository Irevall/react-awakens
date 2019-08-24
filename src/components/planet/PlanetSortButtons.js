import React, { useContext } from 'react'

import '@/styles/planet/planet-sort-buttons.scss'

function PlanetSortButtons ({ movie, property }) {
  return (
    <div className={`planet-sort-buttons ${movie.planetPropertySort.property === property ? 'planet-sort-buttons--active' : ''}`}>
      <div className={`planet-sort-buttons__button planet-sort-buttons__button--up
      ${movie.planetPropertySort.order === 'asc' ? 'planet-sort-buttons__button--active' : ''}`}
           onClick={() => {
        movie.planetPropertySort = { property, order: 'asc' }
      }}> </div>
      <div className={`planet-sort-buttons__button planet-sort-buttons__button--down
      ${movie.planetPropertySort.order === 'desc' ? 'planet-sort-buttons__button--active' : ''}`}
           onClick={() => {
             movie.planetPropertySort = { property, order: 'desc' }
           }}> </div>
    </div>
  )
}

export default PlanetSortButtons