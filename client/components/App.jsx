import React from 'react'
import { Route } from 'react-router-dom'
import BeerList from './BeerList'
import Header from './Header'
import Cart from './Cart'
import AdminList from './AdminList'

const beersData = require('../../data/beers.js')

// Check the data is imported to App in the console
console.log('App.js component Beers data:', beersData.default.beers)

// Converted into a stateful (class-based) component
class App extends React.Component {
  render () {
    return (
      <>
        <div className='app'>
          <Route path='/' component={Header} />
          <Route
            exact path='/' render={() => (
              <BeerList beersData={beersData.default.beers} />
            )}
          />
          <Route exact path='/cart' component={Cart} />
          <Route
            exact path='/admin' render={() => (
              <AdminList beersData={beersData.default.beers} />
            )}
          />
        </div>
      </>
    )
  }
}

export default App
