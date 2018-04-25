// @flow
import React, { Component } from 'react';
import Logo from '../Logo';
import Search from '../Search';

type Props = {
  onSearch: (data: string) => void,
};

class Header extends Component<Props> {

  render() {
    const { onSearch } = this.props;
    return (
      <div className='header app__header bg-dark'>
        <div className='container'>
          <Logo />
          <Search
            submitSearch={onSearch}
          />
        </div>
      </div>
    );
  }
}

export default Header;
