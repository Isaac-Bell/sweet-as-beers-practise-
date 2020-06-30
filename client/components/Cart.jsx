import React from 'react'
import CartListItem from './CartListItem'

class Cart extends React.Component {
  state = {
    beer: [{
      name: 'Wild & Woolly Basilisk',
      quantity: '10'
    },
    { name: 'Epic Apocalypse',
      quantity: '3'
    }]
  }

  render () {
    return (
      <>
        <div className="cart">

          <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>

          <table>

            <thead>
              <tr>
                <th>Beer</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              <>
              <CartListItem state={this.state}/>
              </>
              <p className="actions">
                <a href="/designs/listing.html">Continue shopping</a>
                <button>Update</button>
                <button className="button-primary">Checkout</button>
              </p>
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default Cart
