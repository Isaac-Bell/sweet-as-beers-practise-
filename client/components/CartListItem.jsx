import React from 'react'

const CartListItem = (props) => {
  return (

    <tr>
      <td className="name">
        {props.cartprop.name}
      </td>
      <td>
        <input className="update-input" value={props.cartprop.quantity}></input>
      </td>
      <td>
        <button>
          <span className="fa fa-trash fa-2x"></span>
        </button>
      </td>
    </tr>

  )
}

// const mapStateToProps = (state) => ({

// })

export default CartListItem
