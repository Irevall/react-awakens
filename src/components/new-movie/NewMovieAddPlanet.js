import React, { useContext, useEffect, useMemo, useState } from 'react'
import { observer } from 'mobx-react'

import searchIcon from '@/assets/search.svg'

import { newMovieStoreContext } from '@/stores/NewMovieStore'
import { fakeRejectedPromise, toggleClassName } from '@/helpers'
import deleteIcon from '@/assets/delete.svg'
import { searchPlanets } from '@/services/ApiService'

import '@/styles/new-movie/new-movie-add-planet.scss'

const NewMovieAddPlanet = observer(() => {
  const newMovieStore = useContext(newMovieStoreContext)

  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(false)

  useEffect(() => {
    setSearchQuery('')
    setSearchResults(null)
    setLoading(false)
  }, [newMovieStore.cleanup])

  useEffect(() => {
    let interrupted = false
    setLoading(false)
    setApiError(false)

    if (!searchQuery) return setSearchResults(null)

    const timeout = setTimeout(async () => {
      setLoading(true)

      try {
        const results = (await searchPlanets(searchQuery))
          .map(planet => {
            return new NewMoviePlanet(planetUrlToId(planet.url), planet.name)
          })

        if (interrupted) return

        setLoading(false)
        setSearchResults(results)
      } catch {
        setApiError(true)
        setLoading(false)
        setSearchResults([])
      }
    }, 500)
    return () => {
      interrupted = true
      clearTimeout(timeout)
    }
  }, [searchQuery])

  const filteredSearchResults = useMemo(() => {
    if (!searchResults) return []

    return searchResults.filter(result => {
      // this line limits search to only planets that start with the query, not sure if it's desired
      if (!result.name.toLowerCase().startsWith(searchQuery.toLowerCase())) return
      if (newMovieStore.planets.find(planet => planet.id === result.id)) return

      return result
    })
  }, [newMovieStore.planets, searchResults])

  function renderIfNoResults () {
    if (filteredSearchResults.length !== 0) return

    if (loading) {
      return (
        <span
          className="new-movie-add-planet__search-result new-movie-add-planet__search-result--loading">Loading...</span>
      )
    } else if (apiError) {
      return (
        <span className="new-movie-add-planet__search-result new-movie-add-planet__search-result--error">API error, try again later</span>
      )
    } else {
      return (
        <span className="new-movie-add-planet__search-result new-movie-add-planet__search-result--empty">None</span>
      )
    }
  }

  return (
    <div className="new-movie-add-planet app-new-movie__input-wrapper">
      <label className="new-movie-add-planet__label app-new-movie__label">Add Planet</label>
      <div className="new-movie-add-planet__search">
        <input type="text" className="new-movie-add-planet__input app-new-movie__input"
               placeholder="Search for the planet in database"
               value={searchQuery}
               onChange={(event) => { setSearchQuery(event.target.value) }}
        />
        <div className="new-movie-add-planet__search-icon">
          <img src={searchIcon} alt="search"/>
        </div>
      </div>
      <div
        className={toggleClassName('new-movie-add-planet__search-results', 'visible', loading || searchResults)}>
        <div className="new-movie-add-planet__close-search" onClick={() => { setSearchQuery('') }}>
          <img src={deleteIcon} alt="remove"/>
        </div>
        {renderIfNoResults()}
        {
          filteredSearchResults.map((searchResult) => {
            return (
              <span className="new-movie-add-planet__search-result" key={searchResult.id}
                    onClick={() => { newMovieStore.addPlanet(searchResult) }}>{searchResult.name}</span>
            )
          })
        }
      </div>
    </div>
  )
})

export default NewMovieAddPlanet