export const addBeerToCart = (beerName) => {
  return {
    type: 'ADD_BEER_TO_CART',
    beername: beerName
  }
}

export const removeBeerFromCart = (beerName) => {
  return {
    type: 'REMOVE_FROM_CART',
    beername: beerName
  }
}

export const backToBeerList = () => {
  return {
    type: 'SHOW_BEER_LIST',
  }
}

export const updateCart = () => {
  return {
    type: 'UPDATE_CART',
  }
}

