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

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const cart = (state = initialState, action) => {
  let increasedCount = false
  let beerCart = []

  switch (action.type) {
    case ADD_TO_CART:
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

    case REMOVE_FROM_CART:
      return state.filter(beer => beer.id !== action.id)

    default:
      return state
  }
}

export default cart
