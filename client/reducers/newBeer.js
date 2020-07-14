export const NEWBEER = 'NEWBEER'

const newBeer = (state = [], action) => {
  switch (action.type) {
    case NEWBEER:
      return [
        {
          id: 6,
          name: action.name,
        }
      ]
    default:
      return state
  }
}

export default newBeer
