import React, { useContext } from 'react'
import { observer } from 'mobx-react'

import { PlanetstoreContext } from '@/stores/PlanetStore'

import PlanetHeader from '@/components/planet/PlanetHeader'
import PlanetData from '@/components/planet/PlanetData'
import Loader from '@/components/misc/Loader'

import '@/styles/movie/movie-planets.scss'

const MoviePlanets = observer((props) => {
  const planetStore = useContext(PlanetstoreContext)

  return (
    <div className={`movie-planets${props.active ? ' movie-planets--active' : ''}`}>
      <div className="movie-planets__header">
        <PlanetHeader/>
      </div>

      <div className={`movie-planets__loader${!props.movie.planetDataLoaded ? ' movie-planets__loader--loading' : ''}`}>
        <Loader loading={!props.movie.planetDataLoaded} size="35px"/>
      </div>

      {
        props.movie.planets.map(planetID => {
          if (!props.movie.planetDataLoaded) return

          return (
            <PlanetData planet={planetStore.getPlanet(planetID)} key={`${props.movie.title}-${planetID}`}/>
          )
        })
      }
    </div>
  )
})

export default MoviePlanets