import React, { useState, useEffect, useContext, useMemo } from 'react'
import { observer } from 'mobx-react'

import { MovieStoreContext } from '@/stores/MovieStore'
import { searchPlanets } from '@/services/ApiService'
import { urlToId } from '@/helpers/planetUrlToPlanetId'
import MovieHeader from '@/components/movie/MovieHeader'

import deleteIcon from '@/assets/delete.svg'
import search from '@/assets/search.svg'
import '@/styles/app/app-new-movie.scss'

const AppNewMovie = observer(() => {
  const movieStore = useContext(MovieStoreContext)

  // FIXME: This got really messy really quickly
  const [active, setActive] = useState(false)
  const [title, setTitle] = useState(null)
  const [isTitleValid, setIsTitleValid] = useState(true)
  const [planets, setPlanets] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [loading, setLoading] = useState(false)

  function interceptToggle () {
    setActive(!active)
  }

  function removePlanet (planet) {
    setPlanets(planets.filter(listPlanet => listPlanet !== planet))
  }

  function addMovie () {
    if (!isValidMovie) return
    movieStore.addUserMovie(title, planets.map(planet => planet.id))
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
          }
        })
      setLoading(false)
      setSearchResults(results)
    }, 500)
    return () => clearTimeout(timeout)
  }, [searchQuery])

  const filteredSearchResults = useMemo(() => {
    if (!searchResults) return []

    return searchResults.filter(result => {
      if (!result.name.toLowerCase().startsWith(searchQuery.toLowerCase())) return
      if (planets.find(planet => planet.name === result.name)) return

      return result
    })
  }, [searchResults])

  const isValidMovie = useMemo(() => {
    return planets.length > 0 && isTitleValid
  }, [planets, isTitleValid])

  useEffect(() => {
    if (title === null) return

    if (title && title[0] === title[0].toUpperCase() && title.length >= 3) return setIsTitleValid(true)

    const timeout = setTimeout(async () => {
      setIsTitleValid(false)
    }, 750)

    return () => clearTimeout(timeout)
  }, [title])


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
          <div className={`app-new-movie__title-error${!isTitleValid ? ' app-new-movie__title-error--visible' : ''}`}>
            <span>Movie title must start with a capital letter and have at least 3 letters</span>
          </div>
        </div>

        <div className="app-new-movie__planets">
          {
            planets.map((planet) => {
              return (
                <div className="app-new-movie__planet" key={planet.id}>
                  <span className="app-new-movie__planet-name">{planet.name}</span>
                  <div className="app-new-movie__planet-remove" onClick={() => { removePlanet(planet) }}>
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
            {renderIfNoResults()}
            {
              filteredSearchResults.map((searchResult) => {
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
          <div className={`app-new-movie__button${!isValidMovie ?  ' app-new-movie__button--inactive' : ''}`} onClick={() => { addMovie() }}>
            <span>Add movie</span>
          </div>
        </div>
      </div>
    </div>
  )
})

export default AppNewMovie