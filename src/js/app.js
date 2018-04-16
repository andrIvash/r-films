import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import '../styles/app.scss';
import '../js/components/Header';


console.log('app.js');

render(
  <App />,
  document.getElementById('app'),
);


