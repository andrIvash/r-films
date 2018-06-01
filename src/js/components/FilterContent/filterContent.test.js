import React from 'react';
import FilterContent from './index';

let props = {};

describe('FilterContent', () => {
  beforeEach(()=> {
    props = {
      onFilterSelect: jest.fn(),
      selected: 'release',
    };
  });
  it('should be defined', () => {
    expect(FilterContent).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = render(
      <FilterContent {...props} /> );
    expect(wrapper).toMatchSnapshot();
  });

  it(`should calls onFilterSelect 
    when release input is selected`, () => {
    const wrapper = shallow(
      <FilterContent {...props} /> );
    wrapper.find('#release').simulate('change', { target: {value: 'release'} });
    expect(props.onFilterSelect).toHaveBeenCalledTimes(1);
    expect(wrapper.find('#release').parent().hasClass('active')).toBe(true);
  });

  it(`should calls onFilterSelect 
    when rating input is selected`, () => {
    props.selected = 'rating';
    const wrapper = shallow(
      <FilterContent {...props} /> );
    wrapper.find('#rating').simulate('change', { target: {value: 'rating'} });
    expect(props.onFilterSelect).toHaveBeenCalledTimes(1);
    expect(wrapper.find('#rating').parent().hasClass('active')).toBe(true);
  });
});
