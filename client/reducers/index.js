import { combineReducers } from 'redux'

import activePage from './activePage'
import cart from './cart'
// import otherReducer from './other-reducer'

export default combineReducers({
  activePage,
  cart
})
