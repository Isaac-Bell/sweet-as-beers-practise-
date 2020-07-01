import React from 'react'
import { connect } from 'react-redux'

const CartListItem = ({ cartItems }) => {
  return (
    cartItems.map(item => {
      return <tr key={item.id}>
        <td>{item.name}</td>
        <td><input className="update-input" value={item.quantity} /></td>
        <td><button><span className="fa fa-trash fa-2x"></span></button></td>
      </tr>
    })
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart
  }
}

export default connect(mapStateToProps)(CartListItem)
