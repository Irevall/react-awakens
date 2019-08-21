import React, { useContext } from 'react'
import { observer } from 'mobx-react'

import '@/styles/app/app-movies.scss'

import MovieExisting from '@/components/movie/MovieExisting'
import { MovieStoreContext } from '@/stores/MovieStore'
import curvedArrows from '@/assets/curved_arrows.svg'

const AppMovies = observer(() => {
  const movieStore = useContext(MovieStoreContext);

  return (
    <div className="app-movies">
      <div className={`app-movies__loader${movieStore.loading ? ' app-movies__loader--loading' : ''}`}>
        <img src={curvedArrows} className="app-movies__loader-icon" alt="loading"/>
      </div>
      {
        movieStore.movies.map(movie => {
          return (
            <MovieExisting movie={movie} key={movie.id}/>
          )
        })
      }
    </div>
  )
})

export default AppMovies