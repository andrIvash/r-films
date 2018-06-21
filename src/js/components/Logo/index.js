// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className='logo app__logo'>
    <Link to={{ pathname: '/' }}>
      netflixroulette
    </Link>
  </div>
);

export default Logo;
