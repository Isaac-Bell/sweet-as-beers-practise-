import React from 'react'

const CartItem = () => {
  return (
    <>
      <tr>
        <td>Beer item placeholder</td>
        <td><input className='update-input' value='3' /></td>
        <td><button><span className='fa fa-trash fa-2x' /></button></td>
      </tr>
    </>
  )
}

export default CartItem
