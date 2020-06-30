const initialState = [
  {
    id: 1,
    name: 'HBIB Ginger Fusion',
    quantity: 3
  }, {
    id: 2,
    name: 'Mangose & Melons',
    quantity: 1
  }
]

const cart = (state = initialState, action) => {
  let newItemAdded = false
  let toReturn
  switch (action.type) {
    case 'ADD_TO_CART':
      state.map(beer => {
        if (beer.id === action.id) {
          ++beer.quantity
        } else {
          newItemAdded = true
        }
      })
      if (newItemAdded) {
        toReturn = [...state, {
          id: action.id,
          name: action.name,
          quantity: 1
        } ]
      }

      // newItemAdded
      //   ? toReturn = [...state, {
      //     id: action.id,
      //     name: action.name,
      //     quantity: 1
      //   } ]
      //   : to

      return toReturn

    default:
      return state
  }
}

export default cart
