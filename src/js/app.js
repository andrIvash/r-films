// @flow
import React from 'react';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
// import { ConnectedRouter, routerReducer,
//  routerMiddleware, push } from 'react-router-redux';
=======
import { ConnectedRouter } from 'react-router-redux';
>>>>>>> task6
import thunk from 'redux-thunk';
import reducer from './reducers';
import '../styles/app.scss';
import routes from './routes';

const state = window.preloadedState;
delete window.preloadedState;

const store = createStore(
  reducer,
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);


const app = document.getElementById('app');
if (app === null) {
  throw new Error('no app element');
}
hydrate(
  <Provider store={store}>
    <BrowserRouter >
      <Switch>
        { routes.map(({ path, exact, component: Component, ...rest }) => (
          <Route
            exact={exact}
            key={path}
            path={path}
            render={props => <Component {...props} {...rest} />}
          />
        ))}
      </Switch>
    </BrowserRouter>
  </Provider>,
  app,
);
