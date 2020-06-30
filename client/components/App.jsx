import React, { useState } from 'react'

import beerInv from '../../data/beers'

import Header from './Header'
import BeerList from './BeerList'
import Cart from './Cart'

// This might need to be turned into a stateful (class-based) component
const App = () => {
  const navigate = target => {
    return {
      type: 'NAVIGATE',
      target, // 'listing' or 'cart'
    }
  }

  return (
    <div className="app">
      <Header />
      {/* <BeerList beers={beerInv.beers} /> */}
      <Cart changePage={navigate} />
    </div>
  )
}

export default App
