const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          quantity: 1
        }
      ]
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}

export default cart
