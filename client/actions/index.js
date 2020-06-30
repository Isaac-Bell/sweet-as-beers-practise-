export const actionCreatorName = () => {
  return {
    type: 'ACTION_TYPE'
  }
}

export const navigate = (page) => {
  return {
    type: 'NAVIGATE',
    page: page
  }
}

export const addToCart = (id, name) => {
  return {
    type: 'ADD_TO_CART',
    id: id,
    name: name
  }
}

export const removeFromCart = (id) => {
  return {
    type: 'REMOVE_FROM_CART',
    id: id
  }
}
