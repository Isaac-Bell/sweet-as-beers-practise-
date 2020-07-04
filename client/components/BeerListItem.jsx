import React from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'
import beers from '../../data/beers'

// const { beers } = this.props

const BeerListItem = (props) => {
  // const beer = props.beer
  return (
  <>
      <div className="beer">
        <p className="name">{this.props.name}</p>
        <p className="description">A {this.props.style} from {this.props.brewery} </p>
        <p>
          <span className="country"> {this.props.country} </span>
          <span className="abv"> {this.props.abv} </span>
          <a href='#'
            className='cart-link'
            onClick={() => props.addToCart(this.props.id)}>Add to cart</a>
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
