import { createContext } from 'react'
import { observable, action } from 'mobx'
import { getMovies } from '@/services/ApiService'
import { urlToId } from '@/helpers/planetUrlToPlanetId'

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
      this.movies = movies.map(rawMovie => new Movie(rawMovie))
    } catch (err) {
      // TODO test
    }

    this.loading = false
  }
}

class Movie {
  @observable planetDataLoaded = false

  constructor (raw) {
    this.id = raw.episode_id
    this.title = raw.title
    this.planets = raw.planets.map(planetAPI => urlToId(planetAPI))
  }
}

export const MovieStoreContext = createContext(new MovieStore())