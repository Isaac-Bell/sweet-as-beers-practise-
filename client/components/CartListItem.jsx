import React from 'react'
import { connect } from 'react-redux'

import { removeItem } from '../actions'

const CartListItem = ({ cartItems, dispatch }) => {
  return (
    cartItems.map(item => {
      return <tr key={item.id}>
        <td>{item.name}</td>
        <td><input className="update-input" value={item.quantity} /></td>
        <td><button onClick={() => handleClick(item.id, dispatch)}><span className="fa fa-trash fa-2x"></span></button></td>
      </tr>
    })
  )
}

function handleClick (id, dispatch) {
  dispatch(removeItem(id))
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart
  }
}

export default connect(mapStateToProps)(CartListItem)
