import React from 'react'
import { connect } from 'react-redux'

const BeerListItem = (props) => {
  console.log(BeerListItem)
  return (
    <li>
      {props.beerprop.name}
    </li>
  )
}

// const mapStateToProps = (state) => ({

// })

export default connect()(BeerListItem)
