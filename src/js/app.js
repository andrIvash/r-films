// @flow
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './components/App';
import { theme } from '../theme/globalStyle';
import '../styles/app.scss';

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
render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  app,
);
