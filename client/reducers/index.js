import { combineReducers } from 'redux'

// import otherReducer from './other-reducer'
import navigate from './navigate'
import cart from './cart'

export default combineReducers({
  navigate,
  cart,
})
