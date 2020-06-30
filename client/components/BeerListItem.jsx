import React from 'react'
import Cart from './Cart'
import { navigate, addToCart } from '../actions'

import { connect } from 'react-redux'

class BeerListItem extends React.Component {
  handleClick = (id, name) => {
    const addAction = addToCart(id, name)
    const navigateAction = navigate('cart')

    this.props.dispatch(addAction)
    this.props.dispatch(navigateAction)
  }

  render () {
    const { id, name, style, brewery, country, abv } = this.props.beer

    return (
      <div className="beer">
        <p className="name">{name}</p>
        <p className="description">A {style} from {brewery}</p>
        <p>
          <span className="country">{country} </span>
          <span className="abv">{abv}</span>
          <a href="#" className="cart-link" onClick={(e) => this.handleClick(id, name)}>Add to cart</a>
        </p>
      </div>
    )
  }
}

export default connect()(BeerListItem)
