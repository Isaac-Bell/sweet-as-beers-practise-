import React from 'react'

const BeerList = (props) => {
    // View the first beer object in the array
   console.log(props.beersData[0])
    return (
        <>
    <h2>BeerList</h2>
      <ul>
        {/* {props.beersData.map((beer,id) => { 
           <li>Beer Name: {beer.name} {id}</li>
        })} */}
      </ul>
    </>
    )
}

export default BeerList