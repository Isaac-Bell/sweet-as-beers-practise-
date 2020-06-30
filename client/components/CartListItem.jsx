import React from 'react'
import { connect } from 'react-redux'
import { removeBeerFromCart } from '../actions/index'

function CarListItem (props) {
  return (
    <tr>
      <td>HBIB Ginger Fusion</td>
      <td><input className="update-input" value="3"/></td>
      <td><button onClick={() => props.dispatch(removeBeerFromCart(props.id))}> <span className="fa fa-trash fa-2x"></span></button></td>
    </tr>
  )
}

export default CarListItem
connect()(CarListItem)