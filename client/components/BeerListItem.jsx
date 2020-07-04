import React from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'
import beers from '../../data/beers'

// const { beers } = this.props

const BeerListItem = (props) => {
  const beer = props.beer
  return (
  <>
      <div className="beer">
        <p className="name">{beer.name}</p>
        <p className="description">A {beer.style} from {beer.brewery} </p>
        <p>
          <span className="country"> {beer.country} </span>
          <span className="abv"> {beer.abv} </span>
          <a href='#'
            className='cart-link'
            onClick={() => props.addToCart(beer.id)}>Add to cart</a>
        </p>
      </div>

  </>

  )
}

function handleClick (beers, dispatch) {
  const toggle = false
  dispatch(navigate(toggle))
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart
  }
}

export default connect(mapStateToProps)(BeerListItem)
