// @flow
import React, { Component } from 'react';
import Logo from '../Logo';
import Search from '../Search';

type Props = {};

type State = {
  count: number,
};

class Header extends Component<Props, State> {
  render() {
    return (
      <div className='header app__header bg-dark'>
        <div className='container'>
          <Logo />
          <Search />
        </div>
      </div>
    );
  }
}

export default Header;
