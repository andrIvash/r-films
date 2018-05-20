import React from 'react';
import FilterSearch from './index';

let props = {};

describe('FilterSearch', () => {
  beforeEach(() => {
    props = {
<<<<<<< HEAD
      selected: 'genres',
      changeFilter: jest.fn(),
=======
      onChange: jest.fn(),
      selected: 'genres',
>>>>>>> source
    };
  });
  it('should be defined', () => {
    expect(FilterSearch).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = render(
      <FilterSearch {...props} /> );
    expect(wrapper).toMatchSnapshot();
  });

  it(`should calls onChange 
    when genres input is selected`, () => {
    const wrapper = shallow(
      <FilterSearch {...props} /> );
    wrapper.find('#genre').simulate('change', { target: {value: 'genre' }});
    expect(props.changeFilter).toHaveBeenCalledTimes(1);
    expect(wrapper.find('#genre').parent().hasClass('active')).toBe(true);
  });

  it(`should calls onChange 
    when title input is selected`, () => {
    props.selected = 'title';

    const wrapper = shallow(
      <FilterSearch {...props} /> );
    wrapper.find('#title').simulate('change', { target: {value: 'title' }});
    expect(props.changeFilter).toHaveBeenCalledTimes(1);
    expect(wrapper.find('#title').parent().hasClass('active')).toBe(true);
  });
});
