import React from 'react'
import Header from './Header'
import Cart from './Cart'
import BeerList from './BeerList'

// This might need to be turned into a stateful (class-based) component
class App extends React.Component {
  state = {

  }

  render () {
    return (
      <div>
        <Header />
        {/* <BeerList /> */}
        <Cart />
      </div>
    )
  }
}

export default App
