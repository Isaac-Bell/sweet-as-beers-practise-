import React, { useState } from 'react'
import { connect } from 'react-redux'

import beerInv from '../../data/beers'

import Header from './Header'
import BeerList from './BeerList'
import Cart from './Cart'

// This might need to be turned into a stateful (class-based) component
const App = props => {
  return (
    <div className="app">
      <Header />
      {props.navigate === 'listing' ? (
        <BeerList beers={beerInv.beers} />
      ) : (
        <Cart />
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    navigate: state.navigate,
  }
}

export default connect(mapStateToProps)(App)
