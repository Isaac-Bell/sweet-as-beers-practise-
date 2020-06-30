export const actionCreatorName = () => {
  return {
    type: 'ACTION_TYPE'
  }
}

let nextId = 0
export const addToCart = (id, name) => {
  return {
    type: 'ADD_TO_CART',
    id,
    name,
    quantity: ++nextId
  }
}
