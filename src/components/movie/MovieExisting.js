import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react'

import { PlanetstoreContext } from '@/stores/PlanetStore'

import MovieHeader from '@/components/movie/MovieHeader'
import MoviePlanets from '@/components/movie/MoviePlanets'

import '@/styles/movie/movie-existing.scss'

const MovieExisting = observer((props) => {
  const planetStore = useContext(PlanetstoreContext)

  const [active, setActive] = useState(false)

  async function interceptToggle () {
    setActive(!active)

    if (!props.movie.planetDataLoaded) {
      await planetStore.fetchData(props.movie.planets)
      props.movie.planetDataLoaded = true
    }
  }

  return (
    <div className={`movie-existing${active ? ' movie-existing--active' : ''}`}>
      <MovieHeader title={props.movie.title} active={active} toggle={interceptToggle}/>
      <MoviePlanets active={active} loading={props.movie.planetDataLoaded} movie={props.movie}/>
    </div>
  )
})

export default MovieExisting