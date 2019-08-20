import React from 'react'

import '@/styles/app/app-header.scss'

import logo from '@/assets/logo.svg'

function AppHeader () {
  return (
      <header className="app-header">
        <img src={logo} className="app-header__logo" alt="logo"/>
      </header>
  )
}

export default AppHeader