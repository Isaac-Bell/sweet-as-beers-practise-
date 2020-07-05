import React from 'react'
import BeerList from './BeerList'
import beerData from '../../data/beers'
import { connect } from 'react-redux'
import Cart from './Cart'

// This might need to be turned into a stateful (class-based) component
class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className='app'>
        {this.props.visible ? <Cart /> : <BeerList beerData={beerData} />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { visible: state.visible }
}

export default connect(mapStateToProps)(App)
