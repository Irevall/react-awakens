import { createContext } from 'react'
import { observable, action } from 'mobx'
import { getPlanet } from '@/services/ApiService'

class PlanetStore {
  @observable loading = false
  @observable planets = []

  constructor () { }

  @action
  async fetchData (planetIDs) {
    for (const planetID of planetIDs) {
      if (this.planets.find((planet) => planet.id === planetID)) continue

      try {
        const rawPlanet = await getPlanet(planetID)
        this.planets.push(new Planet(rawPlanet, planetID))
      } catch (err) {
        // TODO
      }
    }
  }

  getPlanet (planetID) {
    return this.planets.find((planet) => planet.id === planetID)
  }
}

class Planet {
  constructor (raw, id) {
    this.id = id
    this.name = raw.name
    this.rotationPeriod = raw.rotation_period
    this.orbitalPeriod = raw.orbital_period
    this.diameter = raw.diameter
    this.climate = raw.climate
    this.surfaceWater = raw.surface_water
    this.population = raw.population
  }
}

export const PlanetstoreContext = createContext(new PlanetStore())