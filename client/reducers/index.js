const initialState = {
  cartBeers: {},
  visible: false
}

function beers (state = initialState, action) {
  switch (action.type) {
    case 'ADD_BEER_TO_CART':
      if (Object.keys(state.cartBeers).includes(action.beername)) {
        state.cartBeers[action.beername] += 1
        state.visible = true
        return state
      } else {
        state.cartBeers[action.beername] = 1
        state.visible = true
        return state
      }

    case 'REMOVE_FROM_CART':
      delete state.cartBeers.splice(state.cartBeers.indexOf(beer => beer === action.beerid), 1)
      return state

    default:
      return state
  }
}

export default beers
