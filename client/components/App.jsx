import React from 'react'
import BeerList from './BeerList'
import BeerListItem from './BeerListItem'
import Header from './Header'
const beersData = require('../../data/beers.js')

// Check the data is imported to App in the console
console.log(beersData.default.beers)

// Converted into a stateful (class-based) component
class App extends React.Component {

  render () {
    return (
      <>
  <div className='app'>
    <Header/>
     <BeerList beersData={beersData.default.beers}/>
    {/* <BeerListItem /> */}

  </div>
  </>
    )
}
}

export default App
