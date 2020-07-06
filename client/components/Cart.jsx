import React from 'react'
import { connect } from 'react-redux'
import { navigate, updateQuantities } from '../actions/index'

import CartListItem from './CartListItem'

class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cart: this.props.cart
    }
  }

  handleClick = () => {
    const navAction = navigate('Listing')
    this.props.dispatch(navAction)
  }

  handleChange = (input, idOfChangedBeer) => {
    console.log(input, idOfChangedBeer)
    let newCart = this.state.cart.map(element => {
      if (element.id === idOfChangedBeer) {
        element.quantity = input
      }
      return element
    })

    this.setState({
      cart: newCart
    })
  }

  updateQuant = () => {
    console.log(this.state.cart)
    const updatedBeerQuants = updateQuantities(this.state)
    this.props.dispatch(updatedBeerQuants)
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
              {this.state.cart.map((cartItem, i) => {
                return (<CartListItem key={i} cart={cartItem} handleChange={this.handleChange}/>)
              }
              )}
              </>
              <tr className="actions">
                <td>
                  <a href="#" onClick={(e) => this.handleClick()}>Continue shopping</a>
                </td>
                <td>
                  <button onClick={() => this.updateQuant()}>Update</button>
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
