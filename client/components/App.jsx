import React from 'react'

import Header from './Header'
import BeerList from './BeerList'

import Cart from './Cart'

import beerData from '../../data/beers'

class App extends React.Component {
  state = {
    activePage: 'cart'
  }

  render () {
    return (

      <div className='app'>
        <Header />
        {this.state.activePage === 'listing' ? <BeerList beers={beerData.beers}/> : <Cart />}
      </div>
    )
  }
}

export default App
