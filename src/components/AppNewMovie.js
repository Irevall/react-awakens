import React, { useState, useEffect } from 'react'

import { searchPlanets } from '@/services/ApiService'
import { urlToId } from '@/helpers/planetUrlToPlanetId'
import MovieHeader from '@/components/movie/MovieHeader'

import deleteIcon from '@/assets/delete.svg'
import search from '@/assets/search.svg'
import '@/styles/app/app-new-movie.scss'

function AppNewMovie () {
  // FIXME: This got really messy really quickly
  const [active, setActive] = useState(false)
  const [title, setTitle] = useState('')
  const [planets, setPlanets] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [filteredSearchResults, setFilteredSearchResults] = useState([])
  const [loading, setLoading] = useState(false)

  async function interceptToggle () {
    setActive(!active)
  }

  useEffect(() => {
    if (!searchQuery) return setSearchResults(null)

    const timeout = setTimeout(async () => {
      setLoading(true)
      const results = (await searchPlanets(searchQuery))
        .map(planet => {
          return {
            id: urlToId(planet.url),
            name: planet.name,
            url: planet.url
          }
        })
      setLoading(false)
      setSearchResults(results)
    }, 500)
    return () => clearTimeout(timeout)
  }, [searchQuery])

  useEffect(() => {
    if (!searchResults) return

    const filteredResults = searchResults.filter(result => {
      if (!result.name.toLowerCase().startsWith(searchQuery.toLowerCase())) return
      if (planets.find(planet => planet.name === result.name)) return

      return result
    })

    setFilteredSearchResults(filteredResults)
  }, [searchResults, planets])

  function renderIfNoResults () {
    if (filteredSearchResults.length !== 0) return

    if (loading) {
      return (
        <span className="app-new-movie__search-result app-new-movie__search-result--loading">Loading...</span>
      )
    } else {
      return (
        <span className="app-new-movie__search-result app-new-movie__search-result--empty">None</span>
      )
    }
  }

  return (
    <div className={`app-new-movie${active ? ' app-new-movie--active' : ''}`}>
      <MovieHeader title="Add movie" active={active} toggle={interceptToggle}/>
      <div className="app-new-movie__creator">
        <div className="app-new-movie__input-wrapper">
          <label className="app-new-movie__label">Movie title</label>
          <input type="text" className="app-new-movie__input app-new-movie__input--title"
                 placeholder="Please enter the title of the movie"
                 onChange={(event) => { setTitle(event.target.value) }}/>
        </div>

        <div className="app-new-movie__planets">
          {
            planets.map((planet) => {
              return (
                <div className="app-new-movie__planet">
                  <span className="app-new-movie__planet-name">{planet.name}</span>
                  <div className="app-new-movie__planet-remove" onClick={() => { setSearchQuery('') }}>
                    <img src={deleteIcon} alt="remove"/>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className="app-new-movie__input-wrapper">
          <label className="app-new-movie__label">Add Planet</label>
          <div className="app-new-movie__search">
            <input type="text" className="app-new-movie__input app-new-movie__input--search"
                   placeholder="Search for the planet in database"
                   value={searchQuery}
                   onChange={(event) => { setSearchQuery(event.target.value) }}
            />
            <div className="app-new-movie__search-icon">
              <img src={search} alt="search"/>
            </div>
          </div>
          <div
            className={`app-new-movie__search-results${loading || searchResults ? ' app-new-movie__search-results--visible' : ''}`}>
            <div className="app-new-movie__close-search" onClick={() => { setSearchQuery('') }}>
              <img src={deleteIcon} alt="remove"/>
            </div>
            { renderIfNoResults() }
            {
              filteredSearchResults.map((searchResult, index) => {
                return (
                  <span className="app-new-movie__search-result" key={searchResult.id}
                        onClick={() => {
                          setPlanets([...planets, searchResult])
                        }
                        }>{searchResult.name}</span>
                )
              })
            }
          </div>
        </div>

        <div className="app-new-movie__button-wrapper">
          <div className="app-new-movie__button" onClick={() => { console.log(planets) }}>
            <span>Add movie</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppNewMovie