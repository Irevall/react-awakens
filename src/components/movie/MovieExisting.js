import React, { useState } from 'react'

import '@/styles/movie/movie-existing.scss'

import MovieHeader from '@/components/movie/MovieHeader'
import MoviePlanets from '@/components/movie/MoviePlanets'

function MovieExisting (props) {
  const [active, setActive] = useState(false)

  return (
    <div className={`movie-existing${active ? ' movie-existing--active' : ''}`}>
      <MovieHeader title={props.title} active={active} passActive={setActive}/>
      <MoviePlanets active={active} planets={props.planets}/>
    </div>
  )
}

export default MovieExisting