import React from 'react'

const BeerListItem = (props) => {
  return (
    <>
      <div className='beer'>
        <p class="name">{props.beer.name}</p>
        <p class="description">{props.beer.style} from {props.beer.brewery}</p>
        <p>
            <span class="country">{props.beer.country}</span>
            <span class="abv">{props.beer.abv}</span>
            <a href="/designs/cart.html" class="cart-link">Add to cart</a>
        </p>
      </div>
    </>
  )
}

export default BeerListItem
