import React from 'react'
import BeerList from './BeerList'
import beerData from '../../data/beers'

// This might need to be turned into a stateful (class-based) component
const App = () => (
  <div className='app'>
    <BeerList beerData={beerData}/>
  </div>
)

export default App
