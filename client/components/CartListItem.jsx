import React from 'react'
import { connect } from 'react-redux'
import { removeBeerFromCart } from '../actions/index'

function CarListItem (props) {
  return (
    <tr>
      <td>{props.beer}</td>
      <td><input className="update-input" value={props.beer}/></td>
      <td><button onClick={() => props.dispatch(removeBeerFromCart(props.beer.id))}> <span className="fa fa-trash fa-2x"></span></button></td>
    </tr>
  )
}

export default connect()(CarListItem)