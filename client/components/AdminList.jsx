import React from 'react'
import AdminListItem from './AdminListItem'

const AdminList = (props) => {
  return (
    <>
      <p className='welcome'>
          Welcome to the Admin screen to update the beer database
      </p>
      {props.beersData.map((beer, id) => {
        return <AdminListItem key={id} beer={beer} />
      })}
    </>
  )
}

export default AdminList
