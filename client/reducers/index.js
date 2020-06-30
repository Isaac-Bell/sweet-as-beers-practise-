const initialState = {
  cartBeers: []
}

function beers(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BEER_TO_CART':
      state.cartBeers.push(action.beerid)
      return state
    case 'REMOVE_FROM_CART':
      const beerIndex = state.cartBeers.indexOf(beer => beer === action.beerid)
      delete state.cartBeers.splice(beerIndex, 1)
      return state
    default:
      return state
  }
}

export default beers