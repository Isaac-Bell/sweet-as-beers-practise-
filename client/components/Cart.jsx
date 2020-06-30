import React from 'react'
import CartListItems from './CartListItems'

const dummyData = [
  {
    beer: 'Tasty',
    quantity: 5,
  },
  {
    beer: 'Gross',
    quantity: 1,
  },
  {
    beer: 'Okay',
    quantity: 3,
  },
]

function Cart(props) {
  return (
    <div className="cart">
      <p className="welcome">
        Thirsty? Sweet! You're one step closer to a quenching.
      </p>

      <table>
        <thead>
          <tr>
            <th>Beer</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map(beer => (
            <CartListItems key={beer.beer} beer={beer} />
          ))}
        </tbody>
      </table>

      <p className="actions">
        <a onClick={props.changePage}>Continue shopping</a>
        <button>Update</button>
        <button className="button-primary">Checkout</button>
      </p>
    </div>
  )
}

export default Cart
