export const actionCreatorName = () => {
  return {
    type: 'ACTION_TYPE'
  }
}

export const navigate = target => {
  return {
    type: 'NAVIGATE',
    target // 'listing' or 'cart'
  }
}
