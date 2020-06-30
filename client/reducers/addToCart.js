let quantity = 1

const addToCart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, {
        id: action.id,
        name: action.name,
        quantity: quantity++
      }]

    default:
      return state
  }
}

export default addToCart
