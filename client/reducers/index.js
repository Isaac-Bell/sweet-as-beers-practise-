import { combineReducers } from 'redux'
import navigation from './navigation'
import cart from './cart'
// import otherReducer from './other-reducer'

export default combineReducers({
  // otherReducer
  navigation,
  cart
})
