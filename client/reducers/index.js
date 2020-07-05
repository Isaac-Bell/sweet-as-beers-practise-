const initialState = {
  cartBeers: {},
  visible: false
}

function beers (state = initialState, action) {
  switch (action.type) {
    case 'ADD_BEER_TO_CART':
      if (Object.keys(state.cartBeers).includes(action.beername)) {
        state.cartBeers[action.beername] += 1
        return {
          cartBeers: state.cartBeers,
          visible: true
        }
      } else {
        state.cartBeers[action.beername] = 1
        return {
          cartBeers:  state.cartBeers,
          visible: true
        }
      }

    case 'REMOVE_FROM_CART':
      if (Object.keys(state.cartBeers).includes(action.beername) && state.cartBeers[action.beername] > 1) {
        state.cartBeers[action.beername] -= 1
        return {
          cartBeers: state.cartBeers,
          visible: true
        }
      } else {
        delete state.cartBeers[action.beername]
        return {
          cartBeers:  state.cartBeers,
          visible: true
        }
      }

    case 'SHOW_BEER_LIST':
      return {
        cartBeers:  state.cartBeers,
        visible: false
      }

    default:
      return state
  }
}

export default beers
