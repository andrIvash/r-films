import React from 'react';
import FilterSearch from './index';

const props = {};

describe('FilterSearch', () => {
  it('should be defined', () => {
    expect(FilterSearch).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <FilterSearch {...props} /> );
    expect(wrapper).toMatchSnapshot();
  });

  it(`should calls onChange 
    when genres input is selected`, () => {
    const props = {
      onChange: jest.fn(),
      selected: 'genres',
    };
    const wrapper = shallow(
      <FilterSearch {...props} /> );
    wrapper.find('#genre').simulate('change');
    expect(props.onChange).toHaveBeenCalledTimes(1);
    expect(wrapper.find('#genre').parent().hasClass('active')).toBe(true);
  });

  it(`should calls onChange 
    when title input is selected`, () => {
    const props = {
      onChange: jest.fn(),
      selected: 'title',
    };
    const wrapper = shallow(
      <FilterSearch {...props} /> );
    wrapper.find('#title').simulate('change');
    expect(props.onChange).toHaveBeenCalledTimes(1);
    expect(wrapper.find('#title').parent().hasClass('active')).toBe(true);
  });
});
