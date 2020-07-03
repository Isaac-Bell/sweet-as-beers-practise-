import React from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'
import beerData from '../../data/beers'

const BeerListItem = ({ beerData, dispatch }) => {
  console.log(beerData)
  return (
  <>
  {beerData.map((beer) => {
    return (
      <div key={beer.id} className="beer">
        <p className="name">{beer.name}</p>
        <p className="description">A {beer.style} from {beer.brewery} </p>
        <p>
          <span className="country"> {beer.country} </span>
          <span className="abv"> {beer.abv} </span>
          <button onClick={() => handleClick(beer, dispatch)} className="cart-link">Add to cart</button>
        </p>
      </div>
    )
  })}
  </>

  )
}

function handleClick (beerData, dispatch) {
  const toggle = false
  dispatch(navigate(toggle))
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart
  }
}

export default connect(mapStateToProps)(BeerListItem)
