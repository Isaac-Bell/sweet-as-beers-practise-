import React from 'react'
import { connect } from 'react-redux'
import CartListItem from './CartListItem'
import { backToBeerList, updateCart } from '../actions/index'

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
        <button className="button-primary">Checkout</button>
      </p>

    </div>
  )
}

function mapStateToProps(state) {
  return { 
      cartBeers: state.cartBeers,
      update: state.update
    }
}

export default connect(mapStateToProps)(Cart)
