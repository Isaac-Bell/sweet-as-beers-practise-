import React from 'react'

import BeerListItem from './BeerListItem'
// import beerData from '../../data/beers'

function BeerList (props) {
  console.log(props)
  // const {store} = props
  // const state = store.getSate()
  // const beers = props.beers

  return (
    <>

      <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>
      <BeerListItem beers={props.beers} />
    </>
  )
}

export default BeerList
