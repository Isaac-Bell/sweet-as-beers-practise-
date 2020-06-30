import React from 'react'
import BeerList from './BeerList'
import beerData from '../../data/beers'
import { connect } from 'react-redux'

// This might need to be turned into a stateful (class-based) component
const App = () => (
  <div className='app'>
    {/* <Cart> */}
    <BeerList beerData={beerData}/>
  </div>
)

export default App
connect()(App)
