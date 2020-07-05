import React, { Component } from 'react'
import { connect } from 'react-redux'
const request = require('superagent')

import Header from './Header'
import BeerList from './BeerList'
import Cart from './Cart'

// This might need to be turned into a stateful (class-based) component
class App extends Component {
  state = { beers: [] }

  componentDidMount = () => {
    request.get(`http://localhost:3000/beers/`).then(res => {
      this.setState({
        beers: res.body,
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        {this.props.navigate === 'listing' ? (
          <BeerList beers={this.state.beers} />
        ) : (
          <Cart />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    navigate: state.navigate,
  }
}

export default connect(mapStateToProps)(App)
