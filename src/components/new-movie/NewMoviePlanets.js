import React, { useContext } from 'react'
import { observer } from 'mobx-react'

import deleteIcon from '@/assets/delete.svg'

import { newMovieStoreContext } from '@/stores/NewMovieStore'

import '@/styles/new-movie/new-movie-planets.scss'

const NewMoviePlanets = observer(() => {
  const newMovieStore = useContext(newMovieStoreContext)

  return (
    <div className="new-movie-planets">
        {
          newMovieStore.planets.map((planet) => {
            return (
              <div className="new-movie-planets__planet" key={planet.id}>
                <span className="new-movie-planets__planet-name">{planet.name}</span>
                <div className="new-movie-planets__planet-remove" onClick={() => { /*newMovieStore.removePlanet(planet.id)*/ }}>
                  <img src={deleteIcon} alt="remove"/>
                </div>
              </div>
            )
          })
        }
    </div>
  )
})

export default NewMoviePlanets