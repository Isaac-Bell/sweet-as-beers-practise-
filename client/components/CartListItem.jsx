import React from 'react'
import { connect } from 'react-redux'
import { navigate, removeFromCart } from '../actions/index'

const CartListItem = (props) => {
  const handleClick = () => {
    props.dispatch(navigate('Cart'))
    props.dispatch(removeFromCart(props.cartprop.id, props.cartprop.name))
  }

  return (

    <tr>
      <td className="name">
        {props.cartprop.name}
      </td>
      <td>
        <input className="update-input" value={props.cartprop.quantity}></input>
      </td>
      <td>
        <button onClick={handleClick}>
          <span className="fa fa-trash fa-2x"></span>
        </button>
      </td>
    </tr>

  )
}

// const mapStateToProps = (state) => {
//   return {
//     CartListItem: state.CartListItem
//   }
// }

export default connect()(CartListItem)
