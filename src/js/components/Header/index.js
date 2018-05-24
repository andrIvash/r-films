// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import Search from '../Search';
import Poster from '../Poster';
import SearchButton from '../SearchButton';
import helpers from '../../helpers';
import type { PosterData, View } from '../../flow-types.js';

type Props = {
  onSearch: (data: string, filter:string) => void,
  toSearch: () => void,
  view: View,
  posterData: PosterData,
};

const topHeader = (props: Props) => {
  const { view, toSearch } = props;
  if ( view === helpers.views.POSTER ) {
    return (
      <div className='header__top'>
        <Logo />
        <Link to={{ pathname: '/' }}>
          <SearchButton handleSearch={toSearch} />
        </Link>
      </div>
    );
  }
  return <div className='header__top'> <Logo /> </div>;
};

const contentHeader = ( props: Props ) => {
  const { view, onSearch, posterData } = props;
  return view === helpers.views.POSTER ?
    <Poster data={posterData} /> :
    <Search submitSearch={onSearch} />;
};

const Header = (props: Props) => (
  <div className='header app__header bg-dark'>
    <div className='container'>
      {topHeader(props)}
      {contentHeader(props)}
    </div>
  </div>
);

export default Header;
