import React from 'react';
import thunk from 'redux-thunk';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../src/js/reducers';
import routes from '../../src/js/routes';
import App from '../../src/js/components/App';

export const renderPage = async (req, res, next) => {
  console.log('middleware', req.originalUrl);
  const initialState = {};
  const activeRoute = routes.find((route) => matchPath(req.originalUrl, route)) || {};
  console.log(JSON.stringify(activeRoute))
  const promise = activeRoute && activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise.then((data) => {
    const context = { data } // if data else initialState

    const store = createStore(
      reducer,
      applyMiddleware(thunk),
    );
    //const store = await configureStore(req, res);
    
    const markup = renderToString(
      <Provider store={store} >
        <StaticRouter context={context} location={req.originalUrl}>
          <App />
        </StaticRouter>
      </Provider>,
    );

  res.locals.preloadedState = store.getState();
  res.locals.content = markup;

  }).catch(next);

};
