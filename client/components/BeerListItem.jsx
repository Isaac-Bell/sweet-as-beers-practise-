import React from 'react'
import { connect } from 'react-redux'
import { changePage } from '../actions'

function BeerListItem(props) {
  const navigate = (target, dispatch) => {
    console.log('hello')
    dispatch(changePage(target))
  }

  const { id, name, brewery, country, style, abv } = props.beer
  return (
    <div className="beer" key={id}>
      <p className="name">{name}</p>
      <p className="description">
        A {style} from {brewery}
      </p>
      <p>
        <span className="country">{country}</span>
        <span className="abv">{abv} abv</span>
        <a
          onClick={() => navigate('cart', props.dispatch)}
          className="cart-link">
          Add to cart
        </a>
      </p>
    </div>
  )
}

export default connect()(BeerListItem)
