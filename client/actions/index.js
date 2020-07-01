export const navigate = target => {
  return {
    type: 'NAVIGATE',
    target: target
  }
}

export const addToCart = (id, name) => {
  return {
    type: 'ADD_TO_CART',
    id,
    name
  }
}

export const removeFromCart = id => {
  return {
    type: 'REMOVE_FROM_CART',
    id
  }
}

export const updateCart = cart => {
  return {
    type: 'UPDATE_CART',
    cart
  }
}