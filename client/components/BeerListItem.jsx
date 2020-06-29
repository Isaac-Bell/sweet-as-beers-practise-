import React from 'react'

function BeerListItem(props) {
  const { id, name, brewery, country, style, abv } = props.beer
  return (
    <div className="beer" key={id}>
      <p className="name">{name}</p>
      <p className="description">
        A {style} from {brewery}
      </p>
      <p>
        <span className="country">{country}</span>
        <span className="abv">{abv} abv</span>
        <a href="/designs/cart.html" class="cart-link">
          Add to cart
        </a>
      </p>
    </div>
  )
}

export default BeerListItem
