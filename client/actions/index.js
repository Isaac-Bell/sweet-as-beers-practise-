export const actionCreatorName = () => {
  return {
    type: 'ACTION_TYPE'
  }
}

export const addToCart = (id, name, quantity) => {
  return {
    type: 'ADD_TO_CART',
    id,
    name,
    quantity
  }
}
