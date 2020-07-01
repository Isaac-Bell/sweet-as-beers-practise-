import React from 'react'
import { connect } from 'react-redux'

class BeerListItem extends React.Component {
  handleClick = () => {
    const action = {
      type: 'NAVIGATION',
      navigation: this.state.navigation
    }

    this.props.store.dispatch(action)
  }
  render (props) {
    return (
      <div>
        <div className="beer">
          <p className="name">{props.beerprop.name}</p>
          <p className="description">A {props.beerprop.style} from {props.beerprop.brewery}</p>
          <p>
            <span className="country">{props.beerprop.country}</span>
            <span className="abv">{props.beerprop.abv}</span>

            {/* create onclick function for navigation */}
            <button onClick={this.handleClick}>Add to cart</button>
          </p>
        </div>
      </div>
    )
  }
}
// const mapStateToProps = (state) => ({

// })

export default connect()(BeerListItem)
