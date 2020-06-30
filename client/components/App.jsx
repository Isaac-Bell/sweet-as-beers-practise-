import React from 'react'

import Header from './Header'
import BeerList from './BeerList'

import Cart from './Cart'

import beerData from '../../data/beers'


class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Header />
        <BeerList beers={beerData.beers}/>
        <Cart />
      
      </div>
    )
  }
}

export default App
