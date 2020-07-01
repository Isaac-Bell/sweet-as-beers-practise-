const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      let newBeer = {
        id: action.id,
        name: action.name,
        quantity: 1,
      }
      let stateCheck = state.find(beer => beer.name === newBeer.name)
      return stateCheck ? state : [...state, newBeer]

    case 'REMOVE_FROM_CART':
      return state.filter(beer => beer.id !== action.id)

    case 'UPDATE_QUANTITIES':
      action.cart.map(newBeer => {
        return state.splice(newBeer.id, 1, newBeer)
      })
    default:
      return state
  }
}

export default cart
