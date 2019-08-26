import React, { useState, useContext } from 'react'
import { observer } from 'mobx-react'

import { toggleClassName } from '@/helpers'
import MovieHeader from '@/components/movie/MovieHeader'

import '@/styles/app/app-new-movie.scss'
import NewMovieTitle from '@/components/new-movie/NewMovieTitle'
import NewMoviePlanets from '@/components/new-movie/NewMoviePlanets'
import NewMovieAddPlanet from '@/components/new-movie/NewMovieAddPlanet'
import { newMovieStoreContext } from '@/stores/NewMovieStore'

const AppNewMovie = observer(() => {
  const newMovieStore = useContext(newMovieStoreContext)

  const [active, setActive] = useState(false)

  function interceptToggle () {
    setActive(!active)
  }

  return (
    <div className={toggleClassName('app-new-movie', 'active', active)}>
      <MovieHeader title="Add movie" active={active} toggle={interceptToggle}/>
      <div className="app-new-movie__creator">
        <NewMovieTitle/>
        <NewMoviePlanets/>
        <NewMovieAddPlanet/>

        <div className="app-new-movie__button-wrapper">
          <div
            className={toggleClassName('app-new-movie__button', 'inactive', !newMovieStore.isValid)}
            onClick={() => { newMovieStore.addMovie() }}>
            <span>Add movie</span>
          </div>
        </div>
      </div>
    </div>
  )
})

export default AppNewMovie