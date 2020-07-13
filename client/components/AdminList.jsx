import React from 'react'
import AdminListItem from './AdminListItem'
import request from 'superagent'

const AdminList = (props) => {

  const submitBeer = (event) => {
    // event.preventDefault();
    console.log(event.target.beer.value);
    request
    .get('/new')
    .send({
      id:6,
      name:event.target.beer.value
    }
    )
  }

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

export default AdminList
