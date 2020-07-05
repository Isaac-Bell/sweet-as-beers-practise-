import React from 'react'
import { connect } from 'react-redux'
import { removeBeerFromCart } from '../actions/index'

function CarListItem (props) {
  return (
    <tr>
      <td>{props.beername}</td>
      <td><input className="update-input" value={props.qauntity}/></td>
      <td><button onClick={() => props.dispatch(removeBeerFromCart(props.beername))}> <span className="fa fa-trash fa-2x"></span></button></td>
    </tr>
  )
}

export default connect()(CarListItem)