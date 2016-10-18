
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from '../middleware';
import rootReducer from '../reducers';

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(
    logger,
    thunk,
  )(create);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}
