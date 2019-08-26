import React, { useContext, useMemo } from 'react'
import { observer } from 'mobx-react'

import { planetStoreContext } from '@/stores/PlanetStore'

import PlanetData from '@/components/planet/PlanetData'
import Loader from '@/components/misc/Loader'

import '@/styles/movie/movie-planets.scss'
import PlanetColumnNames from '@/components/planet/PlanetColumnNames'
import { toggleClassName } from '@/helpers'

const MoviePlanets = observer(({ active, movie }) => {
  const planetStore = useContext(planetStoreContext)

  const planetData = useMemo(() => {
    return movie.planets.map((planetID) => {
      return planetStore.getPlanet(planetID)
    })
  }, [movie.planets, movie.planetDataLoaded])

  const sortedPlanets = useMemo(() => {
    const { property, order } = movie.planetPropertySort

    return planetData.sort((a, b) => {
      if (order === 'asc') {
        return a[property].localeCompare(b[property])
      }
      return b[property].localeCompare(a[property])
    })
  }, [planetData, movie.planetPropertySort])

  return (
    <div className={toggleClassName('movie-planets', 'active', active)}>
      <div className="movie-planets__header">
        <PlanetColumnNames movie={movie} type="horizontal"/>
      </div>

      <div className={toggleClassName('movie-planets__loader', 'loading', !movie.planetDataLoaded)}>
        <Loader loading={!movie.planetDataLoaded} size="35px"/>
      </div>

      {
        sortedPlanets.map(planet => {
          if (!movie.planetDataLoaded) return

          return (
            <PlanetData planet={planet} key={`${movie.id}-${planet.id}`}/>
          )
        })
      }
    </div>
  )
})

export default MoviePlanets