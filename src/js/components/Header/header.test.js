import React from 'react';
import Header from './index';
import Logo from '../Logo';
import Search from '../Search';
import Poster from '../Poster';
import SearchButton from '../SearchButton';

const props = {};

describe('Header', () => {
  it('should be defined', () => {
    expect(Header).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <Header  {...props}/> );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render right values in POSTER view', () => {
    const props = {
      view: 'POSTER',
    };
    const wrapper = shallow(
      <Header {...props} /> );

    expect(wrapper.find(Logo)).toHaveLength(1);
    expect(wrapper.find(SearchButton)).toHaveLength(1);
    expect(wrapper.find(Poster)).toHaveLength(1);
  });
  it('should render right values in COMMON view', () => {
    const props = {
      view: 'COMMON',
    };
    const wrapper = shallow(
      <Header {...props} /> );

    expect(wrapper.find(Logo)).toHaveLength(1);
    expect(wrapper.find(Search)).toHaveLength(1);
    expect(wrapper.find(Poster)).toHaveLength(0);
  });
});
