import React from 'react';
import renderer from 'react-test-renderer';
import Header from './index';
import Logo from '../Logo';
import Search from '../Search';
import Poster from '../Poster';
import SearchButton from '../SearchButton';

let props = {};

jest.mock('react-router-dom/NavLink', () => 'nav-link');
jest.mock('react-router-dom/Link', () => 'router-link');


jest.mock('../Logo', () => 'logo');
jest.mock('../Search', () => 'search');
jest.mock('../Poster', () => 'poster');
jest.mock('../SearchButton', () => 'search-button');


describe('Header', () => {
  beforeEach(() => {
    props = {
      view: 'POSTER',
      posterData: {
        poster_path: 'http://test',
        release_date: '1924',
        title: 'title',
        genres: ['drama'],
      },
    };
  });
  it('should be defined', () => {
    expect(Header).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = renderer.create(<Header {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('should render right values in POSTER view', () => {

    const wrapper = shallow(
      <Header {...props} /> );

    expect(wrapper.find(Logo)).toHaveLength(1);
    expect(wrapper.find(SearchButton)).toHaveLength(1);
    expect(wrapper.find(Poster)).toHaveLength(1);
  });
  it('should render right values in COMMON view', () => {
    props.view = 'COMMON';

    const wrapper = shallow(
      <Header {...props} /> );

    expect(wrapper.find(Logo)).toHaveLength(1);
    expect(wrapper.find(Search)).toHaveLength(1);
    expect(wrapper.find(Poster)).toHaveLength(0);
  });
});
