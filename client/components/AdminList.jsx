import React from 'react'
import AdminListItem from './AdminListItem'
import {connect} from 'react-redux'
import {newBeer} from '../actions/index.js'


const submitBeer = (event,dispatch) => {
  // event.preventDefault();
  console.log( event.target.beer.value);
  dispatch(newBeer(event.target.beer.value))
  }



const AdminList = (props) => {
  return (
    <>
      <p className='welcome'>
          Welcome to the Admin screen to update the beer database
      </p>

      <form onSubmit={submitBeer}>
        <input type="text" name="beer" placeholder="New Beer name" />
        <button type="submit">Submit</button>
      </form>
        
      {props.beersData.map((beer, id) => {
        return <AdminListItem key={id} beer={beer} />
      })}
    </>
  )
}

export default connect()(AdminList)
