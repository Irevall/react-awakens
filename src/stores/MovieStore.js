import { createContext } from 'react'
import { observable, action } from 'mobx'
import { getMovies } from '@/services/ApiService'
import { setItem, getItem } from '@/services/StorageService'
import { planetUrlToId } from '@/helpers'

class MovieStore {
  @observable loading = false
  @observable movies = []

  constructor () {
    this.fetchData()
  }

  @action
  async fetchData () {
    this.loading = true

    try {
      const movies = await getMovies()
      this.movies = movies.map(rawMovie => new Movie(rawMovie, true))
    } catch (err) {
      // TODO ?
    }

    this.loading = false

    const storedMovies = getItem('movies')
    if (!storedMovies) return

    storedMovies.map(movie => {
      this.addUserMovie(movie.title, movie.planets)
    })
  }

  @action
  addUserMovie (title, planets) {
    const newPlanet = new Movie({
      id: this.movies.length + 1,
      title,
      planets,
    }, false)

    this.movies = [...this.movies, newPlanet ]

    setItem('movies', this.movies.filter(movie => !movie.genuine))
  }
}

class Movie {
  @observable planetDataLoaded = false
  @observable planetPropertySort = { property: 'name', order: 'asc' }

  constructor (raw, genuine) {
    this.id = genuine ? raw.episode_id : raw.id
    this.genuine = genuine
    this.title = raw.title
    this.planets = genuine ? raw.planets.map(planetAPI => planetUrlToId(planetAPI)) : raw.planets
  }
}

export const MovieStoreContext = createContext(new MovieStore())