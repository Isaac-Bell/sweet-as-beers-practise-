import React from 'react'

const BeerListItem = (props) => {
  return (
    <>
      <div className='beer'>
        <p className='name'>{props.beer.name}</p>
        <p className='description'>{props.beer.style} from {props.beer.brewery}</p>
        <p>
          <span className='country'>{props.beer.country}</span>
          <span className='abv'>{props.beer.abv}</span>
          <a href='/designs/cart.html' className='cart-link'>Add to cart</a>
        </p>
      </div>
    </>
  )
}

export default BeerListItem
