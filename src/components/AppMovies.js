import React from 'react'

import '@/styles/app/app-movies.scss'

import MovieExisting from '@/components/movie/MovieExisting'

function AppMovies () {
  const fakeProps1 = {
    title: 'A New Hope',
    planets: [
      {
        name: 'I don\'t know SW planets',
        rotationPeriod: 23,
        orbitalPeriod: 1254,
        diameter: 1235,
        climate: 'temperate',
        surface: 1,
        population: 123567,
      }
    ]
  }

  const fakeProps2 = {
    title: 'The Phantom Menace',
    planets: [
      {
        name: 'Naboo',
        rotationPeriod: 28,
        orbitalPeriod: 312,
        diameter: 12120,
        climate: 'temperate',
        surface: 12,
        population: 4500000000,
      },
      {
        name: 'Hoth',
        rotationPeriod: 24,
        orbitalPeriod: 368,
        diameter: 12240,
        climate: 'temperate',
        surface: 'unknown',
        population: 1000000000000,
      },
      {
        name: 'Totooine',
        rotationPeriod: 23,
        orbitalPeriod: 304,
        diameter: 10465,
        climate: 'arid',
        surface: 1,
        population: 200000,
      }
    ]
  }

  return (
    <div className="app-movies">
      <MovieExisting title={fakeProps1.title} planets={fakeProps1.planets}/>
      <MovieExisting title={fakeProps2.title} planets={fakeProps2.planets}/>
    </div>
  )
}

export default AppMovies;