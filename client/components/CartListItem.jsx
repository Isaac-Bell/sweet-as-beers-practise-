import React from 'react'
import { connect } from 'react-redux'

export const CartListItem = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Beer</th>
          <th>Quantity</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.beerprop.name}</td>
          <td>
            <input className="update-input" value="3"></input>
          </td>
          <td>
            <button>
              <span className="fa fa-trash fa-2x"></span>
            </button>
          </td>
        </tr>
      </tbody>

      <p className="actions">
        <a href="/designs/listing.html">Continue shopping</a>
        <button>Update</button>
        <button className="button-primary">Checkout</button>
      </p>
    </table>

  )
}

// const mapStateToProps = (state) => ({

// })

export default connect()(CartListItem)
