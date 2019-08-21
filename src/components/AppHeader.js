import React, { useContext } from 'react'

import '@/styles/app/app-header.scss'

import logo from '@/assets/logo.svg'
import { observer } from 'mobx-react'
import { PlanetstoreContext } from '@/stores/PlanetStore'
import { MovieStoreContext } from '@/stores/MovieStore'

const AppHeader = observer(() => {
  const planetStore = useContext(PlanetstoreContext)
  const movieStore = useContext(MovieStoreContext)


  return (
    <header className="app-header" onClick={() => {
      console.log(planetStore)
      console.log(movieStore)
    }}>
      <img src={logo} className="app-header__logo" alt="logo"/>
    </header>
  )
})

export default AppHeader