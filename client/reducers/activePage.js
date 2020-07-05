import { NAVIGATE } from '../actions'

const activePage = (state = true, action) => {
  switch (action.type) {
    case NAVIGATE:
      return action.toggle

    default:
      return state
  }
}

export default activePage
