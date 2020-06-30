import React from 'react'
import { Link } from 'react-router-dom'

const BeerListItem = (props) => {
  return (
    <>
      <div className='beer'>
        <p className='name'>{props.beer.name}</p>
        <p className='description'>{props.beer.style} from {props.beer.brewery}</p>
        <p>
          <span className='country'>{props.beer.country}</span>
          <span className='abv'>{props.beer.abv}</span>
          <Link to='/cart'>Add to cart</Link>
        </p>
      </div>
    </>
  )
}

export default BeerListItem
