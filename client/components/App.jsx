import React from 'react'

import BeerList from './Beerlist'
import Cart from './Cart'
import { getBeers } from '../api'
import { connect } from 'react-redux'

class App extends React.Component {
  state = {
    beerData: []
  }

  componentDidMount () {
    getBeers()
      .then(response => {
        this.setState({
          beerData: response
        })
      })
  }
  render () {
    return (
      <div className='app'>
        {this.props.activePage === 'listing' ? <BeerList beerData={this.state.beerData} /> : <Cart beerData={beerData} /> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { activePage: state.activePage }
}
export default connect(mapStateToProps)(App)
