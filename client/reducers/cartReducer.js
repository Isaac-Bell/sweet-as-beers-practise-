const cartReducer = (state = [], action) => {
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
      // Add a new case for the new action to delete from cart
    case 'REMOVE_FROM_CART':
      return [
        state.filter(beer => beer.id !== action.id)
      ]

    default:
      return state
  }
}

export default cartReducer
