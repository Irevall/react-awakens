export class Planet {
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
