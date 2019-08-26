import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { toggleClassName } from '@/helpers'

import { newMovieStoreContext } from '@/stores/NewMovieStore'

import '@/styles/new-movie/new-movie-title.scss'

const NewMovieTitle = observer(() => {
  const newMovieStore = useContext(newMovieStoreContext)

  const [title, setTitle] = useState('')
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    setTitle('')
    setShowError(false)
  }, [newMovieStore.cleanup])

  useEffect(() => {
    newMovieStore.title = title

    if (!title) return setShowError(false)

    if (title[0] !== title[0].toUpperCase()) return setShowError(true)
    if (title.length >= 3) return setShowError(false)

    const timeout = setTimeout(async () => {
      setShowError(true)
    }, 500)

    return () => clearTimeout(timeout)
  }, [title])

  return (
    <div className="new-movie-title app-new-movie__input-wrapper">
      <label className={toggleClassName('new-movie-title__label', 'error', showError) + ' app-new-movie__label'}>
        Movie title
      </label>
      <input type="text" className="new-movie-title__input app-new-movie__input"
             placeholder="Please enter the title of the movie"
             value={title}
             onChange={(event) => { setTitle(event.target.value) }}/>
      <div className={toggleClassName('new-movie-title__error', 'visible', showError)}>
        <span>Movie title must start with a capital letter and have at least 3 letters</span>
      </div>
    </div>
  )
})

export default NewMovieTitle