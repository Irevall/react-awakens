import axios from 'axios'

export class ApiError extends Error {
  constructor (name, message, payload = {}) {
    super()

    this.name = name
    this.message = message || name
    this.payload = payload

    Object.setPrototypeOf(this, ApiError.prototype)
  }
}

const http = axios.create({
  baseURL: 'https://swapi.co/api/',
})

async function interceptResponse (response) {
  if (!response.data.hasOwnProperty('results')) return response.data
  const combinedResult = [...response.data.results]

  let nextCall = response.data.next;

  while (nextCall) {
    const newRequest = response.config;
    newRequest.url = nextCall
    const { data } = await axios.request(newRequest);
    nextCall = data.next
    combinedResult.push(...data.results)
  }

  return combinedResult
}

async function interceptError (err) {
  console.log(err)
  console.log(Object.entries(err))
  return err
}

http.interceptors.response.use(interceptResponse, interceptError)

export function get (endpoint, params = {}, headers = {}) {
  return http.get(endpoint, { params, headers })
}

export function post (endpoint, data = {}, headers = {}) {
  return http.post(endpoint, data, { headers })
}

export function patch (endpoint, data = {}, headers = {}) {
  return http.patch(endpoint, data, { headers })
}
