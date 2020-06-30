const initialState = {
  cartBeers: []
}

function beers (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_CART':
      state.cartBeers.push(action.beer)
      return state
    default:
      return state
  }
}

export default beers
