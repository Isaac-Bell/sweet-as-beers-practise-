const cart = []

export const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          quantity: 1
        }]
    case 'REMOVE_FROM_CART':
      return state.filter(element => element.id !== action.id)
    default:
      return state
  }
}

export default cartReducer
