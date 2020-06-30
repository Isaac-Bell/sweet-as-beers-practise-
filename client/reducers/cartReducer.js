const cart = {
  id: '',
  name: '',
  quantity: 0
}

export const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        id: action.id,
        name: action.name,
        quantity: cart.quantity + 1
      }
    default:
      return state
  }
}

export default cartReducer
