import React from 'react'
import { connect } from 'react-redux'
import CartListItem from './CartListItem'
import { navigate } from '../actions/index'

class Cart extends React.Component {
  handleClick = () => {
    this.props.dispatch(navigate('BeerList'))
  }

  render () {
    return (
      <div>
        <p className="welcome">Thirsty? Sweet! You&apos;re one step closer to a quenching.</p>
        <div>
          <table>
            <thead>
              <tr>
                <th>Beer</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <CartListItem />
            </tbody>

          </table>

          {/* create onclick function for navigation */}

          <p className="actions">
            <button onClick={this.handleClick}>Continue shopping</button>
            <button>Update</button>
            <button className="button-primary">Checkout</button>
          </p>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({

// })

export default connect()(Cart)
