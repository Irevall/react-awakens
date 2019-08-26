import React, { useContext } from 'react'
import { observer } from 'mobx-react'

import { movieStoreContext } from '@/stores/MovieStore'

import MovieExisting from '@/components/movie/MovieExisting'
import Loader from '@/components/misc/Loader'

import '@/styles/app/app-movies.scss'

const AppMovies = observer(() => {
  const movieStore = useContext(movieStoreContext);

  return (
    <div className="app-movies">
      <Loader loading={movieStore.loading} size="75px"/>
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