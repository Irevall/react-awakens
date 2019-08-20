import React from 'react'

import '@/styles/movie/movie-planets.scss'

import { Planet } from '@/models/Planet'
import PlanetHeader from '@/components/planet/PlanetHeader'
import PlanetData from '@/components/planet/PlanetData'

function MoviePlanets (props) {
  return (
    <div className={`movie-planets${props.active ? ' movie-planets--active' : ''}`}>
      <div className="movie-planets__header">
        <PlanetHeader/>
      </div>

      {
        props.planets.map(planet => {
          return (
            <PlanetData planet={planet}/>
          )
        })
      }

    </div>
  )
}

export default MoviePlanets