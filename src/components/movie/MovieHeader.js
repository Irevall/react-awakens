import React from 'react'

import arrowOpen from '@/assets/arrow_open.svg'
import arrowClose from '@/assets/arrow_close.svg'

import '@/styles/movie/movie-header.scss'

function MovieHeader (props) {
  return (
    <div className={`movie-header${props.active ? ' movie-header--active' : ''}`} onClick={() => props.toggle()}>
      <span className="movie-header__title">{props.title}</span>
      <div className="movie-header__arrow">
        <img src={arrowOpen} className="movie-header__arrow--open" alt="arrow open"/>
        <img src={arrowClose} className="movie-header__arrow--close" alt="arrow close"/>
      </div>
    </div>
  )
}

export default MovieHeader