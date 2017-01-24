import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router'
import promise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import routes from './routes/index'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(promise),
  // other store enhancers if any
));

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
