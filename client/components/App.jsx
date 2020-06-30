import React from 'react'

import BeerList from './Beerlist'
import Cart from './Cart'

import beerData from '../../data/beers'

// This might need to be turned into a stateful (class-based) component
class App extends React.Component {

  render () {
    return (
      <div className='app'>
        {/* <BeerList beerData={beerData} /> */}
        <Cart beerData={beerData} />
      </div>
    )
  }
}

export default App
