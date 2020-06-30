const activePage = (state = 'listing', action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return action.target === 'listing' ? 'cart' : 'listing'
    default:
      return state
  }
}

export default activePage
