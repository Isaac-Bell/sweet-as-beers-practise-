import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

class Cart extends React.Component {
  render () {
    return (
      <>
        <h1>CART COMPONENT DESIGN PLACEHOLDER</h1>
        <div class='cart'>
          <p className='welcome'>Thirsty? Sweet! You're one step closer to a quenching.</p>
          <table>
            <thead>
              <tr>
                <th>Beer</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <CartItem />
            </tbody>
          </table>
          <p class='actions'>
            <Link to='/'>Continue shopping</Link>
            {/* <a href='/'>Continue shopping</a> */}
            <button>Update</button>
            <button class='button-primary'>Checkout</button>
          </p>
        </div>
      </>
    )
  }
}
export default Cart
