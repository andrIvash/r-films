// @flow
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import '../styles/app.scss';
import '../js/components/Header';

const app = document.getElementById('app');
if (app === null) {
  throw new Error('no app element');
}
render(
  <App />,
  app,
);
