import React, { useContext, useState } from 'react'

import '@/styles/movie/movie-existing.scss'

import MovieHeader from '@/components/movie/MovieHeader'
import MoviePlanets from '@/components/movie/MoviePlanets'
import { observer } from 'mobx-react'
import { PlanetstoreContext } from '@/stores/PlanetStore'
import { MovieStoreContext } from '@/stores/MovieStore'
import { set } from 'mobx'

const MovieExisting = observer((props) => {
  const planetStore = useContext(PlanetstoreContext)
  const movieStore = useContext(MovieStoreContext);

  const [active, setActive] = useState(false)

  async function interceptToggle () {
    setActive(!active)

    if (!props.movie.planetDataLoaded) {
      await planetStore.fetchData(props.movie.planets)
      set(movieStore.movies[0], 'planetsDataLoaded', true)
      // props.movie.planetDataLoaded = true
    }
  }

  return (
    <div className={`movie-existing${active ? ' movie-existing--active' : ''}`}>
      <MovieHeader title={props.movie.title} active={active} toggle={interceptToggle}/>
      <MoviePlanets active={active} movie={props.movie}/>
    </div>
  )
})

export default MovieExisting