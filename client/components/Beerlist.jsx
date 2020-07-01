import React from 'react'

import Header from './Header'
import BeerListItem from './BeerListItem'

class Beerlist extends React.Component {
  render () {
    // {console.log(this.props)}
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>
        </div>
        <div>
          {this.props.beerData.map(beer => {
            return (
              // passes props as object each time new item is mapped.
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
