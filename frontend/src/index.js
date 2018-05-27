import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RouterConfig from './router';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/index'
import rootSaga from './sagas'
import createHistory from 'history/createBrowserHistory'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history)

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(historyMiddleware, sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(rootSaga)

// render the application
ReactDOM.render(
  <Provider store={store}>
      <RouterConfig />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
