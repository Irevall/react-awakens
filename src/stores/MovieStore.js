import { createContext } from 'react'
import { observable, action } from 'mobx'
import { getMovies } from '@/services/ApiService'

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
      // TODO
    }

    this.loading = false
  }
}

class Movie {
  @observable planetDataLoaded = false

  constructor (raw) {
    this.id = raw.episode_id
    this.title = raw.title
    this.planets = raw.planets.map(planetAPI => {
      const match = planetAPI.match(/planets\/(?<id>[0-9]+)/)
      return match.groups.id
    })
  }
}

export const MovieStoreContext = createContext(new MovieStore())