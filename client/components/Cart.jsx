import React from 'react'
import CartListItem from './CartListItem'

function Cart (props) {
  // const beers = props.beers

  return (
    <>
    <CartListItem beers={props.beers} />
    </>
  )
}

export default Cart
