import React from 'react'
import AdminListItem from './AdminListItem'
import {connect} from 'react-redux'
import {newBeer} from '../actions/index.js'


function submitWord (e, dispatch) {
  console.log(e.currentTarget.value)
  if (e.keyCode === 13) { // enter
    dispatch(newBeer(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}


const AdminList = (props) => {
  return (
    <>
      <p className='welcome'>
          Welcome to the Admin screen to update the beer database
      </p>

      <div>
        <form onSubmit={
        submitWord
        }

        >
        <input type="text" name="beer" placeholder="New Beer name" />

        <button type="submit">Submit</button>
        </form>
        </div>
        


     


      {props.beersData.map((beer, id) => {
        return <AdminListItem key={id} beer={beer} />
      })}
    </>
  )
}

export default connect()(AdminList)
