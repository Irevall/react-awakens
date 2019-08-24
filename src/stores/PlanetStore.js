import { createContext } from 'react'
import { observable, action } from 'mobx'
import { getPlanet } from '@/services/ApiService'

class PlanetStore {
  @observable loading = false
  @observable planets = []

  constructor () { }

  @action
  async fetchData (planetIDs) {
    const rawPlanets = await Promise.all(
      planetIDs.map((planetID) => {
        if (this.planets.find( (planet) => planet.id === planetID)) return

        return getPlanet(planetID)
      })
    )

    rawPlanets.map(rawPlanet => this.planets.push(new Planet(rawPlanet)))
  }

  getPlanet (planetID) {
    return this.planets.find((planet) => planet.id === planetID)
  }
}

class Planet {
  constructor (raw) {
    this.id = raw.id
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