import React from 'react';
<<<<<<< HEAD
import { Search } from './index';
=======
import Search from './index';
>>>>>>> source
import FilterSearch from '../FilterSearch';
import SearchButton from '../SearchButton';

let props = {};

describe('Search', () => {
  beforeEach(() => {
    props = {
      submitSearch: jest.fn(),
<<<<<<< HEAD
      changeFilter: jest.fn().mockReturnValue({searchFilter: 'title'}),
      handleChange: jest.fn().mockReturnValue({searchText: 'text'}),
      clearText: () => jest.fn().mockReturnValue({searchText: ''}),
      searchText: '',
=======
>>>>>>> source
    };
  });
  it('should be defined', () => {
    expect(Search).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = render(
      <Search {...props} /> );
    expect(wrapper).toMatchSnapshot();
  });

  it('should emit search when click button', () => {
<<<<<<< HEAD
    props.searchText = 'text';
    const wrapper = mount(
      <Search {...props} /> );
=======
    const wrapper = mount(
      <Search {...props} /> );
    wrapper.instance().setState({ searchText: 'text' });
>>>>>>> source
    wrapper.find(SearchButton).simulate('click');
    expect(props.submitSearch).toHaveBeenCalledTimes(1);
  });

<<<<<<< HEAD
  it('should change searchText when input data', () => {
    const wrapper = shallow(
      <Search {...props} /> );
    const event = { target: { value: 'test' } };
    wrapper.find('.form-control').simulate('change', event);
    expect(props.handleChange).toHaveBeenCalledTimes(1);
    expect(wrapper.instance().props.searchText.length).not.toEqual('0');
=======
  it('should change state when input data', () => {
    const wrapper = shallow(
      <Search /> );
    const event = { target: { value: 'test' } };
    wrapper.find('.form-control').simulate('change', event);
    expect(wrapper.state().searchText.length).not.toEqual('0');
>>>>>>> source
  });

  it('should emit changeFilter when FilterSearch emit', () => {
    const wrapper = mount(
<<<<<<< HEAD
      <Search {...props} /> );
    wrapper.find(FilterSearch).find('#genre').simulate('change');
    expect(props.changeFilter).toHaveBeenCalledTimes(1);
  });

  it('should emit submitSearch when Enter clcked', () => {
    props.searchText = 'text';
    const wrapper = shallow(
      <Search {...props} /> );
    const event = { key: 'Enter' };
=======
      <Search /> );
    wrapper.find(FilterSearch).find('#genre').simulate('change');
    expect(wrapper.state().searchFilter).toBe('genres');
  });

  it('should emit submitSearch when Enter clcked', () => {
    const wrapper = shallow(
      <Search {...props} /> );
    const event = { key: 'Enter' };
    wrapper.instance().setState({ searchText: 'text' });
>>>>>>> source
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
