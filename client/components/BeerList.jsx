import React from 'react'

class BeerList extends React.Component {
  render () {
    return (
      <>
      <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>

      {this.props.beerArray.beers.map(beerItem => {
        return (
          <div className="beer" key={beerItem}>
            <p className="name">{beerItem.name}</p>
            <p className="description">A {beerItem.style} from {beerItem.brewery}</p>
            <p>
              <span className="country">{beerItem.country} </span>
              <span className="abv">{beerItem.abv}</span>
              <a href="/designs/cart.html" className="cart-link">Add to cart</a>
            </p>
          </div>
        )
      })}
     </>
    )
  }
}

export default BeerList
