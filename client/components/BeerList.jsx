import React from 'react'
import BeerListItem from './BeerListItem'

class BeerList extends React.Component {
  render () {
    return (
      <>
        <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>

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

export default BeerList
