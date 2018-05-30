import React from 'react';
import thunk from 'redux-thunk';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../src/js/reducers';
import App from '../../src/js/components/App';

export const render = (req, res, next) => {
  const store = createStore(
    res.locals.initialState,
    reducer,
    applyMiddleware(thunk),
  );
  res.locals.content = renderToString(
    <Provider store={store} >
      <App />
    </Provider>);
  res.locals.preloadedState = store.getState();
  next();
};
