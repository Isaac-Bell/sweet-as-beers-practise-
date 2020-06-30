import React from 'react'
import { connect } from 'react-redux'
import data from '../../data/beers'
import CartListItem from './CartListItem'

export const Cart = () => {

  return (
    <div>
      <p className="welcome">Thirsty? Sweet! You&apos;re one step closer to a quenching.</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>Beer</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>

          </tbody>

        </table>

        <p className="actions">
          <a href='#'>Continue shopping</a>
          <button>Update</button>
          <button className="button-primary">Checkout</button>
        </p>
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({

// })

export default connect()(Cart)
