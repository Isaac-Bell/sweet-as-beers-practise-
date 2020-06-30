const navigator = {
  activePage: 'listing'

}

export const navigationReducer = (state = navigator, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return {
        activePage: action.target }
    default:
      return state
  }
}

export default navigationReducer
