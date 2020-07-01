import React from 'react'
import { connect } from 'react-redux'
import { navigate, addToCart } from '../actions/index'

const BeerListItem = (props) => {
  
  const handleClick = () => {
    props.dispatch(navigate('Cart'))
    props.dispatch(addToCart(props.beerprop.id, props.beerprop.name))
  }

  return (
    <div>
      <div className="beer">
        <p className="name">{props.beerprop.name}</p>
        <p className="description">A {props.beerprop.style} from {props.beerprop.brewery}</p>
        <p>
          <span className="country">{props.beerprop.country}</span>
          <span className="abv">{props.beerprop.abv}</span>

          {/* create onclick function for navigation */}
          <button onClick={handleClick}>Add to cart</button>
        </p>
      </div>
    </div>
  )
}
// const mapStateToProps = (state) => ({

// })

export default connect()(BeerListItem)
