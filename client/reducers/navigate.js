const activePage = (state = 'listing', action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return action.target === 'listing' ? 'listing' : 'cart'
    default:
      return state
  }
}

export default activePage
