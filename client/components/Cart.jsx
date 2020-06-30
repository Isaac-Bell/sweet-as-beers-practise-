import React from 'react'

import Header from './Header'

class Cart extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>

          <table>
            <thead>
            </thead>
            <tbody>
            </tbody>
          </table>

          <p className="actions">
            <a href="/designs/listing.html">Continue shopping</a>
            <button>Update</button>
            <button className="button-primary">Checkout</button>
          </p>
        </div>
      </div>
    )
  }
}

export default Cart
