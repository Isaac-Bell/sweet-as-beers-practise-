import React from 'react'

import Header from './Header'
import Cart from './Cart'
import BeerList from './BeerList'

import beerData from '../../data/beers'
import { connect } from 'react-redux'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Header />
        <BeerList data={beerData} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.activePage
  }
}

export default connect(mapStateToProps)(App)
