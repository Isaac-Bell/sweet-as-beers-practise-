import React from 'react'
import { connect } from 'react-redux'
import { navigate } from '../actions/index'

import CartListItem from './CartListItem'

class Cart extends React.Component {
  handleClick = () => {
    const navAction = navigate('Listing')
    this.props.dispatch(navAction)
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
              {this.props.cart.map((cartItem, i) => {
                return (<CartListItem key={i} cart={cartItem}/>)
              }
              )}
              </>
              <tr className="actions">
                <td>
                  <a href="#" onClick={(e) => this.handleClick()}>Continue shopping</a>
                </td>
                <td>
                  <button>Update</button>
                  <button className="button-primary">Checkout</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart)
