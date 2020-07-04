import { combineReducers } from 'redux'

import cartReducer from './cartReducer'
import activePage from './activePage'

export default combineReducers({
  cartReducer,
  activePage
})
