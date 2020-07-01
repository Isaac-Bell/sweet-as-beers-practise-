import React from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'
import CartListItem from './CartListItem'

const Cart = ({ dispatch }) => {
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
        <button onClick={() => handleClick(dispatch)}>Continue shopping</button>
        <button>Update</button>
        <button className="button-primary">Checkout</button>
      </p>

    </div>
  )
}

function handleClick (dispatch) {
  const setToTrue = true
  dispatch(navigate(setToTrue))
}

function mapStateToProps (state) {
  return {
    page: state.activePage
  }
}

export default connect(mapStateToProps)(Cart)
