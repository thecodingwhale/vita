
import { handleActions } from 'redux-actions';

const initialState = [];
const FETCH_CONTENT = 'fetch content';

export default handleActions({
  [FETCH_CONTENT](state, action) {
    return action.payload;
  },
}, initialState);
