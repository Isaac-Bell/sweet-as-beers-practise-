import React from 'react'
import { connect } from 'react-redux'
import beerListItem from './BeerListItem'

const Beers = ({ beers }) => (
        <body>
            <h1><span class="fa fa-beer"></span> Sweet As Beers <span class="fa fa-beer"></span></h1>
            <p class="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>
            {beers.map(beer =>
                <BeerListItem name={beer.name} description={beer.description} country={beer.country} abv={beer.abv}
                />
            )}
        </body>
  )

  const mapStateToProps = (state) => {
    return {
      beers: state.beers
    }
  }
  
  // const connector = connect(mapStateToProps)
  // const connectedComponent = connector(Words)
  // export default connectedComponent
  // or
  export default connect(mapStateToProps)(Beers)