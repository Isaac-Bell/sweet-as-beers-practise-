const navigationReducer = {
  activePage: 'listing'

}

const navigate = (state = navigationReducer, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return {
        activePage: action.target }

    default:
      return state
  }
}

export default navigate
