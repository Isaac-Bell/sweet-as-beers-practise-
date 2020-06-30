import React from 'react'
import { navigate } from '../actions'
import { connect } from 'react-redux'

const BeerListItem = (props) => {
  const clickHandler = () => {
    props.dispatch(navigate('cart'))
  }

  return (
    <div>
      <div className="beer">
        <p className="name">{props.name}</p>
        <p className="description">{props.brewery}</p>
        <p>
          <span className="country">{props.country}</span>
          <span className="abv">{props.abv}</span>
          <button onClick={clickHandler} href="#" className="cart-link">add to Cart</button>
        </p>
      </div>
    </div>
  )
}

export default connect()(BeerListItem)
