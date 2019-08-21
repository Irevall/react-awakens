export class Movie {
  constructor (raw) {
    this.id = raw.episode_id
    this.title = raw.title
    this.planets = raw.planets.map(planetAPI => {
      const match = planetAPI.match(/planets\/(?<id>[0-9])/)
      return match.groups.id
    })
    this.planetDataLoaded = false
  }
}