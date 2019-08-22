import React, { useState } from 'react'

import MovieHeader from '@/components/movie/MovieHeader'

import search from '@/assets/search.svg'
import '@/styles/app/app-new-movie.scss'

function AppNewMovie () {
  const [active, setActive] = useState(false)

  async function interceptToggle () {
    setActive(!active)
  }

  return (
    <div className={`app-new-movie${active ? ' app-new-movie--active' : ''}`}>
      <MovieHeader title="Add movie" active={active} toggle={interceptToggle}/>
      <div className="app-new-movie__creator">
        <div className="app-new-movie__input-wrapper">
          <label className="app-new-movie__label">Movie title</label>
          <input type="text" className="app-new-movie__input app-new-movie__input--title"
                 placeholder="Please enter the title of the movie"/>
        </div>

        <div className="app-new-movie__input-wrapper">
          <label className="app-new-movie__label">Add Planet</label>
          <div className="app-new-movie__search">
            <input type="text" className="app-new-movie__input app-new-movie__input--search"
                   placeholder="Search for the planet in database"/>
            <div className="app-new-movie__search-icon">
              <img src={search} alt="search"/>
            </div>
          </div>
        </div>

        <div className="app-new-movie__button-wrapper">
          <div className="app-new-movie__button">
            <span>Add movie</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppNewMovie