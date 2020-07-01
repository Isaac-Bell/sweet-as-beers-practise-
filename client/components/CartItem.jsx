import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/index.js'

const CartItem = (props) => {
  // Define an event handler for the trash button, which is added to button onClick.
  // This will dispatch the removeFromCart action with the corresponding id to the store.
  // This action has been defined in the reducer which will filter the store state
  const handleClick = (id, dispatch) => {
    dispatch(removeFromCart(id))
  }

  return (
    <>
      <tr>
        <td>{props.cartBeer.name}</td>
        <td><input className='update-input' value={props.cartBeer.quantity} /></td>
        <td><button onClick={() => handleClick(props.cartBeer.id, props.dispatch)}><span className='fa fa-trash fa-2x' /></button></td>
      </tr>
    </>
  )
}

export default connect()(CartItem)
