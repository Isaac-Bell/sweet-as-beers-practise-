import React from 'react'

function BeerlistItem (props) {
  const beers = props.beers
  return (
  <>
  {beers.map((beer) => {
    return (
      <div key={beer.id} className="beer">
        <p className="name">{beer.name}</p>
        <p className="description">A {beer.style} from {beer.brewery} </p>
        <p>
          <span className="country"> {beer.country} </span>
          <span className="abv"> {beer.abv} </span>
          <button>Add to cart</button>
        </p>
      </div>
    )
  })}
  </>

  )
}

export default BeerlistItem
