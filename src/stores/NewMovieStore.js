import { createContext } from 'react'
import { observable, action, computed, toJS } from 'mobx'

import { movieStore } from '@/stores/MovieStore'

class NewMovieStore {
  @observable title = ''
  @observable planets = []
  @observable cleanup = 0

  constructor () {

  }

  @computed get isValid () {
    return this.title.length >= 3 && this.title[0].toUpperCase() === this.title[0] && this.planets.length > 0
  }

  @action addPlanet (planet) {
     this.planets = [...this.planets, planet]
  }

  @action removePlanet (id) {
    this.planets = this.planets.filter(listPlanet => listPlanet.id !== id)
  }

  @action addMovie () {
    if (!this.isValid) return

    movieStore.addUserMovie(this.title, this.planets.map(planet => planet.id))

    this.title = ''
    this.planets = []
    this.cleanup++
  }
}

export class NewMoviePlanet {
  constructor (id, name) {
    this.id = id
    this.name = name
  }
}

export const newMovieStore = new NewMovieStore()
export const newMovieStoreContext = createContext(newMovieStore)