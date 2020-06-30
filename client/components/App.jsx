import React from 'react'

import BeerList from './Beerlist'
import Cart from './Cart'

import beerData from '../../server/beers'
import { connect } from 'react-redux'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        {this.props.activePage === 'listing' ? <BeerList beerData={beerData} /> : <Cart beerData={beerData} /> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { activePage: state.activePage }
}
export default connect(mapStateToProps)(App)
