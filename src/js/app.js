import '../styles/app.scss';
console.log('app1.js');

import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

render(
  <App/>,
  document.getElementById('app')
);


