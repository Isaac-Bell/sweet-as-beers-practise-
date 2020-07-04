
let nextId = 0
export const addToCart = (id, name) => {
  return {
    type: 'ADD_TO_CART',
    id,
    name,
    quantity: ++nextId
  }
}

// Add a new action to delete from cart
export const removeFromCart = id => {
  return {
    type: 'REMOVE_FROM_CART',
    id
  }
}

// Create a navigate action to show either the BeerList of Admin components
export const navigate = target => {
  return {
    type: 'NAVIGATE',
    target // 'listing' or 'admin'
  }
}
