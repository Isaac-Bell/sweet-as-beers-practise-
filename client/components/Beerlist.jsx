import React from 'react'

import BeerlistItem from './BeerListItem'

function Beerlist (props) {
  // const {store} = props
  // const state = store.getSate()
  const beers = props.beers

  console.log(beers)
  return (
    <>

      <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>
      <BeerlistItem beers={props.beers} /> 
    </>
  )
}

export default Beerlist
