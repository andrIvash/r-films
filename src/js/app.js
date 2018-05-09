// @flow
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './components/App';
import '../styles/app.scss';
import '../js/components/Header';

// const middleware = [ thunk ]
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger())
// }

const store = createStore(
  reducer,
  // applyMiddleware(...middleware)
);

const app = document.getElementById('app');
if (app === null) {
  throw new Error('no app element');
}
render(
  <Provider store={store}>
    <App />
  </Provider>,
  app,
);
