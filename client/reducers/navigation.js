const navigation = (state = 'BeerList', action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return action.target
    default:
      return state
  }
}

export default navigation
