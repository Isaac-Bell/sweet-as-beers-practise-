import React from 'react'
import { connect } from 'react-redux'
// import { deleteFromDB } from '../actions/index.js'

// This component receives props from App
const Admin = (props) => {
  // const handleClick = () => {
  const handleClick = (id, name, dispatch) => {
    console.log('Button click for id:', id, ' and name: ', name)
    // dispatch(deleteFromDB(id, name))
  }

  return (
    <>
      <div className='beer'>
        <p className='name'>{props.beer.name}</p>
        <p className='description'>{props.beer.style} from {props.beer.brewery}</p>
        <p>
          <span className='country'>{props.beer.country}</span>
          <span className='abv'>{props.beer.abv}</span>
          <button onClick={() => handleClick(props.beer.id, props.beer.name, props.dispatch)}>Delete from database</button>
        </p>
      </div>
    </>
  )
}

export default connect()(Admin)
