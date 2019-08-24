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
    console.log(data)
    combinedResult.push(...data.results)
  }
  // if (response.data.next) {
  //   console.log('there is next')
  //   console.log(response.config)
  //   const newRequest = response.config;
  //   newRequest.url = response.data.next
  //   const requestResponse = await axios.request(newRequest);
  //   console.log(requestResponse)
    // await new Promise(resolve => setTimeout(resolve, Math.floor(response.data.timeout * 1000)));
    // const newRequest = await axios.request(response.config);
    // return newRequest.data;
  // }

  return combinedResult
}

async function interceptError (err) {
  console.log(err)
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
