import React from 'react';
import ReactDOM from 'react-dom';

const header =  React.createElement('div', {className: 'header'},
  React.createElement('div', {className: 'title header__title'}, 'netflixroulette')
);

ReactDOM.render(
  header,
  document.getElementById('header')
);
  