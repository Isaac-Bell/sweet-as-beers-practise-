const cart = (state = [], action) => {
  let newCart = []

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

    case 'UPDATE_CART':
      state.map((item, index) => {
        if (item.id === action.cart[index].id) {
          item.quantity = action.cart[index].quantity
          newCart.push(item)
        } else {
          newCart.push(item)
        }
      })
      console.log(newCart)
      return newCart

    default:
      return state
  }
}

export default cart

// {
//   type: 'UPDATE_CART',
//   cart: [{id: 1, quantity: 2}]
//   }
