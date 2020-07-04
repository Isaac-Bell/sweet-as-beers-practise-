import { combineReducers } from 'redux'

// import otherReducer from './other-reducer'
import beerlist from './beerlist'
import activePage from './activePage'
import cart from './cart'

export default combineReducers({
  beerlist,
  activePage
  // cart
  // otherReducer
})
