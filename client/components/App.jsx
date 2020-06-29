import React, { useState } from 'react'

import beerInv from '../../data/beers'

import Header from './Header'
import BeerList from './BeerList'

// This might need to be turned into a stateful (class-based) component
const App = () => {
  return (
    <div className="app">
      <Header />
      <BeerList beers={beerInv.beers} />
    </div>
  )
}

export default App
