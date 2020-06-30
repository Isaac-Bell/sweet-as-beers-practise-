import React from 'react'

import Header from './Header'
import Beerlist from './Beerlist'

import beerData from '../../data/beers'

// This might need to be turned into a stateful (class-based) component
const App = () => (
  <>
  <div className='app'>
    <Header />
    <Beerlist beers = {beerData.beers} />
  </div>
  </>
)

export default App
