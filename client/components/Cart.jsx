import React from 'react'
import CartListItem from './CartListItem'

const Cart = () => {
  return (
    <div className="cart">
      <p className="welcome">{`Thirsty? Sweet! You're one step closer to a quenching.`}</p>

      <table>
        <thead>
          <tr>
            <th>Beer</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <CartListItem />
        </tbody>
      </table>

      <p className="actions">
        <a href="#">Continue shopping</a>
        <button>Update</button>
        <button className="button-primary">Checkout</button>
      </p>

    </div>
  )
}

export default Cart
