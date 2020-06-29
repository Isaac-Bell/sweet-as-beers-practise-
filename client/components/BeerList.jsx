import React from 'react'
import data from '../../data/beers'
import { connect } from 'react-redux'

const BeerList = (data) => {
  return (
    <div>
      <h2>hello</h2>
      <ul>
        <li>
          {data.map(beer =>
            <beer key={data.id}
              {...data} />
          )}
        </li>
      </ul>
    </div>
  )
}

// const mapStateToProps = (state) => ({

// })

export default connect(BeerList)
// export default connect(mapStateToProps)(BeerList)
