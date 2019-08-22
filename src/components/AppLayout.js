import React from 'react'

import AppHeader from '@/components/AppHeader'
import AppMovies from '@/components/AppMovies'
import AppNewMovie from '@/components/AppNewMovie'
import AppFooter from '@/components/AppFooter'

import '@/styles/app/app-layout.scss'

function AppLayout () {
  return (
    <div className="app-layout">
      <AppHeader/>
      <AppMovies/>
      <div className="app-layout__line-break">
        <div className="app-layout__line"> </div>
      </div>
      <AppNewMovie/>
      <AppFooter/>
    </div>
  )
}

export default AppLayout