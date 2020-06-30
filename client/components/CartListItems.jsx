import React from 'react'

function CartListItems(props) {
  const { name, quantity } = props.beer
  return (
    <tr key={name}>
      <td>{name}</td>
      <td>
        <input className="update-input" defaultValue={quantity} />
      </td>
      <td>
        <button>
          <span className="fa fa-trash fa-2x"></span>
        </button>
      </td>
    </tr>
  )
}

export default CartListItems
