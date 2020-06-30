import React from 'react'
import Cart from './Cart'

class BeerListItem extends React.Component {
  handleClick = () => {
    let target = 'cart'
    const action = {
      type: 'NAVIGATE',
      target
    }
    this.props.store.dispatch(action)
  }

  render () {
    const { name, style, brewery, country, abv } = this.props.beer

    return (
      <div className="beer">
        <p className="name">{name}</p>
        <p className="description">A {style} from {brewery}</p>
        <p>
          <span className="country">{country} </span>
          <span className="abv">{abv}</span>
          <a href="/designs/cart.html" className="cart-link" onClick={this.handleClick}>Add to cart</a>
        </p>
      </div>
    )
  }
}

export default BeerListItem
