import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import CartListItem from './CartListItem'

class Cart extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <td>Beer</td>
                <td>Quantity</td>
                <td>Remove</td>
              </tr>
            </thead>
            <tbody>
              {this.props.addToCart.map(el => <CartListItem cartItem={el} key={el.id} />)}
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

const mapStateToProps = state => {
  return { addToCart: state.addToCart }
}

export default connect(mapStateToProps)(Cart)
