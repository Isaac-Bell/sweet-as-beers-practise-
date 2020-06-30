const initialState = {
  cartBeers: []
}

function cart (state = initialState, action) {
  switch (action.type) {
    case 'REMOVE_FROM_CART':
      state.cartBeers.push(action.beerid)
      return state
    default:
      return state
  }
}

export default cart
