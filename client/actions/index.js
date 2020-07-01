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

export const removeFromCart = id => {
  return {
    type: 'REMOVE_FROM_CART',
    id,
  }
}

export const updateQuantities = cart => {
  return {
    type: 'UPDATE_QUANTITIES',
    cart,
  }
}
