import React from 'react'
import { connect } from 'react-redux'

import { removeFromCart } from '../actions'

class CartListItem extends React.Component {
state ={
  quantity: this.props.cartItem.quantity
}

handleChange = evnt => {
  console.log(evnt.target)
  const { value } = evnt.target
  this.setState({
    quantity: value
  })
}

handleClick = id => {
  this.props.dispatch(removeFromCart(id))
}

render () {
  // console.log(this.props)
  return (
      <>
        <tr>
          <td>{this.props.cartItem.name}</td>
          <td><input className="update-input" value={this.state.quantity} onChange={this.handleChange} /></td>
          <td><button onClick={() => this.handleClick(this.props.cartItem.id)}><span className="fa fa-trash fa-2x"></span></button></td>
        </tr>
      </>
  )
}
}

export default connect()(CartListItem)
