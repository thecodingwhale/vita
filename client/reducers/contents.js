
import { handleActions } from 'redux-actions';
import { FETCH_CONTENT } from '../constants/actions';

const initialState = [];

export default handleActions({
  [FETCH_CONTENT](state, action) {
    return action.payload;
  },
}, initialState);
