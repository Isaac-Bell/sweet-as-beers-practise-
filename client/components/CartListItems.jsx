import React, { useState } from 'react'
import { connect } from 'react-redux'

import { removeFromCart } from '../actions/index'

const clickHandler = (id, dispatch) => {
  dispatch(removeFromCart(id))
}

function CartListItems(props) {
  const { name, quantity, id } = props.beer
  return (
    <tr key={name}>
      <td>{name}</td>
      <td>
        <input
          id={id}
          name={name}
          onChange={e => props.changeHandler(e)}
          className="update-input"
          defaultValue={quantity}
        />
      </td>
      <td>
        <button onClick={() => clickHandler(id, props.dispatch)}>
          <span className="fa fa-trash fa-2x"></span>
        </button>
      </td>
    </tr>
  )
}

export default connect()(CartListItems)
