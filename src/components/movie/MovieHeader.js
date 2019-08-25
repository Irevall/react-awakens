import React from 'react'

import arrowOpen from '@/assets/arrow_open.svg'
import arrowClose from '@/assets/arrow_close.svg'

import '@/styles/movie/movie-header.scss'
import { toggleClassName } from '@/helpers'

function MovieHeader ({ active, title, toggle }) {
  return (
    <div className={toggleClassName('movie-header', 'active', active)} onClick={() => toggle()}>
      <span className="movie-header__title">{title}</span>
      <div className="movie-header__arrow">
        <img src={arrowOpen} className="movie-header__arrow--open" alt="arrow open"/>
        <img src={arrowClose} className="movie-header__arrow--close" alt="arrow close"/>
      </div>
    </div>
  )
}

export default MovieHeader