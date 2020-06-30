import React from 'react'

import Header from './Header'
import BeerList from './BeerList'

import { connect } from 'react-redux'

import Cart from './Cart'

import beerData from '../../data/beers'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Header />
        {this.props.nav.activePage === 'Listing' ? <BeerList beers={beerData.beers}/> : <Cart />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.navigationReducer
  }
}

export default connect(mapStateToProps)(App)
