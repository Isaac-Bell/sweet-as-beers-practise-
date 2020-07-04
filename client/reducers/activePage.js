export const NAVIGATE = 'NAVIGATE'

const activePage = (state = 'listing', action) => {
  switch (action.type) {
    case NAVIGATE:
      return 'admin'
    default:
      return state
  }
}

export default activePage
