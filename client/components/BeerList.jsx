import React from 'react'
import { connect } from 'react-redux'

import {
  navigate,
  addItem
} from '../actions'

const BeerList = ({ data, dispatch }) => {
  return (
    <>
      <p className="welcome">{`Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.`}</p>

      {data.beers.map(beer => {
        return (
          <div key={beer.id} className="beer">
            <p className="name">{beer.name}</p>
            <p className="description">{`A ${beer.style} from ${beer.brewery}`}</p>
            <p>
              <span className="country">{beer.country}</span>
              <span className="abv">{beer.abv}</span>
              <button onClick={() => handleClick(beer, dispatch)} className="cart-link">Add to cart</button>
            </p>
          </div>
        )
      })}
    </>
  )
}

function handleClick (beer, dispatch) {
  const toggle = false
  dispatch(navigate(toggle))
  dispatch(addItem(beer.id, beer.name))
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart
  }
}

export default connect(mapStateToProps)(BeerList)
