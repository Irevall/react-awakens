import { get } from '@/services/HttpService'

export async function getMovies () {
  // const { results } = await get('/films')
  return get('/films')
}

export async function getPlanet (id) {
  return get(`/planets/${id}`)
}

export async function searchPlanets (name) {
  return get(`/planets/?search=${name}`)
}