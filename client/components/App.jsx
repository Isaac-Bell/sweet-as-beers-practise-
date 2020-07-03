import React from 'react'

import Header from './Header'
import Cart from './Cart'
import Beerlist from './Beerlist'

import beerData from '../../data/beers'
import { connect } from 'react-redux'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Header />
        {this.props.page ? <Beerlist data={beerData} /> : <Cart />}
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
