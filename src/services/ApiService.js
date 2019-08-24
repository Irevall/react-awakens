import { get } from '@/services/HttpService'

export async function getMovies () {
  // const { results } = await get('/films')
  return get('/films')
}

export async function getPlanet (id) {
  const rawPlanet = await get(`/planets/${id}`)
  return { id, ...rawPlanet }
}

export async function searchPlanets (name) {
  return get(`/planets/?search=${name}`)
}