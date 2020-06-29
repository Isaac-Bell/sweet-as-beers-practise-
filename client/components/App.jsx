import React from 'react'

import Header from './Header'
import BeerList from './BeerList'
import beerArray from '../../data/beers'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Header />
        <BeerList beerArray={beerArray}/>
      </div>
    )
  }
}

export default App
