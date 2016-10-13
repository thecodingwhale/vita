
import axios from 'axios'

export function fetchContent() {
  const request = axios.get('/data.json')
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: 'fetch content',
        payload: response.data
      })
    })
  }
}