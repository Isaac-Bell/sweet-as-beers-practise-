export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const UPDATE_QUANTITIES = 'UPDATE_QUANTITIES'

const cart = (state = [], action) => {
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

    case UPDATE_QUANTITIES:
      beerCart = state.map(beer => {
        if (beer.id === action.id) {
          beer.quantity = action.quantity
        }
        return beer
      })
      return beerCart

    default:
      return state
  }
}

export default cart
