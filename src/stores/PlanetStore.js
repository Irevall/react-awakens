import { createContext } from 'react'
import { observable, computed, action } from 'mobx'
import { getMovies, getPlanet } from '@/services/ApiService'

class PlanetStore {
  @observable loading = false
  @observable planets = []

  constructor () {
  }

  @action
  async fetchData (planetIDs) {
    for (const planetID of planetIDs) {
      if (this.planets.find((planet) => planet.id === planetID)) {
        console.log('lol this planet was found already')
        continue
      }

      try {
        console.log('damn had to download')
        const planet = await getPlanet(planetID)
        this.planets.push(planet)
      } catch (err) {
        // TODO
      }
    }
  }

  getPlanet (planetID) {
    this.planets.find((planet) => planet.id === planetID)
  }
}

export const PlanetstoreContext = createContext(new PlanetStore())