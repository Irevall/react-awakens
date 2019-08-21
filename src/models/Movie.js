import { Planet } from '@/models/Planet'

export class Movie {
  constructor (raw) {
    this.title = raw.title
    this.planets = raw.planets.map(planet => new Planet(planet))
  }
}