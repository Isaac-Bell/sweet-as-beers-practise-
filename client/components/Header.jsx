import React from 'react'
import { connect } from 'react-redux'

export const Header = () => {
  return (
    <div>
      <h1>
        <span className="fa fa-beer"></span>
        Sweet As Beers
        <span className="fa fa-beer"></span>
      </h1>
    </div>
  )
}

// const mapStateToProps = (state) => ({

// })

export default connect()(Header)
