import React from 'react'
import { connect } from 'react-redux'
import CartListItem from './CartListItem'
import { navigate, updateCart } from '../actions/index'
import BeerListItem from './BeerListItem'
import cart from '../reducers/cart'

class Cart extends React.Component {
  handleClick = () => {
    this.props.dispatch(navigate('BeerList'))
  }

  handleUpdate = () => {
    this.props.dispatch(updateCart(Cart))
  }

  render () {
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
              {this.props.cart.map(item =>
                <CartListItem key={item.name}
                  cartprop={item}
                />
              )}

            </tbody>

          </table>

          {/* create onclick function for navigation */}

          <p className="actions">
            <button onClick={this.handleClick}>Continue shopping</button>
            <button onClick={this.handleUpdate}>Update</button>
            <button className="button-primary">Checkout</button>
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart)
