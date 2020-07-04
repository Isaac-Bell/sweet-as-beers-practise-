export const NAVIGATE = 'NAVIGATE'

const adminPage = (state = 'listing', action) => {
  switch (action.type) {
    case NAVIGATE:
      return 'admin'
    default:
      return state
  }
}

export default adminPage
