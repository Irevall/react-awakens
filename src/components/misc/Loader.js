import React from 'react'

import curvedArrows from '@/assets/curved_arrows.svg'

import '@/styles/misc/loader.scss'

function Loader (props) {
  return (
    <div className={`loader__wrapper${props.loading ? ' loader__wrapper--loading' : ''}`}>
      <img src={curvedArrows} className="loader__icon" style={{ '--loader-size': props.size }} alt="loading"/>
    </div>
  )
}

export default Loader