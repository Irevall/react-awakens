import React from 'react'

import '@/styles/movie/movie-planets.scss'

import PlanetHeader from '@/components/planet/PlanetHeader'
import PlanetData from '@/components/planet/PlanetData'

function MoviePlanets (props) {

  // FIXME: This is whole implementation feels really 'hacky', especially the computer/mobile switch

  return (
    <div className={`movie-planets${props.active ? ' movie-planets--active' : ''}`}>
      <div className="movie-planets__header">
        <PlanetHeader/>
      </div>

      {
        props.planets.map(planet => {
          return (
            <PlanetData planet={planet} key={planet.name}/>
          )
        })
      }
    </div>
  )
}

export default MoviePlanets