import {combineReducers} from 'redux'

import beers from './beers'
import cart from './cart'

export default combineReducers({
  beers,
  cart
})