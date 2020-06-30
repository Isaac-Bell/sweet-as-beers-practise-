import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import BeerList from './BeerList'
import Cart from './Cart'

import data from '../../data/beers'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Header />
        {this.props.page === 'cart' ? <Cart /> : <BeerList data={data} />}
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
