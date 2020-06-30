import React from 'react'
import { connect } from 'react-redux'
import { addBeerToCart } from '../actions/index'

const BeerListItem = (props) => (

  <div className="beer">
    <p className="name">{props.name}</p>
    <p className="description">{props.description}</p>
    <p>
      <span className="country">{props.country}</span>
      <span className="abv">{props.abv}</span>
      <a className="cart-link" onClick={() => props.dispatch(addBeerToCart(props.id))}>Add to cart</a>
    </p>
  </div>

)

export default connect()(BeerListItem)
