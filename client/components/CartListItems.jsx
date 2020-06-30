import React from 'react'

function CartListItems(props) {
  const { beer, quantity } = props.beer
  return (
    <tr key={beer}>
      <td>{beer}</td>
      <td>
        <input className="update-input" value={quantity} />
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
