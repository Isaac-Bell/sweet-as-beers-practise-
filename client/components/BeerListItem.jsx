import React from 'react'

const BeerListItem = (props) => {
  return (
    <div>
      <div className="beer">
        <p className="name">{props.name}</p>
        <p className="description">{props.brewery}</p>
        <p>
          <span className="country">{props.country}</span>
          <span className="abv">{props.abv}</span>
          <a href="/designs/cart.html" className="cart-link">Add to cart</a>
        </p>
      </div>
    </div>
  )
}

export default BeerListItem
