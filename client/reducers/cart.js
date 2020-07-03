export const ADD_TO_CART = 'ADD_TO_CART'

const cart = (state = [], action) => {
  let beerCart = []
  let addBeer = false

  switch (action.type) {
    case ADD_TO_CART:
      beerCart = state.map(beer => {
        console.log('beer:', beer)
        if (beer.id === action.id) {
          ++beer.quantity
          addBeer = true
        }
        return beer
      })
      if (!addBeer) {
        beerCart.push({
          id: action.id,
          name: action.name,
          quantity: 1
        })
      }
      return beerCart
  }
}

export default cart
