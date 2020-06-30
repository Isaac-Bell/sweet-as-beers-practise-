import React from 'react'

const CartListItem = () => {
  return (
    <tr>
      <td>HBIB Ginger Fusion</td>
      <td><input className="update-input" value="3" /></td>
      <td><button><span className="fa fa-trash fa-2x"></span></button></td>
    </tr>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     items: // items from store
//   }
// }

export default CartListItem
