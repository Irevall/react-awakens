import React from 'react'

import curvedArrows from '@/assets/curved_arrows.svg'

import '@/styles/misc/loader.scss'

function Loader ({ loading, size } ) {
  return (
    <div className={`loader__wrapper${loading ? ' loader__wrapper--loading' : ''}`}>
      <img src={curvedArrows} className="loader__icon" style={{ '--loader-size': size }} alt="loading"/>
    </div>
  )
}

export default Loader