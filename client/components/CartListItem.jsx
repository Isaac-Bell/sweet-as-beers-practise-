import React from 'react'

class CartListItem extends React.Component {
  render () {
    return (
      <>
        <tr>
          <td>{this.props.cart.name}</td>
          <td><input className="update-input" placeholder={this.props.cart.quantity}/></td>
          <td><button><span className="fa fa-trash fa-2x"></span></button></td>
        </tr>
      </>
    )
  }
}

export default CartListItem
