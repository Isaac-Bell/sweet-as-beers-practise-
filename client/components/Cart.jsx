import React from 'react'
// import cartListItem from './cartListItem'

class Cart extends React.Component {
  state = {
    beer: '',
    quantity: '',
    remove: ''
  }

  render () {
    return (
      <>
        <div className="cart">

          <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>

          <table>

            <thead>
              <tr>
                <th>Beer</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{this.state.beer}</td>
                <td><input className="update-input" value={this.state.quantity}/></td>
                <td><button><span className="fa fa-trash fa-2x"></span></button></td>
              </tr>

              <p className="actions">
                <a href="/designs/listing.html">Continue shopping</a>
                <button>Update</button>
                <button className="button-primary">Checkout</button>
              </p>
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default Cart
