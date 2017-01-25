import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(promise),
  // other store enhancers if any
));

export default store;