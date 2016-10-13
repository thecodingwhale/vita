
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import contents from './contents'

export default combineReducers({
  routing,
  contents
})
