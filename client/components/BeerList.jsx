import React from 'react'

const BeerList = props => {
  return (
    <>
      <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>

      {props.data.beers.map(beer => {
        return (
          <div key={beer.id} className="beer">
            <p className="name">{beer.name}</p>
            <p className="description">{`A ${beer.style} from ${beer.brewery}`}</p>
            <p>
              <span className="country">{beer.country}</span>
              <span className="abv">{beer.abv}</span>
              <button className="cart-link">Add to cart</button>
            </p>
          </div>
        )
      })}
    </>
  )
}

export default BeerList
