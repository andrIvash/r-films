import React from 'react';
import Main from './index';
import FilterContent from '../FilterContent';
import ExtraInfo from '../ExtraInfo';

const props = {
  films: [1, 2],
};

describe('Main', () => {
  it('should be defined', () => {
    expect(Main).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <Main {...props} /> );
    expect(wrapper).toMatchSnapshot();
  });
  it('should show an extra info ', () => {
    const props = {
      films: [1, 2],
      view: 'COMMON',
    };
    const wrapper = shallow(
      <Main {...props} /> );
    expect(wrapper.find(ExtraInfo)).toHaveLength(1);
    expect(wrapper.find(FilterContent)).toHaveLength(1);
  });
  it('should not show an extra info if no data', () => {
    const props = {
      films: [],
    };
    const wrapper = shallow(
      <Main {...props} /> );
    expect(wrapper.find(ExtraInfo)).not.toHaveLength(1);
  });
  it('should change state when onFilterSelect emit', () => {
    const props = {
      films: [
        {
          id: 1,
          release_date: '1999',
          title: 'title',
          vote_average: 9,
          genres: ['Drama'],
        },
        {
          id: 2,
          release_date: '2000',
          title: 'title',
          vote_average: 8,
          genres: ['Drama'],
        },
      ],
      view: 'COMMON',
      onFilterSelect: jest.fn(),
    };
    const wrapper = mount(
      <Main {...props} /> );
    wrapper.find(FilterContent).find('#release').simulate('change');
    expect(wrapper.state().selected).toEqual('release');
    expect(wrapper.state().selected).not.toEqual('raiting');
  });
  it('should filter data due to props', () => {
    const props = {
      films: [
        {
          id: 1,
          release_date: '1999',
          title: 'title',
          vote_average: 9,
          genres: ['Drama'],
        },
        {
          id: 2,
          release_date: '2000',
          title: 'title',
          vote_average: 8,
          genres: ['Drama'],
        },
      ],
      view: 'COMMON',
      onFilterSelect: jest.fn(),
    };
    const wrapper = shallow(
      <Main {...props} /> );
    expect(props.films[0].id).toEqual(2);
  });
});
