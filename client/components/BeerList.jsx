import React from 'react'
import { connect } from 'react-redux'
import BeerListItem from './BeerListItem'

const Beerlist = (props) => (
        <body>
            <h1><span class="fa fa-beer"></span> Sweet As Beers <span class="fa fa-beer"></span></h1>
            <p class="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>
            {props.beerData.beers.map(beer =>
                <BeerListItem name={beer.name} description={beer.description} country={beer.country} abv={beer.abv} />
            )}
        </body>
  )

  export default connect()(Beerlist)