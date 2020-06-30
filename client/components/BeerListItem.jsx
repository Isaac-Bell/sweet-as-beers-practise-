import React from 'react'
import { navigate, addToCart } from '../actions'
import { connect } from 'react-redux'

class BeerListItem extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  clickHandler = (id, name) => {
    this.props.dispatch(navigate('cart'))
    this.props.dispatch(addToCart(id, name))
  }

  render () {
    return (
      <div>
        <div className="beer">
          <p className="name">{this.props.name}</p>
          <p className="description">{this.props.brewery}</p>
          <p>
            <span className="country">{this.props.country}</span>
            <span className="abv">{this.props.abv}</span>
            <button onClick={() => this.clickHandler(this.props.id, this.props.name)} href="#" className="cart-link">add to Cart</button>
          </p>
        </div>
      </div>
    )
  }
}

export default connect()(BeerListItem)
