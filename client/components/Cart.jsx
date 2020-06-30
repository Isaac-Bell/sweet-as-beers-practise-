import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

class Cart extends React.Component {
  render () {
    return (
      <>
        <div className='cart'>
          <p className='welcome'>Thirsty? Sweet! You're one step closer to a quenching.</p>
          <table>
            <thead>
              <tr>
                <th>Beer</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <CartItem />
            </tbody>
          </table>
          <p className='actions'>
            <Link to='/'>Continue shopping</Link>
            {/* <a href='/'>Continue shopping</a> */}
            <button>Update</button>
            <button className='button-primary'>Checkout</button>
          </p>
        </div>
      </>
    )
  }
}

// const mapStateToProps = (state) => {
//   console.log('state:', state)
//   return {
//     beers: state.beers
//   }
// }

// export default connect(mapStateToProps)(Cart)
export default Cart
