import { combineReducers } from 'redux'

// import otherReducer from './other-reducer'
import beerList from './beerList'
import activePage from './activePage'
import errorMessage from './errorMessage'

export default combineReducers({
  beerList,
  activePage,
  errorMessage
  // otherReducer
})
