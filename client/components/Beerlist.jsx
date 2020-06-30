import React from 'react'

import Header from './Header'
import BeerListItem from './BeerListItem'

class Beerlist extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>
        </div>
        <div>
          {this.props.beerData.beers.map(beer => {
            // console.log(beer)
            return (
              <BeerListItem key={beer.id}
                {...beer}
              />
            )
          }
          )}
        </div>
      </div>
    )
  }
}

export default Beerlist
