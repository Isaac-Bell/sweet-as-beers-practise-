import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Cart from './Cart'
import BeerList from './BeerList'

// This might need to be turned into a stateful (class-based) component
class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        {this.props.navigation === 'BeerList' ? <BeerList /> : <Cart />}
        {/* <BeerList />
        <Cart /> */}
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    navigation: state.navigation
  }
}

export default connect(mapStatetoProps)(App)
