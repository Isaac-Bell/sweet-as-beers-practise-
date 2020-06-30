import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../actions/index.js'

const BeerListItem = (props) => {
  function handleClick (id, name, dispatch) {
    dispatch(addToCart(id, name))
  }

  return (
    <>
      <div className='beer'>
        <p className='name'>{props.beer.name}</p>
        <p className='description'>{props.beer.style} from {props.beer.brewery}</p>
        <p>
          <span className='country'>{props.beer.country}</span>
          <span className='abv'>{props.beer.abv}</span>
          <Link to='/cart' onClick={e => handleClick(props.beer.id, props.beer.name, props.dispatch)}>Add to cart</Link>
        </p>
      </div>
    </>
  )
}

export default connect()(BeerListItem)
