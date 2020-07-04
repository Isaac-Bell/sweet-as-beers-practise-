import React from 'react'
import { Route } from 'react-router-dom'
import BeerList from './BeerList'
import Header from './Header'
import Cart from './Cart'
import AdminList from './AdminList'

// Connect App to store to use the activePage property
import { connect } from 'react-redux'

const beersData = require('../../data/beers.js')

// Check the data is imported to App in the console
console.log('App.js component Beers data:', beersData.default.beers)

// Converted into a stateful (class-based) component
const App = ({ activePage }) => {
  return (
    <>
      <div className='app'>
        <Route path='/' component={Header} />
        <Route
          exact path='/list' render={() => (
            <BeerList beersData={beersData.default.beers} />
          )}
        />
        <Route
          exact path='/admin' render={() => (
            <AdminList beersData={beersData.default.beers} />
          )}
        />
        <Route exact path='/cart' component={Cart} />

      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    activePage: state.activePage

  }
}

export default connect(mapStateToProps)(App)
