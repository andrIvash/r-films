import React from 'react';
import Main from './index';
import FilterContent from '../FilterContent';
import ExtraInfo from '../ExtraInfo';

let props = {};

describe('Main', () => {
  beforeEach(() => {
    props = {
      films: [
        {id: 1, title: 'title', release_date: '1992', genres: ['Drama']},
        {id: 2, title: 'title2', release_date: '1994', genres: ['Drama']},
      ],
      onFilterSelect: jest.fn(),
      view: 'COMMON',
    };
  });
  it('should be defined', () => {
    expect(Main).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = render(
      <Main {...props} /> );
    expect(wrapper).toMatchSnapshot();
  });
  it('should show an extra info ', () => {

    const wrapper = shallow(
      <Main {...props} /> );
    expect(wrapper.find(ExtraInfo)).toHaveLength(1);
    expect(wrapper.find(FilterContent)).toHaveLength(1);
  });
  it('should not show an extra info if no data', () => {
    props.films = [];

    const wrapper = shallow(
      <Main {...props} /> );
    expect(wrapper.find(ExtraInfo)).not.toHaveLength(1);
  });
  it('should change state when onFilterSelect emit', () => {
    const wrapper = mount(
      <Main {...props} /> );
    wrapper.find(FilterContent).find('#release').simulate('change');
    expect(wrapper.state().selected).toEqual('release');
    expect(wrapper.state().selected).not.toEqual('raiting');
  });
  it('should filter data due to props', () => {
    const wrapper = shallow(
      <Main {...props} /> );
      wrapper.instance().filterData('data');
    expect(props.films[0].id).toEqual(2);
  });
});
