import React from 'react';
import Search from './index';
import FilterSearch from '../FilterSearch';
import SearchButton from '../SearchButton';

let props = {};

describe('Search', () => {
  beforeEach(() => {
    props = {
      submitSearch: jest.fn(),
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
    const wrapper = mount(
      <Search {...props} /> );
    wrapper.instance().setState({ searchText: 'text' });
    wrapper.find(SearchButton).simulate('click');
    expect(props.submitSearch).toHaveBeenCalledTimes(1);
  });

  it('should change state when input data', () => {
    const wrapper = shallow(
      <Search /> );
    const event = { target: { value: 'test' } };
    wrapper.find('.form-control').simulate('change', event);
    expect(wrapper.state().searchText.length).not.toEqual('0');
  });

  it('should emit changeFilter when FilterSearch emit', () => {
    const wrapper = mount(
      <Search /> );
    wrapper.find(FilterSearch).find('#genre').simulate('change');
    expect(wrapper.state().searchFilter).toBe('genres');
  });

  it('should emit submitSearch when Enter clcked', () => {
    const wrapper = shallow(
      <Search {...props} /> );
    const event = { key: 'Enter' };
    wrapper.instance().setState({ searchText: 'text' });
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
