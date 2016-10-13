
import { handleActions } from 'redux-actions'

const initialState = []

export default handleActions({
  'fetch content' (state, action) {
    return action.payload
  }
}, initialState)