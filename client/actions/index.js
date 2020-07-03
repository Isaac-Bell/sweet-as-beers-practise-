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