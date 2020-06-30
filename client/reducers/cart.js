const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      let newBeer = {
        id: action.id,
        name: action.name,
        quantity: 1,
      }
      return [...state, newBeer]
    default:
      return state
  }
}

export default cart
