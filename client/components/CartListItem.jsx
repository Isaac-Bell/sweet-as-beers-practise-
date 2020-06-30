import React from 'react'

class CartListItem extends React.Component {
  render () {
    return (
      <>

          {this.props.state.beer.map((beerItem, i) => {
            return (
              <tr key={i}>
                <td>{beerItem.name}</td>
                <td><input className="update-input" placeholder={beerItem.quantity}/></td>
                <td><button><span className="fa fa-trash fa-2x"></span></button></td>
              </tr>
            )
          })}

      </>
    )
  }
}

export default CartListItem
