const initialState = {
  cartBeers: []
}

function beers (state = initialState, action) {
  switch (action.type) {
    case 'ADD_BEER_TO_CART':
      state.cartBeers.push(action.beerid)
      return state
    default:
      return state
  }
}

export default beers
