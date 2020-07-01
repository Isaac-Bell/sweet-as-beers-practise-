export const actionCreatorName = () => {
  return {
    type: 'ACTION_TYPE'
  }
}

export const navigate = toggle => {
  return {
    type: 'NAVIGATE',
    toggle // true or false
  }
}

export const addItem = (id, name) => {
  return {
    type: 'ADD_TO_CART',
    id,
    name
  }
}

export const removeItem = id => {
  return {
    type: 'REMOVE_FROM_CART',
    id
  }
}

export const updateQuantities = (id, quantity) => {
  return {
    type: 'UPDATE_QUANTITIES',
    id,
    quantity
  }
}
