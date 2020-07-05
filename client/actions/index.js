export const navigate = target => {
  return {
    type: 'NAVIGATE',
    target
  }
}

export const addToCart = (id, name) => {
  return {
    type: 'ADD_TO_CART',
    id,
    name
  }
}
