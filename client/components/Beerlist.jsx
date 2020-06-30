import React from 'react'

function Beerlist (props) {
  // const {store} = props
  // const state = store.getSate()
  const beers = props.beers

  console.log(beers)
  return (
    <>

      <h1> Beers </h1>

      {beers.map((beer) => {
        return (
          <div key={beer.id} className="beer">
            <p className="name">{beer.name}</p>
            <p className="description">A {beer.style} from {beer.brewery} </p>
            <p>
              <span className="country"> {beer.country} </span>
              <span className="abv"> {beer.abv} </span>
              <a href="/designs/cart.html" className="cart-link">Add to cart</a>
            </p>
          </div>
        )
      })}
        </>
  )
}

export default Beerlist
