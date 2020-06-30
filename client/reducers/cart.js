const initialState = [
  {
    id: 1,
    name: 'HBIB Ginger Fusion',
    quantity: 3
  }, {
    id: 2,
    name: 'Mangose & Melons',
    quantity: 1
  }
]

const cart = (state = initialState, action) => {
  let increasedCount = false
  let beerCart = []

  switch (action.type) {
    case 'ADD_TO_CART':
      beerCart = state.map(beer => {
        if (beer.id === action.id) {
          ++beer.quantity
          increasedCount = true
        }
        return beer
      })

      if (!increasedCount) {
        beerCart.push({
          id: action.id,
          name: action.name,
          quantity: 1
        })
      }

      return beerCart

    default:
      return state
  }
}

export default cart
