import React from 'react'
import data from '../../data/beers'
import { connect } from 'react-redux'
import BeerListItem from './BeerListItem'

const BeerList = () => {
  return (
    <div>
      <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.
      </p>
      <div>
        {data.beers.map(beer => {
          return (
            <BeerListItem key={beer.name}
              beerprop={beer} />
          )
        }
        )}
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({

// })

export default connect()(BeerList)
// export default connect(mapStateToProps)(BeerList)
