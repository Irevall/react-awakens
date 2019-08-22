import React from 'react'
import { observer } from 'mobx-react'

import logo from '@/assets/logo.svg'
import '@/styles/app/app-header.scss'

const AppHeader = observer(() => {
  return (
    <header className="app-header">
      <img src={logo} className="app-header__logo" alt="logo"/>
    </header>
  )
})

export default AppHeader