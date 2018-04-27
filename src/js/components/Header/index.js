// @flow
import React, { Component } from 'react';
import Logo from '../Logo';
import Search from '../Search';
import Poster from '../Poster';
import SearchButton from '../SearchButton';
import { views } from '../../helpers';

type Props = {
  onSearch: (data: string) => void,
  toSearch: () => void,
  view: string,
  posterData: {
    title: string,
  },
};

function topHeader(props: Props) {
  const { view, toSearch } = props;
  if ( view === views.POSTER ) {
    return (
      <div className='header__top'>
        <Logo />
        <SearchButton handleSearch={toSearch} />
      </div>
    );
  }
  return <div className='header__top'> <Logo /> </div>;
}

function contentHeader( props: Props ) {
  const { view, onSearch, posterData } = props;
  return view === views.POSTER ?
    <Poster data={posterData} /> :
    <Search submitSearch={onSearch} />;
}

class Header extends Component<Props> {
  render() {
    return (
      <div className='header app__header bg-dark'>
        <div className='container'>
          {topHeader(this.props)}
          {contentHeader(this.props)}
        </div>
      </div>
    );
  }
}

export default Header;
