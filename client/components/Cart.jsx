import React from 'react'
import { connect } from 'react-redux'
import data from '../../data/beers'
import CartListItem from './CartListItem'

export const Cart = () => {
  state = 
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

          <p className="actions">
            <a href="/designs/listing.html">Continue shopping</a>
            <button>Update</button>
            <button className="button-primary">Checkout</button>
          </p>
        </table>
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({

// })

export default connect()(Cart)
