import { combineReducers } from 'redux'
import navigationReducer from './navigationReducer'
import cart from './cartReducer'
// import otherReducer from './other-reducer'

export default combineReducers({
  // otherReducer
  navigationReducer,
  cart
})
