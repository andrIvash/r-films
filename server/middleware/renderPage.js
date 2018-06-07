import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import createState from '../middleware/createState';
import routes from '../../src/js/routes';
import App from '../../src/js/components/App';

const renderPage = (req, res, next) => {
  let url,
    context;

  const activeRoute = routes.find((route) => matchPath(req.path, route)) || {};

  if (req.params && req.params.id) {
    url = `/movies/${req.params.id}`;
  } else if (req.query && req.query.search) {
    url = `/movies?search=${req.query.search}&searchBy=${req.query.searchBy ?
      req.query.searchBy : 'title'}`;
  } else {
    url = '/movies';
  }

  const promise = activeRoute && activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(url)
    : Promise.resolve();

  promise.then(data => {
    context = { data };
    return createState(activeRoute.name, data, req.query);
  }).then(store => {
      const markup = renderToString(
        <Provider store={store} >
          <StaticRouter context={context} location={req.originalUrl}>
            <App />
          </StaticRouter>
        </Provider>,
      );

    res.locals.preloadedState = JSON.stringify(store.getState());
    res.locals.content = markup;
    next();

  }).catch(next);

};

export default renderPage;
