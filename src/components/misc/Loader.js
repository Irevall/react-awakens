import React from 'react'

import curvedArrows from '@/assets/curved_arrows.svg'

import '@/styles/misc/loader.scss'
import { toggleClassName } from '@/helpers'

function Loader ({ loading, size } ) {
  return (
    <div className={toggleClassName('loader__wrapper', 'loading', loading)}>
      <img src={curvedArrows} className="loader__icon" style={{ '--loader-size': size }} alt="loading"/>
    </div>
  )
}

export default Loader