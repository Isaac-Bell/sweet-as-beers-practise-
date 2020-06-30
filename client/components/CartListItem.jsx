import React from 'react'

class CartListItem extends React.Component {

  render () {
    return (
      <>
        <tr>
          <td>{this.props.name}</td>
          <td><input className="update-input" /></td>
          <td><button><span className="fa fa-trash fa-2x"></span></button></td>
        </tr>
      </>
    )
  }
}

export default CartListItem
