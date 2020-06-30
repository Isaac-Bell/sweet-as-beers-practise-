import React from 'react'
import BeerListItem from './BeerListItem'

const BeerList = (props) => {
  const beersData = props.beersData
  // View the first beer object in the array
  console.log(props.beersData[0])
  return (
    <>
      {props.beersData.map((beer, id) => {
        return  <BeerListItem beer={beer} />
        // <p className='name' key={id}> {beer.name}</p>
      })}
      {/* <BeerListItem beersData={beersData} /> */}

    </>
  )
}

export default BeerList
