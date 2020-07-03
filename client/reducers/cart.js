export const ADD_TO_CART = 'ADD_TO_CART'

const cart = (state = [], action) => {
  let beerCart = []
  switch (action.type) {
    case ADD_TO_CART:
      return [
        beerCart
      ]
  }
}

export default cart
