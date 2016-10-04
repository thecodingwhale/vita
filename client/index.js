
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

// import App from './containers/App'
import Resume from './containers/Resume'
import configure from './store'

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

// <Route path="/" component={App}></Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>      
      <Route path="/" component={Resume}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
