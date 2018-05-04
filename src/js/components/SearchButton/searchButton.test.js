import React from 'react';
import SearchButton from './index';

const props = {
  handleSearch: jest.fn(),
};

describe('SearchButton', () => {
  it('should be defined', () => {
    expect(SearchButton).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <SearchButton {...props} /> );
    expect(wrapper).toMatchSnapshot();
  });
  it(`should calls handleSearch
    when button is clicked`, () => {
    const wrapper = shallow(
      <SearchButton {...props} /> );
    wrapper.simulate('click');
    expect(props.handleSearch).toHaveBeenCalledTimes(1);
  });
});
