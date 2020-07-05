const initialState = {
  cartBeers: {},
  visible: false,
  update: 0
}

function beers(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BEER_TO_CART':
      if (Object.keys(state.cartBeers).includes(action.beername)) {
        state.cartBeers[action.beername] += 1
        return {
          cartBeers: state.cartBeers,
          visible: true,
          update: 0
        }
      } else {
        state.cartBeers[action.beername] = 1
        return {
          cartBeers: state.cartBeers,
          visible: true,
          update: 0
        }
      }

    case 'REMOVE_FROM_CART':
      if (Object.keys(state.cartBeers).includes(action.beername) && state.cartBeers[action.beername] > 1) {
        state.cartBeers[action.beername] -= 1
        return {
          cartBeers: state.cartBeers,
          visible: true,
          update: 0
        }
      } else {
        delete state.cartBeers[action.beername]
        return {
          cartBeers: state.cartBeers,
          visible: true,
          update: 0
        }
      }

    case 'SHOW_BEER_LIST':
      return {
        cartBeers: state.cartBeers,
        visible: false,
        update: 0
      }

    case 'UPDATE_CART':
      return {
        cartBeers: state.cartBeers,
        visible: true,
        update: state.update + 1
      }

    default:
      return state
  }
}

export default beers
