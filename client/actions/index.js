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
