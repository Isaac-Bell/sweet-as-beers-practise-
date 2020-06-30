import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changePage, updateQuantities } from '../actions'

import CartListItems from './CartListItems'

const navigate = (target, dispatch) => {
  dispatch(changePage(target))
}

const updateHandler = (cart, dispatch) => {
  dispatch(updateQuantities(cart))
}

function Cart(props) {
  const [amount, setAmount] = useState([])

  const changeHandler = e => {
    const { id, value } = e.target
    let newArray = [...amount, { id, value }]
    setAmount(newArray)
  }

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
          {props.cart.map(beer => (
            <CartListItems
              changeHandler={changeHandler}
              key={beer.id}
              beer={beer}
            />
          ))}
        </tbody>
      </table>

      <p className="actions">
        <a onClick={() => navigate('listing', props.dispatch)}>
          Continue shopping
        </a>
        <button onClick={() => updateHandler(amount, props.dispatch)}>
          Update
        </button>
        <button className="button-primary">Checkout</button>
      </p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Cart)
