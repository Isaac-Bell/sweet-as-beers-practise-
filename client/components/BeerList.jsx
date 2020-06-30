import React from 'react'
import data from '../../data/beers'
import { connect } from 'react-redux'
import BeerListItem from './BeerListItem'

const BeerList = () => {
  return (
    <div>
      <h2>hello</h2>
      <ul>
        {data.beers.map(beer => {
          return (
            <BeerListItem key={beer.name}
              beerprop={beer} />
          )
        }
        )}
      </ul>
    </div>
  )
}

// const mapStateToProps = (state) => ({

// })

export default connect()(BeerList)
// export default connect(mapStateToProps)(BeerList)
