import React from 'react'
import { connect } from 'react-redux'
import { navigate } from '../actions'
// import { Componenet } from 'react'

const BeerListItem = ({ beers, dispatch }) => {

  console.log('listed beers:', beers)

  // navigate = () => {
  //   // button will action the buy cart page
  //   console.log('navigate:', navigate)
  // }

  return (
  <>
  {beers.map((beer) => {
    return (
      <div key={beer.id} className="beer">
        <p className="name">{beer.name}</p>
        <p className="description">A {beer.style} from {beer.brewery} </p>
        <p>
          <span className="country"> {beer.country} </span>
          <span className="abv"> {beer.abv} </span>
          {/* <a href="#" className="cart-link">Add to cart</a> */}
          <button
            className="cart-link"
            onClick={() => this.navigate()}>
            Add to cart
          </button>
        </p>
      </div>
    )
  })}
  </>

  )
}

export default connect()(BeerListItem)
