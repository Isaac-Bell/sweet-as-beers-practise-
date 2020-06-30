import React from 'react'

import BeerList from './Beerlist'
import Cart from './Cart'

import beerData from '../../data/beers'
import { connect } from 'react-redux'
// import action from '../actions/index'

// This might need to be turned into a stateful (class-based) component
class App extends React.Component {
  render () {
    return (
      <div className='app'>
        {this.props.activePage === 'listing' ? <BeerList beerData={beerData} /> : <Cart beerData={beerData} /> }
        {/* if this.state.pageName = 'listing' ... return Beerlist component
        else if this.state.pageName = 'cart' return cart component */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { activePage: state.activePage }
}
export default connect(mapStateToProps)(App)
