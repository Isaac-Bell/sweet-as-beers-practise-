import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Cart = ({ cartReducer }) => {
  console.log('Cart.jsx receives state from store as cartReducer', cartReducer[0])
  return (
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
          {cartReducer.map((cartBeer, id) => {
            return <CartItem key={id} cartBeer={cartBeer} />
          })}
        </tbody>
      </table>
      <p className='actions'>
        <Link to='/'>Continue shopping</Link>

        <button>Update</button>
        <button className='button-primary'>Checkout</button>
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartReducer: state.cartReducer
  }
}

export default connect(mapStateToProps)(Cart)
