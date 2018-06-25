// @flow
import React from 'react';
import thunk from 'redux-thunk';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import RouteDataLoader from './route-data-loader';
import reducer from './reducers';
import '../styles/app.scss';
import routes from './routes';

const state = window.preloadedState ? window.preloadedState : {};
delete window.preloadedState;

const store = createStore(
  reducer,
  state,
  applyMiddleware(thunk),
);

const app = document.getElementById('app');
if (app === null) {
  throw new Error('no app element');
}
hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <RouteDataLoader dispatch={store.dispatch} routes={routes} >
        { renderRoutes(routes) }
      </RouteDataLoader>
    </BrowserRouter>
  </Provider>,
  app,
);
