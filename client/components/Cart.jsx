import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import CartListItem from './CartListItem'

class Cart extends React.Component {
  state ={
    quantity: this.props.addToCart[0].quantity
  }
// the cart knows about the quanities of the items we put in inside but 
//we don't have the id of the item yet. Get the id then you can write
// a update the cart action from the readme
updateCart = evnt => {
  const { value } = evnt.target
  this.setState({
    quantity: value
  })
}

clickHandler = () => {

}

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
            {this.props.addToCart.map(el => <CartListItem updateCart={this.updateCart} quantity={this.state.quantity} cartItem={el} key={el.id} />)}
          </tbody>
        </table>

        <p className="actions">
          <a href="/designs/listing.html">Continue shopping</a>
          <button onClick={this.clickHandler}>Update</button>
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
