import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions'

class CartListItem extends React.Component {
  handleClick = () => {
    const deleteAction = removeFromCart(this.props.cart.id)
    this.props.dispatch(deleteAction)
  }
  render () {
    return (
      <>
        <tr>
          <td>{this.props.cart.name}</td>
          <td><input className="update-input" placeholder={this.props.cart.quantity}/></td>
          <td><button onClick={(e) => this.handleClick(this.props.cart.id)}><span className="fa fa-trash fa-2x"></span></button></td>
        </tr>
      </>
    )
  }
}

export default connect()(CartListItem)
