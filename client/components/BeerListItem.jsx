import React from 'react'
// import { connect } from 'react-redux'

// import { navigate } from '../actions'
// import beers from '../../data/beers'

// const { beers } = this.props.data

function BeerListItem (props) {
  // const beers = props.beers
  return (
  <>
  {props.data.beers.map((beer) => {
    return (
      <div key={beer.id} className="beer">
        <p className="name">{beer.name}</p>
        <p className="description">A {beer.style} from {beer.brewery} </p>
        <p>
          <span className="country"> {beer.country} </span>
          <span className="abv"> {beer.abv} </span>
          <a href="#" className="cart-link">Add to cart</a>
        </p>
      </div>
    )
  })}
  </>
  )
}
export default BeerListItem

// function handleClick (beers, dispatch) {
//   const toggle = false
//   dispatch(navigate(toggle))
// }

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cart
//   }
// }

// export default connect(mapStateToProps)(BeerListItem)
