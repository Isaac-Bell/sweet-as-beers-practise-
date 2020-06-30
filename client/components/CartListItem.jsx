import React from 'react'
import { connect } from 'react-redux'

class CartListItem extends React.Component {

  render () {
    console.log(this.props)
    return (
      <>
        <tr>
          <td>{this.props.cartItem.name}</td>
          <td><input className="update-input" value={this.props.cartItem.quantity} /></td>
          <td><button><span className="fa fa-trash fa-2x"></span></button></td>
        </tr>
      </>
    )
  }
}

export default connect()(CartListItem)
