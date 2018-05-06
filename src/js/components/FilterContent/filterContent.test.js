import React from 'react';
import FilterContent from './index';

const props = {};

describe('FilterContent', () => {
  it('should be defined', () => {
    expect(FilterContent).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <FilterContent {...props} /> );
    expect(wrapper).toMatchSnapshot();
  });

  it(`should calls onFilterSelect 
    when input is selected`, () => {
    const props = {
      onFilterSelect: jest.fn(),
      selected: 'release',
    };
    const wrapper = shallow(
      <FilterContent {...props} /> );
    wrapper.find('#release').simulate('change');
    expect(props.onFilterSelect).toHaveBeenCalledTimes(1);
    expect(wrapper.find('#release').parent().hasClass('active')).toBe(true);
  });

  it(`should calls onFilterSelect 
    when rating input is selected`, () => {
    const props = {
      onFilterSelect: jest.fn(),
      selected: 'rating',
    };
    const wrapper = shallow(
      <FilterContent {...props} /> );
    wrapper.find('#rating').simulate('change');
    expect(props.onFilterSelect).toHaveBeenCalledTimes(1);
    expect(wrapper.find('#rating').parent().hasClass('active')).toBe(true);
  });
});
