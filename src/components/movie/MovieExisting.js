import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react'

import { planetStoreContext } from '@/stores/PlanetStore'

import MovieHeader from '@/components/movie/MovieHeader'
import MoviePlanets from '@/components/movie/MoviePlanets'

import '@/styles/movie/movie-existing.scss'
import { toggleClassName } from '@/helpers'

const MovieExisting = observer(({ movie }) => {
  const planetStore = useContext(planetStoreContext)

  const [active, setActive] = useState(false)

  async function interceptToggle () {
    setActive(!active)

    if (!movie.planetDataLoaded) {
      await planetStore.fetchData(movie.planets)
      movie.planetDataLoaded = true
    }
  }

  return (
    <div className={toggleClassName('movie-existing', 'active', active)}>
      <MovieHeader title={movie.title} active={active} toggle={interceptToggle}/>
      <MoviePlanets active={active} movie={movie}/>
    </div>
  )
})

export default MovieExisting