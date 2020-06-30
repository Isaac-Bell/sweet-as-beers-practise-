import React from 'react'
import { connect } from 'react-redux'

import { removeFromCart } from '../actions'

class CartListItem extends React.Component {

handleClick = id => {
  this.props.dispatch(removeFromCart(id))
}

render () {
  const { updateCart } = this.props
   // console.log(this.props)
  return (
      <>
        <tr>
          <td>{this.props.cartItem.name}</td>
          <td><input className="update-input" value={this.props.quantity} onChange={updateCart} /></td>
          <td><button onClick={() => this.handleClick(this.props.cartItem.id)}><span className="fa fa-trash fa-2x"></span></button></td>
        </tr>
      </>
  )
}
}

export default connect()(CartListItem)
