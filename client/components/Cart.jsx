import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Cart = ({ cart }) => (
  <div className='cart'>
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
        {this.state.cart.map((beer) => (
          <CartItem
            key={beer.id}
            name={beer.name}
            quantity={beer.quantity}
          />
        ))}
      </tbody>
    </table>
    <p className='actions'>
      <Link to='/'>Continue shopping</Link>
      {/* <a href='/'>Continue shopping</a> */}
      <button>Update</button>
      <button className='button-primary'>Checkout</button>
    </p>
  </div>
)

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart)
