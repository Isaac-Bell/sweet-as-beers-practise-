import React from 'react'

const CartItem = (props) => {
  return (
    <>
      <tr>
        <td>{props.cartBeer.name}</td>
        <td><input className='update-input' value={props.cartBeer.quantity} /></td>
        <td><button><span className='fa fa-trash fa-2x' /></button></td>
      </tr>
    </>
  )
}

export default CartItem
