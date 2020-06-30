import React from 'react'

function Cart (props) {
  const beers = props.beers

  return (
    <>
      <body>
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

            {beers.map((beer) => {
              return (
                <tbody key={beer.id}>
                  <tr>
                    <td>{beer.name}</td>
                    <td><input className="update-input" value="3"/></td>
                    <td><button><span className="fa fa-trash fa-2x"></span></button></td>
                  </tr>
                </tbody>
              )
            })
            }
          </table>

          <p className="actions">
            <a href="/designs/listing.html">Continue shopping</a>
            <button>Update</button>
            <button className="button-primary">Checkout</button>
          </p>

        </div>

      </body>
    </>
  )
}

export default Cart
