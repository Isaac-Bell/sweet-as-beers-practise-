let quantity = 1

const addToCart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, {
        id: action.id,
        name: action.name,
        quantity: quantity++
      }]

    case 'REMOVE_FROM_CART':
      return state.filter(beer => beer.id !== action.id)

    default:
      return state
  }
}

export default addToCart
