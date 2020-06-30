import React from 'react'
import Cart from './Cart'


function Beerlist (props) {
  // const {store} = props
  // const state = store.getSate()
  const beers = props.beers

  console.log(beers)
  return (
    <>

<p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>

      {beers.map((beer) => {
        return (
          <div key={beer.id} className="beer">
            <p className="name">{beer.name}</p>
            <p className="description">A {beer.style} from {beer.brewery} </p>
            <p>
              <span className="country"> {beer.country} </span>
              <span className="abv"> {beer.abv} </span>
              <a href="#" className="cart-link">Add to cart</a>
            </p>
          </div>
        )
      })}
        </>
  )
}

export default Beerlist
