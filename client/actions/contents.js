/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import { FETCH_CONTENT } from '../constants/actions';

export function fetchContent() {
  const request = axios.get('/data.json');
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: FETCH_CONTENT,
        payload: response.data,
      });
    });
  };
}
