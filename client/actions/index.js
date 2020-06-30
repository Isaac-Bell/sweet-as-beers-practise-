let nextBeerId = 0

export const changePage = target => {
  return {
    type: 'NAVIGATE',
    target, // 'listing' or 'cart'
  }
}

export const addToCart = name => {
  return {
    type: 'ADD_TO_CART',
    id: nextBeerId++,
    name,
  }
}
