import React from 'react'
import BeerListItem from './BeerListItem'

const BeerList = (props) => {
  // View the first beer object in the array
  console.log('BeerList.jsx component, first beer object in array', props.beersData[0])
  return (
    <>
      <div className='beerlist'>
        <p className='welcome'>
          Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.
        </p>
        {props.beersData.map((beer, id) => {
          return <BeerListItem key={id} beer={beer} />
        })}
      </div>
    </>
  )
}

export default BeerList
