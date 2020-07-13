import { combineReducers } from 'redux'

import cartReducer from './cartReducer'
import activePage from './activePage'
import newBeer from './newBeer'

export default combineReducers({
  cartReducer,
  activePage,
  newBeer
})
