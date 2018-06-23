// @flow
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './components/App';
import NotFound from './components/NotFound';
import '../styles/app.scss';

const history = createHistory();
const store = createStore(
  // initialState,
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

const app = document.getElementById('app');
if (app === null) {
  throw new Error('no app element');
}
console.log(process.env.PUBLIC_URL)
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route component={App} exact={true} path={process.env.PUBLIC_URL + '/'} />
        <Route component={App} exact={true} path={process.env.PUBLIC_URL + '/film/:id'} />
        <Route component={App} exact={true} path={process.env.PUBLIC_URL + '/search'} />
        <Route path='*' render={() => ( <NotFound /> )} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  app,
);
