import { ProgressPlugin } from "webpack"

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
