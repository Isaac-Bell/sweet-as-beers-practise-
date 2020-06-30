export const addBeerToCart = (beerId) => {
  return {
    type: 'ADD_BEER_TO_CART',
    beerid: beerId
  }
}
