const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      let newBeer = {
        id: action.id,
        name: action.name,
        quantity: 1,
      }
      return [...state, newBeer]

    case 'REMOVE_FROM_CART':
      return state.filter(beer => beer.id !== action.id)

    case 'UPDATE_QUANTITIES':

    default:
      return state
  }
}

export default cart
