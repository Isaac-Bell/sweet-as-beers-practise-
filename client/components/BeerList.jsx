import React from 'react'

const BeerList = (props) => {
    // View the first beer object in the array
   console.log(props.beersData[0])
    return (
        <>
    <h2>Beer List</h2>
      <ul>
        {props.beersData.map((beer,id) => { 
          return <li key={id}> {beer.name}</li>
        })}
      </ul>
    </>
    )
}

export default BeerList