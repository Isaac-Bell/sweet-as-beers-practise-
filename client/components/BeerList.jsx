import React from 'react'
import BeerListItem from './BeerListItem'

function BeerList(props) {
  return (
    <div>
      <p className="welcome">
        Welcome! Please select from our delicious selection and don't hesitate
        to let us know if we can answer any of your questions.
      </p>
      {props.beers.map(beer => (
        <BeerListItem beer={beer} />
      ))}
    </div>
  )
}

export default BeerList
