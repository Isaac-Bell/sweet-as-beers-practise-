import { combineReducers } from 'redux'
import activePage from './activePage'
import addToCart from './addToCart'
// import otherReducer from './other-reducer'

export default combineReducers({
  activePage,
  addToCart
  // otherReducer
})
