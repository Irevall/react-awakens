import { get } from '@/services/HttpService'
import { Movie } from '@/models/Movie'
import { Planet } from '@/models/Planet'

export async function getMovies () {
  const { results } = await get('/films')
  return results.map(result => new Movie(result))
}

export async function getPlanet (id) {
  const rawPlanet = await get(`/planets/${id}`)
  return new Planet(rawPlanet, id)
}