import React from 'react'
import { connect } from 'react-redux'

const BeerListItem = (props) => {
  return (
    <div>
      <div className="beer">
        <p className="name">{props.beerprop.name}</p>
        <p className="description">A {props.beerprop.style} from {props.beerprop.brewery}</p>
        <p>
          <span className="country">{props.beerprop.country}</span>
          <span className="abv">{props.beerprop.abv}</span>
          <a href="/designs/cart.html" className="cart-link">Add to cart</a>
        </p>
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({

// })

export default connect()(BeerListItem)
