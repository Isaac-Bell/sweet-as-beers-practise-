import React from 'react'
import { connect } from 'react-redux'
import BeerListItem from './BeerListItem'

const Beerlist = (props) => (
  <div>
    <h1><span className="fa fa-beer"></span> Sweet As Beers <span className="fa fa-beer"></span></h1>
    <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>
    {props.beerData.beers.map(beer =>
      <BeerListItem key={beer.id} name={beer.name} description={beer.description} country={beer.country} abv={beer.abv} id={beer.id}/>
    )}
  </div>
)

// const connector = connect(mapStateToProps)
// const connectedComponent = connector(Words)
// export default connectedComponent
// or
export default connect()(Beerlist)
