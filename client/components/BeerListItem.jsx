import React from 'react'

class BeerListItem extends React.Component {
  render () {
    const { name, style, brewery, country, abv } = this.props.beer

    return (
      <div className="beer">
        <p className="name">{name}</p>
        <p className="description">A {style} from {brewery}</p>
        <p>
          <span className="country">{country} </span>
          <span className="abv">{abv}</span>
          <a href="/designs/cart.html" className="cart-link">Add to cart</a>
        </p>
      </div>
    )
  }
}

export default BeerListItem
