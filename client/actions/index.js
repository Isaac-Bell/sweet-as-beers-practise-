export const addBeerToCart = (beerId) => {
  return {
    type: 'ADD_BEER_TO_CART',
    beerid: beerId
  }
}

export const removeBeerFromCart = (beerId) => {
  return {
    type: 'REMOVE_FROM_CART',
    beerid: beerId
  }
}
