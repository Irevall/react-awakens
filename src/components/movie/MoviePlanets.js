import React, { useContext, useEffect } from 'react'

import '@/styles/movie/movie-planets.scss'

import PlanetHeader from '@/components/planet/PlanetHeader'
import PlanetData from '@/components/planet/PlanetData'
import { observer } from 'mobx-react'
import { PlanetstoreContext } from '@/stores/PlanetStore'
import { MovieStoreContext } from '@/stores/MovieStore'


const MoviePlanets = observer((props) => {
  const planetStore = useContext(PlanetstoreContext)
  const movieStore = useContext(MovieStoreContext)

  // useEffect(() => {
  //   async function requestFetch () {
  //     await planetStore.fetchData(props.planets)
  //   }
  //
  //   requestFetch()
  // })

  return (
    <div className={`movie-planets${props.active ? ' movie-planets--active' : ''}`}>
      <div className="movie-planets__header">
        <PlanetHeader/>
      </div>

      {
        props.movie.planets.map(planetID => {
          if (!movieStore.movies[0].planetDataLoaded) return

          return (
            <PlanetData planet={planetStore.getPlanet(planetID)} key={`${props.movie.title}-${planetID}`}/>
          )
        })
      }
    </div>
  )
})

export default MoviePlanets