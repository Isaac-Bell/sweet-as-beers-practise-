import React from 'react'
import { connect } from 'react-redux'
import BeerListItem from './BeerListItem'

let beer = ''

class BeerList extends React.Component {
  render () {
    return (
      <>
        <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>
        <p>Add a new beer to our list of beverages:</p>
        <input type="text" onChange={(event) => (beer = event.target.value)}
        />
        <button onClick={() => console.log(beer)}>Enter it now</button>
        <button onClick={() => console.log(beer)}>Show API beers</button>

        {this.props.beers.map(beerItem => {
          return (
            <div className='beer' key={beerItem.id}>
              <BeerListItem beer={beerItem}/>
            </div>
          )
        })}
     </>
    )
  }
}

export default connect()(BeerList)
