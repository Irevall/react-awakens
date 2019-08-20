export class Planet {
  constructor (raw) {
    this.name = raw.name
    this.rotationPeriod = raw.rotationPeriod
    this.orbitalPeriod = raw.orbitalPeriod
    this.diameter = raw.diameter
    this.climate = raw.climate
    this.surfaceWater = raw.surfaceWater
    this.population = raw.population
  }
}
