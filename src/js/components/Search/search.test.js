import React from 'react';
import { Search } from './index';
import renderer from 'react-test-renderer';

let props = {};
jest.mock('./enterSign', () => 'enter-sign');
jest.mock('../FilterSearch', () => 'filter-search');
jest.mock('../SearchButton', () => 'search-button');

describe('Search', () => {
  beforeEach(() => {
    history.push = jest.fn();
    props = {
      submitSearch: jest.fn(),
      changeFilter: jest.fn().mockReturnValue({searchFilter: 'title'}),
      handleChange: jest.fn().mockReturnValue({searchText: 'text'}),
      clearText: () => jest.fn().mockReturnValue({searchText: ''}),
      history: {push: jest.fn()},
      searchText: '',
    };
  });
  it('should be defined', () => {
    expect(Search).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = renderer.create(
      <Search {...props} /> ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should emit search when click button', () => {
    props.searchText = 'text';
    const wrapper = shallow(
      <Search {...props} /> );
    wrapper.find('search-button').prop('handleSearch')();
    expect(props.submitSearch).toHaveBeenCalledTimes(1);
    expect(props.history.push).toHaveBeenCalledTimes(1);
  });

  it('should change searchText when input data', () => {
    const wrapper = shallow(
      <Search {...props} /> );
    const event = { target: { value: 'test' } };
    wrapper.find('.form-control').simulate('change', event);
    expect(props.handleChange).toHaveBeenCalledTimes(1);
    expect(wrapper.instance().props.searchText.length).not.toEqual('0');
  });

  it('should emit changeFilter when FilterSearch emit', () => {
    const wrapper = mount(
      <Search {...props} /> );
    wrapper.find('filter-search').prop('changeFilter')();
    expect(props.changeFilter).toHaveBeenCalledTimes(1);
  });

  it('should emit submitSearch when Enter clcked', () => {
    props.searchText = 'text';
    const wrapper = shallow(
      <Search {...props} /> );
    const event = { key: 'Enter' };
    wrapper.find('.form-control').simulate('keypress', event);
    expect(props.submitSearch).toHaveBeenCalledTimes(1);
  });

  it('should not emit submitSearch when not Enter button clcked', () => {
    const wrapper = shallow(
      <Search {...props} /> );
    const event = { key: 'b' };
    wrapper.instance().setState({ searchText: 'text' });
    wrapper.find('.form-control').simulate('keypress', event);
    expect(props.submitSearch).not.toHaveBeenCalledTimes(1);
  });
});
