import '../styles/app.scss';
import '../js/components/Header';
console.log('app.js');

import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

render(
  <App/>,
  document.getElementById('app')
);


