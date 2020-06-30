import React from 'react'
import { connect } from 'react-redux'
import CartListItem from './CartListItem'

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

    </tbody>
  </table>

  <p className="actions">
    <a href="/designs/listing.html">Continue shopping</a>
    <button>Update</button>
    <button className="button-primary">Checkout</button>
  </p>

</div>
