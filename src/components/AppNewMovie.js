import React, { useState } from 'react'

import '@/styles/app/app-new-movie.scss'

import MovieHeader from '@/components/movie/MovieHeader'

function AppNewMovie () {
  const [active, setActive] = useState(false)

  return (
    <div className={`app-new-movie${active ? ' app-new-movie--active' : ''}`}>
      <MovieHeader title="Add movie" active={active} passActive={setActive}/>
      <div className="app-new-movie__creator">

      </div>
    </div>
  )
}

export default AppNewMovie