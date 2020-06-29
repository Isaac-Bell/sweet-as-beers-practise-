import React from 'react'
import Header from './Header'
import BeerList from './Beerlist'
import BeerListItem from './BeerListItem'
import beerData from '../../data/beers'

// This might need to be turned into a stateful (class-based) component
class App extends React.Component {
  render () {
    return (
      <div className='app'>
        {/* Ready to rock and roll */}
        <Header />
        <BeerList beerData={beerData} />
        {/* <BeerListItem /> */}
      </div>
    )
  }
}

export default App
