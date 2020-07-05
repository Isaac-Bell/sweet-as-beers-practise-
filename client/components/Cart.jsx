import React from 'react'
import { connect } from 'react-redux'
import CartListItem from './CartListItem'
import { backToBeerList, updateCart, orderComplete } from '../actions/index'
import Checkout from './Checkout'

function Cart (props) {
  return (
    <div className="cart">

      <h1><span className="fa fa-beer"></span> Sweet As Beers <span className="fa fa-beer"></span></h1>

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
          {Object.keys(props.cartBeers).map(beer => {
            return <CartListItem beername={beer} qauntity={props.cartBeers[beer]}/>
          }
          )}
        </tbody>
      </table>

      <p className="actions">
        <a href="#" onClick={() => props.dispatch(backToBeerList())}>Continue shopping</a>
        <button onClick={() => props.dispatch(updateCart())}>Update</button>
        <button className="button-primary" onClick={() => props.dispatch(orderComplete(props.cartBeers))}>Checkout</button>
      </p>

      {props.toggle ? <Checkout /> : console.log('ready for order')}

    </div>
  )
}

function mapStateToProps(state) {
  return { 
      cartBeers: state.beers.cartBeers,
      update: state.beers.update,
      toggle: state.orders.complete
    }
}

export default connect(mapStateToProps)(Cart)
