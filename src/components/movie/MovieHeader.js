import React from 'react'

import '@/styles/movie/movie-header.scss'

import arrowOpen from '@/assets/arrow_open.svg'
import arrowClose from '@/assets/arrow_close.svg'

function MovieHeader (props) {
  return (
    <div className={`movie-header${props.active ? ' movie-header--active' : ''}`}>
      <span className="movie-header__title">{props.title}</span>
      <div className="movie-header__arrow">
        <img src={arrowOpen} className="movie-header__arrow--open" alt="arrow open"
             onClick={() => props.passActive(true)}/>
        <img src={arrowClose} className="movie-header__arrow--close" alt="arrow close"
             onClick={() => props.passActive(false)}/>
      </div>
    </div>
  )
}

export default MovieHeader