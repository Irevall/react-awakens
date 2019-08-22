import { get } from '@/services/HttpService'

export async function getMovies () {
  const { results } = await get('/films')
  return results
}

export async function getPlanet (id) {
  return get(`/planets/${id}`)
}